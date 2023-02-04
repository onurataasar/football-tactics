import React from "react";
import useStore from "../../zustand/store";

const TeamSelect = () => {
  const chooseTeam = useStore((state) => state.chooseTeam);
  const choosenTeam = useStore((state) => state.team);
  return (
    <div>
      {" "}
      <select
        onChange={(e) => chooseTeam(e.target.value)}
        className="text-black w-32 h-8 rounded-md px-2"
      >
        <option value="Fenerbahçe">Fenerbahçe</option>
        <option value="Galatasaray">Galatasaray</option>
        <option value="Beşiktaş">Beşiktaş</option>
        <option value="Başakşehir">Başakşehir</option>
        <option value="Trabzonspor">Trabzonspor</option>
        <option value="Manchester City">Manchester City</option>
        <option value="PSG">PSG</option>
        <option value="Barcelona">Barcelona</option>
      </select>
    </div>
  );
};

export default TeamSelect;
