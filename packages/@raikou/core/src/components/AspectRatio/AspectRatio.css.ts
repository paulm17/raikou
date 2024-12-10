import { css } from '@stylefusion/react';

export const aspectRatioRootStyle = css({
  '--ar-ratio': 1,
  maxWidth: '100%',

  '& > :_where(*:not(style))': {
    aspectRatio: 'var(--ar-ratio)',
    width: '100%',
  },

  '& > :_where(img, video)': {
    objectFit: 'cover',
  },
});
