import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".checkbox-root": {
      "--checkbox-size-xs": rem("16px"),
      "--checkbox-size-sm": rem("20px"),
      "--checkbox-size-md": rem("24px"),
      "--checkbox-size-lg": rem("30px"),
      "--checkbox-size-xl": rem("36px"),
    },

    ".checkbox-inner": {
      position: "relative",
      width: "var(--checkbox-size)",
      height: "var(--checkbox-size)",
      order: "var(--_checkbox-inner-order, 1)",

      "&[data-label-position='left']": {
        "--_checkbox-inner-order": "2",
      },
    },

    ".checkbox-input": {
      appearance: "none",
      backgroundColor: "var(--_checkbox-bg)",
      border: `${rem("1px")} solid var(--_checkbox-bd-color)`,
      width: "var(--checkbox-size)",
      height: "var(--checkbox-size)",
      borderRadius: "var(--checkbox-radius)",
      padding: "0",
      display: "block",
      margin: "0",
      transition: "border-color 100ms ease, background-color 100ms ease",
      cursor: "var(--_checkbox-cursor, var(--raikou-cursor-type))",

      '[data-raikou-color-scheme="light"] &': {
        "--_checkbox-bg": "var(--raikou-color-white)",
        "--_checkbox-bd-color": "var(--raikou-color-gray-4)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_checkbox-bg": "var(--raikou-color-dark-6)",
        "--_checkbox-bd-color": "var(--raikou-color-dark-4)",
      },

      "&[data-error]": {
        "--_checkbox-bd-color": "var(--raikou-color-error)",
      },

      "&[data-indeterminate], &:checked": {
        "[data-raikou-color-scheme] &": {
          "--_checkbox-bg": "var(--checkbox-color)",
          "--_checkbox-bd-color": "var(--checkbox-color)",

          "& + .checkbox-icon": {
            "--_checkbox-icon-opacity": "1",
            "--_checkbox-icon-transform": "none",
          },
        },
      },

      "&:disabled": {
        "--_checkbox-cursor": "not-allowed",

        '[data-raikou-color-scheme="light"] &': {
          "--_checkbox-bg": "var(--raikou-color-gray-2)",
          "--_checkbox-bd-color": "var(--raikou-color-gray-3)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_checkbox-bg": "var(--raikou-color-dark-6)",
          "--_checkbox-bd-color": "var(--raikou-color-dark-6)",
        },

        "& + .checkbox-icon": {
          '[data-raikou-color-scheme="light"] &': {
            "--_checkbox-icon-color": "var(--raikou-color-gray-5)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_checkbox-icon-color": "var(--raikou-color-dark-3)",
          },
        },
      },
    },

    ".checkbox-icon": {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      width: "60%",
      margin: "auto",
      color: "var(--_checkbox-icon-color, var(--raikou-color-white))",
      pointerEvents: "none",
      transform: `var(--_checkbox-icon-transform, translateY(${rem(
        "5px"
      )}) scale(0.5))`,
      opacity: "var(--_checkbox-icon-opacity, 0)",
      transition: "transform 100ms ease, opacity 100ms ease",
    },
  });
};
