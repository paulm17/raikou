import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".popover-dropdown": {
      position: "absolute",
      backgroundColor: "var(--_popover-bg)",
      border: `${rem("1px")} solid var(--_popover-bd)`,
      padding: "var(--raikou-spacing-sm) var(--raikou-spacing-md)",
      boxShadow: "var(--popover-shadow, none)",
      borderRadius: "var(--popover-radius, var(--raikou-radius-default))",

      "&:focus": {
        outline: "none",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_popover-bg": "var(--raikou-popover-bg)",
        "--_popover-bd": "var(--raikou-popover-bd)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_popover-bg": "var(--raikou-popover-bg)",
        "--_popover-bd": "var(--raikou-popover-bd)",
      },
    },

    ".popover-arrow": {
      backgroundColor: "inherit",
      border: `${rem("1px")} solid var(--_popover-bd)`,
      zIndex: "1",
    },
  });
};
