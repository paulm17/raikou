import { css, keyframes } from '@stylefusion/react';

const rotateAnimation = keyframes({
  to: {
    transform: 'rotate(450deg)',
  },
});

export const LoaderCombRootStyle = css({
  '--comb-size-xs': '50px',
  '--comb-size-sm': '61px',
  '--comb-size-md': '100px',
  '--comb-size-lg': '122px',
  '--comb-size-xl': '161px',
  '--comb-size': 'var(--comb-size-md)',
  '--comb-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  width: 'var(--comb-size)',
  height: 'var(--comb-size)',
});

export const LoaderCombBarStyle = css({
  position: 'absolute',
  width: 'calc(var(--comb-size) / 60)',
  height: 'calc(var(--comb-size) / 5)',
  left: 'calc(var(--comb-size) * 9px)',
  transformOrigin: 'center bottom',
  transform: 'rotate(90deg)',
  backgroundColor: 'var(--comb-color)',
  animation: `${rotateAnimation} 3s ease infinite`,
});
