import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".colorswatch-root": {
      "-webkit-tap-highlight-color": "transparent",
      border: "none",
      appearance: "none",
      display: "block",
      lineHeight: 1,
      position: "relative",
      width: "var(--cs-size)",
      height: "var(--cs-size)",
      minWidth: "var(--cs-size)",
      minHeight: "var(--cs-size)",
      borderRadius: "var(--cs-radius)",
      color: "inherit",
      textDecoration: "none",

      '[data-raikou-color-scheme="light"] &': {
        "--_alpha-overlay-color": "var(--raikou-color-gray-3)",
        "--_alpha-overlay-bg": "var(--raikou-color-white)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_alpha-overlay-color": "var(--raikou-color-dark-4)",
        "--_alpha-overlay-bg": "var(--raikou-color-dark-7)",
      },
    },

    ".colorswatch-colorOverlay": {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--cs-radius)",
    },

    ".colorswatch-shadowOverlay": {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--cs-radius)",
      zIndex: 1,
      boxShadow: `rgba(0, 0, 0, 0.1) 0 0 0 ${rem(
        "1px"
      )} inset, rgb(0, 0, 0, 0.15) 0 0 ${rem("4px")} inset`,
    },

    ".colorswatch-alphaOverlay": {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--cs-radius)",
      backgroundSize: `${rem("8px")} ${rem("8px")}`,
      backgroundPosition: `0 0, 0 ${rem("4px")}, ${rem("4px")} ${rem(
        "-4px"
      )}, ${rem("-4px")} 0`,
      backgroundImage: `linear-gradient(
          45deg,
          var(--_alpha-overlay-color) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--_alpha-overlay-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--_alpha-overlay-color) 75%),
        linear-gradient(
          -45deg,
          var(--_alpha-overlay-bg) 75%,
          var(--_alpha-overlay-color) 75%
        )`,
    },

    ".colorswatch-childrenOverlay": {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--cs-radius)",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
