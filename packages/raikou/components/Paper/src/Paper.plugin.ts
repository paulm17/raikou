import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".paper-root": {
      outline: "0",
      "-webkit-tap-highlight-color": "transparent",
      display: "block",
      touchAction: "manipulation",
      textDecoration: "none",
      borderRadius: "var(--paper-radius, var(--raikou-radius-default))",
      boxShadow: "var(--paper-shadow, none)",
      backgroundColor: "var(--raikou-color-body)",
      border:
        "var(--_paper-border-width, 0) solid var(--_paper-border-color, transparent)",

      "&[data-with-border]": {
        "--_paper-border-width": rem("1px"),

        '[data-raikou-color-scheme="light"] &': {
          "--_paper-border-color": "var(--raikou-paper-border-color)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_paper-border-color": "var(--raikou-paper-border-color)",
        },
      },
    },
  });
};
