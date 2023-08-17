import { rem } from "@raikou/core";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".dates-yearsList": {
      borderCollapse: "collapse",
      borderWidth: "0",
    },

    ".dates-yearsListCell": {
      padding: "var(--_cell-padding, 0)",

      "&[data-with-spacing]": {
        "--_cell-padding": rem("0.5px"),
      },
    },
  });
};
