import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".rating-root": {
      "--rating-size-xs": rem("14px"),
      "--rating-size-sm": rem("18px"),
      "--rating-size-md": rem("20px"),
      "--rating-size-lg": rem("28px"),
      "--rating-size-xl": rem("32px"),

      display: "flex",
      width: "max-content",
      pointerEvents: "var(--_pointer-events)",

      "&:has(input:disabled)": {
        "--_pointer-events": "none",
      },
    },

    ".rating-symbolGroup": {
      position: "relative",
      transition: "transform 100ms ease",
      zIndex: "var(--_z-index)",
      transform: "var(--_transform)",

      "&[data-active]": {
        "--_z-index": "1",
        "--_transform": "scale(1.1)",
      },
    },

    ".rating-starSymbol": {
      width: "var(--rating-size)",
      height: "var(--rating-size)",
      stroke: "var(--_star-color)",
      fill: "var(--_star-color)",
      display: "block",

      '[data-raikou-color-scheme="light"] &': {
        "--_star-color": "var(--raikou-rating-star-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_star-color": "var(--raikou-rating-star-color)",
      },

      "[data-raikou-color-scheme] &[data-filled]": {
        "--_star-color": "var(--rating-color)",
      },
    },

    ".rating-input": {
      height: "0",
      width: "0",
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
      opacity: "0",
      "-webkit-tap-highlight-color": "transparent",

      "&:focus-visible + label": {
        outline: `${rem("2px")} solid var(--raikou-primary-color-filled)`,
        outlineOffset: rem("2px"),
      },
    },

    ".rating-label": {
      display: "block",
      cursor: "pointer",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "var(--rating-item-z-index, 0)",
      "-webkit-tap-highlight-color": "transparent",

      "&[data-read-only]": {
        cursor: "default",
      },

      "&:last-of-type": {
        position: "relative",
      },
    },

    ".rating-symbolBody": {
      clipPath: "var(--rating-symbol-clip-path)",
    },
  });
};
