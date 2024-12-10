import { css } from '@stylefusion/react';

export const RingProgressRootStyle = css({
  position: 'relative',
  width: 'var(--rp-size)',
  height: 'var(--rp-size)',
  minWidth: 'var(--rp-size)',
  minHeight: 'var(--rp-size)',
  '--rp-transition-duration': '0ms',
});

export const RingProgressSvgStyle = css({
  width: 'var(--rp-size)',
  height: 'var(--rp-size)',
  minWidth: 'var(--rp-size)',
  minHeight: 'var(--rp-size)',
  transform: 'rotate(-90deg)',
});

export const RingProgressCurveStyle = css(({ theme }) => ({
  stroke: 'var(--curve-color, var(--rp-curve-root-color))',
  transition: `stroke-dashoffset var(--rp-transition-duration) ease,
    stroke-dasharray var(--rp-transition-duration) ease,
    stroke var(--rp-transition-duration)`,

  ...theme.applyStyles('light', {
    '--rp-curve-root-color': theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    '--rp-curve-root-color': theme.colors.dark[4],
  }),
}));

export const RingProgressLabelStyle = css({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  insetInline: 'var(--rp-label-offset)',
});
