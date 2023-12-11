// src/index.ts
import createStore from "pure-store";
var useStore = createStore({});
var { getState, update: setState } = useStore;
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
