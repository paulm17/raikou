import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".notification-root": {
      overflow: "hidden",
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingLeft: `var(--_root-padding-left, ${rem("22px")})`,
      paddingRight: "var(--_root-padding-right, var(--raikou-spacing-xs))",
      paddingTop: "var(--raikou-spacing-xs)",
      paddingBottom: "var(--raikou-spacing-xs)",
      border: "var(--_border, none)",
      borderRadius: "var(--notification-radius)",
      boxShadow: "var(--raikou-shadow-lg)",
      backgroundColor: "var(--_bg)",

      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        width: rem("6px"),
        top: "var(--notification-radius)",
        bottom: "var(--notification-radius)",
        left: rem("4px"),
        borderRadius: "var(--notification-radius)",
        backgroundColor: "var(--notification-color)",

        '[dir="rtl"] &': {
          right: rem("4px"),
          left: "auto",
        },
      },

      "&[data-with-icon]": {
        "--_root-padding-left": "var(--raikou-spacing-xs)",

        "&::before": {
          display: "none",
        },

        '[dir="rtl"] &': {
          "--_root-padding-right": "var(--raikou-spacing-xs)",
        },
      },

      "&[data-with-border]": {
        "--_border": `${rem("1px")} solid var(--_border-color)`,
      },

      '[dir="rtl"] &': {
        "--_root-padding-right": rem("22px"),
        "--_root-padding-left": "var(--raikou-spacing-xs)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_border-color": "var(--raikou-color-gray-3)",
        "--_bg": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_border-color": "var(--raikou-color-dark-4)",
        "--_bg": "var(--raikou-color-dark-6)",
      },
    },

    ".notification-icon": {
      boxSizing: "border-box",
      marginRight: "var(--_icon-margin-right, var(--raikou-spacing-md))",
      marginLeft: "var(--_icon-margin-left, 0)",
      width: rem("28px"),
      height: rem("28px"),
      borderRadius: rem("28px"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--notification-color)",
      color: "var(--raikou-color-white)",

      '[dir="rtl"] &': {
        "--_icon-margin-right": 0,
        "--_icon-margin-left": "var(--raikou-spacing-md)",
      },
    },

    ".notification-loader": {
      marginRight: "var(--_icon-margin-right, var(--raikou-spacing-md))",
      marginLeft: "var(--_icon-margin-left, 0)",

      '[dir="rtl"] &': {
        "--_icon-margin-right": 0,
        "--_icon-margin-left": "var(--raikou-spacing-md)",
      },
    },

    ".notification-body": {
      flex: 1,
      overflow: "hidden",
      marginRight: "var(--_body-margin-right, var(--raikou-spacing-xs))",
      marginLeft: "var(--_body-margin-left, 0)",

      '[dir="rtl"] &': {
        "--_body-margin-right": 0,
        "--_body-margin-left": "var(--raikou-spacing-xs)",
      },
    },

    ".notification-title": {
      lineHeight: 1.4,
      marginBottom: rem("2px"),
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--_title-color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_title-color": "var(--raikou-color-gray-9)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_title-color": "var(--raikou-color-white)",
      },
    },

    ".notification-description": {
      color: "var(--_description-color)",
      lineHeight: 1.4,
      overflow: "hidden",
      textOverflow: "ellipsis",

      "&[data-with-title]": {
        '[data-raikou-color-scheme="light"] &': {
          "--_description-color": "var(--raikou-color-gray-6)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_description-color": "var(--raikou-color-dark-2)",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_description-color": "var(--raikou-color-black)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_description-color": "var(--raikou-color-dark-0)",
      },
    },

    ".notification-closeButton:hover": {
      backgroundColor: "var(--_close-button-hover-bg)",

      '[data-raikou-color-scheme="light"] &': {
        "--_close-button-hover-bg": "var(--raikou-color-gray-0)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_close-button-hover-bg": "var(--raikou-color-dark-8)",
      },
    },
  });
};
