import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".badge-root": {
      "--badge-height-xs": rem("16px"),
      "--badge-height-sm": rem("18px"),
      "--badge-height-md": rem("20px"),
      "--badge-height-lg": rem("26px"),
      "--badge-height-xl": rem("32px"),

      "--badge-fz-xs": rem("9px"),
      "--badge-fz-sm": rem("10px"),
      "--badge-fz-md": rem("11px"),
      "--badge-fz-lg": rem("13px"),
      "--badge-fz-xl": rem("16px"),

      "--badge-padding-x-xs": rem("6px"),
      "--badge-padding-x-sm": rem("8px"),
      "--badge-padding-x-md": rem("10px"),
      "--badge-padding-x-lg": rem("12px"),
      "--badge-padding-x-xl": rem("16px"),

      fontSize: "var(--badge-fz)",
      borderRadius: "var(--badge-radius)",
      height: "var(--badge-height)",
      "-webkit-tap-highlight-color": "transparent",
      lineHeight: `calc(var(--badge-height) - ${rem("2px")})`,
      textDecoration: "none",
      padding: "0 var(--badge-padding-x)",
      display: "var(--_badge-display, inline-flex)",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--_badge-width, auto)",
      textTransform: "uppercase",
      fontWeight: "700",
      letterSpacing: rem("0.25px"),
      cursor: "inherit",
      textOverflow: "ellipsis",
      overflow: "hidden",

      color: "var(--badge-color)",
      background: "var(--badge-bg)",
      border: "var(--badge-bd)",
    },
    ".badge-root--dot": {
      "--badge-dot-size": "calc(var(--badge-height) / 3.4)",

      backgroundColor: "var(--_badge-bg)",
      border: `${rem("1px")} solid var(--_badge-border-color)`,
      color: "var(--_badge-color)",

      '[data-raikou-color-scheme="light"] &': {
        "--_badge-bg": "var(--raikou-color-white)",
        "--_badge-border-color": "var(--raikou-color-gray-4)",
        "--_badge-color": "var(--raikou-color-black)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_badge-bg": "var(--raikou-color-dark-5)",
        "--_badge-border-color": "var(--raikou-color-dark-5)",
        "--_badge-color": "var(--raikou-color-white)",
      },

      "&::before": {
        content: "''",
        display: "block",
        width: "var(--badge-dot-size)",
        height: "var(--badge-dot-size)",
        borderRadius: "var(--badge-dot-size)",
        backgroundColor: "var(--badge-dot-color)",
        marginRight: "var(--badge-dot-size)",

        '[dir="rtl"] &': {
          marginRight: "0",
          marginLeft: "var(--badge-dot-size)",
        },
      },
    },
    ".badge-label": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".badge-section": {
      "--_section-margin": "calc(var(--raikou-spacing-xs) / 2)",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-position='left']": {
        marginLeft: "var(--_left-section-ml, 0)",
        marginRight: "var(--_left-section-mr, var(--_section-margin))",
      },
      "&[data-position='right']": {
        marginLeft: "var(--_right-section-ml, var(--_section-margin))",
        marginRight: "var(--_right-section-mr, 0)",
      },
    },
  });
};
