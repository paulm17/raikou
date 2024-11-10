import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const LoaderPulseRootStyle = css({
  '--pulse-size-xs': '18px',
  '--pulse-size-sm': '22px',
  '--pulse-size-md': '36px',
  '--pulse-size-lg': '44px',
  '--pulse-size-xl': '58px',
  '--pulse-size': 'var(--pulse-size-md)',
  '--pulse-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--pulse-size)',
  height: 'calc(var(--pulse-size) / 2.5)',
});

export const LoaderPulseCubeStyle = css({
  position: 'absolute',
  top: 0,
  width: 'calc(var(--pulse-size) / 5)',
  height: 'calc(var(--pulse-size) / 2.5)',
  transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
  backgroundColor: 'var(--pulse-color)',
  animation: `${motionAnimation} 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite`,
});
