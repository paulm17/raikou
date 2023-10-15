import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".demoRoot-root": {
      border: `${rem("1px")} solid var(--_demo-border)`,
      borderRadius: "var(--raikou-radius-md)",

      '[data-raikou-color-scheme="light"] &': {
        "--_demo-border": "#e9ecef",
      },
      '[data-raikou-color-scheme="dark"] &': {
        "--_demo-border": "#373a40",
      },
    },
  });
};
