import { css } from '@stylefusion/react';

export const LoaderHoopRootStyle = css({
  '--hoop-size-xs': '22px',
  '--hoop-size-sm': '27px',
  '--hoop-size-md': '45px',
  '--hoop-size-lg': '55px',
  '--hoop-size-xl': '72px',
  '--hoop-size': 'var(--hoop-size-md)',
  '--hoop-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--hoop-size)',
  height: 'var(--hoop-size)',
  perspective: '600px',
  transformStyle: 'preserve-3d',
});

export const LoaderHoopBallStyle = css({
  position: 'absolute',
  width: 'calc(var(--hoop-size) / 1.2)',
  height: 'calc(var(--hoop-size) / 1.2)',
  border: 'calc(var(--hoop-size) / 8) solid var(--hoop-color)',
  borderRadius: '50%',
  background: 'transparent',
  transformStyle: 'preserve-3d',
  transform: 'scale(0) rotate(60deg)',
});
