// ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-4 z-[250] cursor-pointer flex h-11 w-11 items-center justify-center
        rounded-full border-2 border-[var(--color-ink-dark)] bg-[var(--color-ink-dark)]
        text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)]
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]
        sm:bottom-8 sm:right-6 sm:h-12 sm:w-12
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <FaArrowUp className="text-[0.9rem] sm:text-[1rem]" />
    </button>
  );
}