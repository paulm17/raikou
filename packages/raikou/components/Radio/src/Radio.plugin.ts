import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".radio-root": {
      "--radio-size-xs": rem("16px"),
      "--radio-size-sm": rem("20px"),
      "--radio-size-md": rem("24px"),
      "--radio-size-lg": rem("30px"),
      "--radio-size-xl": rem("36px"),

      "--radio-icon-size": "calc(var(--radio-size) / 2.25)",
    },

    ".radio-inner": {
      position: "relative",
      width: "var(--radio-size)",
      height: "var(--radio-size)",
      order: "var(--_radio-order, 1)",

      "&[data-label-position='left']": {
        "--_radio-order": "2",
      },
    },

    ".radio-icon": {
      color: "var(--_radio-icon-color, var(--raikou-color-white))",
      opacity: "var(--_radio-icon-opacity, 0)",
      transform: `var(--_radio-icon-transform, scale(0.2) translateY(${rem(
        "10px",
      )}))`,
      transition: "opacity 100ms ease, transform 200ms ease",
      pointerEvents: "none",
      width: "var(--radio-icon-size)",
      height: "var(--radio-icon-size)",
      position: "absolute",
      top: "calc(50% - var(--radio-icon-size) / 2)",
      left: "calc(50% - var(--radio-icon-size) / 2)",
    },

    ".radio-radio": {
      backgroundColor: "var(--_radio-bg)",
      border: `${rem("1px")} solid var(--_radio-bd-color)`,
      position: "relative",
      appearance: "none",
      width: "var(--radio-size)",
      height: "var(--radio-size)",
      borderRadius: "var(--radio-radius)",
      margin: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "background-color, border-color",
      transitionTimingFunction: "ease",
      transitionDuration: "100ms",
      cursor: "var(--_cursor, var(--raikou-cursor-type))",
      "-webkit-tap-highlight-color": "transparent",

      '[data-raikou-color-scheme="light"] &': {
        "--_radio-bg": "var(--raikou-radio-bg)",
        "--_radio-bd-color": "var(--raikou-radio-bd-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_radio-bg": "var(--raikou-radio-bg)",
        "--_radio-bd-color": "var(--raikou-radio-bd-color)",
      },

      "&:checked": {
        "--_radio-bg": "var(--radio-color)",
        "--_radio-bd-color": "var(--radio-color)",

        "& + .radio-icon": {
          "--_radio-icon-opacity": "1",
          "--_radio-icon-transform": "scale(1)",
        },
      },

      "&:disabled": {
        "--_cursor": "not-allowed",

        '[data-raikou-color-scheme="light"] &': {
          "--_radio-bg": "var(--raikou-radio-bg-disabled)",
          "--_radio-bd-color": "var(--raikou-radio-bd-disabled-color)",

          "& + .radio-icon": {
            "--_radio-icon-color": "var(--raikou-radio-icon-disabled-color)",
          },
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_radio-bg": "var(--raikou-radio-bg-disabled)",
          "--_radio-bd-color": "var(--raikou-radio-bd-disabled-color)",

          "& + .icon": {
            "--_radio-icon-color": "var(--raikou-radio-icon-disabled-color)",
          },
        },
      },

      "&[data-error]": {
        "--_radio-bd-color": "var(--raikou-color-error)",
      },
    },
  });
};
