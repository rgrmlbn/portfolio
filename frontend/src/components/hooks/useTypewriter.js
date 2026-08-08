import { useState, useEffect, useRef } from "react";

export const useTypewriter = (
  text,
  {
    speed = 60,
    deleteSpeed = 40,
    startDelay = 300,
    loop = false,
    pauseBeforeRestart = 1200,
    pauseBeforeDelete = 1200,
  } = {}
) => {
  // Accept either a single string or an array of phrases to cycle through.
  const phrases = Array.isArray(text) ? text : [text];

  const [output, setOutput] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0); // character index within the current phrase
  const phraseRef = useRef(0); // which phrase we're on

  useEffect(() => {
    let timeoutId;
    const isCycling = phrases.length > 1;

    const typePhrase = () => {
      const current = phrases[phraseRef.current];
      indexRef.current += 1;
      setOutput(current.slice(0, indexRef.current));

      if (indexRef.current >= current.length) {
        setIsDone(true);

        if (isCycling) {
          // Pause on the full phrase, then start deleting it.
          timeoutId = setTimeout(deletePhrase, pauseBeforeDelete);
        } else if (loop) {
          // Single phrase, loop it as before (retype from scratch).
          timeoutId = setTimeout(() => {
            indexRef.current = 0;
            setOutput("");
            setIsDone(false);
            timeoutId = setTimeout(typePhrase, speed);
          }, pauseBeforeRestart);
        }
        return;
      }

      timeoutId = setTimeout(typePhrase, speed);
    };

    const deletePhrase = () => {
      const current = phrases[phraseRef.current];
      indexRef.current -= 1;
      setOutput(current.slice(0, indexRef.current));

      if (indexRef.current <= 0) {
        // Move to the next phrase (wrap around at the end).
        phraseRef.current = (phraseRef.current + 1) % phrases.length;
        setIsDone(false);
        timeoutId = setTimeout(typePhrase, speed);
        return;
      }

      timeoutId = setTimeout(deletePhrase, deleteSpeed);
    };

    const startDelayTimeoutId = setTimeout(typePhrase, startDelay);

    return () => {
      clearTimeout(startDelayTimeoutId);
      clearTimeout(timeoutId);
      indexRef.current = 0;
      phraseRef.current = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(phrases), speed, deleteSpeed, startDelay, loop, pauseBeforeRestart, pauseBeforeDelete]);

  return { output, isDone };
};