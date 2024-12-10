import { css } from '@stylefusion/react';

export const BurgerRootStyle = css(({ theme }) => ({
  '--burger-size-xs': '12px',
  '--burger-size-sm': '18px',
  '--burger-size-md': '24px',
  '--burger-size-lg': '34px',
  '--burger-size-xl': '42px',

  '--burger-size': 'var(--burger-size-md)',
  '--burger-line-size': 'calc(var(--burger-size) / 12)',

  width: 'calc(var(--burger-size) + var(--raikou-spacing-xs))',
  height: 'calc(var(--burger-size) + var(--raikou-spacing-xs))',
  padding: 'calc(var(--raikou-spacing-xs) / 2)',
  cursor: 'pointer',

  ...theme.applyStyles('light', {
    '--burger-color': theme.colors.black,
  }),
  ...theme.applyStyles('dark', {
    '--burger-color': theme.colors.white,
  }),
}));

export const BurgerBurgerStyle = css({
  position: 'relative',
  userSelect: 'none',

  '&, &:before, &:after': {
    display: 'block',
    width: 'var(--burger-size)',
    height: 'var(--burger-line-size)',
    backgroundColor: 'var(--burger-color)',
    outline: '1px solid transparent',
    transitionProperty: 'background-color, transform',
    transitionDuration: 'var(--burger-transition-duration, 300ms)',
    transitionTimingFunction: 'var(--burger-transition-timing-function, ease)',
  },

  '&:before, &:after': {
    position: 'absolute',
    content: "''",
    insetInlineStart: 0,
  },

  '&:before': {
    top: 'calc(var(--burger-size) / -3)',
  },

  '&:after': {
    top: 'calc(var(--burger-size) / 3)',
  },

  '&[data-opened]': {
    backgroundColor: 'transparent',

    '&:before': {
      transform: 'translateY(calc(var(--burger-size) / 3)) rotate(45deg)',
    },

    '&:after': {
      transform: 'translateY(calc(var(--burger-size) / -3)) rotate(-45deg)',
    },
  },
});
