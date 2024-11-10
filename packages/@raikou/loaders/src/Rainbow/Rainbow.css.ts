import { css, keyframes } from '@stylefusion/react';

const rotateAnimation = keyframes({
  '0%': {
    borderWidth: '10px',
  },
  '25%': {
    borderWidth: '3px',
  },
  '50%': {
    transform: 'rotate(115deg)',
    borderWidth: '10px',
  },
  '75%': {
    borderWidth: '3px',
  },
  '100%': {
    borderWidth: '10px',
  },
});

export const LoaderRainbowRootStyle = css({
  '--rainbow-size-xs': '25px',
  '--rainbow-size-sm': '30px',
  '--rainbow-size-md': '50px',
  '--rainbow-size-lg': '61px',
  '--rainbow-size-xl': '80px',
  '--rainbow-size': 'var(--rainbow-size-md)',
  '--rainbow-color': 'var(--raikou-primary-color-filled)',
  width: 'var(--rainbow-size)',
  height: 'calc(var(--rainbow-size) / 2)',
  overflow: 'hidden',
});

export const LoaderRainbowLineStyle = css({
  display: 'block',
  width: 'var(--rainbow-size)',
  height: 'var(--rainbow-size)',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderTopColor: 'var(--rainbow-color)',
  borderRightColor: 'var(--rainbow-color)',
  borderLeftColor: 'transparent',
  borderBottomColor: 'transparent',
  boxSizing: 'border-box',
  transform: 'rotate(-200deg)',
  animation: `${rotateAnimation} 3s ease-in-out infinite`,
});
