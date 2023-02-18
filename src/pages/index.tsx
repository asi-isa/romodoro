import { BsFillGearFill } from "react-icons/bs";

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

      <div className="flex flex-col items-center justify-center gap-8 bg-[var(--bg-dark)] w-56 aspect-square rounded-full border-[6px] border-[var(--accent)] shadow-2xl drop-shadow-[-30px_-35px_50px_rgba(255,255,255,0.08)]">
        <div />
        <p className="text-[50px] font-semibold">17:33</p>
        <p className="text-sm font-medium tracking-[.6rem] translate-x-[.3rem]">
          PAUSE
        </p>
      </div>

      <BsFillGearFill className="text-[var(--color-muted)] hover:text-[var(--color)] cursor-pointer text-xl" />
    </div>
  );
}

export default App;
