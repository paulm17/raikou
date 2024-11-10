import { css, keyframes } from '@stylefusion/react';

const fadeLoaderAnimation = keyframes({
  '50%': {
    opacity: '0.3',
  },
  '100%': {
    opacity: '1',
  },
});

export const LoaderFadeRootStyle = css({
  '--fade-size-xs': '30px',
  '--fade-size-sm': '37px',
  '--fade-size-md': '60px',
  '--fade-size-lg': '73px',
  '--fade-size-xl': '97px',
  '--fade-size': 'var(--fade-size-md)',
  '--fade-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'inherit',
  fontSize: 0,
  top: 'calc(var(--fade-size) / 3)',
  left: 'calc(var(--fade-size) / 3)',
  width: 'var(--fade-size)',
  height: 'var(--fade-size)',
});

const LoaderFadeStyle = {
  position: 'absolute',
  width: 'calc(var(--fade-size) / 12)',
  height: 'calc(var(--fade-size) / 4)',
  margin: 'var(--fade-margin)',
  backgroundColor: 'var(--fade-color)',
  borderRadius: 'calc(var(--fade-size) * 0.042)',
  transition: '2s',
};

export const LoaderFade1Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / 3)',
  left: 0,
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(1s * 0.12) infinite ease-in-out`,
});

export const LoaderFade2Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / 3 / 1.4142)',
  left: 'calc(var(--fade-size) / 3 / 1.4142)',
  transform: 'rotate(-45deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(2s * 0.12) infinite ease-in-out`,
});

export const LoaderFade3Style = css({
  ...LoaderFadeStyle,
  top: 0,
  left: 'calc(var(--fade-size) / 3)',
  transform: 'rotate(90deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(3s * 0.12) infinite ease-in-out`,
});

export const LoaderFade4Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / 3 / -1.4142)',
  left: 'calc(var(--fade-size) / 3 / 1.4142)',
  transform: 'rotate(45deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(4s * 0.12) infinite ease-in-out`,
});

export const LoaderFade5Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / -3)',
  left: 0,
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(5s * 0.12) infinite ease-in-out`,
});

export const LoaderFade6Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / 3 / -1.4142)',
  left: 'calc(var(--fade-size) / 3 / -1.4142)',
  transform: 'rotate(-45deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(6s * 0.12) infinite ease-in-out`,
});

export const LoaderFade7Style = css({
  ...LoaderFadeStyle,
  top: 0,
  left: 'calc(var(--fade-size) / -3)',
  transform: 'rotate(90deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(7s * 0.12) infinite ease-in-out`,
});

export const LoaderFade8Style = css({
  ...LoaderFadeStyle,
  top: 'calc(var(--fade-size) / 3 / 1.4142)',
  left: 'calc(var(--fade-size) / 3 / -1.4142)',
  transform: 'rotate(45deg)',
  animation: `${fadeLoaderAnimation} calc(1.2s / var(--fade-speed-multiplier)) calc(8s * 0.12) infinite ease-in-out`,
});
