import { css, keyframes } from '@stylefusion/react';

const dotRotateLoaderAnimation = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

const dotBounceLoaderAnimation = keyframes({
  '0%, 100%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1.0)' },
});

export const LoaderDotLoaderStyle = css({
  '--dot-size-xs': '30px',
  '--dot-size-sm': '37px',
  '--dot-size-md': '60px',
  '--dot-size-lg': '73px',
  '--dot-size-xl': '97px',
  '--dot-size': 'var(--dot-size-md)',
  '--dot-color': 'var(--raikou-primary-color-filled)',
  display: 'inherit',
  position: 'relative',
  width: 'var(--dot-size)',
  height: 'var(--dot-size)',
  animation: `${dotRotateLoaderAnimation} calc(2s / var(--dot-speed-multiplier)) 0s infinite linear`,
});

const dotStyle = {
  position: 'absolute',
  height: 'calc(var(--dot-size) * 0.5)',
  width: 'calc(var(--dot-size) * 0.5)',
  backgroundColor: 'var(--dot-color)',
  borderRadius: '100%',
};

export const LoaderDot1Style = css({
  ...dotStyle,
  top: '0',
  bottom: 'auto',
  animation: `${dotBounceLoaderAnimation} calc(2s / var(--dot-speed-multiplier)) 0s infinite linear`,
});

export const LoaderDot2Style = css({
  ...dotStyle,
  top: 'auto',
  bottom: '0',
  animation: `${dotBounceLoaderAnimation} calc(2s / var(--dot-speed-multiplier)) 1s infinite linear`,
});
