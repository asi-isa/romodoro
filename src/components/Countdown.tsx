import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useSound from "use-sound";

import CircleSVG from "./CircleSVG";
import TxtBtn from "./TxtBtn";

import startAudio from "../assets/sounds/start.mp3";
import pauseAudio from "../assets/sounds/pause.mp3";
import resetAudio from "../assets/sounds/reset.mp3";
import finishedAudio from "../assets/sounds/finished.mp3";
import pianoAudio from "../assets/sounds/piano.mp3";

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

const ONE_SECOND = 1000;

const Countdown = ({ minutes }: CountdownProps) => {
  const initialSeconds = minutes * 60;

  const [countdownSeconds, setCountdownSeconds] = useState(initialSeconds);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>();
  const [pianoIntervalID, setPianoIntervalID] = useState<NodeJS.Timer>();

  const progress = countdownSeconds / initialSeconds;
  const countdownHasntStarted = countdownSeconds === initialSeconds;
  const countdownRunning = intervalID ? true : false;
  const countdownFinished = countdownSeconds === 0;
  const countdownPaused =
    !countdownRunning && !countdownHasntStarted && !countdownFinished;

  const [playStart] = useSound(startAudio);
  const [playPause] = useSound(pauseAudio);
  const [playReset] = useSound(resetAudio);
  const [playFinished] = useSound(finishedAudio);
  const [playPiano, { stop: stopPiano, duration: pianoDuration }] =
    useSound(pianoAudio);

  useEffect(() => {
    if (countdownSeconds === 0) {
      onPause();
      playFinished();
    }
  }, [countdownSeconds]);

  useEffect(() => {
    if (intervalID) {
      playPiano();
      setPianoIntervalID(setInterval(() => playPiano(), pianoDuration));
    } else {
      stopPiano();
      clearInterval(pianoIntervalID);
    }
  }, [intervalID]);

  function onStart() {
    // setInterval waits delay ms before it calls the clb
    // but the countdown should start immediately
    setCountdownSeconds((currentSeconds) => (currentSeconds -= 1));

    setIntervalID(
      setInterval(() => {
        setCountdownSeconds((currentSeconds) => (currentSeconds -= 1));
      }, ONE_SECOND)
    );
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
      <CircleSVG progress={1 - progress} />

      <div />

      <motion.p layout className="text-[50px] font-semibold">
        {secondsToMinutes(countdownSeconds)}
      </motion.p>

      {countdownHasntStarted && (
        <TxtBtn
          txt="START"
          onClick={() => {
            onStart();
            playStart();
          }}
        />
      )}

      {countdownRunning && (
        <TxtBtn
          txt="PAUSE"
          onClick={() => {
            onPause();
            playPause();
          }}
        />
      )}

      {countdownPaused && (
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

      {countdownFinished && (
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
