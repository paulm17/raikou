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
      border: "var(--_paper-border, none)",

      "&[data-with-border]": {
        '[data-raikou-color-scheme="light"] &': {
          "--_paper-border-color": `${rem(
            "1px",
          )} var(--raikou-paper-border-color)`,
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_paper-border-color": `${rem(
            "1px",
          )} var(--raikou-paper-border-color)`,
        },
      },

      "&:not([data-with-border])": {
        "--_paper-border": "none !important",
      },
    },
  });
};
