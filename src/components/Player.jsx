import React from "react";
import Draggable from "react-draggable";
import useStore from "../../zustand/store";
import Shirt from "../assets/fenerbahce-shirt.png";
const Player = ({ name, shirt }) => {
  const pos = useStore((state) => state.position);
  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={pos}
      grid={[40, 40]}
      scale={1}
    >
      <div className={"handle"}>
        <div className="w-20 h-20 flex flex-col cursor-grab">
          <img draggable="false" src={shirt} alt="player"></img>
          <span
            className="text-xs shadow-2xl text-white font-bold"
            style={{ textShadow: "black 1px 0 10px" }}
          >
            {name}
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default Player;
