import { supabase } from "@/supabase";
import { create } from "zustand";

export const useStore = create((set) => ({
  isAuthenticated: false,
  session: null,

  checkAuth: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    set({ isAuthenticated: !!session, session });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ isAuthenticated: false, session: null });
  },
}));

// This function can be placed outside the Zustand store creation to ensure it's only set up once.
export const listenToAuthChanges = () => {
  supabase.auth.onAuthStateChange((_event, session) => {
    useStore.getState().checkAuth(); // Recheck auth status on auth state change
  });
};
