import { css } from '@stylefusion/react';

export const ChartTooltipStyle = css(({ theme }) => ({
  minWidth: '200px',
  backgroundColor: 'var(--raikou-color-body)',
  boxShadow: 'var(--raikou-shadow-md)',
  borderRadius: 'var(--raikou-radius-default)',

  ...theme.applyStyles('light', {
    border: `1px solid ${theme.colors.gray[3]}`,
  }),

  ...theme.applyStyles('dark', {
    border: `1px solid ${theme.colors.dark[4]}`,
  }),
}));

export const ChartTooltipLabelStyle = css({
  padding: 'var(--raikou-spacing-xs) var(--raikou-spacing-md)',
  fontSize: 'var(--raikou-font-size-md)',
  fontWeight: 500,
  color: 'var(--raikou-color-bright)',
});

export const ChartTooltipBodyStyle = css({
  padding: 'var(--raikou-spacing-sm) var(--raikou-spacing-md)',
  paddingTop: 0,

  [`& .${ChartTooltipStyle}:_where([data-type="radial"]) :_where(&)`]: {
    padding: 'var(--raikou-spacing-md)',
  },
});

export const ChartTooltipItemColorStyle = css({});

export const ChartTooltipItemStyle = css({
  fontSize: 'var(--raikou-font-size-sm)',
  display: 'flex',
  justifyContent: 'space-between',

  '&:_where(& + &)': {
    marginTop: 'calc(var(--raikou-spacing-sm) / 2)',
  },

  [`&[data-type="scatter"] .${ChartTooltipItemColorStyle}`]: {
    display: 'none',
  },
});

export const ChartTooltipItemBodyStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--raikou-spacing-sm)',
  marginInlineEnd: 'var(--raikou-spacing-xl)',
});

export const ChartTooltipItemNameStyle = css({
  color: 'var(--raikou-color-text)',
  fontSize: 'var(--raikou-font-size-sm)',
});

export const ChartTooltipItemDataStyle = css({
  color: 'var(--raikou-color-bright)',
});
