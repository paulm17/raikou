import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".card-root.card-root": {
      "--card-padding": "var(--raikou-spacing-md)",

      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--_card-bg)",
      padding: "var(--card-padding)",
      color: "var(--raikou-color-text)",

      '[data-raikou-color-scheme="light"] &': {
        "--_card-bg": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_card-bg": "var(--raikou-color-dark-6)",
      },
    },

    ".card-section.card-section": {
      display: "block",
      marginLeft: "calc(var(--card-padding) * -1)",
      marginRight: "calc(var(--card-padding) * -1)",
      paddingLeft: "var(--_card-section-padding, 0)",
      paddingRight: "var(--_card-section-padding, 0)",
      borderTop: "var(--_card-section-border-top, unset)",
      borderBottom: "var(--_card-section-border-bottom, unset)",
      marginTop: "var(--_card-section-mt, 0)",
      marginBottom: "var(--_card-section-mb, 0)",

      "&[data-first-section]": {
        "--_card-section-mt": "calc(var(--card-padding) * -1)",
        "--_card-section-border-top": "none !important",
      },

      "&[data-last-section]": {
        "--_card-section-mb": "calc(var(--card-padding) * -1)",
        "--_card-section-border-bottom": "none !important",
      },

      "&[data-inherit-padding]": {
        "--_card-section-padding": "var(--card-padding)",
      },

      "&[data-with-border]": {
        "--_card-section-border-top": `${rem(
          "1px",
        )} solid var(--_card-section-border-color)`,
        "--_card-section-border-bottom": `${rem(
          "1px",
        )} solid var(--_card-section-border-color)`,
      },

      "& + &": {
        "--_card-section-border-top": "none !important",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_card-section-border-color":
          "var(--raikou-card-section-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_card-section-border-color":
          "var(--raikou-card-section-border-color)",
      },
    },
  });
};
