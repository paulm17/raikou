import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-monthsList": {
      borderCollapse: "collapse",
      borderWidth: "0",
      cursor: "pointer",
    },

    ".dates-monthsListCell": {
      padding: "var(--_cell-padding, 0)",

      "&[data-with-spacing]": {
        "--_cell-padding": rem("0.5px"),
      },
    },
  });
};
