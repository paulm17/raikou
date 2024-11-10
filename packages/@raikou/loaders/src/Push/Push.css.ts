import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '15%': {
    transform: 'scaleY(1) translateX(10px)',
  },
  '90%': {
    transform: 'scaleY(0.05) translateX(-5px)',
  },
  '100%': {
    transform: 'scaleY(0.05) translateX(-5px)',
  },
});

export const LoaderPushRootStyle = css({
  '--push-size-xs': '15px',
  '--push-size-sm': '18px',
  '--push-size-md': '30px',
  '--push-size-lg': '36px',
  '--push-size-xl': '48px',
  '--push-size': 'var(--push-size-md)',
  '--push-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(var(--push-size) * 2.5)',
  height: 'var(--push-size)',
  overflow: 'hidden',
});

export const LoaderPushBarStyle = css({
  position: 'absolute',
  top: 0,
  width: 'calc(var(--push-size) / 5)',
  height: '100%',
  transform: 'scaleY(0.05) translateX(-5px)',
  backgroundColor: 'var(--push-color)',
  animation: `${motionAnimation} 1.25s ease-in-out infinite`,
});
