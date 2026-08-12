// Contact.jsx
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ContactForm from "../ContactForm";

const contactMethods = [
  {
    icon: FaEnvelope,
    type: "Email",
    value: "rogerabarico21@gmail.com",
    href: "mailto:rogerabarico21@gmail.com",
  },
  {
    icon: FaPhone,
    type: "Phone",
    value: "+63 946 171 5407",
    href: "tel:+639461715407",
  },
  {
    icon: FaLinkedinIn,
    type: "LinkedIn",
    value: "linkedin.com/roger-malabanan",
    href: "https://www.linkedin.com/in/roger-malabanan-a617b2381",
  },
  {
    icon: FaGithub,
    type: "GitHub",
    value: "github.com/rgrmlbn",
    href: "https://github.com/rgrmlbn",
  },
];

function ContactCard({ icon: Icon, type, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="group flex items-center gap-4 rounded border border-[var(--color-ink)]/7 bg-[var(--color-white)] px-5 py-5 text-[var(--color-ink-dark)] no-underline transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] md:gap-[1.1rem] md:px-6 md:py-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#f0f0f0] md:h-[46px] md:w-[46px]">
        <Icon className="text-[1.05rem] text-[var(--color-ink-dark)] md:text-[1.15rem]" />
      </div>

      <div>
        <p className="mb-[0.2rem] text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)] md:text-[0.7rem]">
          {type}
        </p>
        <p className="text-[0.85rem] font-semibold text-[var(--color-ink-dark)] md:text-[0.95rem]">
          {value}
        </p>
      </div>
    </a>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-taste)] py-16 md:py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <p className="mb-[0.6rem] text-[0.70rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] md:text-[0.78rem]">
            Get in Touch
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.02em] text-[var(--color-ink)]">
            Contact Me
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-35 rounded bg-[var(--color-ink-dark)]" />
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-8">
          {/* Left: contact info */}
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <h3 className="text-[1.10rem] font-bold text-[var(--color-ink)] md:text-[1.25rem]">
                Let's talk
              </h3>
              <p className="mt-1 text-[0.7rem] leading-relaxed text-[var(--color-muted)] md:text-[0.95rem]">
                Have a project in mind or just want to say hi? Reach out
                through any of these, or use the form.
              </p>
            </div>

            {contactMethods.map((contact) => (
              <ContactCard key={contact.type} {...contact} />
            ))}
          </div>

          {/* Right: form */}
          <div className="rounded border border-[var(--color-ink-dark)]/7 bg-[var(--color-white)] p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}