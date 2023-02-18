import { BsFillGearFill } from "react-icons/bs";
import Countdown from "../components/Countdown";

function App() {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <p className="text-2xl font-semibold">romodoro</p>

      <div className="flex items-center gap-4 bg-[var(--bg-dark)] p-2 rounded-3xl">
        <div className="bg-[var(--accent)] py-2 px-4 rounded-3xl">
          <p className="text-[var(--bg-dark)] font-medium">romodoro</p>
        </div>

        <div className="bg-[var(--bg-dark)] py-2 px-4 rounded-3xl">
          <p className="text-[var(--color-muted)] font-medium">short break</p>
        </div>

        <div className="bg-[var(--bg-dark)] py-2 px-4 rounded-3xl">
          <p className="text-[var(--color-muted)] font-medium">long break</p>
        </div>
      </div>

      <Countdown minutes={0.1} />

      <BsFillGearFill className="text-[var(--color-muted)] hover:text-[var(--color)] cursor-pointer text-xl" />
    </div>
  );
}

export default App;
