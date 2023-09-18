import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".colorPicker-wrapper": {
      "--cp-width-xs": rem("180px"),
      "--cp-width-sm": rem("200px"),
      "--cp-width-md": rem("240px"),
      "--cp-width-lg": rem("280px"),
      "--cp-width-xl": rem("320px"),

      "--cp-preview-size-xs": rem("26px"),
      "--cp-preview-size-sm": rem("34px"),
      "--cp-preview-size-md": rem("42px"),
      "--cp-preview-size-lg": rem("50px"),
      "--cp-preview-size-xl": rem("54px"),

      "--cp-thumb-size-xs": rem("8px"),
      "--cp-thumb-size-sm": rem("12px"),
      "--cp-thumb-size-md": rem("16px"),
      "--cp-thumb-size-lg": rem("20px"),
      "--cp-thumb-size-xl": rem("22px"),

      "--cp-saturation-height-xs": rem("100px"),
      "--cp-saturation-height-sm": rem("110px"),
      "--cp-saturation-height-md": rem("120px"),
      "--cp-saturation-height-lg": rem("140px"),
      "--cp-saturation-height-xl": rem("160px"),

      "--cp-preview-size": "var(--cp-preview-size-sm)",
      "--cp-thumb-size": "var(--cp-thumb-size-sm)",
      "--cp-saturation-height": "var(--cp-saturation-height-sm)",
      "--cp-width": "var(--cp-width-sm)",
      "--cp-body-spacing": "var(--raikou-spacing-sm)",

      width: "var(--_cp-width, var(--cp-width))",
      padding: rem("1px"),

      "&[data-full-width]": {
        "--_cp-width": "100%",
      },
    },

    ".colorPicker-preview": {
      width: "var(--cp-preview-size)",
      height: "var(--cp-preview-size)",
    },

    ".colorPicker-body": {
      display: "flex",
      paddingTop: "calc(var(--cp-body-spacing) / 2)",
    },

    ".colorPicker-sliders": {
      flex: "1",

      "&:not(:only-child)": {
        marginRight: "var(--raikou-spacing-xs)",
      },
    },

    ".colorPicker-thumb": {
      overflow: "hidden",
      position: "absolute",
      boxShadow: `0 0 ${rem("1px")} rgba(0, 0, 0, 0.6)`,
      border: `${rem("2px")} solid var(--raikou-color-white)`,
      width: "var(--cp-thumb-size)",
      height: "var(--cp-thumb-size)",
      borderRadius: "var(--cp-thumb-size)",
      outline: "var(--_outline)",
      left: "calc(var(--_thumb-x-offset) - var(--cp-thumb-size) / 2)",
      top: "calc(var(--_thumb-y-offset) - var(--cp-thumb-size) / 2)",
    },

    /* Duplicate class to increase specificity */
    ".colorPicker-swatch.colorPicker-swatch": {
      height: "0",
      margin: rem("2px"),
      cursor: "pointer",
      paddingBottom: `calc(var(--cp-swatch-size) - ${rem("4px")})`,
      minWidth: "0",
      minHeight: "0",
      flex: `1 0 calc(var(--cp-swatch-size) - ${rem("4px")})`,
    },

    ".colorPicker-swatches": {
      marginTop: rem("5px"),
      marginLeft: rem("-2px"),
      marginRight: rem("-2px"),
      display: "flex",
      flexWrap: "wrap",
    },

    ".colorPicker-saturation": {
      "-webkit-tap-highlight-color": "transparent",
      position: "relative",
      height: "var(--cp-saturation-height)",
      borderRadius: "var(--raikou-radius-sm)",
      margin: "calc(var(--cp-thumb-size) / 2)",

      "&[data-focus-ring='auto']": {
        "&:focus:focus-visible": {
          "& .thumb": {
            "--_outline": `${rem("2px")} solid var(--raikou-color-blue-filled)`,
          },
        },
      },

      "&[data-focus-ring='always']": {
        "&:focus": {
          "& .thumb": {
            "--_outline": `${rem("2px")} solid var(--raikou-color-blue-filled)`,
          },
        },
      },
    },

    ".colorPicker-saturationOverlay": {
      position: "absolute",
      borderRadius: "var(--raikou-radius-sm)",
      inset: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem("1px")})`,
    },

    ".colorPicker-slider": {
      position: "relative",
      height: ` calc(var(--cp-thumb-size) + ${rem("2px")})`,
      marginLeft: "calc(var(--cp-thumb-size) / 2)",
      marginRight: "calc(var(--cp-thumb-size) / 2)",
      outline: "none",

      "& + &": {
        marginTop: rem("6px"),
      },

      "&[data-focus-ring='auto']": {
        "&:focus:focus-visible": {
          "& .thumb": {
            "--_outline": `${rem("2px")} solid var(--raikou-color-blue-filled)`,
          },
        },
      },

      "&[data-focus-ring='always']": {
        "&:focus": {
          "& .thumb": {
            "--_outline": `${rem("2px")} solid var(--raikou-color-blue-filled)`,
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_slider-checkers": "var(--raikou-colorpicker-slider-checkers)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_slider-checkers": "var(--raikou-colorpicker-slider-checkers)",
      },
    },

    ".colorPicker-sliderOverlay": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem("1px")})`,
      right: `calc(var(--cp-thumb-size) * -1 / 2 - ${rem("1px")})`,
      borderRadius: "10000rem",
    },
  });
};
