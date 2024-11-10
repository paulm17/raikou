import { css } from '@stylefusion/react';

export const DrawerRootStyle = css({
  '--drawer-size-xs': '320px',
  '--drawer-size-sm': '380px',
  '--drawer-size-md': '440px',
  '--drawer-size-lg': '620px',
  '--drawer-size-xl': '780px',
  '--drawer-size': 'var(--drawer-size-md)',
  '--drawer-offset': '0rem',
});

export const DrawerHeaderStyle = css({
  zIndex: 1000,
});

export const DrawerContentStyle = css({
  flex: 'var(--drawer-flex, 0 0 var(--drawer-size))',
  height: 'calc(100% - var(--drawer-offset) * 2)',
  margin: 'var(--drawer-offset)',
  maxWidth: 'calc(100% - var(--drawer-offset) * 2)',
  maxHeight: 'calc(100% - var(--drawer-offset) * 2)',
  overflowY: 'auto',
});

export const DrawerInnerStyle = css({
  display: 'flex',
  justifyContent: 'var(--drawer-justify, flex-start)',
  alignItems: 'var(--drawer-align, flex-start)',
});
