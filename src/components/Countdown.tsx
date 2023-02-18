import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CountdownProps {
  minutes: number;
}

function secondsToMinutes(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const minutesAsStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = totalSeconds % 60;
  const secondsAsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesAsStr}:${secondsAsStr}`;
}

const Countdown = ({ minutes }: CountdownProps) => {
  const initialSeconds = minutes * 60;
  const [countdownSeconds, setCountdownSeconds] = useState(initialSeconds);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>();

  useEffect(() => {
    if (countdownSeconds === 0) {
      onPause();
    }
  }, [countdownSeconds]);

  function onStart() {
    // setInterval waits delay ms before it calls the clb
    // but the countdown should start immediately
    setCountdownSeconds((currentSeconds) => (currentSeconds -= 1));

    const id = setInterval(() => {
      setCountdownSeconds((currentSeconds) => (currentSeconds -= 1));
    }, 1000);

    setIntervalID(id);
  }

  function onPause() {
    clearInterval(intervalID);
    setIntervalID(undefined);
  }

  function onReset() {
    setCountdownSeconds(initialSeconds);
  }

  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-center gap-8 bg-[var(--bg-dark)] w-56 aspect-square rounded-full border-[6px] border-[var(--accent)] shadow-2xl drop-shadow-[-30px_-35px_50px_rgba(255,255,255,0.08)]"
    >
      <div />

      <motion.p layout className="text-[50px] font-semibold">
        {secondsToMinutes(countdownSeconds)}
      </motion.p>

      {/* Initial state */}
      {countdownSeconds === initialSeconds && (
        <p
          className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
          onClick={onStart}
        >
          START
        </p>
      )}

      {/* intervalID => countdown is running */}
      {intervalID && (
        <p
          className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
          onClick={onPause}
        >
          PAUSE
        </p>
      )}

      {/* 
      When the timer gets paused, the intervalID will be set to undefined.
      To differentiate from the inital state and the end state, where
      the intervalID is also be undefined, we have to make extra checks.
      */}
      {!intervalID &&
        countdownSeconds !== initialSeconds &&
        countdownSeconds !== 0 && (
          <>
            <p
              className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
              onClick={onStart}
            >
              CONTINUE
            </p>
            <p
              className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
              onClick={onReset}
            >
              RESET
            </p>
          </>
        )}

      {/* Time is up */}
      {countdownSeconds === 0 && (
        <p
          className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem] cursor-pointer"
          onClick={onReset}
        >
          RESET
        </p>
      )}
    </motion.div>
  );
};

export default Countdown;
