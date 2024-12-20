import { css } from '@stylefusion/react';

export const AppShellRootStyle = css(({ theme }) => ({
  '&[data-resizing]': {
    '--app-shell-transition-duration': '0ms !important',
  },

  '&[data-disabled]': {
    '--app-shell-header-offset-y': '0rem !important',
    '--app-shell-navbar-offset-y': '0rem !important',
  },

  ...theme.applyStyles('light', {
    '--app-shell-border-color': theme.colors.gray[3],
  }),

  ...theme.applyStyles('dark', {
    '--app-shell-border-color': theme.colors.dark[4],
  }),
}));

const navBarAsideHeaderMainFooter = {
  transitionDuration: 'var(--app-shell-transition-duration)',
  transitionTimingFunction: 'var(--app-shell-transition-timing-function)',
};

const navBarAside = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--raikou-color-body)',
  transitionProperty: 'transform, top, height',
};

export const AppShellIconListStyle = css(({ theme }) => ({
  insetInlineStart: 0,
  width: 'var(--app-shell-iconlist-width)',
  transform: 'var(--app-shell-iconlist-transform)',
  zIndex: 'var(--app-shell-iconlist-z-index)',
  opacity: 'var(--app-shell-iconlist-opacity, 1)',

  ...theme.applyMixin('where-rtl', {
    transform: 'var(--app-shell-iconlist-transform-hover)',
  }),

  '&:_where([data-with-border])': {
    borderInlineEnd: '1px solid var(--app-shell-border-color)',
  },

  top: 'var(--app-shell-iconlist-offset-y)',
  height: 'var(--app-shell-iconlist-height)',

  ...navBarAsideHeaderMainFooter,
  ...navBarAside,
}));

export const AppShellNavbarStyle = css(({ theme }) => ({
  insetInlineStart: 'var(--app-shell-iconlist-offset, 0rem)',
  width: 'var(--app-shell-navbar-width)',
  transform: 'var(--app-shell-navbar-transform)',
  zIndex: 'var(--app-shell-navbar-z-index)',

  ...theme.applyMixin('where-rtl', {
    transform: 'var(--app-shell-navbar-transform-rtl)',
  }),

  '&:_where([data-with-border])': {
    borderInlineEnd: '1px solid var(--app-shell-border-color)',
  },

  top: 'var(--app-shell-navbar-offset-y)',
  height: 'var(--app-shell-navbar-height)',

  ...navBarAsideHeaderMainFooter,
  ...navBarAside,
}));

export const AppShellAsideStyle = css(({ theme }) => ({
  insetInlineEnd: 0,
  width: 'var(--app-shell-aside-width)',
  transform: 'var(--app-shell-aside-transform)',
  zIndex: 'var(--app-shell-aside-z-index)',

  ...theme.applyMixin('where-rtl', {
    transform: 'var(--app-shell-aside-transform-rtl)',
  }),

  '&:_where([data-with-border])': {
    borderInlineStart: '1px solid var(--app-shell-border-color)',
  },

  top: 'var(--app-shell-aside-offset-y)',
  height: 'var(--app-shell-aside-height)',

  ...navBarAsideHeaderMainFooter,
  ...navBarAside,
}));

export const AppShellMainStyle = css({
  paddingInlineStart:
    'calc(var(--app-shell-navbar-offset, 0rem) + var(--app-shell-iconlist-offset, 0rem) + var(--app-shell-padding))',
  paddingInlineEnd: 'calc(var(--app-shell-aside-offset, 0rem) + var(--app-shell-padding))',
  paddingTop: 'calc(var(--app-shell-header-offset-y, 0rem) + var(--app-shell-padding))',
  paddingBottom: 'calc(var(--app-shell-footer-offset, 0rem) + var(--app-shell-padding))',
  minHeight: '100dvh',
  transitionProperty: 'padding',

  ...navBarAsideHeaderMainFooter,
});

const headerFooter = {
  position: 'fixed',
  insetInlineStart: 'var(--app-shell-header-start-x, 0rem)',
  insetInlineEnd: 'var(--app-shell-aside-end-x, 0rem)',
  transitionProperty: 'transform, left, right',
  backgroundColor: 'var(--raikou-color-body)',
};

export const AppShellHeaderStyle = css({
  top: 0,
  height: 'var(--app-shell-header-height)',
  transform: 'var(--app-shell-header-transform)',
  zIndex: 'var(--app-shell-header-z-index)',

  '&:_where([data-with-border])': {
    borderBottom: '1px solid var(--app-shell-border-color)',
  },

  ...headerFooter,
  ...navBarAsideHeaderMainFooter,
});

export const AppShellFooterStyle = css({
  bottom: 0,
  height: 'calc(var(--app-shell-footer-height) + env(safe-area-inset-bottom))',
  paddingBottom: 'env(safe-area-inset-bottom)',
  transform: 'var(--app-shell-footer-transform)',
  zIndex: 'var(--app-shell-footer-z-index)',

  '&:_where([data-with-border])': {
    borderTop: '1px solid var(--app-shell-border-color)',
  },

  ...headerFooter,
  ...navBarAsideHeaderMainFooter,
});

export const AppShellSectionStyle = css({
  flexGrow: 0,

  '&:_where([data-grow])': {
    flexGrow: 1,
  },
});
