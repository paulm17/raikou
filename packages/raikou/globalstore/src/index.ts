import { RaikouThemeOverride } from "@raikou/theme";
import createStore from "pure-store";

export const useStore = createStore<RaikouThemeOverride>({});

export function createTheme(config: any): RaikouThemeOverride {
  return config.raikouTheme as RaikouThemeOverride;
}

export const { getState, update: setState } = useStore;
