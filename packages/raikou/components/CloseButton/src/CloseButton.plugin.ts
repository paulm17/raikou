import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".closeButton-root": {
      "--cb-size-xs": rem("18px"),
      "--cb-size-sm": rem("22px"),
      "--cb-size-md": rem("28px"),
      "--cb-size-lg": rem("34px"),
      "--cb-size-xl": rem("44px"),

      "--cb-size": "var(--cb-size-md)",
      "--cb-icon-size": "70%",

      lineHeight: "1",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      userSelect: "none",

      width: "var(--cb-size)",
      height: "var(--cb-size)",
      minWidth: "var(--cb-size)",
      minHeight: "var(--cb-size)",
      borderRadius: "var(--cb-radius, var(--raikou-radius-default))",
      color: "var(--_cb-color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_cb-color": "var(--raikou-closebutton-cb-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_cb-color": "var(--raikou-closebutton-cb-color)",
      },
    },

    '.closeButton-root[data-variant="subtle"]': {
      backgroundColor: "var(--_cb-bg)",

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            "--_cb-bg": "var(--raikou-closebutton-bg-hover)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_cb-bg": "var(--raikou-closebutton-bg-active)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            "--_cb-bg": "var(--raikou-closebutton-bg-hover)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_cb-bg": "var(--raikou-closebutton-bg-active)",
          },
        },
      },
    },
  });
};
