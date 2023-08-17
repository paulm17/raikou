import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".kbd-root": {
      "--kbd-fz-xs": rem("10px"),
      "--kbd-fz-sm": rem("12px"),
      "--kbd-fz-md": rem("14px"),
      "--kbd-fz-lg": rem("16px"),
      "--kbd-fz-xl": rem("20px"),

      "--kbd-padding-xs": `${rem("2px")} ${rem("4px")}`,
      "--kbd-padding-sm": `${rem("3px")} ${rem("5px")}`,
      "--kbd-padding-md": `${rem("4px")} ${rem("7px")}`,
      "--kbd-padding-lg": `${rem("5px")} ${rem("9px")}`,
      "--kbd-padding-xl": `${rem("8px")} ${rem("14px")}`,

      fontFamily: "var(--raikou-font-family-monospace)",
      lineHeight: "var(--raikou-line-height)",
      fontWeight: "700",
      padding: "var(--kbd-padding)",
      fontSize: "var(--kbd-fz)",
      borderRadius: "var(--raikou-radius-sm)",
      border: `${rem("1px")} solid var(--_kbd-border-color)`,
      borderBottomWidth: rem("3px"),
      backgroundColor: "var(--_kbd-bg)",
      color: "var(--_kbd-color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_kbd-border-color": "var(--raikou-kbd-border-color)",
        "--_kbd-color": "var(--raikou-kbd-color)",
        "--_kbd-bg": "var(--raikou-kbd-bg)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_kbd-border-color": "var(--raikou-kbd-border-color)",
        "--_kbd-color": "var(--raikou-kbd-color)",
        "--_kbd-bg": "var(--raikou-kbd-bg)",
      },
    },
  });
};
