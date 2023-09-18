import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".alert-root": {
      padding: "var(--raikou-spacing-md) var(--raikou-spacing-md)",
      borderRadius: "var(--alert-radius, var(--raikou-radius-default))",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "var(--alert-bg, var(--raikou-primary-color-light))",
      border: `var(--alert-bd, ${rem("1px")} solid transparent)`,
      color: "var(--alert-color, var(--raikou-primary-color-light-color))",
    },

    ".alert-root--filled": {
      "--_message-color":
        "var(--alert-color, var(--raikou-primary-color-light-color))",
    },

    ".alert-root--white": {
      "--_message-color": "var(--raikou-color-black)",
    },

    ".alert-wrapper": {
      display: "flex",
    },

    ".alert-body": {
      flex: "1",
    },

    ".alert-title": {
      marginBottom: "var(--raikou-spacing-xs)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "var(--raikou-font-size-sm)",
      fontWeight: "700",

      "&[data-with-close-button]": {
        paddingRight: "var(--raikou-spacing-md)",

        '[dir="rtl"] &': {
          paddingLeft: "var(--raikou-spacing-md)",
          paddingRight: "0",
        },
      },
    },

    ".alert-label": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    ".alert-icon": {
      lineHeight: "1",
      width: rem("20px"),
      height: rem("20px"),
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginRight: "var(--raikou-spacing-md)",
      marginTop: rem("1px"),

      '[dir="rtl"] &': {
        marginRight: "0",
        marginLeft: "var(--raikou-spacing-md)",
      },
    },

    ".alert-message": {
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontSize: "var(--raikou-font-size-sm)",
      color: "var(--_message-color, var(--__message-color))",

      '[data-raikou-color-scheme="light"] &': {
        "--__message-color": "var(--raikou-alert-message-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--__message-color": "var(--raikou-alert-message-color)",
      },
    },

    ".alert-closeButton": {
      width: rem("20px"),
      height: rem("20px"),
      marginTop: "calc(var(--raikou-spacing-sm) * -0.5)",
      color: "var(--alert-color, var(--raikou-primary-color-light-color))",
    },
  });
};
