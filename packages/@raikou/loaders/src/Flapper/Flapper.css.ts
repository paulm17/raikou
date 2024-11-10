import { css } from '@stylefusion/react';

export const LoaderFlapperRootStyle = css({
  '--flapper-size-xs': '15px',
  '--flapper-size-sm': '18px',
  '--flapper-size-md': '30px',
  '--flapper-size-lg': '36px',
  '--flapper-size-xl': '48px',
  '--flapper-size': 'var(--flapper-size-md)',
  '--flapper-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'var(--flapper-size)',
  height: 'var(--flapper-size)',
});

export const LoaderFlapperBallStyle = css({
  position: 'absolute',
  width: 'calc(var(--flapper-size) / 2)',
  height: 'calc(var(--flapper-size) / 2)',
  backgroundColor: 'var(--flapper-color)',
  borderRadius: '50%',
});
