import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".field": {
      backgroundColor: "transparent",
      appearance: "none",
      minWidth: rem("100px"),
      flex: "1",
      border: "0",
      fontSize: "inherit",
      height: "1.6em",
      color: "inherit",
      padding: "0",

      "&::placeholder": {
        color: "var(--_input-placeholder-color)",
        opacity: "1",
      },

      "&[data-type='hidden'], &[data-type='auto']": {
        height: rem("1px"),
        width: rem("1px"),
        top: "0",
        left: "0",
        pointerEvents: "none",
        position: "absolute",
        opacity: "0",
      },

      "&:focus": {
        outline: "none",
      },

      "&[data-type='auto']:focus": {
        height: "1.6em",
        visibility: "visible",
        opacity: "1",
        position: "static",
      },

      "&[data-pointer]:not([data-disabled], :disabled)": {
        cursor: "pointer",
      },

      "&[data-disabled], &:disabled": {
        cursor: "not-allowed",
      },
    },
  });
};
