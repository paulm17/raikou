import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".inlineInput-root": {
      "--label-lh-xs": rem("16px"),
      "--label-lh-sm": rem("20px"),
      "--label-lh-md": rem("24px"),
      "--label-lh-lg": rem("30px"),
      "--label-lh-xl": rem("36px"),

      "&[data-label-position='left']": {
        "--_label-order": "1",
        "--_offset-right": "var(--raikou-spacing-sm)",
        "--_offset-left": "0",

        '[dir="rtl"] &': {
          "--_offset-right": "0",
          "--_offset-left": "var(--raikou-spacing-sm)",
        },
      },

      "&[data-label-position='right']": {
        "--_label-order": "2",
        "--_offset-right": "0",
        "--_offset-left": "var(--raikou-spacing-sm)",

        '[dir="rtl"] &': {
          "--_offset-right": "var(--raikou-spacing-sm)",
          "--_offset-left": "0",
        },
      },
    },

    ".inlineInput-body": {
      display: "flex",
    },

    ".inlineInput-labelWrapper": {
      "-webkit-tap-highlight-color": "transparent",
      display: "inline-flex",
      flexDirection: "column",
      fontSize: "var(--label-fz)",
      lineHeight: "var(--label-lh)",
      cursor: "var(--raikou-cursor-type)",
      order: "var(--_label-order)",
    },

    ".inlineInput-label": {
      cursor: "var(--raikou-cursor-type)",
      color: "var(--_label-color, inherit)",
      paddingLeft: "var(--_offset-left)",
      paddingRight: "var(--_offset-right)",

      "fieldset:disabled &, &[data-disabled]": {
        '[data-raikou-color-scheme="light"] &': {
          "--_label-color": "var(--raikou-color-gray-5)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_label-color": "var(--raikou-color-dark-3)",
        },
      },
    },

    /* Duplicate class to increase specificity */
    ".inlineInput-description.inlineInput-description": {
      marginTop: "calc(var(--raikou-spacing-xs) / 2)",
      paddingLeft: "var(--_offset-left)",
      paddingRight: "var(--_offset-right)",
    },

    /* Duplicate class to increase specificity */
    ".inlineInput-error.inlineInput-error": {
      marginTop: "calc(var(--raikou-spacing-xs) / 2)",
      paddingLeft: "var(--_offset-left)",
      paddingRight: "var(--_offset-right)",
    },
  });
};
