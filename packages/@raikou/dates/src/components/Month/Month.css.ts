import { css } from '@stylefusion/react';

export const MonthStyle = css({
  borderCollapse: "collapse",
  tableLayout: "fixed",
});

export const MonthCellStyle = css({
  padding: 0,

  ':_where([data-with-spacing])': {
    padding: "0.5px",
  },
});