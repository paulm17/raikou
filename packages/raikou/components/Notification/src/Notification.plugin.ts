import { rem } from "@raikou/core";

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
      borderRadius: "var(--notification-radius, var(--raikou-radius-default))",
      boxShadow: "var(--raikou-shadow-lg)",
      backgroundColor: "var(--_bg)",

      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        width: rem("6px"),
        top: "var(--notification-radius, var(--raikou-radius-default))",
        bottom: "var(--notification-radius, var(--raikou-radius-default))",
        left: rem("4px"),
        borderRadius:
          "var(--notification-radius, var(--raikou-radius-default))",
        backgroundColor:
          "var(--notification-color, var(--raikou-primary-color-filled))",

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
        "--_border-color": "var(--raikou-notification-border-color)",
        "--_bg": "var(--raikou-notification-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_border-color": "var(--raikou-notification-border-color)",
        "--_bg": "var(--raikou-notification-bg)",
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
        "--_icon-margin-right": "0",
        "--_icon-margin-left": "var(--raikou-spacing-md)",
      },
    },

    ".notification-loader": {
      marginRight: "var(--_icon-margin-right, var(--raikou-spacing-md))",
      marginLeft: "var(--_icon-margin-left, 0)",

      '[dir="rtl"] &': {
        "--_icon-margin-right": "0",
        "--_icon-margin-left": "var(--raikou-spacing-md)",
      },
    },

    ".notification-body": {
      flex: "1",
      overflow: "hidden",
      marginRight: "var(--_body-margin-right, var(--raikou-spacing-xs))",
      marginLeft: "var(--_body-margin-left, 0)",

      '[dir="rtl"] &': {
        "--_body-margin-right": "0",
        "--_body-margin-left": "var(--raikou-spacing-xs)",
      },
    },

    ".notification-title": {
      marginBottom: rem("2px"),
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--_title-color)",
      fontSize: "var(--raikou-font-size-sm)",
      lineHeight: "var(--raikou-line-height-sm)",
      fontWeight: "500",

      '[data-raikou-color-scheme="light"] &': {
        "--_title-color": "var(--raikou-notification-title-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_title-color": "var(--raikou-notification-title-color)",
      },
    },

    ".notification-description": {
      color: "var(--_description-color)",
      fontSize: "var(--raikou-font-size-sm)",
      lineHeight: "var(--raikou-line-height-sm)",
      overflow: "hidden",
      textOverflow: "ellipsis",

      "&[data-with-title]": {
        '[data-raikou-color-scheme="light"] &': {
          "--_description-color":
            "var(--raikou-notification-title-description-color)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_description-color":
            "var(--raikou-notification-title-description-color)",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_description-color": "var(--raikou-notification-description-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_description-color": "var(--raikou-notification-description-color)",
      },
    },

    ".notification-closeButton:hover": {
      backgroundColor: "var(--_close-button-hover-bg)",

      '[data-raikou-color-scheme="light"] &': {
        "--_close-button-hover-bg":
          "var(--raikou-notification-close-button-hover-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_close-button-hover-bg":
          "var(--raikou-notification-close-button-hover-bg)",
      },
    },
  });
};
