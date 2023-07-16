import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".tooltip-root": {
      position: "absolute",
      padding: "calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-xs)",
      pointerEvents: "none",
      fontSize: "var(--raikou-font-size-sm)",
      whiteSpace: "var(--_tooltip-white-space, nowrap)",
      backgroundColor: "var(--_tooltip-bg)",
      color: "var(--_tooltip-color)",
      borderRadius: "var(--tooltip-radius)",

      '[data-raikou-color-scheme="light"] &': {
        "--_tooltip-bg": "var(--tooltip-bg, var(--raikou-color-gray-9))",
        "--_tooltip-color": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_tooltip-bg": "var(--tooltip-bg, var(--raikou-color-gray-2))",
        "--_tooltip-color": "var(--raikou-color-black)",
      },

      "&[data-multiline]": {
        "--_tooltip-white-space": "normal",
      },
    },

    ".tooltip-arrow": {
      backgroundColor: "inherit",
      border: 0,
      zIndex: 1,
    },
  });
};
