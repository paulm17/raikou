import { css, keyframes } from '@stylefusion/react';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(-360deg)' },
});

export const LoaderMetroRootStyle = css({
  '--metro-size-xs': '20px',
  '--metro-size-sm': '24px',
  '--metro-size-md': '40px',
  '--metro-size-lg': '49px',
  '--metro-size-xl': '64px',
  '--metro-size': 'var(--metro-size-md)',
  '--metro-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--metro-size)',
  height: 'var(--metro-size)',
  animation: `${rotate} 3s infinite ease-in`,
});

export const LoaderMetroBallStyle = css({
  position: 'absolute',
  width: 'var(--metro-size)',
  height: 'var(--metro-size)',
  opacity: 0,
  '&:before': {
    content: "''",
    position: 'absolute',
    left: '50%',
    top: 0,
    width: 'calc(var(--metro-size) / 8)',
    height: 'calc(var(--metro-size) / 8)',
    backgroundColor: 'var(--metro-color)',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
  },
});
