import { css } from '@stylefusion/react';

export const BlockquoteRootStyle = css(({ theme }) => ({
  '--blockquote-border': '3px solid var(--bq-bd)',

  position: 'relative',
  margin: 0,
  borderInlineStart: 'var(--blockquote-border)',
  borderStartEndRadius: 'var(--bq-radius)',
  borderEndEndRadius: 'var(--bq-radius)',
  padding: 'var(--raikou-spacing-xl) rem(38px)',

  ...theme.applyStyles('light', {
    backgroundColor: 'var(--bq-bg-light)',
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: 'var(--bq-bg-dark)',
  }),
}));

export const BlockquoteIconStyle = css({
  '--blockquote-icon-offset': 'calc(var(--bq-icon-size) / -2)',

  position: 'absolute',
  color: 'var(--bq-bd)',
  backgroundColor: 'var(--raikou-color-body)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 'var(--blockquote-icon-offset)',
  insetInlineStart: 'var(--blockquote-icon-offset)',
  width: 'var(--bq-icon-size)',
  height: 'var(--bq-icon-size)',
  borderRadius: 'var(--bq-icon-size)',
});

export const BlockquoteCiteStyle = css({
  display: 'block',
  marginTop: 'var(--raikou-spacing-md)',
  opacity: 0.6,
  fontSize: '85%',
});
