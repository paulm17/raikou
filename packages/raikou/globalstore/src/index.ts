import { create } from "zustand";
import { RaikouThemeOverride } from "../../core";

const useStore = create<RaikouThemeOverride>(() => ({}) as any);

export const { getState, setState } = useStore;
export default useStore;

export function createTheme(theme: RaikouThemeOverride): RaikouThemeOverride {
  return theme;
}

export * from "./utils/units-converters";
