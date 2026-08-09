// ContactForm.jsx
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import FormField from "./ui/FormField";
import { useSubmitContactForm } from "./hooks/useSubmitContactForm";

function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
  <div
    className={`
      fixed right-4 top-4 z-[300] flex max-w-[340px] items-center gap-3
      rounded border-2 bg-[var(--color-white)] px-4 py-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.2)]
      animate-[toastIn_0.25s_ease_both] sm:right-6 sm:top-6
      ${isSuccess ? "border-green-500" : "border-red-500"}
    `}
  >
    {isSuccess ? (
      <FaCheckCircle className="shrink-0 text-[1.05rem] text-green-600" />
    ) : (
      <FaExclamationCircle className="shrink-0 text-[1.05rem] text-red-600" />
    )}

    <p className="flex-1 text-[0.82rem] font-medium leading-snug text-[var(--color-ink-dark)]">
      {message}
    </p>

    <button
      onClick={onClose}
      aria-label="Dismiss"
      className="shrink-0 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink-dark)]"
    >
      <FaTimes className="text-[0.8rem]" />
    </button>
  </div>
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    mutate,
    isPending,
    reset: resetMutation,
  } = useSubmitContactForm();

  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string } | null

  const onSubmit = (data) => {
    resetMutation();
    mutate(data, {
      onSuccess: () => {
        reset();
        setToast({
          type: "success",
          message: "Got it! I’ll get back to you soon.",
        });
      },
      onError: () => {
        setToast({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      },
    });
  };

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex min-w-0 flex-col gap-4 sm:gap-5"
      >
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <FormField
            label="Name"
            name="name"
            register={register}
            error={errors.name}
            placeholder="Your name"
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "Name is too short." },
            })}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
        </div>

        <FormField
          label="Message"
          name="message"
          as="textarea"
          rows={8}
          register={register}
          error={errors.message}
          placeholder="Tell me a bit about your project or just say hi..."
          {...register("message", {
            required: "Message is required.",
            minLength: { value: 10, message: "Message is a bit short." },
          })}
        />

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 w-full rounded bg-[var(--color-ink)] px-5 py-2.5 text-[0.82rem] font-semibold text-[var(--color-white)] transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-3 sm:text-[0.9rem]"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>

        <p className="text-center text-[0.72rem] text-[var(--color-muted)] sm:text-[0.78rem]">
          Your details are used only to reply to your message
        </p>
      </form>
    </>
  );
}