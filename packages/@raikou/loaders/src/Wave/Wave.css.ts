import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '25%': {
    transform: 'skewY(25deg)',
  },
  '50%': {
    height: '100%',
    marginTop: 0,
  },
  '75%': {
    transform: 'skewY(-25deg)',
  },
});

export const LoaderWaveRootStyle = css({
  '--wave-size-xs': '15px',
  '--wave-size-sm': '18px',
  '--wave-size-md': '30px',
  '--wave-size-lg': '36px',
  '--wave-size-xl': '48px',
  '--wave-size': 'var(--wave-size-md)',
  '--wave-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'calc(var(--wave-size) * 2.5)',
  height: 'var(--wave-size)',
  overflow: 'hidden',
});

export const LoaderWaveBarStyle = css({
  position: 'absolute',
  width: 'calc(var(--wave-size) / 6)',
  height: 'calc(var(--wave-size) / 10)',
  marginTop: 'calc(var(--wave-size) - var(--wave-size) / 10)',
  transform: 'skewY(0deg)',
  backgroundColor: 'var(--wave-color)',
  animation: `${motionAnimation} 1.25s ease-in-out infinite`,
});
