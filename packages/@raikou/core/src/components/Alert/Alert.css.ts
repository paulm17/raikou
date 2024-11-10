import { css } from '@stylefusion/react';

export const AlertRootStyle = css({
  '--alert-radius': 'var(--raikou-radius-default)',
  '--alert-bg': 'var(--raikou-primary-color-light)',
  '--alert-bd': '1px solid transparent',
  '--alert-color': 'var(--raikou-primary-color-light-color)',

  padding: 'var(--raikou-spacing-md) var(--raikou-spacing-md)',
  borderRadius: 'var(--alert-radius)',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'var(--alert-bg)',
  border: 'var(--alert-bd)',
  color: 'var(--alert-color)',
});

export const AlertWrapperStyle = css({
  display: 'flex',
});

export const AlertBodyStyle = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--raikou-spacing-xs)',
});

export const AlertTitleStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 'var(--raikou-font-size-sm)',
  fontWeight: 700,

  '&:_where([data-with-close-button])': {
    paddingInlineEnd: 'var(--raikou-spacing-md)',
  },
});

export const AlertLabelStyle = css({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const AlertIconStyle = css({
  lineHeight: 1,
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginInlineEnd: 'var(--raikou-spacing-md)',
  marginTop: '1px',
});

export const AlertMessageStyle = css(({ theme }) => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  fontSize: 'var(--raikou-font-size-sm)',

  ...theme.applyStyles('light', {
    color: theme.colors.black,
  }),

  ...theme.applyStyles('dark', {
    color: theme.colors.white,
  }),

  "&:_where([data-variant='filled'])": {
    color: 'var(--alert-color)',
  },

  "&:_where([data-variant='white'])": {
    color: theme.colors.black,
  },
}));

export const AlertCloseButtonStyle = css({
  width: '20px',
  height: '20px',
  color: 'var(--alert-color)',
});
