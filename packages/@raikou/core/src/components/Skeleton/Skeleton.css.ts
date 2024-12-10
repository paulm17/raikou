import { css, keyframes } from '@stylefusion/react';

const skeletonFade = keyframes({
  '0%, 100%': {
    opacity: '0.4',
  },
  '50%': {
    opacity: '1',
  },
});

export const SkeletonRootStyle = css(({ theme }) => ({
  height: 'var(--skeleton-height, auto)',
  width: 'var(--skeleton-width, 100%)',
  borderRadius: 'var(--skeleton-radius, var(--raikou-radius-default))',
  position: 'relative',
  transform: 'translateZ(0)',
  webkitTransform: 'translateZ(0)',

  '&:_where([data-animate]):after': {
    animation: `${skeletonFade} 1500ms linear infinite`,
  },

  '&:_where([data-visible])': {
    overflow: 'hidden',

    '&:before': {
      position: 'absolute',
      content: "''",
      inset: 0,
      zIndex: 10,
      backgroundColor: 'var(--raikou-color-body)',
    },

    '&:after': {
      position: 'absolute',
      content: "''",
      inset: 0,
      zIndex: 11,

      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[3],
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[4],
      }),
    },
  },
}));
