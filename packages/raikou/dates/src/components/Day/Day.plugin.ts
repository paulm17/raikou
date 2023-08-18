import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-day": {
      "--day-size-xs": rem("30px"),
      "--day-size-sm": rem("36px"),
      "--day-size-md": rem("42px"),
      "--day-size-lg": rem("48px"),
      "--day-size-xl": rem("54px"),

      width: `var(--day-size, ${rem("36px")})`,
      height: `var(--day-size, ${rem("36px")})`,
      fontSize: "calc(var(--day-size) / 2.8)",
      display: "var(--_day-display, inline-flex)",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "var(--_day-user-select, none)",
      cursor: "var(--_day-cursor, pointer)",
      backgroundColor: "var(--_day-bg, transparent)",
      borderRadius: "var(--_day-radius, var(--raikou-radius-default))",
      color: "var(--_day-color, var(--raikou-color-text))",
      opacity: "var(--_day-opacity, 1)",

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-static], [data-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_day-bg": "var(--raikou-calendar-day-hover-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_day-bg": "var(--raikou-calendar-day-active-bg)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-static], [data-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_day-bg": "var(--raikou-calendar-day-hover-bg)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_day-bg": "var(--raikou-calendar-day-active-bg)",
            },
          },
        },
      },

      "&[data-static]": {
        "--_day-user-select": "auto",
        "--_day-cursor": "default",
      },

      "&[data-weekend]": {
        "--_day-color": "var(--raikou-color-red-6)",
      },

      "&[data-outside]": {
        "--_day-color": "var(--raikou-color-dimmed)",
        "--_day-opacity": "0.5",
      },

      "&:disabled, &[data-disabled]": {
        "--_day-color": "var(--raikou-color-dimmed)",
        "--_day-cursor": "not-allowed",
        "--_day-opacity": "0.5",
      },

      "&[data-hidden]": {
        "--_day-display": "none",
      },

      "&[data-in-range]": {
        "--_day-bg": "var(--raikou-primary-color-light-hover)",
        "--_day-radius": "0",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &:not([data-disabled], [data-static])":
              {
                "--_day-bg": "var(--raikou-primary-color-light)",
              },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &:not([data-disabled], [data-static])":
              {
                "--_day-bg": "var(--raikou-primary-color-light)",
              },
          },
        },
      },

      "&[data-first-in-range]": {
        "--_day-radius":
          "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",

        '[dir="rtl"] &': {
          "--_day-radius":
            "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",
        },
      },

      "&[data-last-in-range]": {
        "--_day-radius":
          "0 var(--raikou-radius-default) var(--raikou-radius-default) 0",

        '[dir="rtl"] &': {
          "--_day-radius":
            "var(--raikou-radius-default) 0 0 var(--raikou-radius-default)",
        },
      },

      "&[data-last-in-range][data-first-in-range]": {
        "--_day-radius": "var(--raikou-radius-default)",
      },

      "&[data-selected]": {
        "--_day-bg": "var(--raikou-primary-color-filled)",
        "--_day-color": "var(--raikou-color-white)",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &:not([data-disabled], [data-static])":
              {
                "--_day-bg": "var(--raikou-primary-color-filled-hover)",
              },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &:not([data-disabled], [data-static])":
              {
                "--_day-bg": "var(--raikou-primary-color-filled-hover)",
              },
          },
        },
      },
    },
  });
};
