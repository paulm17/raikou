import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-pickerControl": {
      "--dpc-size-xs": rem("30px"),
      "--dpc-size-sm": rem("36px"),
      "--dpc-size-md": rem("42px"),
      "--dpc-size-lg": rem("48px"),
      "--dpc-size-xl": rem("54px"),

      fontSize: "var(--dpc-fz)",
      height: "var(--dpc-size)",
      width: `calc((var(--dpc-size) * 7) / 3 + ${rem("1.5px")})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
      cursor: "var(--_control-cursor, pointer)",
      backgroundColor: "var(--_control-bg, transparent)",
      color: "var(--_control-color, var(--raikou-color-text))",
      opacity: "var(--_control-opacity, 1)",
      borderRadius: "var(--_control-radius, var(--raikou-radius-default))",

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg": "var(--raikou-calendar-picker-control-hover-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg": "var(--raikou-calendar-picker-control-hover-bg)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_control-bg":
                "var(--raikou-calendar-picker-control-active-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_control-bg":
                "var(--raikou-calendar-picker-control-active-bg)",
            },
          },
        },
      },

      "&:disabled, &[data-disabled]": {
        "--_control-color": "var(--raikou-color-dimmed)",
        "--_control-cursor": "not-allowed",
        "--_control-opacity": "0.5",
      },

      "&[data-selected]": {
        "--_control-bg": "var(--raikou-primary-color-filled)",
        "--_control-color": "var(--raikou-color-white)",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &": {
              "--_control-bg": "var(--raikou-primary-color-filled-hover)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &": {
              "--_control-bg": "var(--raikou-primary-color-filled-hover)",
            },
          },
        },
      },

      "&[data-in-range]": {
        "--_control-bg": "var(--raikou-primary-color-light-hover)",
        "--_control-radius": "0",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &": {
              "--_control-bg": "var(--raikou-primary-color-light)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &": {
              "--_control-bg": "var(--raikou-primary-color-light)",
            },
          },
        },
      },

      "&[data-first-in-range]": {
        "--_control-radius":
          "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",

        '[dir="rtl"] &': {
          "--_control-radius":
            "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",
        },
      },

      "&[data-last-in-range]": {
        "--_control-radius":
          "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",

        '[dir="rtl"] &': {
          "--_control-radius":
            "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",
        },
      },

      "&[data-first-in-range][data-last-in-range]": {
        "--_control-radius": "var(--raikou-radius-default)",
      },
    },
  });
};
