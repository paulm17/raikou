import { css } from '@stylefusion/react';

export const PieChartRootStyle = css({
  minHeight: 'var(--chart-size, auto)',
  height: 'var(--chart-size, auto)',
  width: 'var(--chart-size, auto)',
  minWidth: 'var(--chart-size, auto)',

  '& :_where(*)': {
    outline: 0,
  },
});

export const PieChartLabelStyle = css({});
