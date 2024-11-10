import { css, keyframes } from '@stylefusion/react';

const motionPlayerLeftAnimation = keyframes({
  '0%': { top: 0 },
  '50%': { top: 'calc(var(--pong-size) / 3.5)' },
  '100%': { top: 0 },
});

const motionPlayerRightAnimation = keyframes({
  '0%': { top: 'calc(var(--pong-size) / 3.5)' },
  '50%': { top: 0 },
  '100%': { top: 'calc(var(--pong-size) / 3.5)' },
});

const motionBallAnimation = keyframes({
  '0%': {
    top: 'calc(var(--pong-size) / 3.5 - var(--pong-size) / 8)',
    left: 'calc(var(--pong-size) / 12)',
  },
  '25%': {
    top: 'calc(var(--pong-size) / 3.5)',
    left: 'calc(var(--pong-size) - var(--pong-size) / 8)',
  },
  '50%': {
    top: 'calc(var(--pong-size) / 1.75 - var(--pong-size) / 8)',
    left: 'calc(var(--pong-size) / 12)',
  },
  '75%': {
    top: 'calc(var(--pong-size) / 3.5)',
    left: 'calc(var(--pong-size) - var(--pong-size) / 8)',
  },
  '100%': {
    top: 'calc(var(--pong-size) / 3.5 - var(--pong-size) / 8)',
    left: 'calc(var(--pong-size) / 12)',
  },
});

export const LoaderPongRootStyle = css({
  '--pong-size-xs': '30px',
  '--pong-size-sm': '37px',
  '--pong-size-md': '60px',
  '--pong-size-lg': '73px',
  '--pong-size-xl': '97px',
  '--pong-size': 'var(--pong-size-md)',
  '--pong-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  width: 'var(--pong-size)',
  height: 'calc(var(--pong-size) / 1.75)',
});

export const LoaderPongBallStyle = css({
  position: 'absolute',
  width: 'calc(var(--pong-size) / 8)',
  height: 'calc(var(--pong-size) / 8)',
  borderRadius: '50%',
  backgroundColor: 'var(--pong-color)',
  animation: `${motionBallAnimation} 2s linear infinite`,
});

const PlayerStyle = {
  position: 'absolute',
  width: 'calc(var(--pong-size) / 12)',
  height: 'calc(var(--pong-size) / 3)',
  backgroundColor: 'var(--pong-color)',
  borderRadius: '4px',
};

export const LoaderPongPlayerLeftStyle = css({
  ...PlayerStyle,
  left: 0,
  right: 'var(--pong-size)',
  animation: `${motionPlayerLeftAnimation} 2s linear infinite`,
});

export const LoaderPongPlayerRightStyle = css({
  ...PlayerStyle,
  left: 'var(--pong-size)',
  right: 0,
  animation: `${motionPlayerRightAnimation} 2s linear infinite`,
});
