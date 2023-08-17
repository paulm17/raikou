import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".table-root": {
      width: "100%",
      borderCollapse: "collapse",
      lineHeight: "var(--raikou-line-height)",
      fontSize: "var(--raikou-font-size-sm)",
      tableLayout: "var(--table-layout, auto)",
      captionSide: "var(--table-caption-side)",
      border: "var(--_table-border, none)",

      '[data-raikou-color-scheme="light"] &': {
        "--_table-hover-color": "var(--raikou-table-hover-color)",
        "--_table-striped-color": "var(--raikou-table-striped-color)",
        "--_table-border-color": "var(--raikou-table-border-color)",
      },

      '[data-raikou-color-scheme="dark"] &': {
        "--_table-hover-color": "var(--raikou-table-hover-color)",
        "--_table-striped-color": "var(--raikou-table-striped-color)",
        "--_table-border-color": "var(--raikou-table-border-color)",
      },

      "&[data-with-table-border]": {
        "--_table-border": `${rem("1px")} solid var(--_table-border-color)`,
      },
    },

    ".table-th": {
      textAlign: "var(--_th-text-align, left)",

      '[dir="rtl"] &': {
        "--_th-text-align": "right",
      },
    },

    ".table-tr": {
      borderBottom: "var(--_tr-border-bottom, none)",
      backgroundColor: "var(--_tr-bg, transparent)",

      "@media (hover: hover)": {
        "&:hover": {
          "--_tr-bg": "var(--_tr-hover-bg, transparent)",
        },
      },
      "@media (hover: none)": {
        "&:active": {
          "--_tr-bg": "var(--_tr-hover-bg, transparent)",
        },
      },

      "&[data-with-row-border]": {
        "--_tr-border-bottom": `${rem("1px")} solid var(--_table-border-color)`,
      },
    },

    ".table-td, .table-th": {
      padding: "var(--table-vertical-spacing) var(--table-horizontal-spacing)",
      borderLeft: "var(--_border-left)",
      borderRight: "var(--_border-right)",

      "--_border-right": "none",
      "--_border-left": "none",

      "&[data-with-column-border]:not(:last-of-type)": {
        "--_border-right": `${rem("1px")} solid var(--_table-border-color)`,

        '[dir="rtl"] &': {
          "--_border-left": `${rem("1px")} solid var(--_table-border-color)`,
          "--_border-right": "none",
        },
      },
    },

    ".table-tbody": {
      "& > .table-tr": {
        "&:last-of-type": {
          "&[data-with-row-border]": {
            "--_tr-border-bottom": "none",
          },
        },

        "&[data-striped='odd']:nth-of-type(odd)": {
          "--_tr-bg": "var(--_table-striped-color)",
        },

        "&[data-striped='even']:nth-of-type(even)": {
          "--_tr-bg": "var(--_table-striped-color)",
        },

        "&[data-hover]": {
          "--_tr-hover-bg": "var(--_table-hover-color)",
        },
      },
    },

    ".table-caption": {
      color: "var(--raikou-color-dimmed)",
      marginTop: "var(--_margin-top, 0)",
      marginBottom: "var(--_margin-bottom, 0)",

      "&[data-side='top']": {
        "--_margin-bottom": "var(--raikou-spacing-xs)",
      },

      "&[data-side='bottom']": {
        "--_margin-top": "var(--raikou-spacing-xs)",
      },
    },

    ".table-scrollContainer": {
      "overflow-x": "var(--table-overflow)",
    },

    ".table-scrollContainerInner": {
      "min-width": "var(--table-min-width)",
    },
  });
};
