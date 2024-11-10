import { css, keyframes } from '@stylefusion/react';

const motionAnimation = keyframes({
  '0%': {
    transform: 'scale(0.6)',
    opacity: 0,
  },
  '50%, 100%': {
    transform: 'scale(1)',
  },
});

export const LoaderBarsLoaderStyle = css({
  position: 'relative',
  width: 'var(--loader-size)',
  height: 'var(--loader-size)',
  display: 'flex',
  gap: 'calc(var(--loader-size) / 5)',
});

export const LoaderBarStyle = css({
  flex: 1,
  backgroundColor: 'var(--loader-color)',
  animation: `${motionAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`,
  borderRadius: '2px',

  '&:nth-of-type(1)': {
    animationDelay: '-240ms',
  },
  '&:nth-of-type(2)': {
    animationDelay: '-120ms',
  },
  '&:nth-of-type(3)': {
    animationDelay: 0,
  },
});
