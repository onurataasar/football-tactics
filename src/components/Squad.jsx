import React, { useEffect, useState } from "react";
import Player from "./Player";
import { beşiktaş, fenerbahçe, galatasaray } from "../data/teams";
import useStore from "../../zustand/store";

const Squad = ({ size }) => {
  const team = useStore((state) => state.team);
  const [teamArray, setTeamArray] = useState(fenerbahçe);

  useEffect(() => {
    switch (team) {
      case "Fenerbahçe":
        setTeamArray(fenerbahçe);
        break;
      case "Galatasaray":
        setTeamArray(galatasaray);
        break;
      case "Beşiktaş":
        setTeamArray(beşiktaş);
        break;
      default:
        setTeamArray(fenerbahçe);
        break;
    }
  }, [team]);

  return (
    <div className="flex gap-4">
      {teamArray.map((player) => (
        <Player key={player.id} name={player.name} shirt={player.shirt} />
      ))}
    </div>
  );
};

export default Squad;
