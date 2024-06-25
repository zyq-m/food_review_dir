import { create } from "zustand";

const useRefresh = create((set) => ({
  counter: 0,
  setCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useRefresh;
