import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".stylesApiDemo-selector": {
      display: "block",
      width: "100%",
      fontSize: "var(--raikou-font-size-sm)",
      padding: `${rem("6px")} var(--raikou-spacing-sm)`,
      borderRadius: "var(--raikou-radius-sm)",
      cursor: "help",

      "@media (hover: hover)": {
        "&:hover": {
          '[data-raikou-color-scheme="light"] &': {
            backgroundColor: "#f8f9fa",
          },

          '[data-raikou-color-scheme="dark"] &': {
            backgroundColor: "#25262b",
          },
        },
      },
      "@media (hover: none)": {
        "&:active": {
          '[data-raikou-color-scheme="light"] &': {
            backgroundColor: "#f8f9fa",
          },

          '[data-raikou-color-scheme="dark"] &': {
            backgroundColor: "#25262b",
          },
        },
      },
    },
  });
};
