import { create } from "zustand";

const useRestaurantStore = create((set) => ({
  restaurant: [],
  set_restaurant: (restaurant) => set({ restaurant }),
}));

export default useRestaurantStore;
