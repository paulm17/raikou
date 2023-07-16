import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".popover-dropdown": {
      position: "absolute",
      backgroundColor: "var(--_popover-bg)",
      border: `rem(1px) solid var(--_popover-bd)`,
      padding: "var(--raikou-spacing-sm) var(--raikou-spacing-md)",
      boxShadow: "var(--popover-shadow, none)",
      borderRadius: "var(--popover-radius)",

      "&:focus": {
        outline: "none",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_popover-bg": "var(--raikou-color-white)",
        "--_popover-bd": "var(--raikou-color-gray-2)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_popover-bg": "var(--raikou-color-dark-6)",
        "--_popover-bd": "var(--raikou-color-dark-4)",
      },
    },

    ".popover-arrow": {
      backgroundColor: "inherit",
      border: `${rem("1px")} solid var(--_popover-bd)`,
      zIndex: 1,
    },
  });
};
