import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".dialog-root.dialog-root": {
      "--dialog-size-xs": rem("160px"),
      "--dialog-size-sm": rem("200px"),
      "--dialog-size-md": rem("340px"),
      "--dialog-size-lg": rem("400px"),
      "--dialog-size-xl": rem("500px"),
      "--dialog-size": "var(--dialog-size-md)",

      position: "relative",
      width: "var(--dialog-size)",
      maxwidth: "calc(100vw - var(--raikou-spacing-xl) * 2)",
      minHeight: rem("50px"),
    },
    ".dialog-closeButton.dialog-closeButton": {
      position: "absolute",
      top: "calc(var(--raikou-spacing-md) / 2)",
      right: "var(--_close-button-right, calc(var(--raikou-spacing-md) / 2))",
      left: "var(--_close-button-left, auto)",

      '[dir="rtl"] &': {
        "--_close-button-right": "auto",
        "--_close-button-left": "calc(var(--raikou-spacing-md) / 2)",
      },
    },
  });
};
