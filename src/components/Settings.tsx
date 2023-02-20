import { FormEvent } from "react";

import { DefaultCountdownsType } from "../pages";
import Modal from "./Modal";

interface SettingProps {
  title: string;
  defaultValue: number;
}

const Setting = ({ title, defaultValue }: SettingProps) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg font-medium">{title}</p>

      <input
        className="bg-[var(--bg)] text-center font-medium rounded-md py-2"
        name={title}
        defaultValue={defaultValue}
        type="number"
        min={1}
        max={120}
      />
    </div>
  );
};

interface SettingsProps {
  show: boolean;
  defaultCountdownMinutes: DefaultCountdownsType;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
  onClose: () => void;
}

const Settings = ({
  show,
  defaultCountdownMinutes,
  onSubmit,
  onReset,
  onClose,
}: SettingsProps) => {
  return (
    <Modal show={show} onClose={onClose} onSubmit={onSubmit} onReset={onReset}>
      <div className="flex flex-col gap-3">
        <Setting
          title="romodoro"
          defaultValue={defaultCountdownMinutes.ROMODORO}
        />
        <Setting
          title="short break"
          defaultValue={defaultCountdownMinutes.SHORT_BREAK}
        />
        <Setting
          title="long break"
          defaultValue={defaultCountdownMinutes.LONG_BREAK}
        />
      </div>
    </Modal>
  );
};

export default Settings;
