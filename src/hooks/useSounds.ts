import useSound from "use-sound";

import startSoundFile from "../assets/sounds/start.mp3";
import pauseSoundFile from "../assets/sounds/pause.mp3";
import resetSoundFile from "../assets/sounds/reset.mp3";
import finishedSoundFile from "../assets/sounds/finished.mp3";
import pianoSoundFile from "../assets/sounds/piano.mp3";

export default function () {
  return {
    sounds: {
      startSound: useSound(startSoundFile),
      pauseSound: useSound(pauseSoundFile),
      resetSound: useSound(resetSoundFile),
      finishedSound: useSound(finishedSoundFile),
      pianoSound: useSound(pianoSoundFile),
    },
  };
}
