import { css } from "@stylefusion/react";

export const dataTableEmptyRowStyle = css({
  [`.&, .raikou-datatable-table[data-highlight-on-hover] tbody &:hover`]: {
    background: "transparent",
  },
});
