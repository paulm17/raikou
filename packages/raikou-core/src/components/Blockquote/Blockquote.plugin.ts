import { rem } from "../../core/utils/units-converters";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".blockquote-root": {
      "--_bq-border": `${rem("3px")} solid var(--bq-bd)`,

      position: "relative",
      margin: 0,
      backgroundColor: "var(--_bq-bg)",
      borderLeft: "var(--_bq-border-left, var(--_bq-border))",
      borderRight: "var(--_bq-border-right, 0)",
      borderRadius: "var(--bq-radius)",
      borderTopLeftRadius: "var(--_bq-radius-left, 0)",
      borderTopRightRadius: "var(--_bq-radius-right, var(--bq-radius))",
      borderBottomLeftRadius: "var(--_bq-radius-left, 0)",
      borderBottomRightRadius: "var(--_bq-radius-right, var(--bq-radius))",
      padding: `var(--raikou-spacing-xl) ${rem("38px")}`,

      '[dir="rtl"] &': {
        "--_bq-radius-left": "var(--bq-radius)",
        "--_bq-radius-right": 0,
        "--_bq-border-left": 0,
        "--_bq-border-right": "var(--_bq-border)",
      },

      '[data-raikou-color-scheme="light"] &': {
        "--_bq-bg": "var(--bq-bg-light)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_bq-bg": "var(--bq-bg-dark)",
      },
    },

    ".blockquote-icon": {
      position: "absolute",
      color: "var(--bq-bd)",
      backgroundColor: "var(--raikou-color-body)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "calc(var(--bq-icon-size) / -2)",
      left: "var(--_bq-icon-left, calc(var(--bq-icon-size) / -2))",
      right: "var(--_bq-icon-right, 0)",
      width: "var(--bq-icon-size)",
      height: "var(--bq-icon-size)",
      borderRadius: "var(--bq-icon-size)",

      '[dir="rtl"] &': {
        "--_bq-icon-left": 0,
        "--_bq-icon-right": "calc(var(--bq-icon-size) / -2)",
      },
    },

    ".blockquote-cite": {
      display: "block",
      marginTop: "var(--raikou-spacing-md)",
      opacity: 0.6,
      fontSize: "85%",
    },
  });
};
