import { css } from '@stylefusion/react';

export const DropzoneRootStyle = css(({ theme }) => ({
  position: 'relative',
  border: '1px dashed',
  color: 'var(--raikou-color-text)',
  padding: 'var(--raikou-spacing-md)',
  borderRadius: 'var(--dropzone-radius)',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background-color 100ms ease, border-color 100ms ease',

  '&:_where([data-loading]), &:_where(:not([data-activate-on-click]))': {
    cursor: 'default',
  },

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.dark[4],
  }),

  ...theme.applyMixin('hover', {
    '&:_where([data-activate-on-click]:not([data-loading])):hover': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[5],
      }),
    },
  }),

  '&:_where([data-accept])': {
    backgroundColor: 'var(--dropzone-accept-bg)',
    borderColor: 'var(--dropzone-accept-bg)',
    color: 'var(--dropzone-accept-color)',
  },

  '&:_where([data-reject])': {
    backgroundColor: 'var(--dropzone-reject-bg)',
    borderColor: 'var(--dropzone-reject-bg)',
    color: 'var(--dropzone-reject-color)',
  },
}));

export const DropzoneInnerStyle = css({
  pointerEvents: 'none',
  userSelect: 'none',

  '&:_where([data-enable-pointer-events])': {
    pointerEvents: 'all',
  },
});

export const DropzoneFullScreenStyle = css({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'var(--raikou-color-body)',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--raikou-spacing-xs)',
  transition: 'opacity 100ms ease',

  '& .dropzone': {
    flex: 1,
  },
});
