import { css } from '@stylefusion/react';

export const ListRootStyle = css({
  '--list-fz': 'var(--raikou-font-size-md)',
  '--list-lh': 'var(--raikou-line-height-md)',

  listStylePosition: 'inside',
  fontSize: 'var(--list-fz)',
  lineHeight: 'var(--list-lh)',
  margin: 0,
  padding: 0,

  '&:_where([data-with-padding])': {
    paddingInlineStart: 'var(--raikou-spacing-md)',
  },
});

export const ListItemWrapperStyle = css({
  display: 'inline-flex',
  flexDirection: 'var(--li-direction, column)',
  alignItems: 'var(--li-align, flex-start)',
  whiteSpace: 'normal',
});

export const ListItemStyle = css({
  whiteSpace: 'nowrap',
  lineHeight: 'var(--list-lh)',

  '&:_where([data-with-icon])': {
    listStyle: 'none',

    [`& .${ListItemWrapperStyle}`]: {
      '--li-direction': 'row',
      '--li-align': 'center',
    },
  },

  '&:_where(:not(:first-of-type))': {
    marginTop: 'var(--list-spacing, 0)',
  },

  '&:_where([data-centered])': {
    lineHeight: 1,
  },
});

export const ListItemIconStyle = css({
  display: 'inline-block',
  verticalAlign: 'middle',
  marginInlineEnd: 'var(--raikou-spacing-sm)',
});
