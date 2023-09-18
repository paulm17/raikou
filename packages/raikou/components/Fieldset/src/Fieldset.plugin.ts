import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".fieldset-root": {
      padding: "var(--raikou-spacing-lg)",
      paddingTop: "var(--raikou-spacing-xs)",
      borderRadius: "var(--fieldset-radius, var(--raikou-radius-default))",
    },

    ".fieldset-root[data-variant='default']": {
      backgroundColor: "var(--_bg)",
      border: `${rem("1px")} solid var(--_bd)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_bd": "var(--raikou-fieldset-default-bd)",
        "--_bg": "var(--raikou-fieldset-default-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bd": "var(--raikou-fieldset-default-bd)",
        "--_bg": "var(--raikou-fieldset-default-bg)",
      },
    },

    ".fieldset-root[data-variant='filled']": {
      backgroundColor: "var(--_bg)",
      border: `${rem("1px")} solid var(--_bd)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_bd": "var(--raikou-fieldset-filled-bd)",
        "--_bg": "var(--raikou-fieldset-filled-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bd": "var(--raikou-fieldset-filled-bd)",
        "--_bg": "var(--raikou-fieldset-filled-bg)",
      },
    },

    ".fieldset-root[data-variant='unstyled']": {
      padding: "0",
      border: "0",
      borderRadius: "0",
    },

    ".fieldset-legend": {
      fontSize: "var(--raikou-font-size-sm)",
    },

    "[data-variant='unstyled'] .fieldset-legend": {
      padding: "0",
      marginBottom: "var(--raikou-spacing-sm)",
    },
  });
};
