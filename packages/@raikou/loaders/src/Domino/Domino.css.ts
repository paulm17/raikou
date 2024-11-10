import { css } from '@stylefusion/react';

export const LoaderDominoRootStyle = css({
  '--domino-size-xs': '50px',
  '--domino-size-sm': '61px',
  '--domino-size-md': '100px',
  '--domino-size-lg': '122px',
  '--domino-size-xl': '161px',
  '--domino-size': 'var(--domino-size-md)',
  '--domino-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  width: 'var(--domino-size)',
  height: 'calc(var(--domino-size) / 5)',
});

export const LoaderDominoBarStyle = css({
  position: 'absolute',
  right: 0,
  width: 'calc(var(--domino-size) / 30)',
  height: 'calc(var(--domino-size) / 5)',
  transformOrigin: '50% 100%',
  backgroundColor: 'var(--domino-color)',
  '&:nth-child(1)': {
    opacity: 0.22,
  },
});
