import { create } from "zustand";
import { AuthConstants } from "../config/constants";

const useAuthModal = create((set) => ({
  title: AuthConstants.SIGNUP,
  isOpen: false,
  onOpen: ({ title }) => set({ title, isOpen: true }),
  onClose: () => set({ title: AuthConstants.SIGNUP, isOpen: false }),
}));

export default useAuthModal;
