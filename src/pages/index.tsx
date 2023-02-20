import { FormEvent, useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

import Countdown from "../components/Countdown";
import CountdownSwitcher from "../components/CountdownSwitcher";
import Settings from "../components/Settings";

const DEFAULT_COUNTDOWNS = {
  ROMODORO: 25,
  SHORT_BREAK: 5,
  LONG_BREAK: 15,
};

export type DefaultCountdownsType = typeof DEFAULT_COUNTDOWNS;
export type DefaultCountdownsKey = keyof typeof DEFAULT_COUNTDOWNS;

function App() {
  const [defaultCountdowns, setDefaultCountdowns] =
    useState(DEFAULT_COUNTDOWNS);
  const [currentCountdown, setCurrentCountdown] =
    useState<DefaultCountdownsKey>("ROMODORO");

  const [showSettings, setShowSettings] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const elements = Array.from(e.currentTarget.elements) as HTMLInputElement[];
    // exlude submit button. i.e. last element
    const values = elements.slice(0, -1).map((field) => {
      return +field.value;
    });

    setDefaultCountdowns({
      ROMODORO: values[0],
      SHORT_BREAK: values[1],
      LONG_BREAK: values[2],
    });

    setShowSettings(false);
  }

  function onReset() {
    setDefaultCountdowns(DEFAULT_COUNTDOWNS);
    setShowSettings(false);
  }

  return (
    <>
      <div className="h-screen flex flex-col gap-10 justify-center items-center">
        <p className="text-2xl font-semibold">romodoro</p>

        <CountdownSwitcher
          setCurrentCountdown={setCurrentCountdown}
          currentCountdown={currentCountdown}
        />

        <Countdown minutes={defaultCountdowns[currentCountdown]} />

        <BsFillGearFill
          className="text-[var(--color-muted)] hover:text-[var(--color)] cursor-pointer text-xl"
          onClick={() => setShowSettings(true)}
        />
      </div>

      <Settings
        defaultCountdownMinutes={defaultCountdowns}
        show={showSettings}
        onClose={() => setShowSettings(false)}
        onSubmit={onSubmit}
        onReset={onReset}
      />
    </>
  );
}

export default App;
