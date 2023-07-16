import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".scrollArea-root": {
      position: "relative",
      overflow: "hidden",
    },

    ".scrollArea-viewport": {
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "-webkit-overflow-scrolling": "touch",
      width: "100%",
      height: "100%",
      paddingRight: "var(--_viewport-padding-right, 0rem)",
      paddingLeft: "var(--_viewport-padding-left, 0rem)",
      paddingBottom: "var(--_viewport-padding-bottom, 0rem)",

      "&::-webkit-scrollbar": {
        display: "none",
      },

      "&[data-offset-scrollbars]": {
        "--_viewport-padding-right": "var(--scrollarea-scrollbar-size)",
        "--_viewport-padding-bottom": "var(--scrollarea-scrollbar-size)",
        "--_viewport-padding-left": "unset",

        '[dir="rtl"] &': {
          "--_viewport-padding-right": "unset",
          "--_viewport-padding-left": "var(--scrollarea-scrollbar-size)",
        },
      },
    },

    ".scrollArea-viewportInner": {
      minWidth: "100%",
      display: "table",
    },

    ".scrollArea-scrollbar": {
      userSelect: "none",
      touchAction: "none",
      boxSizing: "border-box",
      transition: "background-color 150ms ease, opacity 150ms ease",

      padding: "calc(var(--scrollarea-scrollbar-size) / 5)",
      display: "var(--_scrollbar-display, flex)",
      backgroundColor: "var(--_scrollbar-bg, transparent)",
      width: "var(--_scrollbar-width)",
      height: "var(--_scrollbar-height)",
      flexDirection: "var(--_scrollbar-direction, row)",

      "& > .thumb": {
        backgroundColor: "var(--_thumb-bg)",
      },

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            "--_scrollbar-bg": "var(--raikou-color-gray-0)",
            "--_thumb-bg": "rgba(0, 0, 0, 0.5)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_scrollbar-bg": "var(--raikou-color-dark-8)",
            "--_thumb-bg": "rgba(255, 255, 255, 0.5)",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            "--_scrollbar-bg": "var(--raikou-color-gray-0)",
            "--_thumb-bg": "rgba(0, 0, 0, 0.5)",
          },

          '[data-raikou-color-scheme="dark"] &': {
            "--_scrollbar-bg": "var(--raikou-color-dark-8)",
            "--_thumb-bg": "rgba(255, 255, 255, 0.5)",
          },
        },
      },

      "&[data-hidden], &[data-state='hidden']": {
        "--_scrollbar-display": "none",
      },

      "&[data-orientation='vertical']": {
        "--_scrollbar-width": "var(--scrollarea-scrollbar-size)",

        top: 0,
        bottom: "var(--sa-corner-width)",
        right: 0,

        '[dir="rtl"] &': {
          right: "unset",
          left: 0,
        },
      },

      "&[data-orientation='horizontal']": {
        "--_scrollbar-height": "var(--scrollarea-scrollbar-size)",
        "--_scrollbar-direction": "column",

        bottom: 0,
        left: 0,
        right: "var(--sa-corner-height)",

        '[dir="rtl"] &': {
          right: 0,
          left: "var(--sa-corner-height)",
        },
      },
    },

    ".scrollArea-thumb": {
      flex: 1,
      borderRadius: "var(--scrollarea-scrollbar-size)",
      position: "relative",
      transition: "background-color 150ms ease",
      overflow: "hidden",
      backgroundColor: "var(--_thumb-bg)",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: rem("44px"),
        minHeight: rem("44px"),
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_thumb-bg": "rgba(0, 0, 0, 0.4)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_thumb-bg": "rgba(255, 255, 255, 0.4)",
      },
    },

    ".scrollArea-corner": {
      position: "absolute",
      opacity: "var(--_corner-opacity, 0)",
      transition: "opacity 150ms ease",
      backgroundColor: "var(--_corner-bg)",
      display: "var(--_corner-display, block)",
      right: 0,
      bottom: 0,

      '[dir="rtl"] &': {
        right: "unset",
        left: 0,
        bottom: 0,
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_corner-bg": "var(--raikou-color-gray-0)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_corner-bg": "var(--raikou-color-dark-8)",
      },

      "&[data-hovered]": {
        "--_corner-opacity": 1,
      },

      "&[data-hidden]": {
        "--_corner-display": "none",
      },
    },
  });
};
