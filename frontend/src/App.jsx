import { useEffect, useState } from "react";
import NavBar from "./components/sections/layout/Navbar";
import Hero from "./components/sections/HeroSection";
import Skills from "./components/sections/SkillSection";
import Projects from "./components/sections/ProjectSection";
import Contact from "./components/sections/ContactSection";
import Footer from "./components/sections/layout/Footer";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const isLoading = !pageLoaded || !minimumTimeElapsed;

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);
    const minimumTime = window.setTimeout(() => setMinimumTimeElapsed(true), 850);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minimumTime);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div aria-busy={isLoading}>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
      <div
        className={`portfolio-loader${isLoading ? " portfolio-loader--visible" : ""}`}
        role="status"
        aria-live="polite"
        aria-label="Loading portfolio"
      >
        <div className="portfolio-loader__content">
          <p className="portfolio-loader__message">Loading portfolio</p>
          <div className="portfolio-loader__track" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
