import { css } from '@stylefusion/react';

export const MarkRootStyle = css(({ theme }) => ({
  color: 'var(--raikou-color-black)',

  ...theme.applyStyles('light', {
    backgroundColor: 'var(--mark-bg-light)',
  }),
  ...theme.applyStyles('dark', {
    backgroundColor: 'var(--mark-bg-dark)',
  }),
}));
