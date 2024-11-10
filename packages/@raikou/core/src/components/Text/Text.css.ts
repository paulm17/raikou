import { css } from '@stylefusion/react';

export const TextRootStyle = css(({ theme }) => ({
  webkitTapHighlightColor: 'transparent',
  textDecoration: 'none',
  fontSize: 'var(--text-fz, var(--raikou-font-size-md))',
  lineHeight: 'var(--text-lh, var(--raikou-line-height-md))',
  fontWeight: 'normal',
  margin: 0,
  padding: 0,
  color: 'var(--text-color)',

  '&:_where([data-truncate])': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  "&:_where([data-truncate='start'])": {
    direction: 'rtl',
    textAlign: 'right',

    ...theme.applyMixin('where-rtl', {
      direction: 'ltr',
      textAlign: 'left',
    }),
  },

  "&:_where([data-variant='gradient'])": {
    backgroundImage: 'var(--text-gradient)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  '&:_where([data-line-clamp])': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 'var(--text-line-clamp)',
    WebkitBoxOrient: 'vertical',
  },

  '&:_where([data-inherit])': {
    lineHeight: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
  },

  '&:_where([data-inline])': {
    lineHeight: 1,
  },
}));
