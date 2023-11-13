import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".gradientPicker-wrapper": {
      "--gp-width-xs": rem("180px"),
      "--gp-width-sm": rem("200px"),
      "--gp-width-md": rem("240px"),
      "--gp-width-lg": rem("280px"),
      "--gp-width-xl": rem("320px"),

      "--gp-preview-size-xs": rem("26px"),
      "--gp-preview-size-sm": rem("34px"),
      "--gp-preview-size-md": rem("42px"),
      "--gp-preview-size-lg": rem("50px"),
      "--gp-preview-size-xl": rem("54px"),

      "--gp-thumb-size-xs": rem("8px"),
      "--gp-thumb-size-sm": rem("12px"),
      "--gp-thumb-size-md": rem("16px"),
      "--gp-thumb-size-lg": rem("20px"),
      "--gp-thumb-size-xl": rem("22px"),

      "--gp-saturation-height-xs": rem("100px"),
      "--gp-saturation-height-sm": rem("110px"),
      "--gp-saturation-height-md": rem("120px"),
      "--gp-saturation-height-lg": rem("140px"),
      "--gp-saturation-height-xl": rem("160px"),

      "--gp-preview-size": "var(--gp-preview-size-sm)",
      "--gp-thumb-size": "var(--gp-thumb-size-sm)",
      "--gp-saturation-height": "var(--gp-saturation-height-sm)",
      "--gp-width": "var(--gp-width-sm)",
      "--gp-body-spacing": "var(--raikou-spacing-sm)",

      width: "var(--_gp-width, var(--gp-width))",
      padding: rem("1px"),

      "&[data-full-width]": {
        "--_gp-width": "100%",
      },
    },

    ".gradientPicker-preview": {
      width: "var(--gp-preview-size)",
      height: "var(--gp-preview-size)",
    },

    ".gradientPicker-body": {
      display: "flex",
      paddingTop: "calc(var(--gp-body-spacing) / 2)",
    },

    ".gradientPicker-sliders": {
      flex: "1",

      "&:not(:only-child)": {
        marginRight: "var(--raikou-spacing-xs)",
      },
    },

    ".gradientPicker-thumb": {
      overflow: "hidden",
      position: "absolute",
      boxShadow: `0 0 ${rem("1px")} rgba(0, 0, 0, 0.6)`,
      border: `${rem("2px")} solid var(--raikou-color-white)`,
      width: "var(--gp-thumb-size)",
      height: "var(--gp-thumb-size)",
      borderRadius: "var(--gp-thumb-size)",
      outline: "var(--_outline)",
      left: "calc(var(--_thumb-x-offset) - var(--gp-thumb-size) / 2)",
      top: "calc(var(--_thumb-y-offset) - var(--gp-thumb-size) / 2)",
    },

    /* Duplicate class to increase specificity */
    ".gradientPicker-swatch.gradientPicker-swatch": {
      height: "0",
      margin: rem("2px"),
      cursor: "pointer",
      paddingBottom: `calc(var(--gp-swatch-size) - ${rem("4px")})`,
      minWidth: "0",
      minHeight: "0",
      flex: `1 0 calc(var(--gp-swatch-size) - ${rem("4px")})`,
    },

    ".gradientPicker-swatches": {
      marginTop: rem("5px"),
      marginLeft: rem("-2px"),
      marginRight: rem("-2px"),
      display: "flex",
      flexWrap: "wrap",
    },

    ".gradientPicker-saturation": {
      "-webkit-tap-highlight-color": "transparent",
      position: "relative",
      height: "var(--gp-saturation-height)",
      borderRadius: "var(--raikou-radius-sm)",
      margin: "calc(var(--gp-thumb-size) / 2)",

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

    ".gradientPicker-saturationOverlay": {
      position: "absolute",
      borderRadius: "var(--raikou-radius-sm)",
      inset: `calc(var(--gp-thumb-size) * -1 / 2 - ${rem("1px")})`,
    },

    ".gradientPicker-slider": {
      position: "relative",
      height: ` calc(var(--gp-thumb-size) + ${rem("2px")})`,
      marginLeft: "calc(var(--gp-thumb-size) / 2)",
      marginRight: "calc(var(--gp-thumb-size) / 2)",
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

    ".gradientPicker-sliderOverlay": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: `calc(var(--gp-thumb-size) * -1 / 2 - ${rem("1px")})`,
      right: `calc(var(--gp-thumb-size) * -1 / 2 - ${rem("1px")})`,
      borderRadius: "10000rem",
    },
  });
};
