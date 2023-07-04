import { create } from "zustand";

const useToggleExplore = create((set) => ({
  isToggle: false,
  handleToggleExplore: () => set((state) => ({ isToggle: !state.isToggle })),
  handleOpenExplore: () => set({ isToggle: true }),
  handleCloseExplore: () => set({ isToggle: false }),
}));

export default useToggleExplore;
