import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-month": {
      borderCollapse: "collapse",
      tableLayout: "fixed",
    },

    ".dates-monthCell": {
      padding: "var(--_month-cell-padding, 0)",

      "&[data-with-spacing]": {
        "--_month-cell-padding": rem("0.5px"),
      },
    },
  });
};
