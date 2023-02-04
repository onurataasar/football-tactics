import { create } from "zustand";

const useStore = create((set) => ({
  position: null,
  team: "Fenerbahçe",
  resetPosition: () => set(() => ({ position: { x: 0, y: 0 } })),
  setPosition: () => set(() => ({ position: null })),
  chooseTeam: (team) => set(() => ({ team: team })),
}));

export default useStore;
