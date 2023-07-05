import { create } from "zustand";

const useExploreModal = create((set) => ({
  isToggle: false,
  onOpen: () => set({ isToggle: true }),
  onClose: () => set({ isToggle: false }),
}));

export default useExploreModal;
