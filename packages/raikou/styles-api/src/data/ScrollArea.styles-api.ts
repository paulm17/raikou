import type { ScrollAreaFactory } from "@raikou/client";
import type { StylesApiData } from "../types";

export const ScrollAreaStylesApi: StylesApiData<ScrollAreaFactory> = {
  // @ts-ignore
  selectors: {
    root: "Root element",
    viewport: "",
    scrollbar: "",
    thumb: "",
    corner: "",
  },

  vars: {
    root: {
      "--scrollarea-scrollbar-size": "Scrollbar size",
    },
  },

  modifiers: [
    {
      modifier: "data-hidden",
      selector: ["scrollbar", "corner"],
      condition: 'type="never"',
    },
    {
      modifier: "data-hovered",
      selector: "corner",
      condition: "One of the scrollbars is hovered",
    },
    {
      modifier: "data-orientation",
      selector: "scrollbar",
      value: '"horizontal" or "vertical" depending on scrollbar position',
    },
  ],
};
