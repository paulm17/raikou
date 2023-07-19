import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".divider-root": {
      "--divider-size-xs": rem("1px"),
      "--divider-size-sm": rem("2px"),
      "--divider-size-md": rem("3px"),
      "--divider-size-lg": rem("4px"),
      "--divider-size-xl": rem("5px"),

      '[data-raikou-color-scheme="light"] &': {
        "--_divider-color": "var(--raikou-color-gray-4)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_divider-color": "var(--raikou-color-dark-4)",
      },

      '&[data-orientation="horizontal"]': {
        borderTop:
          "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
      },

      '&[data-orientation="vertical"]': {
        borderLeft:
          "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
        height: "auto",
        alignSelf: "stretch",
      },

      "&[data-with-label]": {
        border: "0",
      },
    },

    ".divider-label": {
      display: "flex",
      alignItems: "center",
      fontSize: "var(--raikou-font-size-xs)",
      color: "var(--divider-color, var(--raikou-color-dimmed))",
      whiteSpace: "nowrap",

      '&[data-position="left"]': {
        "&::before": {
          display: "none",
        },
      },

      '&[data-position="right"]': {
        "&::after": {
          display: "none",
        },
      },

      "&::before": {
        content: '""',
        flex: "1",
        height: rem("1px"),
        borderTop:
          "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
        marginRight: "var(--raikou-spacing-xs)",

        '[dir="rtl"] &': {
          marginRight: "0",
          marginLeft: "var(--raikou-spacing-xs)",
        },
      },

      "&::after": {
        content: '""',
        flex: "1",
        height: rem("1px"),
        borderTop:
          "var(--divider-size) var(--divider-border-style, solid) var(--divider-color, var(--_divider-color))",
        marginLeft: "var(--raikou-spacing-xs)",

        '[dir="rtl"] &': {
          marginLeft: "0",
          marginRight: "var(--raikou-spacing-xs)",
        },
      },
    },
  });
};
