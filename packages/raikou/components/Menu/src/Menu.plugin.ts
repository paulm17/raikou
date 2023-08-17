import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".menu-dropdown.menu-dropdown": {
      padding: rem("4px"),
    },

    ".menu-label": {
      color: "var(--raikou-color-dimmed)",
      fontWeight: "500",
      fontSize: "var(--raikou-font-size-xs)",
      padding: "calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-sm)",
      cursor: "default",
    },

    ".menu-divider": {
      marginTop: rem("4px"),
      marginBottom: rem("4px"),
      borderTop: `${rem("1px")} solid var(--_divider-color)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_divider-color": "var(--raikou-menu-divider-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_divider-color": "var(--raikou-menu-divider-color)",
      },
    },

    ".menu-item.menu-item": {
      fontSize: "var(--raikou-font-size-sm)",
      width: "100%",
      padding: "calc(var(--raikou-spacing-xs) / 1.5) var(--raikou-spacing-sm)",
      borderRadius: "var(--popover-radius, var(--raikou-radius-default))",
      color: "var(--menu-item-color, var(--raikou-color-text))",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      backgroundColor: "var(--_item-bg, transparent)",
      opacity: "var(--_item-opacity, 1)",
      pointerEvents: "var(--_item-pointer-events, auto)",

      "&[data-disabled], &:disabled": {
        "--menu-item-color": "var(--raikou-color-dimmed) !important",
        "--_item-opacity": "0.6",
        "--_item-pointer-events": "none",
      },

      "&[data-hovered]": {
        "--_item-bg": "var(--menu-item-hover, var(--_item-bg-hover))",

        '[data-raikou-color-scheme="light"] &': {
          "--_item-bg-hover": "var(--raikou-menu-divider-item-hover-bg)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--_item-bg-hover": "var(--raikou-menu-divider-item-hover-bg)",
        },
      },
    },

    ".menu-itemLabel": {
      flex: "1",
    },

    ".menu-itemSection": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "var(--_section-ml)",
      marginRight: "var(--_section-mr)",

      '&[data-position="left"]': {
        "--_section-ml": "0",
        "--_section-mr": "var(--raikou-spacing-xs)",

        '[dir="rtl"] &': {
          "--_section-ml": "var(--raikou-spacing-xs)",
          "--_section-mr": "0",
        },
      },

      '&[data-position="right"]': {
        "--_section-ml": "var(--raikou-spacing-xs)",
        "--_section-mr": "0",

        '[dir="rtl"] &': {
          "--_section-ml": "0",
          "--_section-mr": "var(--raikou-spacing-xs)",
        },
      },
    },
  });
};
