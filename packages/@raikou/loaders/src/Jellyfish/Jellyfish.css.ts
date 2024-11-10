import { css, keyframes } from '@stylefusion/react';

const motion = keyframes({
  '0%': {
    transform: `translateY(calc(var(--jellyfish-size) / -5))`,
  },
  '50%': {
    transform: `translateY(calc(var(--jellyfish-size) / 4))`,
  },
  '100%': {
    transform: `translateY(calc(var(--jellyfish-size) / -5))`,
  },
});

export const LoaderJellyfishRootStyle = css({
  '--jellyfish-size-xs': '30px',
  '--jellyfish-size-sm': '37px',
  '--jellyfish-size-md': '60px',
  '--jellyfish-size-lg': '73px',
  '--jellyfish-size-xl': '97px',
  '--jellyfish-size': 'var(--jellyfish-size-md)',
  '--jellyfish-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--jellyfish-size)',
  height: 'var(--jellyfish-size)',
});

export const LoaderJellyfishRingStyle = css({
  position: 'absolute',
  border: '2px solid var(--jellyfish-color)',
  borderRadius: '50%',
  background: 'transparent',
  animation: `${motion} 2.5s ease infinite`,
});
