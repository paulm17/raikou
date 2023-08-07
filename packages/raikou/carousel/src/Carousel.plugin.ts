import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".carousel-root": {
      position: "relative",
    },

    ".carousel-viewport": {
      height: "var(--carousel-height, auto)",
      overflow: "hidden",
    },

    ".carousel-container": {
      display: "flex",
      flexDirection: "var(--_container-direction, row)",
      height: "var(--carousel-height, auto)",
      marginRight: "var(--_container-mr)",
      marginLeft: "var(--_container-ml)",
      marginBottom: "var(--_container-mb)",

      "[data-include-gap-in-size] &": {
        '&[data-orientation="vertical"]': {
          "--_container-mb": "calc(var(--carousel-slide-gap) * -1)",
        },

        '&[data-orientation="horizontal"]': {
          "--_container-mr": "calc(var(--carousel-slide-gap) * -1)",

          '[dir="rtl"] &': {
            "--_container-ml": "calc(var(--carousel-slide-gap) * -1)",
            "--_container-mr": "0",
          },
        },
      },

      '&[data-orientation="vertical"]': {
        "--_container-direction": "column",
      },
    },

    ".carousel-controls": {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: "1",
      pointerEvents: "none",
      flexDirection: "var(--_controls-direction)",
      left: "var(--_controls-left)",
      right: "var(--_controls-right)",
      top: "var(--_controls-top)",
      bottom: "var(--_controls-bottom)",
      padding: "var(--_controls-padding)",

      '.carousel-root[data-orientation="vertical"] &': {
        "--_controls-left": "calc(50% - var(--carousel-control-size) / 2)",
        "--_controls-top": "0",
        "--_controls-bottom": "0",
        "--_controls-direction": "column",
        "--_controls-padding": "var(--carousel-controls-offset) 0",
      },

      '.carousel-root[data-orientation="horizontal"] &': {
        "--_controls-left": "0",
        "--_controls-right": "0",
        "--_controls-top": "calc(50% - var(--carousel-control-size) / 2)",
        "--_controls-direction": "row",
        "--_controls-padding": "0 var(--carousel-controls-offset)",
      },
    },

    ".carousel-control": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "var(--carousel-control-size)",
      minHeight: "var(--carousel-control-size)",
      borderRadius: "var(--carousel-control-size)",
      pointerEvents: "all",
      backgroundColor: "var(--raikou-color-white)",
      color: "var(--raikou-color-black)",
      boxShadow: "var(--raikou-shadow-md)",
      opacity: "var(--_control-opacity)",
      border: `${rem("1px")} solid var(--raikou-color-gray-3)`,
      transition: "opacity 100ms ease",

      '[data-raikou-color-scheme="light"] &': {
        "--_control-opacity": "0.85",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-opacity": "0.65",
      },

      "@media (hover: hover)": {
        "&:hover": {
          "--_control-opacity": "1",
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "--_control-opacity": "1",
        },
      },
    },

    ".carousel-indicators": {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      gap: rem("8px"),
      pointerEvents: "none",
      flexDirection: "var(--_indicators-direction)",
      bottom: "var(--_indicators-bottom)",
      left: "var(--_indicators-left)",
      right: "var(--_indicators-right)",
      top: "var(--_indicators-top)",

      '.carousel-root[data-orientation="vertical"] &': {
        "--_indicators-bottom": "0",
        "--_indicators-top": "0",
        "--_indicators-right": "var(--raikou-spacing-md)",
        "--_indicators-direction": "column",
      },

      '.carousel-root[data-orientation="horizontal"] &': {
        "--_indicators-bottom": "var(--raikou-spacing-md)",
        "--_indicators-left": "0",
        "--_indicators-right": "0",
        "--_indicators-direction": "row",
      },
    },

    ".carousel-indicator": {
      pointerEvents: "all",
      width: "var(--_indicator-width)",
      height: "var(--_indicator-height)",
      borderRadius: "var(--raikou-radius-xl)",
      boxShadow: "var(--raikou-shadow-sm)",
      opacity: "var(--_indicator-opacity, 0.6)",
      backgroundColor: "var(--raikou-color-white)",

      "@media (hover: hover)": {
        "&:hover": {
          "--_text-decoration": "underline",
          "--_indicator-opacity": "1",
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "--_text-decoration": "underline",
          "--_indicator-opacity": "1",
        },
      },

      "&[data-active]": {
        "--_indicator-opacity": "1",
      },

      '.carousel-root[data-orientation="vertical"] &': {
        "--_indicator-width": rem("5px"),
        "--_indicator-height": rem("25px"),
      },

      '.carousel-root[data-orientation="horizontal"] &': {
        "--_indicator-width": rem("25px"),
        "--_indicator-height": rem("5px"),
      },
    },

    ".carousel-slide": {
      position: "relative",
      flex: "0 0 var(--carousel-slide-size)",
      paddingRight: "var(--_slide-pr, 0)",
      paddingLeft: "var(--_slide-pl, 0)",
      paddingBottom: "var(--_slide-pb, 0)",
      marginRight: "var(--_slide-mr, 0)",
      marginLeft: "var(--_slide-ml, 0)",
      marginBottom: "var(--_slide-mb, 0)",

      ".carousel-root[data-include-gap-in-size] &": {
        '&[data-orientation="vertical"]': {
          "--_slide-pb": "var(--carousel-slide-gap)",
        },

        '&[data-orientation="horizontal"]': {
          "--_slide-pr": "var(--carousel-slide-gap)",

          '[dir="rtl"] &': {
            "--_slide-pl": "var(--carousel-slide-gap)",
            "--_slide-pr": "0",
          },
        },
      },

      ".carousel-root:not([data-include-gap-in-size]) &": {
        '&[data-orientation="vertical"]': {
          "--_slide-mb": "var(--carousel-slide-gap)",
        },

        '&[data-orientation="horizontal"]': {
          "--_slide-mr": "var(--carousel-slide-gap)",

          '[dir="rtl"] &': {
            "--_slide-ml": "var(--carousel-slide-gap)",
            "--_slide-mr": "0",
          },
        },
      },
    },
  });
};
