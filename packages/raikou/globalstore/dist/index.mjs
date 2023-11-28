// src/index.ts
import { create } from "zustand";
var useStore = create(() => ({}));
var { getState, setState } = useStore;
var src_default = useStore;
function createTheme(theme) {
  return theme;
}
export {
  createTheme,
  src_default as default,
  getState,
  setState
};
