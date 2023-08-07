import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".code-root": {
      fontFamily: "var(--raikou-font-family-monospace)",
      lineHeight: "var(--raikou-line-height)",
      padding: `var(--_code-padding, ${rem(
        "2px",
      )} calc(var(--raikou-spacing-xs) / 2))`,
      borderRadius: "var(--raikou-radius-sm)",
      fontSize: "var(--raikou-font-size-xs)",
      backgroundColor: "var(--_code-bg)",
      color: "var(--_code-color)",
      margin: "0",
      overflow: "auto",

      '[data-raikou-color-scheme="light"] &': {
        "--_code-bg": "var(--code-bg, var(--raikou-color-gray-1))",
        "--_code-color": "var(--raikou-color-black)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_code-bg": "var(--code-bg, var(--raikou-color-dark-5))",
        "--_code-color": "var(--raikou-color-white)",
      },

      "&[data-block]": {
        "--_code-padding": "var(--raikou-spacing-xs)",
      },
    },
  });
};
