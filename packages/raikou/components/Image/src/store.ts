import { create } from "zustand";

export const useStore = create<{
  error: boolean;
}>(() => ({
  error: false,
}));
