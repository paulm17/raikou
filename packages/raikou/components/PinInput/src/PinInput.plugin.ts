import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".pinInput-root": {
      "--pin-input-size-xs": rem("30px"),
      "--pin-input-size-sm": rem("36px"),
      "--pin-input-size-md": rem("42px"),
      "--pin-input-size-lg": rem("50px"),
      "--pin-input-size-xl": rem("60px"),
    },

    ".pinInput-pinInput": {
      width: "var(--pin-input-size)",
      height: "var(--pin-input-size)",
    },
  });
};