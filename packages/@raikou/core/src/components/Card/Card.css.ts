import { css } from '@stylefusion/react';

export const CardRootStyle = css(({ theme }) => ({
  '--card-padding': 'var(--raikou-spacing-md)',

  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--card-padding)',
  color: 'var(--raikou-color-text)',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
  }),
  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[6],
  }),
}));

export const CardSectionStyle = css(({ theme }) => ({
  display: 'block',
  marginInline: 'calc(var(--card-padding) * -1)',

  '&:_where(:first-child)': {
    marginTop: 'calc(var(--card-padding) * -1)',
    borderTop: 'none !important',
  },

  '&:_where(:last-child)': {
    marginBottom: 'calc(var(--card-padding) * -1)',
    borderBottom: 'none !important',
  },

  '&:_where([data-inherit-padding])': {
    paddingInline: 'var(--card-padding)',
  },

  '&:_where([data-with-border])': {
    borderTop: '1px solid',
    borderBottom: '1px solid',
  },

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[3],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),

  '& + &': {
    borderTop: 'none !important',
  },
}));
