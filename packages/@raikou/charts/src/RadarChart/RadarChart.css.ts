import { css } from '@stylefusion/react';

export const RadarChartRootStyle = css(({ theme }) => ({
  ...theme.applyStyles('light', {
    '--chart-grid-color': 'rgba(173, 181, 189, 0.6)',
    '--chart-text-color': theme.colors.gray[7],
  }),
  ...theme.applyStyles('dark', {
    '--chart-grid-color': 'rgba(105, 105, 105, 0.6)',
    '--chart-text-color': theme.colors.dark[1],
  }),

  '& :_where(text)': {
    fontSize: 'var(--raikou-font-size-xs)',
    fill: 'var(--chart-text-color)',
    userSelect: 'none',
  },
}));

export const RadarChartContainerStyle = css({
  height: '100%',
  width: '100%',
});
