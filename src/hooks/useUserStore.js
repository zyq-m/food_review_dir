import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: checkUser(),
  remove_user: () => set({ user: null }),
  set_user: (user) => set({ user: user }),
}));

function checkUser() {
  try {
    const token = window.localStorage.getItem("access_token");
    const { sub } = jwtDecode(token);
    sub.isAuth = true;

    return sub;
  } catch (error) {
    return null;
  }
}

export default useUserStore;
