import createStore from "pure-store";
import { RaikouThemeOverride } from "../../core";

const useStore = createStore<RaikouThemeOverride>({});

export const { getState, update: setState } = useStore;
export default useStore;

export function createTheme(theme: RaikouThemeOverride): RaikouThemeOverride {
  return theme;
}
