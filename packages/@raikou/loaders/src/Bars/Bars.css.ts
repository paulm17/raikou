import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '0%': { width: 'calc(var(--bars-size) / 20)' },
  '50%': { width: 'calc(var(--bars-size) / 6)' },
  '100%': { width: 'calc(var(--bars-size) / 20)' },
});

export const LoaderBarsRootStyle = css({
  '--bars-size-xs': '20px',
  '--bars-size-sm': '24px',
  '--bars-size-md': '40px',
  '--bars-size-lg': '49px',
  '--bars-size-xl': '64px',
  '--bars-size': 'var(--bars-size-md)',
  '--bars-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--bars-size)',
  height: 'var(--bars-size)',
});

const LoaderBarsStyle = {
  position: 'absolute',
  top: 0,
  width: 'calc(var(--bars-size) / 20)',
  height: 'var(--bars-size)',
  backgroundColor: 'var(--bars-color)',
};

export const LoaderBars1Style = css({
  ...LoaderBarsStyle,
  left: 'calc(1 * (var(--bars-size) / 5 + var(--bars-size) / 25) - var(--bars-size) / 12)',
  animation: `${motionAnimation} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
  animationDelay: 'calc(1 * 0.15s)',
});

export const LoaderBars2Style = css({
  ...LoaderBarsStyle,
  left: 'calc(2 * (var(--bars-size) / 5 + var(--bars-size) / 25) - var(--bars-size) / 12)',
  animation: `${motionAnimation} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
  animationDelay: 'calc(2 * 0.15s)',
});

export const LoaderBars3Style = css({
  ...LoaderBarsStyle,
  left: 'calc(3 * (var(--bars-size) / 5 + var(--bars-size) / 25) - var(--bars-size) / 12)',
  animation: `${motionAnimation} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
  animationDelay: 'calc(3 * 0.15s)',
});

export const LoaderBars4Style = css({
  ...LoaderBarsStyle,
  left: 'calc(4 * (var(--bars-size) / 5 + var(--bars-size) / 25) - var(--bars-size) / 12)',
  animation: `${motionAnimation} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
  animationDelay: 'calc(4 * 0.15s)',
});

export const LoaderBars5Style = css({
  ...LoaderBarsStyle,
  left: 'calc(5 * (var(--bars-size) / 5 + var(--bars-size) / 25) - var(--bars-size) / 12)',
  animation: `${motionAnimation} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
  animationDelay: 'calc(5 * 0.15s)',
});
