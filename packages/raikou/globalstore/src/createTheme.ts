import createStore from "pure-store";
import {
  RaikouThemeOverride,
  createTheme as createRaikouTheme,
} from "@raikou/theme";

export const useStore = createStore<RaikouThemeOverride>({});

export const { getState, update: setState } = useStore;

export function createTheme(config: any): RaikouThemeOverride {
  const theme = createRaikouTheme(config);

  // set server state
  setState((state: RaikouThemeOverride) => ({
    state: { ...state, ...theme },
  }));

  return theme;
}
