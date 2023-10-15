import { PinInputFactory } from "@raikou/client";
import type { StylesApiData } from "../types";

export const PinInputStylesApi: StylesApiData<PinInputFactory> = {
  selectors: {
    root: "Root element",
    pinInput: "Input item wrapper",
    input: "Input element",
  },

  vars: {
    root: {
      "--pin-input-size": "Controls input `width` and `height`",
    },
  },

  modifiers: [],
};
