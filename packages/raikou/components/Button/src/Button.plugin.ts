import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".button-root.button-root": {
      "--button-height-xs": rem("30px"),
      "--button-height-sm": rem("36px"),
      "--button-height-md": rem("42px"),
      "--button-height-lg": rem("50px"),
      "--button-height-xl": rem("60px"),

      "--button-height-compact-xs": rem("22px"),
      "--button-height-compact-sm": rem("26px"),
      "--button-height-compact-md": rem("30px"),
      "--button-height-compact-lg": rem("34px"),
      "--button-height-compact-xl": rem("40px"),

      "--button-padding-x-xs": rem("14px"),
      "--button-padding-x-sm": rem("18px"),
      "--button-padding-x-md": rem("22px"),
      "--button-padding-x-lg": rem("26px"),
      "--button-padding-x-xl": rem("32px"),

      "--button-padding-x-compact-xs": rem("7px"),
      "--button-padding-x-compact-sm": rem("8px"),
      "--button-padding-x-compact-md": rem("10px"),
      "--button-padding-x-compact-lg": rem("12px"),
      "--button-padding-x-compact-xl": rem("14px"),

      userSelect: "none",
      fontWeight: "600",
      position: "relative",
      lineHeight: "1",
      textAlign: "center",

      width: "var(--_button-width, auto)",
      cursor: "var(--_button-cursor, pointer)",
      display: "var(--_button-display, inline-block)",
      borderRadius: "var(--button-radius)",
      fontSize: "var(--button-fz)",
      background: "var(--_button-bg, var(--button-bg))",
      border: "var(--_button-bd, var(--button-bd))",
      color: "var(--_button-color, var(--button-color))",
      height: "var(--button-height)",
      paddingLeft: "var(--_button-padding-left, var(--button-padding-x))",
      paddingRight: "var(--_button-padding-right, var(--button-padding-x))",

      "&[data-block]": {
        "--_button-display": "block",
        "--_button-width": "100%",
      },

      "&[data-with-left-section]": {
        "--_button-padding-left": "calc(var(--button-padding-x) / 1.5)",

        '[dir="rtl"] &': {
          "--_button-padding-left": "var(--button-padding-x)",
          "--_button-padding-right": "calc(var(--button-padding-x) / 1.5)",
        },
      },

      "&[data-with-right-section]": {
        "--_button-padding-right": "calc(var(--button-padding-x) / 1.5)",

        '[dir="rtl"] &': {
          "--_button-padding-right": "var(--button-padding-x)",
          "--_button-padding-left": "calc(var(--button-padding-x) / 1.5)",
        },
      },

      "&:disabled:not([data-loading]), &[data-disabled]:not([data-loading])": {
        "--_button-cursor": "not-allowed",
        "--_button-bg": "var(--_disabled-bg)",
        "--_button-color": "var(--_disabled-color)",
        transform: "none",
      },

      "&[data-loading]": {
        "--_button-cursor": "not-allowed",
        transform: "none",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: rem("-1px"),
          borderRadius: "var(--button-radius)",
          backgroundColor: "var(--_button-loading-overlay-bg)",
        },
      },

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-loading]):not(:disabled):not([data-disabled])": {
            "--_button-bg": "var(--button-hover)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-loading]):not(:disabled):not([data-disabled])": {
            "--_button-bg": "var(--button-hover)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_disabled-color": "var(--raikou-button-disabled-color)",
        "--_disabled-bg": "var(--raikou-button-disabled-bg)",
        "--_button-loading-overlay-bg":
          "var(--raikou-button-loading-overlay-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_disabled-color": "var(--raikou-button-disabled-color)",
        "--_disabled-bg": "var(--raikou-button-disabled-bg)",
        "--_button-loading-overlay-bg":
          "var(--raikou-button-loading-overlay-bg)",
      },
    },

    ".button-inner": {
      display: "flex",
      alignItems: "center",
      justifyContent: "var(--button-justify, center)",
      height: "100%",
      overflow: "visible",
    },

    ".button-label": {
      whiteSpace: "nowrap",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      opacity: "var(--_button-label-opacity, 1)",

      "&[data-loading]": {
        "--_button-label-opacity": "0.2",
      },
    },

    ".button-section": {
      display: "flex",
      alignItems: "center",
      marginRight: "var(--_button-section-margin-right)",
      marginLeft: "var(--_button-section-margin-left)",

      '&[data-position="left"]': {
        "--_button-section-margin-right": "var(--raikou-spacing-xs)",

        '[dir="rtl"] &': {
          "--_button-section-margin-right": "0",
          "--_button-section-margin-left": "var(--raikou-spacing-xs)",
        },
      },

      '&[data-position="right"]': {
        "--_button-section-margin-left": "var(--raikou-spacing-xs)",

        '[dir="rtl"] &': {
          "--_button-section-margin-left": "0",
          "--_button-section-margin-right": "var(--raikou-spacing-xs)",
        },
      },
    },

    ".button-loader": {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },

    ".buttonGroup-root": {
      display: "flex",

      '&[data-orientation="horizontal"]': {
        flexDirection: "row",

        "& [data-button]": {
          "&:not(:only-child):first-child": {
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
            borderRightWidth: "calc(var(--button-border-width) / 2)",
          },

          "&:not(:only-child):last-child": {
            borderBottomLeftRadius: "0",
            borderTopLeftRadius: "0",
            borderLeftWidth: "calc(var(--button-border-width) / 2)",
          },

          "&:not(:only-child):not(:first-child):not(:last-child)": {
            borderRadius: "0",
            borderRightWidth: "calc(var(--button-border-width) / 2)",
            borderLeftWidth: "calc(var(--button-border-width) / 2)",
          },
        },
      },

      '&[data-orientation="vertical"]': {
        flexDirection: "column",

        "& [data-button]": {
          "&:not(:only-child):first-child": {
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            borderBottomWidth: "calc(var(--button-border-width) / 2)",
          },

          "&:not(:only-child):last-child": {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderTopWidth: "calc(var(--button-border-width) / 2)",
          },

          "&:not(:only-child):not(:first-child):not(:last-child)": {
            borderRadius: "0",
            borderBottomWidth: "calc(var(--button-border-width) / 2)",
            borderTopWidth: "calc(var(--button-border-width) / 2)",
          },
        },
      },
    },
  });
};
