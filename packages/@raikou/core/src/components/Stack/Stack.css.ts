import { css } from '@stylefusion/react';

export const StackRootStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'var(--stack-align, stretch)',
  justifyContent: 'var(--stack-justify, flex-start)',
  gap: 'var(--stack-gap, var(--raikou-spacing-md))',
});
