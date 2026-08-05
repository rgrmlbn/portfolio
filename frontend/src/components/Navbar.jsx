
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        flex
        items-center
        justify-between
        bg-[rgba(250,247,240,0.85)]
        px-12
        py-5
        backdrop-blur-[10px]
        border-b
        border-black/10
        animate-[slideDown_.6s_ease_both]
        max-md:px-6
        max-md:py-4
      "
    >

      {/* Center */}
      <div className="hidden gap-10 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="
              relative
              text-[0.8rem]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[var(--color-ink)]
              transition-colors
              duration-300

              after:absolute
              after:left-0
              after:-bottom-[3px]
              after:h-[2px]
              after:w-0
              after:bg-[var(--color-ink)]
              after:transition-all
              after:duration-300

              hover:text-[var(--color-ink-dark)]
              hover:after:w-full
            "
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="
            text-xl
            text-[var(--color-ink)]
            transition-transform
            duration-200
            hover:-translate-y-0.5
          "
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="
            text-xl
            text-[var(--color-ink)]
            transition-transform
            duration-200
            hover:-translate-y-0.5
          "
        >
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
}