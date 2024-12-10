import { css } from '@stylefusion/react';

export const GridContainerStyle = css({
  container: 'raikou-grid / inline-size',
});

export const GridRootStyle = css({
  '--grid-overflow': 'visible',
  '--grid-margin': 'calc(var(--grid-gutter) / -2)',
  '--grid-col-padding': 'calc(var(--grid-gutter) / 2)',

  overflow: 'var(--grid-overflow)',
});

export const GridInnerStyle = css({
  width: 'calc(100% + var(--grid-gutter))',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'var(--grid-justify)',
  alignItems: 'var(--grid-align)',
  margin: 'var(--grid-margin)',
});

export const GridColStyle = css({
  '--col-flex-grow': 0,
  '--col-offset': '0rem',

  flexShrink: 0,
  order: 'var(--col-order)',
  flexBasis: 'var(--col-flex-basis)',
  width: 'var(--col-width)',
  maxWidth: 'var(--col-max-width)',
  flexGrow: 'var(--col-flex-grow)',
  marginInlineStart: 'var(--col-offset)',
  padding: 'var(--grid-col-padding)',
});
