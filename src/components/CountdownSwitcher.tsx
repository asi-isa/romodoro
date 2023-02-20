import { Dispatch, SetStateAction, useState } from "react";

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
  setCountdownMinutes: Dispatch<SetStateAction<number>>;
}

const CountdownSwitcher = ({ setCountdownMinutes }: CountdownSwitcherProps) => {
  const [activeSwitch, setActiveSwitch] = useState(1);

  return (
    <div className="flex items-center gap-4 bg-[var(--bg-dark)] p-2 rounded-3xl">
      <Switch
        active={activeSwitch === 1}
        onClick={() => {
          setCountdownMinutes(25);
          setActiveSwitch(1);
        }}
        title="romodoro"
      />
      <Switch
        active={activeSwitch === 2}
        onClick={() => {
          setCountdownMinutes(5);
          setActiveSwitch(2);
        }}
        title="short break"
      />
      <Switch
        active={activeSwitch === 3}
        onClick={() => {
          setCountdownMinutes(15);
          setActiveSwitch(3);
        }}
        title="long break"
      />
    </div>
  );
};

export default CountdownSwitcher;
