import { css } from '@stylefusion/react';

export const RadialBarChartRootStyle = css(({ theme }) => ({
  ...theme.applyStyles('light', {
    '--chart-empty-background': theme.colors.gray[1],
    '--chart-cursor-color': theme.colors.gray[4],
  }),
  ...theme.applyStyles('dark', {
    '--chart-empty-background': theme.colors.dark[6],
    '--chart-cursor-color': theme.colors.dark[4],
  }),
}));

export const RadialBarChartTooltipStyle = css(({ theme }) => ({
  padding: 'var(--raikou-spacing-md)',
  boxShadow: 'var(--raikou-shadow-md)',
  minWidth: '200px',
  fontSize: 'var(--raikou-font-size-sm)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  ...theme.applyStyles('light', {
    border: `1px solid ${theme.colors.gray[2]}`,
  }),

  ...theme.applyStyles('dark', {
    border: `1px solid ${theme.colors.dark[4]}`,
  }),
}));
