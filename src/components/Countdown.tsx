import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import CircleSVG from "./CircleSVG";

import startAudio from "../assets/sounds/start.mp3";
import pauseAudio from "../assets/sounds/pause.mp3";
import resetAudio from "../assets/sounds/reset.mp3";
import finishedAudio from "../assets/sounds/finished.mp3";
import TxtBtn from "./TxtBtn";

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

  const [playStart] = useSound(startAudio);
  const [playPause] = useSound(pauseAudio);
  const [playReset] = useSound(resetAudio);
  const [playFinished] = useSound(finishedAudio);

  useEffect(() => {
    if (countdownSeconds === 0) {
      onPause();
      playFinished();
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
    <div className="flex flex-col items-center justify-center gap-8 bg-[var(--bg-dark)] w-56 aspect-square rounded-full shadow-2xl drop-shadow-[-30px_-35px_50px_rgba(255,255,255,0.08)] ">
      <CircleSVG progress={1 - countdownSeconds / initialSeconds} />

      <div />

      <motion.p layout className="text-[50px] font-semibold">
        {secondsToMinutes(countdownSeconds)}
      </motion.p>

      {/* Initial state */}
      {countdownSeconds === initialSeconds && (
        <TxtBtn
          txt="START"
          onClick={() => {
            onStart();
            playStart();
          }}
        />
      )}

      {/* intervalID => countdown is running */}
      {intervalID && (
        <TxtBtn
          txt="PAUSE"
          onClick={() => {
            onPause();
            playPause();
          }}
        />
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
            <TxtBtn
              txt="CONTINUE"
              onClick={() => {
                onStart();
                playStart();
              }}
            />
            <TxtBtn
              txt="RESET"
              onClick={() => {
                onReset();
                playReset();
              }}
            />
          </>
        )}

      {/* Time is up */}
      {countdownSeconds === 0 && (
        <TxtBtn
          txt="RESET"
          onClick={() => {
            onReset();
            playReset();
          }}
        />
      )}
    </div>
  );
};

export default Countdown;
