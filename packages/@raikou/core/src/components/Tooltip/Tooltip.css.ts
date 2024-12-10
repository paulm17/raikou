import { css } from '@stylefusion/react';

export const TooltipRootStyle = css(({ theme }) => ({
  '--tooltip-radius': 'var(--raikou-radius-default)',

  position: 'absolute',
  padding: 'calc(var(--raikou-spacing-xs) / 2) var(--raikou-spacing-xs)',
  pointerEvents: 'none',
  fontSize: 'var(--raikou-font-size-sm)',
  whiteSpace: 'nowrap',
  borderRadius: 'var(--tooltip-radius)',

  ...theme.applyStyles('light', {
    backgroundColor: `var(--tooltip-bg, ${theme.colors.gray[9]})`,
    color: `var(--tooltip-color, ${theme.colors.white})`,
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: `var(--tooltip-bg, ${theme.colors.gray[2]})`,
    color: `var(--tooltip-color, ${theme.colors.black})`,
  }),

  '&:_where([data-multiline])': {
    whiteSpace: 'normal',
  },

  '&:_where([data-fixed])': {
    position: 'fixed',
  },
}));

export const TooltipArrowStyle = css({
  backgroundColor: 'inherit',
  border: 0,
  zIndex: 1,
});
