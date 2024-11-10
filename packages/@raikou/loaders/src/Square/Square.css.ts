import { css, keyframes } from '@stylefusion/react';

const squareLoaderAnimation = keyframes({
  '25%': {
    transform: 'rotateX(180deg) rotateY(0)',
  },
  '50%': {
    transform: 'rotateX(180deg) rotateY(180deg)',
  },
  '75%': {
    transform: 'rotateX(0) rotateY(180deg)',
  },
  '100%': {
    transform: 'rotateX(0) rotateY(0)',
  },
});

export const LoaderSquareRootStyle = css({
  '--square-size-xs': '25px',
  '--square-size-sm': '30px',
  '--square-size-md': '50px',
  '--square-size-lg': '61px',
  '--square-size-xl': '80px',
  '--square-size': 'var(--square-size-md)',
  '--square-color': 'var(--raikou-primary-color-filled)',
  backgroundColor: 'var(--square-color)',
  width: 'var(--square-size)',
  height: 'var(--square-size)',
  display: 'inline-block',
  animation: `${squareLoaderAnimation} calc(3s * var(--square-speed-multiplier)) 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)`,
});
