import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".passwordInput-root": {
      "--psi-button-size-xs": rem("22px"),
      "--psi-button-size-sm": rem("26px"),
      "--psi-button-size-md": rem("28px"),
      "--psi-button-size-lg": rem("32px"),
      "--psi-button-size-xl": rem("40px"),

      "--psi-icon-size-xs": rem("12px"),
      "--psi-icon-size-sm": rem("15px"),
      "--psi-icon-size-md": rem("17px"),
      "--psi-icon-size-lg": rem("19px"),
      "--psi-icon-size-xl": rem("21px"),

      "--psi-button-size": "var(--psi-button-size-sm)",
      "--psi-icon-size": "var(--psi-icon-size-sm)",
    },

    ".passwordInput-input": {
      position: "relative",
      overflow: "hidden",
    },

    ".passwordInput-innerInput": {
      fontFamily: "var(--raikou-font-family)",
      backgroundColor: "transparent",
      border: "0",
      paddingRight: "var(--_input-padding-right)",
      paddingLeft: "var(--_input-padding-left)",
      position: "absolute",
      inset: "0",
      outline: "0",
      fontSize: "inherit",
      color: "inherit",

      "[data-disabled] &, &:disabled": {
        cursor: "not-allowed",
      },

      "&::placeholder": {
        color: "var(--_input-placeholder-color)",
      },
    },

    ".passwordInput-visibilityToggle": {
      width: "var(--psi-button-size)",
      height: "var(--psi-button-size)",
      minwidth: "var(--psi-button-size)",
      minHeight: "var(--psi-button-size)",
    },
  });
};
