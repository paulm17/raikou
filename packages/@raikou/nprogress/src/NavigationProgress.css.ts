import { css } from '@stylefusion/react';

export const NavigationProgressRootStyle = css({
  position: 'fixed',
  top: 0,
  insetInline: 0,
  zIndex: 'var(--nprogress-z-index)',
  backgroundColor: 'transparent',
  transition: 'opacity 150ms ease',
  transitionDelay: '50ms',
  opacity: 0,
  overflow: 'visible',

  '&:_where([data-mounted])': {
    opacity: 1,
  },
});

export const NavigationProgressSectionStyle = css({
  position: 'relative',
  transition: 'width 150ms ease',
  overflow: 'visible',

  '&:before': {
    content: "''",
    position: 'absolute',
    width: '100px',
    height: 'var(--progress-size)',
    top: 0,
    insetInlineEnd: 0,
    transform: 'rotate(4deg) translateY(-4px)',
    boxShadow: '0 0 10px var(--progress-section-color), 0 0 5px var(--progress-section-color)',
  },
});
