import { useEffect, useState } from "react";

export default function PageLoader({ children }) {
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
      {!isLoading && <div>{children}</div>}
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
