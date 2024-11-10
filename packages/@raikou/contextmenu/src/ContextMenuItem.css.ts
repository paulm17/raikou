import { css } from '@stylefusion/react';

export const contextMenuItemButtonStyle = css(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 'calc(var(--raikou-spacing-sm) / 2)',
  paddingBottom: 'calc(var(--raikou-spacing-sm) / 2)',
  paddingLeft: 'var(--raikou-spacing-sm)',
  paddingRight: 'var(--raikou-spacing-sm)',
  color: 'var(--raikou-contextmenu-item-button-color)',
  transition: 'background 0.2s',
  ...theme.applyStyles('light', {
    '&[disabled]': {
      cursor: 'not-allowed',
      color: theme.colors.gray[5],
    },
    '&:hover:not([disabled])': {
      background: 'var(--raikou-contextmenu-item-button-hover-bg-color-light)',
    },
    '&:active:not([disabled])': {
      background: 'var(--raikou-contextmenu-item-button-pressed-bg-color-light)',
    },
  }),
  ...theme.applyStyles('dark', {
    '&[disabled]': {
      cursor: 'not-allowed',
      color: theme.colors.dark[3],
    },
    '&:hover:not([disabled])': {
      background: 'var(--raikou-contextmenu-item-button-hover-bg-color-dark)',
    },
    '&:active:not([disabled])': {
      background: 'var(--raikou-contextmenu-item-button-pressed-bg-color-dark)',
    },
  }),
}));

export const contextMenuItemButtonTitleStyle = css({
  fontSize: 'var(--raikou-font-size-sm)',
  whiteSpace: 'nowrap',
  flexGrow: 1,
});
