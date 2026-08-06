import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logocon.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
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
        bg-[--color-cream]
        px-12
        py-4
        backdrop-blur-[10px]
        border-b
        border-black/10
        animate-[slideDown_.6s_ease_both]
        max-md:px-6
        max-md:py-4
      "
    >
      {/* Left — Logo + Nav Links */}
      <div className="flex items-center gap-12">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>

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
      </div>

{/* Right */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:youremail@example.com"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded
            bg-[#ECE9E2]
            text-lg
            text-[var(--color-muted)]
            transition-all
            duration-200
            hover:-translate-y-0.5
          "
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+10000000000"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded
            bg-[#ECE9E2]
            text-lg
            text-[var(--color-muted)]
            transition-all
            duration-200
            hover:-translate-y-0.5
          "
        >
          <FaPhoneAlt />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded
            bg-[#ECE9E2]
            text-lg
            text-[var(--color-muted)]
            transition-all
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
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded
            bg-[#ECE9E2]
            text-lg
            text-[var(--color-muted)]
            transition-all
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
