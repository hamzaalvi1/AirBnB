import { create } from "zustand";

const useRentModal = create((set) => ({
  isRentModalOpen: false,
  rentModalOpen: () => set({ isRentModalOpen: true }),
  rentModalClose: () => set({ isRentModalOpen: false }),
}));

export default useRentModal;
