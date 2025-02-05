import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: async (userData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const { data } = await response.json();

        set({ user: data, isLoggedIn: true });

        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  logout: () => {
    set({ user: null, isLoggedIn: false });
  },
}));

export { useUserStore };
