import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".modalBase-title": {
      lineHeight: 1,
      padding: 0,
      margin: 0,
      fontWeight: 400,
      fontSize: "var(--raikou-font-size-md)",
    },

    ".modalBase-header": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--mb-padding)",
      paddingRight: `var(--_pr, calc(var(--mb-padding) - ${rem("5px")}))`,
      paddingLeft: "var(--_pl, var(--mb-padding))",
      position: "sticky",
      top: 0,
      backgroundColor: "var(--raikou-color-body)",
      zIndex: 1000,

      '[dir="rtl"] &': {
        "--_pr": "var(--mb-padding)",
        "--_pl": `calc(var(--mb-padding) - ${rem("5px")})`,
      },
    },

    ".modalBase-inner": {
      position: "fixed",
      width: "100%",
      top: 0,
      bottom: 0,
      zIndex: "calc(var(--mb-z-index) + 1)",
      pointerEvents: "none",
    },

    ".modalBase-content": {
      pointerEvents: "all",
      boxShadow: "var(--mb-shadow)",
    },

    ".modalBase-close": {
      marginLeft: "var(--_close-ml, auto)",
      marginRight: "var(--_close-mr, 0)",

      '[dir="rtl"] &': {
        "--_close-ml": 0,
        "--_close-mr": "auto",
      },
    },

    ".modalBase-body": {
      padding: "var(--mb-padding)",
      paddingTop: "var(--_pt, var(--mb-padding))",

      "&:not(:only-child)": {
        "--_pt": 0,
      },
    },
  });
};
