export default function FormField({
  label,
  name,
  register,
  error,
  as = "input",
  type = "text",
  rows,
  placeholder,
  ...rest
}) {
  const Tag = as;

  const baseClasses =
    "w-full min-w-0 rounded border-2 bg-[var(--color-white)] px-3.5 py-2.5 text-[0.82rem] text-[var(--color-ink-dark)] outline-none transition-colors duration-200 placeholder:text-[var(--color-muted)] sm:px-4 sm:py-3 sm:text-[0.9rem]";

  const borderClasses = error
    ? "border-red-400 focus:border-red-500"
    : "border-[var(--color-ink-dark)]/12 focus:border-[var(--color-ink-dark)]";

  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-1 block text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)] sm:mb-1.5 sm:text-[0.75rem] sm:tracking-[0.08em]"
      >
        {label}
      </label>

      <Tag
        id={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows ?? 5 : undefined}
        placeholder={placeholder}
        className={`${baseClasses} ${borderClasses}`}
        {...register(name)}
        {...rest}
      />

      {error && (
        <p className="mt-1 text-[0.7rem] font-medium text-red-500 sm:mt-1.5 sm:text-[0.78rem]">
          {error.message}
        </p>
      )}
    </div>
  );
}