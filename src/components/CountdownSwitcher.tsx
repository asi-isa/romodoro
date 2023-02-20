import { Dispatch, SetStateAction, useState } from "react";
import { DefaultCountdownsKey, DefaultCountdownsType } from "../pages";

interface SwitchProps {
  active: boolean;
  onClick: () => void;
  title: string;
}

const Switch = ({ title, active, onClick }: SwitchProps) => {
  return (
    <div
      className={`${
        active && "bg-[var(--accent)]"
      } transition-colors duration-300 py-2 px-4 rounded-3xl cursor-pointer`}
      onClick={onClick}
    >
      <p
        className={`${
          active ? "text-[var(--bg-dark)]" : "text-[var(--color-muted)]"
        } font-medium`}
      >
        {title}
      </p>
    </div>
  );
};

interface CountdownSwitcherProps {
  currentCountdown: DefaultCountdownsKey;
  setCurrentCountdown: Dispatch<SetStateAction<DefaultCountdownsKey>>;
}

const CountdownSwitcher = ({
  currentCountdown,
  setCurrentCountdown,
}: CountdownSwitcherProps) => {
  return (
    <div className="flex items-center gap-4 bg-[var(--bg-dark)] p-2 rounded-3xl">
      <Switch
        active={currentCountdown === "ROMODORO"}
        onClick={() => setCurrentCountdown("ROMODORO")}
        title="romodoro"
      />
      <Switch
        active={currentCountdown === "SHORT_BREAK"}
        onClick={() => setCurrentCountdown("SHORT_BREAK")}
        title="short break"
      />
      <Switch
        active={currentCountdown === "LONG_BREAK"}
        onClick={() => setCurrentCountdown("LONG_BREAK")}
        title="long break"
      />
    </div>
  );
};

export default CountdownSwitcher;
