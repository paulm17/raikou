import { css } from '@stylefusion/react';

export const YearsListStyle = css({
  borderCollapse: 'collapse',
  borderWidth: 0,
});

export const YearsListCellStyle = css({
  padding: 0,

  ':_where([data-with-spacing])': {
    padding: '0.5px',
  },
});
