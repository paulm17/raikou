import { create } from "zustand";
import { RaikouTheme } from "./RaikouProvider";

export const useStore = create<RaikouTheme | null>(() => null);
