import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".fieldset-root": {
      padding: "var(--raikou-spacing-lg)",
      paddingTop: "var(--raikou-spacing-xs)",
      borderRadius: "var(--fieldset-radius)",
    },

    ".fieldset-root--default": {
      backgroundColor: "var(--_bg)",
      border: `${rem("1px")} solid var(--_bd)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_bd": "var(--raikou-color-gray-3)",
        "--_bg": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bd": "var(--raikou-color-dark-4)",
        "--_bg": "var(--raikou-color-dark-7)",
      },
    },

    ".fieldset-root--filled": {
      backgroundColor: "var(--_bg)",
      border: `${rem("1px")} solid var(--_bd)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_bd": "var(--raikou-color-gray-3)",
        "--_bg": "var(--raikou-color-gray-0)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bd": "var(--raikou-color-dark-4)",
        "--_bg": "var(--raikou-color-dark-6)",
      },
    },

    ".fieldset-root--unstyled": {
      padding: 0,
      border: 0,
      borderRadius: 0,
    },

    ".fieldset-legend": {
      fontSize: "var(--raikou-font-size-sm)",
    },

    ".fieldset-legend--unstyled": {
      padding: 0,
      marginBottom: "var(--raikou-spacing-sm)",
    },
  });
};
