import { css, keyframes } from '@stylefusion/react';

const horizontalBarLongLoaderAnimation = keyframes({
  '0%': {
    left: '-35%',
    right: '100%',
  },
  '60%': {
    left: '100%',
    right: '-90%',
  },
  '100%': {
    left: '100%',
    right: '-90%',
  },
});

const horizontalBarShortLoaderAnimation = keyframes({
  '0%': {
    left: '-200%',
    right: '100%',
  },
  '60%': {
    left: '107%',
    right: '-8%',
  },
  '100%': {
    left: '107%',
    right: '-8%',
  },
});

export const LoaderHorizontalBarRootStyle = css({
  '--horizontal-bar-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'inherit',
  width: 'var(--horizontal-bar-width)',
  height: 'var(--horizontal-bar-height)',
  overflow: 'hidden',
  backgroundColor: 'var(--horizontal-bar-color)',
  backgroundClip: 'padding-box',
});

const LoaderHorizontalBarStyle = {
  position: 'absolute',
  height: 'var(--horizontal-bar-height)',
  overflow: 'hidden',
  backgroundColor:
    'var(--horizontal-bar-indicator-color, darken(var(--horizontal-bar-color), 0.4))',
  backgroundClip: 'padding-box',
  display: 'block',
  borderRadius: 2,
  willChange: 'left, right',
};

export const LoaderHorizontalBar1Style = css({
  ...LoaderHorizontalBarStyle,
  animation: `${horizontalBarLongLoaderAnimation} calc(2.1s / var(--horizontal-bar-speed-multiplier)) cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`,
});

export const LoaderHorizontalBar2Style = css({
  ...LoaderHorizontalBarStyle,
  animation: `${horizontalBarShortLoaderAnimation} calc(2.1s / var(--horizontal-bar-speed-multiplier)) calc(1.15s / var(--horizontal-bar-speed-multiplier)) cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});
