import { css } from '@stylefusion/react';

export const PaperRootStyle = css(({ theme }) => ({
  '--paper-radius': 'var(--raikou-radius-default)',

  outline: 0,
  webkitTapHighlightColor: 'transparent',
  display: 'block',
  touchAction: 'manipulation',
  textDecoration: 'none',
  borderRadius: 'var(--paper-radius)',
  boxShadow: 'var(--paper-shadow)',
  backgroundColor: 'var(--raikou-color-body)',

  '&:_where([data-with-border])': {
    ...theme.applyStyles('light', {
      border: `rem(1px) solid ${theme.colors.gray[3]}`,
    }),
    ...theme.applyStyles('dark', {
      border: `rem(1px) solid ${theme.colors.dark[4]}`,
    }),
  },
}));
