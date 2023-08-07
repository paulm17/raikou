import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".month-month": {
      "border-collapse": "collapse",
      "table-layout": "fixed",
    },

    ".month-monthCell": {
      padding: "var(--_month-cell-padding, 0)",

      "&[data-with-spacing]": {
        "--_month-cell-padding": rem("0.5px"),
      },
    },

    ".month-weekday": {
      color: "var(--raikou-color-dimmed)",
      fontWeight: "normal",
      fontSize: "var(--month-fz)",
      textTransform: "capitalize",
      paddingBottom: "calc(var(--month-spacing) / 2)",
    },

    ".month-day": {
      width: `var(--day-size, ${rem("36px")})`,
      height: `var(--day-size, ${rem("36px")})`,
      fontSize: "var(--day-fz, var(--raikou-font-size-sm))",
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
              "--_day-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_day-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-static], [data-disabled])": {
            '[data-raikou-color-scheme="light"] &': {
              "--_day-bg": "var(--raikou-color-gray-0)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_day-bg": "var(--raikou-color-dark-5)",
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
      },

      "&[data-hidden]": {
        "--_day-display": "none",
      },

      "&[data-selected]": {
        "--_day-bg": "var(--day-selected-bg)",
        "--_day-color": "var(--day-selected-color)",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &": {
              "--_day-bg": "var(--day-selected-bg-hover)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &": {
              "--_day-bg": "var(--day-selected-bg-hover)",
            },
          },
        },
      },

      "&[data-in-range]": {
        "--_day-bg": "var(--day-range-bg)",
        "--_day-radius": "0",

        "@media (hover: hover)": {
          "&:hover": {
            "[data-raikou-color-scheme] &": {
              "--_day-bg": "var(--day-range-bg-hover)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "[data-raikou-color-scheme] &": {
              "--_day-bg": "var(--day-range-bg-hover)",
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
    },
  });
};
