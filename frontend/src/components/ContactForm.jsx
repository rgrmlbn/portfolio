// ContactForm.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormField from "./ui/FormField";
import { submitContactForm } from "../services/contactService";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // "idle" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("idle");
    try {
      await submitContactForm(data);
      setStatus("success");
      reset();
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      setStatus("error");
    }
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex min-w-0 flex-col gap-4 sm:gap-5">
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <FormField
          label="Name"
          name="name"
          register={register}
          error={errors.name}
          placeholder="Your name"
          {...register("name", {
            required: "Please enter your name.",
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
            required: "Please enter your email.",
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
      rows={6}
      register={register}
      error={errors.message}
      placeholder="Tell me a bit about your project or just say hi..."
      {...register("message", {
        required: "Please write a message.",
        minLength: { value: 10, message: "Message is a bit short." },
      })}
    />

    <button
      type="submit"
      disabled={isSubmitting}
      className="mt-2 w-full rounded bg-[var(--color-ink)] px-5 py-2.5 text-[0.82rem] font-semibold text-[var(--color-white)] transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-3 sm:text-[0.9rem]"
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>

    <p className="text-center text-[0.72rem] text-[var(--color-muted)] sm:text-[0.78rem]">
      Your details are used only to reply to your message
    </p>

    {status === "success" && (
      <p className="text-[0.78rem] font-medium text-green-600 sm:text-[0.85rem]">
        Thanks for reaching out! I'll get back to you soon.
      </p>
    )}

    {status === "error" && (
      <p className="text-[0.78rem] font-medium text-red-500 sm:text-[0.85rem]">
        Something went wrong sending your message. Please try again.
      </p>
    )}
  </form>
  );
}