import { css } from '@stylefusion/react';

export const DonutChartRootStyle = css({
  minHeight: 'var(--chart-size, auto)',
  height: 'var(--chart-size, auto)',
  width: 'var(--chart-size, auto)',
  minWidth: 'var(--chart-size, auto)',

  '& :_where(*)': {
    outline: 0,
  },
});

export const DonutChartLabelStyle = css({
  fill: 'var(--raikou-color-text)',
  fontSize: 'var(--raikou-font-size-sm)',
});
