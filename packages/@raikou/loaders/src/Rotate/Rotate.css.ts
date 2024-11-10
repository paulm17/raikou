import { css, keyframes } from '@stylefusion/react';

const rotateLoaderAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(180deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const LoaderRotateBallStyle = {
  backgroundColor: 'var(--rotate-color)',
  width: 'var(--rotate-size)',
  height: 'var(--rotate-size)',
  borderRadius: '100%',
};

export const LoaderRotateRootStyle = css({
  '--rotate-size-xs': '8px',
  '--rotate-size-sm': '9px',
  '--rotate-size-md': '15px',
  '--rotate-size-lg': '18px',
  '--rotate-size-xl': '24px',
  '--rotate-size': 'var(--rotate-size-md)',
  '--rotate-color': 'var(--raikou-primary-color-filled)',
  ...LoaderRotateBallStyle,
  display: 'inline-block',
  position: 'relative',
  animation: `${rotateLoaderAnimation} calc(1s * var(--rotate-speed-multiplier)) 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86)`,
});

const LoaderRotateStyle = {
  opacity: 0.8,
  position: 'absolute',
  top: 0,
};

export const LoaderRotate1Style = css({
  left: 'calc(1 * calc(20px + var(--rotate-size)))',
  ...LoaderRotateBallStyle,
  ...LoaderRotateStyle,
});

export const LoaderRotate2Style = css({
  left: 'calc(-1 * calc(20px + var(--rotate-size)))',
  ...LoaderRotateBallStyle,
  ...LoaderRotateStyle,
});
