import { css } from '@stylefusion/react';

export const CodeRootStyle = css(({ theme }) => ({
  fontFamily: 'var(--raikou-font-family-monospace)',
  lineHeight: 'var(--raikou-line-height)',
  padding: '2px calc(var(--raikou-spacing-xs) / 2)',
  borderRadius: 'var(--raikou-radius-sm)',
  fontSize: 'var(--raikou-font-size-xs)',
  margin: 0,
  overflow: 'auto',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[1],
    color: theme.colors.black,
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[5],
    color: theme.colors.white,
  }),

  '&[data-block]': {
    padding: 'var(--raikou-spacing-xs)',
  },
}));
