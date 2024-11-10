import { css, keyframes } from '@stylefusion/react';

const rotateAnimation = keyframes({
  '100%': {
    transform: 'translateX(-50%) translateY(-50%) rotate(360deg)',
  },
});

export const LoaderMagicRootStyle = css({
  '--magic-size-xs': '35px',
  '--magic-size-sm': '42px',
  '--magic-size-md': '70px',
  '--magic-size-lg': '85px',
  '--magic-size-xl': '112px',
  '--magic-size': 'var(--magic-size-md)',
  '--magic-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--magic-size)',
  height: 'var(--magic-size)',
  overflow: 'hidden',
});

export const LoaderMagicBallStyle = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
  borderRadius: '50%',
  background: 'transparent',
  border: '2px solid transparent',
  borderTopColor: 'var(--magic-color)',
  animation: `${rotateAnimation} 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards`,
});
