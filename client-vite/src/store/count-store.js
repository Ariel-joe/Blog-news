import { create } from "zustand";

const useGlobalCount = create((set) => ({
  globalCount: 0,
  updateCount: () => {
    set((state) => ({ globalCount: state.globalCount + 1 }));
  },
  updateToSeven: () => {
    set({ globalCount: 7 });
  },
}));

export { useGlobalCount };
