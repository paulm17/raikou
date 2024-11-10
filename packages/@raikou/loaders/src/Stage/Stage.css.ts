import { css } from '@stylefusion/react';

export const LoaderStageRootStyle = css({
  '--stage-size-xs': '20px',
  '--stage-size-sm': '24px',
  '--stage-size-md': '40px',
  '--stage-size-lg': '49px',
  '--stage-size-xl': '64px',
  '--stage-size': 'var(--stage-size-md)',
  '--stage-color': 'var(--raikou-primary-color-filled)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'var(--stage-size)',
  height: 'var(--stage-size)',
});

export const LoaderStageBallStyle = css({
  position: 'absolute',
  width: 'calc(var(--stage-size) / 5)',
  height: 'calc(var(--stage-size) / 5)',
  borderRadius: '50%',
  backgroundColor: 'var(--stage-color)',
});
