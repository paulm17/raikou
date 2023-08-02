import { create } from "zustand";

export const useStore = create<{
  getStyles: any;
}>(() => ({
  getStyles: undefined,
}));
