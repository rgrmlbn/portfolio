import { useState, useRef } from "react";
import profilePhoto from "../assets/images/me.jpeg";
import resumePdf from "../assets/ROGER A. MALABANAN JR. - RESUME.pdf";
import { useTypewriter } from "../hooks/useTypewriter";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const rafRef = useRef(null);

const { output: hireMeText } = useTypewriter("Hire me!", {
  speed: 120,
  startDelay: 400,
  loop: true,
  pauseBeforeRestart: 1500, // how long "Hire me!" stays fully visible before retyping
});

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
    <section id="home" className="relative min-h-screen overflow-hidden bg-[var(--color-taste)]">

      <div className="container grid grid-cols-1 items-center pb-8 pt-24 text-center md:grid-cols-2 md:pb-12 md:pt-28 md:text-left">
        {/* Hero Image */}
        <div className="relative z-10 mt-6 mb-8 flex items-end justify-center animate-[fadeUp_0.9s_0.45s_ease_both] md:mb-0 md:mt-0 md:order-1">
          <div className="relative w-[min(400px,90%)]">
            <div className="rounded border-2 border-[var(--color-ink)] p-3 shadow-[8px_8px_0_0_var(--color-muted)]">
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
          <p className="mb-[0.6rem] flex items-center justify-center gap-2 text-[0.95rem] font-medium tracking-[0.04em] text-[var(--color-ink)] md:justify-start">
            <span className="inline-block h-[2px] w-7 rounded bg-[var(--color-ink)]" />

            <span className="inline-flex items-center">
              {hireMeText}
              <span className="ml-[2px] inline-block h-[1em] w-[1.5px] bg-[var(--color-muted)] animate-[blink_1s_step-end_infinite]" />
            </span>
          </p>

          <h1 className="mb-3 font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
            Hello, I am Roger Malabanan
          </h1>

          <p className="mb-[1.4rem] text-[1.15rem] font-medium tracking-[0.01em] text-[var(--color-muted)]">
            Inspiring Full Stack Developer
          </p>

          <p className="mx-auto mb-10 max-w-[44ch] text-[0.97rem] leading-[1.75] text-[#555] md:mx-0">
            An individual with a passion for learning and growth; I approach
            every opportunity with enthusiasm and purpose. I bring foundational
            skills and an attitude focused on growth, problem-solving, and
            collaboration. I'm committed to delivering value and pushing myself
            beyond expectations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              onClick={openResume}
              className="
                rounded
                border-2
                border-[var(--color-ink)]
                bg-[var(--color-ink)]
                px-8
                py-[0.85rem]
                text-[0.85rem]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[var(--color-ink)]
              "
            >
              View Resume
            </button>

            <button
              onClick={scrollToContact}
              className="
                rounded
                border-2
                border-[var(--color-ink)]
                px-8
                py-[0.85rem]
                text-[0.85rem]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[var(--color-ink)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[var(--color-ink)]
                hover:text-[var(--color-white)]
              "
            >
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
              relative flex h-[90vh] w-full max-w-7xl flex-col rounded bg-white p-4 shadow-[var(--shadow-xl)]
              transition-all duration-200 ease-out
              ${isHidden ? "scale-95 opacity-0" : "scale-100 opacity-100"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <a
                href={resumePdf}
                download
                className="rounded bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Download
              </a>

              <button
                onClick={closeResume}
                className="text-2xl leading-none text-[var(--color-muted)] transition-transform hover:-translate-y-0.5"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <iframe
              src={resumePdf}
              title="Resume Preview"
              className="w-full flex-1 rounded border border-black/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}