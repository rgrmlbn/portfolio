import { useState } from "react";
import logo from "../assets/images/icon.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <div
        className="
          w-full max-w-3xl
          rounded-1xl
          border-1
          border-[var(--border)]
          border-r-dashed
          border-b-dashed
          border-l-dashed
          bg-[var(--surface-raised)]
          text-[var(--text)]
          backdrop-blur-md
          border-t-2
          border-t-[var(--accent)]
          shadow-[inset_0_0_0_1px_rgba(44,57,48,0.08),6px_6px_0_rgba(44,57,48,0.13)]
        "
      >
        <nav className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
            <img src={logo} alt="Roger Malubay logo" className="h-10 w-10" />

          {/* Desktop Links */}
          <ul
            className="
              hidden
              items-center
              gap-7
              font-[var(--font-body)]
              text-sm
              font-medium
              md:flex
            "
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-[var(--muted-text)]
                    transition-colors
                    duration-200
                    hover:text-[var(--text)]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>


          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`h-0.5 w-5 bg-[var(--text)] transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-[var(--text)] transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-[var(--text)] transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>


        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            font-[var(--font-body)]
            transition-[max-height]
            duration-300
            ease-in-out
            md:hidden
            ${isOpen ? "max-h-64" : "max-h-0"}
          `}
        >
          <ul className="flex flex-col gap-1 px-6 pb-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    block
                    rounded-md
                    px-2
                    py-2
                    text-sm
                    font-medium
                    text-[var(--muted-text)]
                    transition-colors
                    duration-200
                    hover:bg-[rgba(44,57,48,0.05)]
                    hover:text-[var(--text)]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
}