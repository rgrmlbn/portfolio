import { useState, useRef } from "react";
import profilePhoto from "../../assets/images/me.jpeg";
import resumePdf from "../../assets/ROGER A. MALABANAN JR. - RESUME.pdf";
import { useTypewriter } from "../hooks/useTypewriter";
import { FaEnvelope, FaFilePdf } from "react-icons/fa";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const rafRef = useRef(null);

  const { output: hireMeText } = useTypewriter(
    ["Hire me", "Open to work", "Looking for opportunities"],
    {
      speed: 120,
      deleteSpeed: 60,
      startDelay: 400,
      pauseBeforeDelete: 2000, // how long each phrase stays fully visible before deleting
    },
  );

  const openResume = () => {
    setIsResumeOpen(true);
    setIsOpening(true);
    // Wait two frames: one for the DOM to mount in its "hidden" state,
    // one for the browser to actually paint it — then flip to trigger the transition.
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setIsOpening(false));
    });
  };

  const closeResume = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsClosing(true);
    setTimeout(() => {
      setIsResumeOpen(false);
      setIsClosing(false);
    }, 200); // matches transition duration below
  };

  const isHidden = isOpening || isClosing;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--color-taste)]"
    >
      <div className="container grid grid-cols-1 items-center pb-8 pt-24 text-center md:grid-cols-2 md:pb-12 md:pt-28 md:text-left">
        {/* Hero Image */}
        <div className="relative z-10 mt-6 mb-8 flex items-end justify-center animate-[fadeUp_0.9s_0.45s_ease_both] md:mb-0 md:mt-0 md:order-1">
          <div className="relative w-[min(400px,90%)]">
            <div className="rounded border-2 border-[var(--color-ink-dark)] p-3 shadow-[8px_8px_0_0_var(--color-muted)]">
              <img
                src={profilePhoto}
                alt="Roger Malabanan"
                className="block w-full rounded object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 animate-[fadeUp_0.9s_0.2s_ease_both] md:order-2">
          <p className="mb-[0.6rem] flex items-center justify-center gap-2 text-[0.85rem] font-medium tracking-[0.04em] text-[var(--color-ink)] md:justify-start md:text-[0.95rem]">
            <span className="inline-block h-[2px] w-5 rounded bg-[var(--color-ink)]" />

            <span className="inline-block w-[220px] text-left md:w-[240px]">
              {hireMeText}
              <span className="ml-[2px] inline-block h-[1em] w-[1.5px] align-middle bg-[var(--color-muted)] animate-[blink_1s_step-end_infinite]" />
            </span>
          </p>

          <h1 className="mb-3 font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Hi, I'm Roger A. Malabanan Jr.
          </h1>

          <p className="mb-[1.4rem] text-[1rem] font-medium tracking-[0.01em] text-[var(--color-muted)] md:text-[1.15rem]">
            Software Developer | Java & React
          </p>

          <p className="mx-auto mb-8 max-w-[44ch] text-[0.9rem] leading-[1.65] text-[var(--color-graph)] md:mx-0 md:mb-10 md:text-[0.97rem] md:leading-[1.75]">
            An individual with a passion for learning and growth; I approach
            every opportunity with enthusiasm and purpose. I bring foundational
            skills and an attitude focused on growth, problem-solving, and
            collaboration. I'm committed to delivering value and pushing myself
            beyond expectations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-4">
            <button
              onClick={openResume}
              className="
                flex
                items-center
                justify-center
                gap-[0.4rem]
                rounded
                border-2
                border-[var(--color-ink-dark)]
                bg-[var(--color-ink)]
                px-4
                py-2
                text-[0.7rem]
                font-bold
                uppercase
                tracking-[0.08em]
                cursor-pointer
                text-white
                shadow-[0_4px_14px_rgba(0,0,0,0.2)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                md:px-8
                md:py-[0.85rem]
                md:text-[0.85rem]
              "
            >
              <FaFilePdf className="shrink-0 text-[0.8rem] md:text-[0.9rem]" />
              View Resume
            </button>

            <button
              onClick={scrollToContact}
              className="
                flex
                items-center
                justify-center
                gap-[0.4rem]
                rounded
                border-2
                border-[var(--color-ink-dark)]
                bg-transparent
                px-4
                py-2
                text-[0.7rem]
                font-bold
                uppercase
                tracking-[0.08em]
                cursor-pointer
                text-[var(--color-ink)]
                shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]
                md:px-8
                md:py-[0.85rem]
                md:text-[0.85rem]
              "
            >
              <FaEnvelope className="shrink-0 text-[0.8rem] md:text-[0.9rem]" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {isResumeOpen && (
        <div
          className={`
            fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-ink)]/50 p-4
            transition-opacity duration-200 ease-out
            ${isHidden ? "opacity-0" : "opacity-100"}
          `}
          onClick={closeResume}
        >
          <div
            className={`
            relative flex h-[95vh] w-full max-w-7xl flex-col rounded bg-white p-3 shadow-[var(--shadow-xl)]
            transition-all duration-200 ease-out
            md:h-[90vh] md:p-4
            ${isHidden ? "scale-95 opacity-0" : "scale-100 opacity-100"}
          `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between md:mb-3">
              <a
                href={resumePdf}
                download="ROGER A. MALABANAN JR. - RESUME.pdf"
                className="rounded bg-[var(--color-ink-dark)] px-3 py-1.5 text-xs uppercase font-semibold text-white transition-transform hover:-translate-y-0.5 md:px-4 md:py-2 md:text-sm"
              >
                Download Resume
              </a>

              <button
                onClick={closeResume}
                className="text-xl leading-none text-[var(--color-muted)] transition-transform hover:-translate-y-0.5 md:text-2xl"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <iframe
              src={resumePdf}
              title="Resume Preview"
              className="w-full flex-1 rounded border border-[var(--color-ink-dark)]/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
