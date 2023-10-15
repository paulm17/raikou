import type { KbdFactory } from "@raikou/server";
import type { StylesApiData } from "../types";

export const KbdStylesApi: StylesApiData<KbdFactory> = {
  selectors: {
    root: "Root element",
  },

  vars: {
    root: {
      "--kbd-fz": "Controls `font-size`",
      "--kbd-padding": "Controls `padding`",
    },
  },
};
