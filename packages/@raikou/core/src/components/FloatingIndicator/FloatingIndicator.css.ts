import { css } from '@stylefusion/react';

export const FloatingIndicatorRootStyle = css({
  '--transition-duration': '150ms',

  top: 0,
  left: 0,
  position: 'absolute',
  zIndex: 0,
  transitionProperty: 'transform, width, height',
  transitionTimingFunction: 'ease',
  transitionDuration: '0ms',

  '&:_where([data-initialized])': {
    transitionDuration: 'var(--transition-duration)',
  },

  '&:_where([data-hidden])': {
    backgroundColor: 'red',
    display: 'none',
  },
});
