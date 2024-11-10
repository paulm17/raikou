import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '0%': { transform: 'translateX(0) scale(1)' },
  '25%': { transform: 'translateX(calc(var(--ball-size) / 2)) scale(0.25)' },
  '50%': { transform: 'translateX(0) scale(1)' },
  '75%': { transform: 'translateX(calc(var(--ball-size) / -2)) scale(0.25)' },
  '100%': { transform: 'translateX(0) scale(1)' },
});

export const LoaderBallRootStyle = css({
  '--ball-size-xs': '20px',
  '--ball-size-sm': '24px',
  '--ball-size-md': '40px',
  '--ball-size-lg': '49px',
  '--ball-size-xl': '64px',
  '--ball-size': 'var(--ball-size-md)',
  '--ball-color': 'var(--raikou-primary-color-filled)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LoaderBallStyle = css({
  width: 'calc(var(--ball-size) / 3)',
  height: 'calc(var(--ball-size) / 3)',
  borderRadius: '50%',
  backgroundColor: 'var(--ball-color)',
  animation: `${motionAnimation} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});
