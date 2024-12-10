import { css } from '@stylefusion/react';

export const TitleRootStyle = css({
  margin: 0,
  fontWeight: 'var(--title-fw)',
  fontSize: 'var(--title-fz)',
  lineHeight: 'var(--title-lh)',
  fontFamily: 'var(--raikou-font-family-headings)',
  textWrap: 'var(--title-text-wrap, var(--raikou-heading-text-wrap))',

  ':_where([data-line-clamp])': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    webkitLineClamp: 'var(--title-line-clamp)',
    webkitBoxOrient: 'vertical',
  },
});
