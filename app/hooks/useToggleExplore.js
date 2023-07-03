import { create } from "zustand";

const useToggleExplore = create((set) => ({
  isToggle: false,
  handleToggleExplore: (isToggle) => set({ isToggle: !isToggle }),
}));

export default useToggleExplore;
