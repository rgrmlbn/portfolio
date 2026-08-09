import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/images/logocon.png";

const NAV_LINKS = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // { label: "Certifications", href: "#certifications" },
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
        bg-[var(--color-cream)]
        px-12
        py-4
        backdrop-blur-[10px]
        border-b
        border-[var(--color-ink-dark)]/10
        animate-[slideDown_.6s_ease_both]
        max-md:px-1
        max-md:py-4
      "
    >
      <div className="container flex items-center justify-between">
        {/* Left — Logo + Nav Links */}
        <div className="flex items-center gap-12">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto md:h-12" />
          </a>

          {/* Divider */}
          <div className="h-11 w-px bg-[var(--color-ink-dark)]/10" />

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
            href="mailto:rogerabarico21@gmail.com"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              bg-[var(--color-mocha)]
              text-base
              md:h-10
              md:w-10
              md:text-lg
              text-[var(--color-muted)]
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+639461715407"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              bg-[var(--color-mocha)]
              text-base
              md:h-10
              md:w-10
              md:text-lg
              text-[var(--color-muted)]
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            <FaPhoneAlt />
          </a>

          <a
            href="https://github.com/rgrmlbn"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              bg-[var(--color-mocha)]
              text-base
              md:h-10
              md:w-10
              md:text-lg
              text-[var(--color-muted)]
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/roger-malabanan-a617b2381/"
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded
              bg-[var(--color-mocha)]
              text-base
              md:h-10
              md:w-10
              md:text-lg
              text-[var(--color-muted)]
              transition-all
              duration-200
              hover:-translate-y-0.5
            "
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
}
