import { css } from '@stylefusion/react';

export const MonthsListStyle = css({
  borderCollapse: 'collapse',
  borderWidth: 0,
  cursor: 'pointer',
});

export const MonthsListCellStyle = css({
  padding: 0,

  '&:_where([data-with-spacing])': {
    padding: '0.5px',
  },
});
