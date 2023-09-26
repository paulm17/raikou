import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".pill-root": {
      "--pill-fz-xs": rem("10px"),
      "--pill-fz-sm": rem("12px"),
      "--pill-fz-md": rem("14px"),
      "--pill-fz-lg": rem("16px"),
      "--pill-fz-xl": rem("18px"),

      "--pill-height-xs": rem("18px"),
      "--pill-height-sm": rem("22px"),
      "--pill-height-md": rem("25px"),
      "--pill-height-lg": rem("28px"),
      "--pill-height-xl": rem("32px"),

      "--pill-fz": "var(--pill-fz-sm)",
      "--pill-height": "var(--pill-height-sm)",

      fontSize: "var(--pill-fz)",
      flex: "0",
      height: "var(--pill-height)",
      paddingLeft: "0.8em",
      paddingRight: "var(--pill-padding-right, 0.8em)",
      display: "inline-flex",
      alignItems: "center",
      borderRadius: `var(--pill-radius, ${rem("1000px")})`,
      backgroundColor: "var(--_pill-bg)",
      lineHeight: "1",
      whiteSpace: "nowrap",
      userSelect: "none",
      "-webkit-user-select": "none",
      maxWidth: "100%",
      color: "var(--_pill-color)",

      '[data-raikou-color-scheme="dark"] &': {
        "--_pill-bg": "var(--raikou-pill-bg)",
        "--_pill-color": "var(--raikou-pill-color)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_pill-color": "var(--raikou-pill-color)",
      },

      "&[data-with-remove]": {
        "--_pill-padding-right": "0",
      },

      "&[data-disabled], &:has(button:disabled)": {
        "--_pill-cursor": "not-allowed",
      },
    },

    '.pill-root[data-variant="default"]': {
      '[data-raikou-color-scheme="light"] &': {
        "--_pill-bg": "var(--raikou-pill-default-bg)",

        "&[data-disabled], &:has(button:disabled)": {
          "--_pill-bg": "var(--raikou-pill-default-disabled-bg)",
        },
      },
    },

    '.pill-root[data-variant="contrast"]': {
      '[data-raikou-color-scheme="light"] &': {
        "--_pill-bg": "var(--raikou-pill-contrast-bg)",

        "&[data-disabled], &:has(button:disabled)": {
          "--_pill-bg": "var(--raikou-pill-contrast-disabled-bg)",
        },
      },
    },

    ".pill-label": {
      cursor: "var(--_pill-cursor, default)",
      overflow: "hidden",
      height: "100%",
      lineHeight: "var(--pill-height)",
      textOverflow: "ellipsis",
    },

    ".pill-remove": {
      color: "inherit",
      fontSize: "inherit",
      height: "100%",
      minHeight: "unset",
      minWidth: "2em",
      width: "unset",
      borderRadius: "0",
      paddingLeft: "0.1em",
      paddingRight: "0.3em",
      flex: "0",

      ".root[data-disabled] > &, &:disabled": {
        backgroundColor: "transparent",
        width: "0.8em",
        minWidth: "0.8em",
        padding: "0",
        cursor: "not-allowed",

        "& > svg": {
          display: "none",
        },
      },

      "& > svg": {
        pointerEvents: "none",
      },
    },

    ".pill-group": {
      "--pg-gap-xs": rem("6px"),
      "--pg-gap-sm": rem("8px"),
      "--pg-gap-md": rem("10px"),
      "--pg-gap-lg": rem("12px"),
      "--pg-gap-xl": rem("12px"),
      "--pg-gap": "var(--pg-gap-sm)",

      display: "flex",
      alignItems: "center",
      gap: "var(--pg-gap)",
      flexWrap: "wrap",
    },
  });
};
