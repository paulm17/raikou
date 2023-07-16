import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".burger-root": {
      "--burger-size-xs": rem("12px"),
      "--burger-size-sm": rem("18px"),
      "--burger-size-md": rem("24px"),
      "--burger-size-lg": rem("34px"),
      "--burger-size-xl": rem("42px"),

      width: "calc(var(--burger-size) + var(--raikou-spacing-xs))",
      height: "calc(var(--burger-size) + var(--raikou-spacing-xs))",
      padding: "calc(var(--raikou-spacing-xs) / 2)",
      cursor: "pointer",

      "--_burger-color": "var(--burger-color, var(--__burger-color))",

      '[data-raikou-color-scheme="light"] &': {
        "--__burger-color": "var(--raikou-color-black)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--__burger-color": "var(--raikou-color-white)",
      },
    },

    ".burger-burger": {
      position: "relative",
      userSelect: "none",

      "&, &::before, &::after": {
        display: "block",
        width: "var(--burger-size)",
        height: "calc(var(--burger-size) / 12)",
        backgroundColor: "var(--_burger-color)",
        outline: `${rem("1px")} solid transparent`,
        transitionProperty: "background-color, transform",
        transitionDuration: "var(--burger-transition-duration)",
        transitionTimingFunction: "var(--burger-transition-timing-function)",
      },

      "&::before, &::after": {
        position: "absolute",
        content: '""',
        left: 0,
      },

      "&::before": {
        top: "calc(var(--burger-size) / -3)",
      },

      "&::after": {
        top: "calc(var(--burger-size) / 3)",
      },

      "&[data-opened]": {
        backgroundColor: "transparent",

        "&::before": {
          transform: "translateY(calc(var(--burger-size) / 3)) rotate(45deg)",
        },

        "&::after": {
          transform: "translateY(calc(var(--burger-size) / -3)) rotate(-45deg)",
        },
      },
    },
  });
};
