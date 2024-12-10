import { css } from '@stylefusion/react';

export const GridChartRootStyle = css(({ theme }) => ({
  display: 'block',
  width: '100%',

  '--chart-bar-label-color': 'var(--raikou-color-dimmed)',

  svg: {
    overflow: 'visible',
  },

  ...theme.applyStyles('light', {
    '--chart-grid-color': 'rgba(173, 181, 189, 0.6)',
    '--chart-cursor-fill': 'rgba(173, 181, 189, 0.15)',
  }),

  ...theme.applyStyles('dark', {
    '--chart-grid-color': 'rgba(105, 105, 105, 0.6)',
    '--chart-cursor-fill': 'rgba(105, 105, 105, 0.15)',
  }),

  '& :_where(text)': {
    fontFamily: 'var(--raikou-font-family)',
    color: 'var(--chart-text-color, var(--raikou-color-dimmed))',
  },
}));

export const GridChartContainerStyle = css({
  height: '100%',
  width: '100%',
});

export const GridChartGridStyle = css({
  stroke: 'var(--chart-grid-color)',
});

export const GridChartAxisStyle = css({
  color: 'var(--chart-grid-color)',
});

export const GridChartAxisLabelStyle = css({
  color: 'var(--chart-text-color, var(--raikou-color-dimmed))',
});

export const GridChartTooltipStyle = css(({ theme }) => ({
  minWidth: '200px',
  backgroundColor: 'var(--raikou-color-body)',
  boxShadow: 'var(--raikou-shadow-md)',
  borderRadius: 'var(--raikou-radius-default)',
  padding: 'var(--raikou-spacing-sm)',

  ...theme.applyStyles('light', {
    border: `1px solid ${theme.colors.gray[3]}`,
  }),

  ...theme.applyStyles('dark', {
    border: `1px solid ${theme.colors.dark[4]}`,
  }),
}));
