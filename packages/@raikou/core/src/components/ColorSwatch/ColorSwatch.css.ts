import { css } from '@stylefusion/react';

export const ColorSwatchRootStyle = css(({ theme }) => ({
  '--cs-size': '28px',
  '--cs-radius': '1000px',

  webkitTapHighlightColor: 'transparent',
  border: 'none',
  appearance: 'none',
  display: 'block',
  lineHeight: '1',
  position: 'relative',
  width: 'var(--cs-size)',
  height: 'var(--cs-size)',
  minWidth: 'var(--cs-size)',
  minHeight: 'var(--cs-size)',
  borderRadius: 'var(--cs-radius)',
  color: 'inherit',
  textDecoration: 'none',

  ...theme.applyStyles('light', {
    '--alpha-overlay-color': theme.colors.gray[3],
    '--alpha-overlay-bg': theme.colors.white,
  }),
  ...theme.applyStyles('dark', {
    '--alpha-overlay-color': theme.colors.dark[4],
    '--alpha-overlay-bg': theme.colors.dark[7],
  }),
}));

export const ColorSwatchColorOverlayStyle = css({
  position: 'absolute',
  inset: 0,
  borderRadius: 'var(--cs-radius)',
});

export const ColorSwatchShadowOverlayStyle = css({
  position: 'absolute',
  inset: 0,
  borderRadius: 'var(--cs-radius)',
  zIndex: 1,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 rem(1px) inset, rgb(0, 0, 0, 0.15) 0 0 rem(4px) inset',
});

export const ColorSwatchAlphaOverlayStyle = css({
  position: 'absolute',
  inset: 0,
  borderRadius: 'var(--cs-radius)',
  backgroundSize: '8px 8px',
  backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0',
  backgroundImage:
    'linear-gradient(45deg, var(--alpha-overlay-color) 25%, transparent 25%), linear-gradient(-45deg, var(--alpha-overlay-color) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--alpha-overlay-color) 75%), linear-gradient(-45deg, var(--alpha-overlay-bg) 75%, var(--alpha-overlay-color) 75%)',
});

export const ColorSwatchChildrenOverlayStyle = css({
  position: 'absolute',
  inset: 0,
  borderRadius: 'var(--cs-radius)',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
