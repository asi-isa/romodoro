import { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

import Countdown from "../components/Countdown";
import CountdownSwitcher from "../components/CountdownSwitcher";

function App() {
  const [countdownMinutes, setCountdownMinutes] = useState(25);

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <p className="text-2xl font-semibold">romodoro</p>

      <CountdownSwitcher setCountdownMinutes={setCountdownMinutes} />

      <Countdown minutes={countdownMinutes} />

      <BsFillGearFill className="text-[var(--color-muted)] hover:text-[var(--color)] cursor-pointer text-xl" />
    </div>
  );
}

export default App;
