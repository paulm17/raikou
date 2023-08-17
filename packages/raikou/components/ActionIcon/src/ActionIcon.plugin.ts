import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".actionIcon-root": {
      "--ai-size-xs": rem("18px"),
      "--ai-size-sm": rem("22px"),
      "--ai-size-md": rem("28px"),
      "--ai-size-lg": rem("34px"),
      "--ai-size-xl": rem("44px"),

      lineHeight: "1",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      userSelect: "none",

      width: "var(--ai-size)",
      height: "var(--ai-size)",
      minWidth: "var(--ai-size)",
      minHeight: "var(--ai-size)",
      borderRadius: "var(--ai-radius)",
      background: "var(--_ai-bg, var(--ai-bg))",
      color: "var(--_ai-color, var(--ai-color))",
      border: "var(--ai-bd)",
      cursor: "var(--_ai-cursor, pointer)",

      "@media (hover: hover)": {
        "&:hover": {
          "&:not([data-loading]):not(:disabled):not([data-disabled])": {
            "--_ai-bg": "var(--ai-hover)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "&:not([data-loading]):not(:disabled):not([data-disabled])": {
            "--_ai-bg": "var(--ai-hover)",
          },
        },
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_ai-loading-overlay-bg":
          "var(--raikou-actionicon-loading-overlay-bg)",
        "--_ai-disabled-bg": "var(--raikou-actionicon-disabled-bg)",
        "--_ai-disabled-color": "var(--raikou-actionicon-disabled-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_ai-loading-overlay-bg":
          "var(--raikou-actionicon-loading-overlay-bg)",
        "--_ai-disabled-bg": "var(--raikou-actionicon-disabled-bg)",
        "--_ai-disabled-color": "var(--raikou-actionicon-disabled-color)",
      },

      "&[data-loading]": {
        "--_ai-cursor": "not-allowed",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: rem("-1px"),
          borderRadius: "var(--ai-radius)",
          backgroundColor: "var(--_ai-loading-overlay-bg)",
        },
      },

      "&:disabled:not([data-loading]), &[data-disabled]:not([data-loading])": {
        "--_ai-cursor": "not-allowed",
        "--_ai-bg": "var(--_ai-disabled-bg)",
        "--_ai-color": "var(--_ai-disabled-color)",

        "&:active": {
          transform: "none",
        },
      },
    },
    ".actionIcon-loader": {
      zIndex: "1",
    },
    ".actionIconGroup-root": {
      display: "flex",

      "&[data-orientation='horizontal']": {
        flexDirection: "row",

        "& [data-action-icon]": {
          "&:not(:only-child):first-child": {
            borderBottomRightRadius: "0",
            borderTopRightRadius: "0",
            borderRightWidth: "calc(var(--ai-border-width) / 2)",
          },

          "&:not(:only-child):last-child": {
            borderBottomLeftRadius: "0",
            borderTopLeftRadius: "0",
            borderLeftWidth: "calc(var(--ai-border-width) / 2)",
          },

          "&:not(:only-child):not(:first-child):not(:last-child)": {
            borderRadius: "0",
            borderRightWidth: "calc(var(--ai-border-width) / 2)",
            borderLeftWidth: "calc(var(--ai-border-width) / 2)",
          },
        },
      },

      "&[data-orientation='vertical']": {
        flexDirection: "column",

        "& [data-action-icon]": {
          "&:not(:only-child):first-child": {
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            borderBottomWidth: "calc(var(--ai-border-width) / 2)",
          },

          "&:not(:only-child):last-child": {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderTopWidth: "calc(var(--ai-border-width) / 2)",
          },

          "&:not(:only-child):not(:first-child):not(:last-child)": {
            borderRadius: "0",
            borderBottomWidth: "calc(var(--ai-border-width) / 2)",
            borderTopWidth: "calc(var(--ai-border-width) / 2)",
          },
        },
      },
    },
  });
};
