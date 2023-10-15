import type { MarkFactory } from "@raikou/server";
import type { StylesApiData } from "../types";

export const MarkStylesApi: StylesApiData<MarkFactory> = {
  selectors: {
    root: "Root element",
  },

  vars: {
    root: {
      "--mark-bg-dark": "Controls `background-color` in dark color scheme",
      "--mark-bg-light": "Controls `background-color` for light color scheme",
    },
  },
};
