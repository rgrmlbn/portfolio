export default function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] font-semibold border-t border-[var(--color-ink-dark)]/6 px-6 py-8 text-center text-[0.8rem] text-[var(--color-muted)] md:px-12 md:py-10 md:text-[0.85rem]">
      © {new Date().getFullYear()} Roger A. Malabanan Jr. All rights reserved.
    </footer>
  );
}