import { css } from '@stylefusion/react';

export const LoaderPropagateLoaderStyle = css({
  '--propagate-size-xs': '8px',
  '--propagate-size-sm': '9px',
  '--propagate-size-md': '15px',
  '--propagate-size-lg': '18px',
  '--propagate-size-xl': '24px',
  '--propagate-size': 'var(--propagate-size-md)',
  '--propagate-color': 'var(--raikou-primary-color-filled)',
  display: 'inherit',
  position: 'relative',
});

const LoaderPropagateStyle = {
  position: 'absolute',
  fontSize: 'calc(var(--propagate-size) / 3)',
  width: 'var(--propagate-size)',
  height: 'var(--propagate-size)',
  backgroundColor: 'var(--propagate-color)',
  borderRadius: '50%',
};

export const LoaderPropagate1Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-1 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});

export const LoaderPropagate2Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-2 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});

export const LoaderPropagate3Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-3 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});

export const LoaderPropagate4Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-4 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});

export const LoaderPropagate5Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-5 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});

export const LoaderPropagate6Style = css({
  ...LoaderPropagateStyle,
  animation: 'propagate-loader-6 calc(1.5s / var(--propagate-speed-multiplier)) infinite',
});
