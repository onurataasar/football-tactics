import { useState } from "react";
import "./App.scss";
import TacticsSelect from "./components/TacticsSelect";
import TeamSelect from "./components/TeamSelect";
import Squad from "./components/Squad";
import useStore from "../zustand/store";

function App() {
  const pos = useStore((state) => state.position);
  console.log(pos);
  const resetPosition = useStore((state) => state.resetPosition);
  const setPosition = useStore((state) => state.setPosition);

  function handleReset() {
    setTimeout(() => {
      resetPosition();
      setPosition();
    }, 500);

    clearTimeout();
  }

  return (
    <div className="App p-8">
      <div className="flex flex-col items-center justify-between space-y-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-gray-100 text-4xl font-bold">Football Tactics</h1>
          <p className="text-sm font-extralight italic text-slate-300">
            Design your dream squad in minutes
          </p>
          <div className="flex gap-4">
            <TacticsSelect />
            <TeamSelect />
            <button
              onClick={handleReset}
              className="px-8 py-2 bg-red-500 rounded-md text-xs hover:bg-red-400"
            >
              Reset Squad
            </button>
          </div>
          <Squad />
        </div>
        <div className="rounded-2xl bg-football-field w-[1200px] h-[800px] bg-no-repeat bg-contain bg-green-200"></div>
      </div>
    </div>
  );
}

export default App;
