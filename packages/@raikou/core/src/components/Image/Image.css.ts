import { css } from '@stylefusion/react';

export const ImageRootStyle = css({
  display: 'block',
  flexGrow: 0,
  objectFit: 'var(--image-object-fit, cover)',
  width: '100%',
  borderRadius: 'var(--image-radius, 0)',
});
