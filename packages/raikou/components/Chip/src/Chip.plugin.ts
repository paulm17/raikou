import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".chip-root": {
      "--chip-size-xs": rem("23px"),
      "--chip-size-sm": rem("28px"),
      "--chip-size-md": rem("32px"),
      "--chip-size-lg": rem("36px"),
      "--chip-size-xl": rem("40px"),

      "--chip-icon-size-xs": rem("10px"),
      "--chip-icon-size-sm": rem("12px"),
      "--chip-icon-size-md": rem("14px"),
      "--chip-icon-size-lg": rem("16px"),
      "--chip-icon-size-xl": rem("18px"),

      "--chip-padding-xs": rem("16px"),
      "--chip-padding-sm": rem("20px"),
      "--chip-padding-md": rem("24px"),
      "--chip-padding-lg": rem("28px"),
      "--chip-padding-xl": rem("32px"),

      "--chip-checked-padding-xs": rem("7.5px"),
      "--chip-checked-padding-sm": rem("10px"),
      "--chip-checked-padding-md": rem("11.7px"),
      "--chip-checked-padding-lg": rem("13.5px"),
      "--chip-checked-padding-xl": rem("12.5px"),

      "--chip-spacing-xs": rem("10px"),
      "--chip-spacing-sm": rem("12px"),
      "--chip-spacing-md": rem("16px"),
      "--chip-spacing-lg": rem("20px"),
      "--chip-spacing-xl": rem("22px"),
    },

    ".chip-label": {
      display: "inline-flex",
      alignItems: "center",
      userSelect: "none",
      borderRadius: "var(--chip-radius)",
      height: "var(--chip-size)",
      fontSize: "var(--chip-fz)",
      lineHeight: `calc(var(--chip-size) - ${rem("2px")})`,
      paddingLeft: "var(--_chip-padding, var(--chip-padding))",
      paddingRight: "var(--_chip-padding, var(--chip-padding))",
      cursor: "var(--_chip-cursor, pointer)",
      whiteSpace: "nowrap",
      "-webkit-tap-highlight-color": "transparent",
      border: `${rem("1px")} solid transparent`,
      backgroundColor: "var(--_chip-bg)",
      color: "var(--_chip-color, var(--raikou-color-text))",

      "&[data-checked]": {
        "--_chip-padding": "var(--chip-checked-padding)",
      },

      "&[data-disabled]": {
        "--_chip-bg": "var(--raikou-color-gray-2)",
        "--_chip-color": "var(--raikou-color-gray-5)",
        "--_chip-cursor": "not-allowed",
      },
    },

    ".chip-root[data-variant='outline'] .chip-label:not([data-disabled])": {
      backgroundColor: "var(--_chip-bg)",
      border: "var(--_chip-bd)",

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            "--_chip-bg": "var(--raikou-color-gray-0)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_chip-bg": "var(--raikou-color-dark-5)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            "--_chip-bg": "var(--raikou-color-gray-0)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_chip-bg": "var(--raikou-color-dark-5)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_chip-bg": "var(--raikou-color-white)",
        "--_chip-bd": `${rem("1px")} solid var(--raikou-color-gray-3)`,
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_chip-bg": "var(--raikou-color-dark-6)",
        "--_chip-bd": `${rem("1px")} solid var(--raikou-color-dark-4)`,
      },

      "[data-raikou-color-scheme] &[data-checked]": {
        "--_chip-bd": "var(--chip-bd)",
        "--_chip-icon-color": "var(--chip-color)",

        "@media (hover: hover)": {
          "&:hover": {
            "--_chip-bg": "var(--chip-hover)",
          },
        },
        "@media (hover: none)": {
          "&:active": {
            "--_chip-bg": "var(--chip-hover)",
          },
        },
      },
    },

    ".chip-root[data-variant='filled'] .chip-label:not([data-disabled]), .chip-root[data-variant='light'] .chip-label:not([data-disabled])":
      {
        backgroundColor: "var(--_chip-bg)",
        border: `${rem("1px")} solid transparent`,
        color: "var(--_chip-color, var(--raikou-color-text))",

        "@media (hover: hover)": {
          "&:hover": {
            '[data-raikou-color-scheme="light"] &': {
              "--_chip-bg": "var(--raikou-color-gray-1)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_chip-bg": "var(--raikou-color-dark-5)",
            },
          },
        },
        "@media (hover: none)": {
          "&:active": {
            '[data-raikou-color-scheme="light"] &': {
              "--_chip-bg": "var(--raikou-color-gray-1)",
            },

            '[data-raikou-color-scheme="dark"] &': {
              "--_chip-bg": "var(--raikou-color-dark-5)",
            },
          },
        },

        '[data-raikou-color-scheme="light"] &': {
          "--_chip-bg": "var(--raikou-color-gray-0)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_chip-bg": "var(--raikou-color-dark-6)",
        },

        "[data-raikou-color-scheme] &[data-checked]": {
          "--_chip-icon-color": "var(--chip-color)",
          "--_chip-color": "var(--chip-color)",
          "--_chip-bg": "var(--chip-bg)",

          "@media (hover: hover)": {
            "&:hover": {
              "--_chip-bg": "var(--chip-hover)",
            },
          },
          "@media (hover: none)": {
            "&:active": {
              "--_chip-bg": "var(--chip-hover)",
            },
          },
        },
      },

    ".chip-iconWrapper": {
      width: "calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))",
      maxWidth: "calc(var(--chip-icon-size) + (var(--chip-spacing) / 1.5))",
      height: "var(--chip-icon-size)",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },

    ".chip-checkIcon": {
      width: "var(--chip-icon-size)",
      height: "var(--chip-icon-size)",
      display: "block",
      color: "var(--_chip-icon-color, inherit)",
    },

    ".chip-input": {
      width: "0",
      height: "0",
      padding: "0",
      opacity: "0",
      margin: "0",

      "&:focus-visible + .label": {
        outline: `${rem("2px")} solid var(--raikou-color-primary)`,
        outlineOffset: rem("2px"),
      },
    },
  });
};
