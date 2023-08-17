import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".pagination-root": {
      "--pagination-control-size-xs": rem("22px"),
      "--pagination-control-size-sm": rem("26px"),
      "--pagination-control-size-md": rem("32px"),
      "--pagination-control-size-lg": rem("38px"),
      "--pagination-control-size-xl": rem("44px"),
    },

    ".pagination-control.pagination-control": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: `${rem("1px")} solid var(--_control-border-color)`,
      cursor: "var(--_control-cursor, pointer)",
      color: "var(--_control-color, var(--raikou-color-text))",
      height: "var(--pagination-control-size)",
      minWidth: "var(--pagination-control-size)",
      fontSize: "var(--pagination-control-fz)",
      padding: "var(--_control-padding, 0)",
      lineHeight: "1",
      backgroundColor: "var(--_control-bg-color)",
      borderRadius: "var(--pagination-control-radius)",
      opacity: "var(--_control-opacity, 1)",

      "&[data-with-padding]": {
        "--_control-padding": "calc(var(--pagination-control-size) / 4)",
      },

      "&:disabled, &[data-disabled]": {
        "--_control-cursor": "not-allowed",
        "--_control-opacity": "0.4",
      },

      "&[data-active]": {
        "--_control-bg-color": "var(--pagination-active-bg) !important",
        "--_control-border-color": "var(--pagination-active-bg) !important",
        "--_control-color": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_control-border-color":
          "var(--raikou-pagination-control-border-color)",
        "--_control-bg-color": "var(--raikou-pagination-control-bg-color)",
        "--_control-bg-hover": "var(--raikou-pagination-control-bg-hover)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-border-color":
          "var(--raikou-pagination-control-border-color)",
        "--_control-bg-color": "var(--raikou-pagination-control-bg-color)",
        "--_control-bg-hover": "var(--raikou-pagination-control-bg-hover)",
      },

      "@media (hover: hover)": {
        "&:hover": {
          "&:not(:disabled, [data-disabled])": {
            "--_control-bg-color": "var(--_control-bg-hover)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not(:disabled, [data-disabled])": {
            "--_control-bg-color": "var(--_control-bg-hover)",
          },
        },
      },

      '[dir="rtl"] &': {
        "& > svg": {
          transform: "rotate(180deg)",
        },
      },
    },

    ".pagination-dots": {
      height: "var(--pagination-control-size)",
      minWidth: "var(--pagination-control-size)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
    },
  });
};
