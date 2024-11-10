import { css } from '@stylefusion/react';

export const GroupRootStyle = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'var(--group-wrap, wrap)',
  justifyContent: 'var(--group-justify, flex-start)',
  alignItems: 'var(--group-align, center)',
  gap: 'var(--group-gap, var(--raikou-spacing-md))',

  '&:_where([data-grow])': {
    '& > *': {
      flexGrow: 1,
      maxWidth: 'var(--group-child-width)',
    },
  },
});
