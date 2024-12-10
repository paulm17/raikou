import { css } from '@stylefusion/react';

export const SimpleGridContainerStyle = css({
  container: 'simple-grid / inline-size',
});

export const SimpleGridRootStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--sg-cols), minmax(0, 1fr))',
  gap: 'var(--sg-spacing-y) var(--sg-spacing-x)',
});
