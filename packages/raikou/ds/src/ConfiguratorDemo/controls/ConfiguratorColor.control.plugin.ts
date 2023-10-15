import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".configColor-swatch": {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--raikou-color-white)",
      flex: `1 0 calc(15% - ${rem("4px")})`,
    },

    ".configColor-check": {
      width: rem("12px"),
      height: rem("12px"),
    },

    ".configColor-colorControl": {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: `1 0 calc(15% - ${rem("4px")})`,
      height: rem("28px"),
      borderRadius: `var(--raikou-radius-sm)`,
      border: `${rem("1px")} solid var(--_control-border-color)`,

      '[data-raikou-color-scheme="light"] &': {
        "--_control-border-color": "var(--raikou-color-gray-5)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_control-border-color": "var(--raikou-color-dark-3)",
      },
    },
  });
};
