import React from "react";

const TacticsSelect = () => {
  return (
    <div>
      {" "}
      <select className="text-black w-32 h-8 rounded-md px-2">
        <option value="4-4-2">4-4-2</option>
        <option value="4-3-3">4-3-3</option>
        <option value="4-2-3-1">4-2-3-1</option>
        <option value="4-1-2-1-2">4-1-2-1-2</option>
        <option value="4-1-4-1">4-1-4-1</option>
        <option value="4-5-1">4-5-1</option>
        <option value="3-4-3">3-4-3</option>
        <option value="3-5-2">3-5-2</option>
      </select>
    </div>
  );
};

export default TacticsSelect;
