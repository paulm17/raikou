import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".segmentedControl-root": {
      "--sc-padding-xs": `${rem("3px")} ${rem("6px")}`,
      "--sc-padding-sm": `${rem("5px")} ${rem("10px")}`,
      "--sc-padding-md": `${rem("7px")} ${rem("14px")}`,
      "--sc-padding-lg": `${rem("9px")} ${rem("16px")}`,
      "--sc-padding-xl": `${rem("12px")} ${rem("20px")}`,

      "--sc-transition-duration": "200ms",
      "--sc-padding": "var(--sc-padding-sm)",
      "--sc-transition-timing-function": "ease",
      "--sc-font-size": "var(--raikou-font-size-sm)",

      position: "relative",
      display: "var(--_display, inline-flex)",
      flexDirection: "var(--_flex-direction, row)",
      width: "var(--_width, auto)",
      backgroundColor: "var(--_bg)",
      borderRadius: "var(--sc-radius, var(--raikou-radius-default))",
      overflow: "hidden",
      padding: "4px" /* px required for correct indicator calculations */,

      "&[data-full-width]": {
        "--_display": "flex",
      },

      "&[data-orientation='vertical']": {
        "--_display": "flex",
        "--_flex-direction": "column",
        "--_width": "max-content",

        "&[data-full-width]": {
          "--_width": "auto",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_bg": "var(--raikou-segmentedcontrol-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bg": "var(--raikou-segmentedcontrol-bg)",
      },
    },

    ".segmentedControl-indicator": {
      position: "absolute",
      display: "block",
      zIndex: "1",
      borderRadius: "var(--sc-radius, var(--raikou-radius-default))",
      boxShadow: "var(--_box-shadow)",
      width: "var(--sc-indicator-width)",
      height: "var(--sc-indicator-height)",
      transform: "var(--sc-indicator-transform)",
      transition:
        "transform var(--sc-transition-duration) var(--sc-transition-timing-function), width var(--sc-transition-duration) var(--sc-transition-timing-function)",
      backgroundColor: "var(--_bg)",

      '[data-raikou-color-scheme="light"] &': {
        "--_box-shadow": "var(--sc-shadow, none)",
        "--_bg": "var(--sc-color, var(--raikou-segmentedcontrol-indicator-bg))",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_box-shadow": "none",
        "--_bg": "var(--sc-color, var(--raikou-segmentedcontrol-indicator-bg))",
      },
    },

    ".segmentedControl-label": {
      "-webkit-tap-highlight-color": "transparent",
      fontWeight: "500",
      display: "block",
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      userSelect: "none",
      borderRadius: "var(--sc-radius, var(--raikou-radius-default))",
      fontSize: "var(--sc-font-size)",
      padding: "var(--sc-padding)",
      transition:
        "color var(--sc-transition-duration) var(--sc-transition-timing-function)",
      cursor: "var(--_cursor, pointer)",
      color: "var(--_color)",

      /* outline is controlled by .input */
      outline: "var(--_outline, none)",

      "fieldset:disabled &, &[data-disabled]": {
        "--_cursor": "not-allowed",

        '[data-raikou-color-scheme="light"] &': {
          "--_color": "var(--raikou-segmentedcontrol-disabled-color)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_color": "var(--raikou-segmentedcontrol-disabled-color)",
        },
      },

      "&[data-active]": {
        '[data-raikou-color-scheme="light"] &': {
          "--_color":
            "var(--sc-label-color, var(--raikou-segmentedcontrol-active-color))",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_color":
            "var(--sc-label-color, var(--raikou-segmentedcontrol-active-color))",
        },
      },

      "&:not([data-disabled]):not([data-active])": {
        "@media (hover: hover)": {
          "&:hover": {
            '[data-raikou-color-scheme="light"] &': {
              "--_color": "var(--raikou-segmentedcontrol-hover-color)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_color": "var(--raikou-segmentedcontrol-hover-color)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            '[data-raikou-color-scheme="light"] &': {
              "--_color": "var(--raikou-segmentedcontrol-active-color)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_color": "var(--raikou-segmentedcontrol-active-color)",
            },
          },
        },
      },

      "fieldset:disabled &": {
        "@media (hover: hover)": {
          "&:hover": {
            '[data-raikou-color-scheme="light"] &': {
              "--_color":
                "var(--raikou-segmentedcontrol-disabled-color) !important",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_color":
                "var(--raikou-segmentedcontrol-disabled-color) !important",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            '[data-raikou-color-scheme="light"] &': {
              "--_color":
                "var(--raikou-segmentedcontrol-disabled-color) !important",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_color":
                "var(--raikou-segmentedcontrol-disabled-color) !important",
            },
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_color": "var(--raikou-segmentedcontrol-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_color": "var(--raikou-segmentedcontrol-color)",
      },
    },

    ".segmentedControl-input": {
      height: "0",
      width: "0",
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
      opacity: "0",

      "&[data-focus-ring='auto']": {
        "&:focus:focus-visible": {
          "& + .label": {
            "--_outline": `${rem(
              "2px",
            )} solid var(--raikou-segmentedcontrol-ring-outline)`,
          },
        },
      },

      "&[data-focus-ring='always']": {
        "&:focus": {
          "& + .label": {
            "--_outline": `${rem(
              "2px",
            )} solid var(--raikou-segmentedcontrol-ring-outline)`,
          },
        },
      },
    },

    ".segmentedControl-control": {
      position: "relative",
      flex: "1",
      zIndex: "2",
      transition:
        "border-color var(--sc-transition-duration) var(--sc-transition-timing-function)",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        backgroundColor: "var(--_separator-color)",
        width: rem("1px"),
        transition:
          "background-color var(--sc-transition-duration) var(--sc-transition-timing-function)",

        '[dir="rtl"] &': {
          right: "0",
          left: "auto",
        },
      },

      "&[data-orientation='vertical']": {
        "&::before": {
          top: "0",
          left: "0",
          right: "0",
          bottom: "auto",
          height: rem("1px"),
          width: "auto",
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_separator-color": "var(--raikou-segmentedcontrol-separator-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_separator-color": "var(--raikou-segmentedcontrol-separator-color)",
      },

      "&:first-of-type": {
        "&::before": {
          "--_separator-color": "transparent",
        },
      },

      "&[data-active]": {
        "[data-raikou-color-scheme] &": {
          "&, & + .segmentedControl-control": {
            "&::before": {
              "--_separator-color": "transparent",
            },
          },
        },
      },
    },
  });
};
