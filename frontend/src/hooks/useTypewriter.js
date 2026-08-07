import { useState, useEffect, useRef } from "react";

export const useTypewriter = (
  text,
  { speed = 60, startDelay = 300, loop = false, pauseBeforeRestart = 1200 } = {}
) => {
  const [output, setOutput] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    let intervalId;
    let restartTimeoutId;

    const startTyping = () => {
      indexRef.current = 0;
      setOutput("");
      setIsDone(false);

      intervalId = setInterval(() => {
        indexRef.current += 1;
        setOutput(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length) {
          clearInterval(intervalId);
          setIsDone(true);

          if (loop) {
            restartTimeoutId = setTimeout(startTyping, pauseBeforeRestart);
          }
        }
      }, speed);
    };

    const startDelayTimeoutId = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(startDelayTimeoutId);
      clearTimeout(restartTimeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay, loop, pauseBeforeRestart]);

  return { output, isDone };
};