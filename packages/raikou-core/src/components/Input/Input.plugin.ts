import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".input-wrapper": {
      position: "relative",
      marginTop: "var(--input-margin-top, 0rem)",
      marginBottom: "var(--input-margin-bottom, 0rem)",

      "--input-height-xs": rem("30px"),
      "--input-height-sm": rem("36px"),
      "--input-height-md": rem("42px"),
      "--input-height-lg": rem("50px"),
      "--input-height-xl": rem("60px"),

      "--input-padding-y-xs": rem("5px"),
      "--input-padding-y-sm": rem("6px"),
      "--input-padding-y-md": rem("8px"),
      "--input-padding-y-lg": rem("10px"),
      "--input-padding-y-xl": rem("13px"),

      "--_input-cursor": "text",
      "--_input-text-align": "left",
      "--_input-line-height": `calc(var(--input-height) - rem(2px))`,
      "--_input-padding": "calc(var(--input-height) / 3)",
      "--_input-padding-left": "var(--_input-padding)",
      "--_input-padding-right": "var(--_input-padding)",
      "--_input-placeholder-color": "var(--raikou-color-placeholder)",
      "--_input-color": "inherit",
      "--_input-left-section-size": `var(--input-left-section-width, calc(var(--input-height) - rem(2px)))`,
      "--_input-right-section-size": `var(--input-right-section-width, calc(var(--input-height) - rem(2px)))`,
      "--_input-size": "var(--input-height)",

      "--_section-y": rem("1px"),
      "--_left-section-left": rem("1px"),
      "--_left-section-right": "unset",
      "--_left-section-border-radius":
        "var(--input-radius) 0 0 var(--input-radius)",

      "--_right-section-left": "unset",
      "--_right-section-right": rem("1px"),
      "--_right-section-border-radius":
        "0 var(--input-radius) var(--input-radius) 0",

      "&[data-pointer]": {
        "--_input-cursor": "pointer",
      },

      "&[data-multiline]": {
        "--_input-size": "auto",
        "--_input-line-height": "var(--raikou-line-height)",
      },

      "&[data-variant='unstyled']": {
        "--input-padding": 0,
        "--input-padding-y": 0,
      },

      "&[data-with-left-section]": {
        "--_input-padding-left": "var(--_input-left-section-size)",

        '[dir="rtl"] &': {
          "--_input-padding-right": "var(--_input-left-section-size)",
        },
      },

      "&[data-with-right-section]": {
        "--_input-padding-right": "var(--_input-right-section-size)",

        '[dir="rtl"] &': {
          "--_input-padding-left": "var(--_input-right-section-size)",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_input-disabled-bg": "var(--raikou-color-gray-1)",
        "--_input-disabled-color": "var(--raikou-color-gray-6)",

        "&[data-variant='default']": {
          "--_input-bd": "var(--raikou-color-gray-4)",
          "--_input-bg": "var(--raikou-color-white)",
          "--_input-bd-focus": "var(--raikou-color-primary)",
        },

        "&[data-variant='filled']": {
          "--_input-bd": "transparent",
          "--_input-bg": "var(--raikou-color-gray-1)",
          "--_input-bd-focus": "var(--raikou-color-primary)",
        },

        "&[data-variant='unstyled']": {
          "--_input-bd": "transparent",
          "--_input-bg": "transparent",
          "--_input-bd-focus": "transparent",
        },
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_input-disabled-bg": "var(--raikou-color-dark-6)",
        "--_input-disabled-color": "var(--raikou-color-dark-2)",

        "&[data-variant='default']": {
          "--_input-bd": "var(--raikou-color-dark-4)",
          "--_input-bg": "var(--raikou-color-dark-6)",
          "--_input-bd-focus": "var(--raikou-color-primary)",
        },

        "&[data-variant='filled']": {
          "--_input-bd": "transparent",
          "--_input-bg": "var(--raikou-color-dark-5)",
          "--_input-bd-focus": "var(--raikou-color-primary)",
        },

        "&[data-variant='unstyled']": {
          "--_input-bd": "transparent",
          "--_input-bg": "transparent",
          "--_input-bd-focus": "transparent",
        },
      },

      "[data-raikou-color-scheme] &[data-error]": {
        "--_input-bd": "var(--raikou-color-error)",
        "--_input-color": "var(--raikou-color-error)",
        "--_input-placeholder-color": "var(--raikou-color-error)",
        "--_input-section-color": "var(--raikou-color-error)",
      },

      '[dir="rtl"] &': {
        "--_input-text-align": "right",
        "--_left-section-left": "unset",
        "--_left-section-right": rem("1px"),
        "--_left-section-border-radius":
          "0 var(--input-radius) var(--input-radius) 0",
        "--_right-section-left": rem("1px"),
        "--_right-section-right": "unset",
        "--_right-section-border-radius":
          "var(--input-radius) 0 0 var(--input-radius)",
      },
    },

    ".input-input": {
      "-webkit-tap-highlight-color": "transparent",
      appearance: "none",
      resize: "none",
      display: "block",
      width: "100%",
      transition: "border-color 100ms ease",

      textAlign: "var(--_input-text-align)",
      color: "var(--_input-color)",
      border: `rem(1px) solid var(--_input-bd)`,
      backgroundColor: "var(--_input-bg)",
      fontFamily: "var(--raikou-font-family)",
      height: "var(--_input-size)",
      minHeight: "var(--input-height)",
      lineHeight: "var(--_input-line-height)",
      fontSize: "var(--input-fz)",
      borderRadius: "var(--input-radius)",
      paddingLeft: "var(--_input-padding-left)",
      paddingRight: "var(--_input-padding-right)",
      paddingTop: `var(--input-padding-y, 0rem)`,
      paddingBottom: `var(--input-padding-y, 0rem)`,
      cursor: "var(--_input-cursor)",

      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "var(--_input-bd-focus)",
      },

      "&::placeholder": {
        color: "var(--_input-placeholder-color)",
        opacity: 1,
      },

      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
        {
          appearance: "none",
        },

      "&[type='number']": {
        "-moz-appearance": "textfield",
      },

      "&:has(input:disabled), &:disabled, &[data-disabled]": {
        cursor: "not-allowed",
        opacity: "0.6",
        backgroundColor: "var(--_input-disabled-bg)",
        color: "var(--_input-disabled-color)",
      },
    },

    ".input-section": {
      pointerEvents: "var(--_section-pointer-events)",
      position: "absolute",
      zIndex: 1,
      left: "var(--_section-left)",
      right: "var(--_section-right)",
      bottom: "var(--_section-y)",
      top: "var(--_section-y)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--_section-size)",
      borderRadius: "var(--_section-border-radius)",
      color: "var(--raikou-color-placeholder)",

      "&[data-position='right']": {
        "--_section-pointer-events":
          "var(--input-right-section-pointer-events)",
        "--_section-left": "var(--_right-section-left)",
        "--_section-right": "var(--_right-section-right)",
        "--_section-size": "var(--_input-right-section-size)",
        "--_section-border-radius": "var(--_right-section-border-radius)",
      },

      "&[data-position='left']": {
        "--_section-pointer-events": "var(--input-left-section-pointer-events)",
        "--_section-left": "var(--_left-section-left)",
        "--_section-right": "var(--_left-section-right)",
        "--_section-size": "var(--_input-left-section-size)",
        "--_section-border-radius": "var(--_left-section-border-radius)",
      },
    },

    ".input-placeholder": {
      color: "var(--raikou-color-placeholder)",
    },

    ".inputWrapper-root": {
      lineHeight: "var(--raikou-line-height)",
    },

    ".inputWrapper-label": {
      display: "inline-block",
      fontWeight: 500,
      wordBreak: "break-word",
      cursor: "default",
      "-webkit-tap-highlight-color": "transparent",

      fontSize: "var(--input-label-size)",
    },

    ".inputWrapper-required": {
      color: "var(--input-asterisk-color)",
    },

    ".inputWrapper-error, .inputWrapper-description": {
      wordWrap: "break-word",
      lineHeight: "1.2",
      display: "block",
      margin: 0,
      padding: 0,
    },

    ".inputWrapper-error": {
      color: "var(--raikou-color-error)",
      fontSize: "var(--input-error-size)",
    },

    ".inputWrapper-description": {
      color: "var(--raikou-color-dimmed)",
      fontSize: "var(--input-description-size)",
    },
  });
};
