'use client'

// src/index.ts
import { createStore } from "zustand";
console.log("Globalstore 2");
var store = createStore(() => ({
  theme: {
    colorScheme: "",
    fontSize: "",
    lineHeight: ""
  }
}));
var { getState, setState, subscribe } = store;
var src_default = store;
export {
  src_default as default,
  getState,
  setState,
  subscribe
};
//# sourceMappingURL=index.mjs.map