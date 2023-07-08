import { create } from "zustand";

const useExploreSelection = create((set) => ({
  isExploreToggle: false,
  exploreDetails: {
    location: {label: "",value:""},
    date: "",
    guests: "",
    room: "",
    bathroom: "",
  },

  onExploreToggleOpen: () => set({ isExploreToggle: true }),
  onExploreToggleClose: () => set({ isExploreToggle: false }),
  setExploreDetails: (details) =>
    set((state) => ({
      exploreDetails: { ...state?.exploreDetails, ...details },
    })),
}));

export default useExploreSelection;
