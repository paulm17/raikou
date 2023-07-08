import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".switch-root": {
      "--switch-height-xs": rem("16px"),
      "--switch-height-sm": rem("20px"),
      "--switch-height-md": rem("24px"),
      "--switch-height-lg": rem("30px"),
      "--switch-height-xl": rem("36px"),

      "--switch-width-xs": rem("32px"),
      "--switch-width-sm": rem("38px"),
      "--switch-width-md": rem("46px"),
      "--switch-width-lg": rem("56px"),
      "--switch-width-xl": rem("72px"),

      "--switch-thumb-size-xs": rem("12px"),
      "--switch-thumb-size-sm": rem("14px"),
      "--switch-thumb-size-md": rem("18px"),
      "--switch-thumb-size-lg": rem("22px"),
      "--switch-thumb-size-xl": rem("28px"),

      "--switch-label-font-size-xs": rem("5px"),
      "--switch-label-font-size-sm": rem("6px"),
      "--switch-label-font-size-md": rem("7px"),
      "--switch-label-font-size-lg": rem("9px"),
      "--switch-label-font-size-xl": rem("11px"),

      "--switch-track-label-padding-xs": rem("1px"),
      "--switch-track-label-padding-sm": rem("2px"),
      "--switch-track-label-padding-md": rem("2px"),
      "--switch-track-label-padding-lg": rem("3px"),
      "--switch-track-label-padding-xl": rem("3px"),

      position: "relative",
    },

    ".switch-input": {
      height: 0,
      width: 0,
      opacity: 0,
      margin: 0,
      padding: 0,
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },

    ".switch-track": {
      "-webkit-tap-highlight-color": "transparent",
      cursor: "var(--_switch-cursor, var(--raikou-cursor-type))",
      overflow: "hidden",
      position: "relative",
      borderRadius: "var(--switch-radius)",
      backgroundColor: "var(--_switch-bg)",
      border: `rem(1px) solid var(--_switch-bd)`,
      height: "var(--switch-height)",
      minWidth: "var(--switch-width)",
      margin: 0,
      transition: "background-color 150ms ease, border-color 150ms ease",
      appearance: "none",
      display: "flex",
      alignItems: "center",
      fontSize: "var(--switch-label-font-size)",
      fontWeight: 600,
      order: "var(--_switch-order, 1)",
      userSelect: "none",
      zIndex: 0,
      lineHeight: 0,
      color: "var(--_switch-color)",

      ".input:focus-visible + &": {
        outline: `rem(2px) solid var(--raikou-color-primary)`,
        outlineOffset: rem("2px"),
      },

      ".input:checked + &": {
        "--_switch-bg": "var(--switch-color)",
        "--_switch-bd": "var(--switch-color)",
        "--_switch-color": "var(--raikou-color-white)",
      },

      ".input:disabled + &, .input[data-disabled] + &": {
        "--_switch-bg": "var(--_switch-disabled-color)",
        "--_switch-bd": "var(--_switch-disabled-color)",
        "--_switch-cursor": "not-allowed",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_switch-bg": "var(--raikou-color-gray-2)",
        "--_switch-bd": "var(--raikou-color-gray-3)",
        "--_switch-color": "var(--raikou-color-gray-6)",
        "--_switch-disabled-color": "var(--raikou-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_switch-bg": "var(--raikou-color-dark-6)",
        "--_switch-bd": "var(--raikou-color-dark-4)",
        "--_switch-color": "var(--raikou-color-dark-1)",
        "--_switch-disabled-color": "var(--raikou-color-dark-4)",
      },

      "&[data-error]": {
        "--_switch-bd": "var(--raikou-color-error)",
      },

      "&[data-label-position='left']": {
        "--_switch-order": 2,
      },
    },

    ".switch-thumb": {
      position: "absolute",
      zIndex: 1,
      borderRadius: "var(--switch-radius)",
      display: "flex",
      backgroundColor: "var(--_switch-thumb-bg, var(--raikou-color-white))",
      height: "var(--switch-thumb-size)",
      width: "var(--switch-thumb-size)",
      border: `rem(1px) solid var(--_switch-thumb-bd)`,
      left: "var(--_switch-thumb-left, var(--switch-track-label-padding))",
      transition: "left 150ms ease",

      "& > *": {
        margin: "auto",
      },

      ".input:checked + * > &": {
        "--_switch-thumb-left":
          "calc(100% - var(--switch-thumb-size) - var(--switch-track-label-padding))",
        "--_switch-thumb-bd": "var(--raikou-color-white)",
      },

      ".input:disabled + * > &, .input[data-disabled] + * > &": {
        "--_switch-thumb-bd": "var(--_switch-thumb-bg-disabled)",
        "--_switch-thumb-bg": "var(--_switch-thumb-bg-disabled)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_switch-thumb-bd": "var(--raikou-color-gray-3)",
        "--_switch-thumb-bg-disabled": "var(--raikou-color-gray-0)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_switch-thumb-bd": "var(--raikou-color-white)",
        "--_switch-thumb-bg-disabled": "var(--raikou-color-dark-3)",
      },
    },

    ".switch-trackLabel": {
      height: "100%",
      display: "grid",
      placeContent: "center",
      minWidth: "calc(var(--switch-width) - var(--switch-thumb-size))",
      paddingInline: "var(--switch-track-label-padding)",
      margin:
        "0 0 0 calc(var(--switch-thumb-size) + var(--switch-track-label-padding))",
      transition: "margin 150ms ease",

      ".input:checked + * > &": {
        margin:
          "0 calc(var(--switch-thumb-size) + var(--switch-track-label-padding)) 0 0",
      },
    },
  });
};
