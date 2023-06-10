import { create } from "zustand";

const useAuthenticatedUser = create((_) => ({
  user: null,
}));

export default useAuthenticatedUser;
