import { css } from '@stylefusion/react';

export const ThemeIconRootStyle = css({
  '--ti-size-xs': '18px',
  '--ti-size-sm': '22px',
  '--ti-size-md': '28px',
  '--ti-size-lg': '34px',
  '--ti-size-xl': '44px',
  '--ti-size': 'var(--ti-size-md)',

  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  userSelect: 'none',

  width: 'var(--ti-size)',
  height: 'var(--ti-size)',
  minWidth: 'var(--ti-size)',
  minHeight: 'var(--ti-size)',
  borderRadius: 'var(--ti-radius, var(--raikou-radius-default))',
  background: 'var(--ti-bg, var(--raikou-primary-color-filled))',
  color: 'var(--ti-color, var(--raikou-color-white))',
  border: 'var(--ti-bd, 1px solid transparent)',
});
