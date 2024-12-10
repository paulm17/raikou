import { css } from '@stylefusion/react';

export const ScrollAreaRootStyle = css({
  '--scrolarea-scrollbar-size': '12px',

  position: 'relative',
  overflow: 'hidden',
});

export const ScrollAreaViewportStyle = css({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  webkitOverflowScrolling: 'touch',
  width: '100%',
  height: '100%',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  "&:_where([data-scrollbars='xy'], [data-scrollbars='y'])": {
    "&:_where([data-offset-scrollbars='xy'], [data-offset-scrollbars='y'])": {
      paddingInlineEnd: 'var(--scrollarea-scrollbar-size)',
      paddingInlineStart: 'unset',
    },
  },

  "&:_where([data-scrollbars='xy'], [data-scrollbars='x'])": {
    "&:_where([data-offset-scrollbars='xy'], [data-offset-scrollbars='x'])": {
      paddingBottom: 'var(--scrollarea-scrollbar-size)',
    },
  },
});

export const ScrollAreaViewportInnerStyle = css({
  minWidth: '100%',
  display: 'table',
});

export const ScrollAreaScrollBarStyle = css(({ theme }) => ({
  userSelect: 'none',
  touchAction: 'none',
  boxSizing: 'border-box',
  transition: 'background-color 150ms ease, opacity 150ms ease',
  padding: 'calc(var(--scrollarea-scrollbar-size) / 5)',
  display: 'flex',
  backgroundColor: 'transparent',
  flexDirection: 'row',

  ...theme.applyMixin('hover', {
    '&:hover': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],

        '& > .thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[8],

        '& > .thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
      }),
    },
  }),

  "&:_where([data-hidden], [data-state='hidden'])": {
    display: 'none',
  },

  "&:_where([data-orientation='vertical'])": {
    width: 'var(--scrollarea-scrollbar-size)',
    top: 0,
    bottom: 'var(--sa-corner-width)',
    insetInlineEnd: 0,
  },

  "&:_where([data-orientation='horizontal'])": {
    height: 'var(--scrollarea-scrollbar-size)',
    flexDirection: 'column',
    bottom: 0,
    insetInlineStart: 0,
    insetInlineEnd: 'var(--sa-corner-width)',
  },
}));

export const ScrollAreaThumbStyle = css(({ theme }) => ({
  flex: 1,
  borderRadius: 'var(--scrollarea-scrollbar-size)',
  position: 'relative',
  transition: 'background-color 150ms ease',
  overflow: 'hidden',
  opacity: 'var(--thumb-opacity)',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: '44px',
    minHeight: '44px',
  },
  ...theme.applyStyles('light', {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  }),
}));

export const ScrollAreaCornerStyle = css(({ theme }) => ({
  position: 'absolute',
  opacity: 0,
  transition: 'opacity 150ms ease',
  display: 'block',
  insetInlineEnd: 0,
  bottom: 0,

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[0],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[8],
  }),

  '&:_where([data-hovered])': {
    opacity: 1,
  },

  '&:_where([data-hidden])': {
    display: 'none',
  },
}));
