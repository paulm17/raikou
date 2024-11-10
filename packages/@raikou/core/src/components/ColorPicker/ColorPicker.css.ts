import { css } from '@stylefusion/react';

export const ColorPickerRootStyle = css({
  '--cp-width-xs': '180px',
  '--cp-width-sm': '200px',
  '--cp-width-md': '240px',
  '--cp-width-lg': '280px',
  '--cp-width-xl': '320px',

  '--cp-preview-size-xs': '26px',
  '--cp-preview-size-sm': '34px',
  '--cp-preview-size-md': '42px',
  '--cp-preview-size-lg': '50px',
  '--cp-preview-size-xl': '54px',

  '--cp-thumb-size-xs': '8px',
  '--cp-thumb-size-sm': '12px',
  '--cp-thumb-size-md': '16px',
  '--cp-thumb-size-lg': '20px',
  '--cp-thumb-size-xl': '22px',

  '--cp-saturation-height-xs': '100px',
  '--cp-saturation-height-sm': '110px',
  '--cp-saturation-height-md': '120px',
  '--cp-saturation-height-lg': '140px',
  '--cp-saturation-height-xl': '160px',

  '--cp-preview-size': 'var(--cp-preview-size-sm)',
  '--cp-thumb-size': 'var(--cp-thumb-size-sm)',
  '--cp-saturation-height': 'var(--cp-saturation-height-sm)',
  '--cp-width': 'var(--cp-width-sm)',
  '--cp-body-spacing': 'var(--raikou-spacing-sm)',

  width: 'var(--cp-width)',
  padding: '1px',

  '&:_where([data-full-width])': {
    width: '100%',
  },
});

export const ColorPickerPreviewStyle = css({
  width: 'var(--cp-preview-size)',
  height: 'var(--cp-preview-size)',
});

export const ColorPickerBodyStyle = css({
  display: 'flex',
  paddingTop: 'calc(var(--cp-body-spacing) / 2)',
});

export const ColorPickerSlidersStyle = css({
  flex: 1,

  '&:not(:only-child)': {
    marginInlineEnd: 'var(--raikou-spacing-xs)',
  },
});

export const ColorPickerThumbStyle = css({
  overflow: 'hidden',
  position: 'absolute',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0.6)',
  border: '2px solid var(--raikou-color-white)',
  width: 'var(--cp-thumb-size)',
  height: 'var(--cp-thumb-size)',
  borderRadius: 'var(--cp-thumb-size)',
  left: 'calc(var(--thumb-x-offset) - var(--cp-thumb-size) / 2)',
  top: 'calc(var(--thumb-y-offset) - var(--cp-thumb-size) / 2)',
});

export const ColorPickerSwatchStyle = css({
  height: 'unset !important',
  width: 'unset !important',
  minWidth: '0 !important',
  minHeight: '0 !important',
  margin: '2px',
  cursor: 'pointer',
  paddingBottom: 'calc(var(--cp-swatch-size) - rem(4px))',
  flex: '0 0 calc(var(--cp-swatch-size) - rem(4px))',
});

export const ColorPickerSwatchesStyle = css({
  marginTop: '5px',
  marginInline: '-2px',
  display: 'flex',
  flexWrap: 'wrap',
});

export const ColorPickerSaturationStyle = css({
  '--cp-thumb-size-xs': '8px',
  '--cp-thumb-size-sm': '12px',
  '--cp-thumb-size-md': '16px',
  '--cp-thumb-size-lg': '20px',
  '--cp-thumb-size-xl': '22px',

  WebkitTapHighlightColor: 'transparent',
  position: 'relative',
  height: 'var(--cp-saturation-height)',
  borderRadius: 'var(--raikou-radius-sm)',
  margin: 'calc(var(--cp-thumb-size) / 2)',

  '&:_where([data-focus-ring="auto"])': {
    '&:focus:focus-visible': {
      [`& .${ColorPickerThumbStyle}`]: {
        outline: '2px solid var(--raikou-color-blue-filled)',
      },
    },
  },

  '&:_where([data-focus-ring="always"])': {
    '&:focus': {
      [`& .${ColorPickerThumbStyle}`]: {
        outline: '2px solid var(--raikou-color-blue-filled)',
      },
    },
  },
});

export const ColorPickerSaturationOverlayStyle = css({
  position: 'absolute',
  borderRadius: 'var(--raikou-radius-sm)',
  inset: 'calc(var(--cp-thumb-size) * -1 / 2 - rem(1px))',
});

export const ColorPickerSliderStyle = css(({ theme }) => ({
  '--cp-thumb-size-xs': '8px',
  '--cp-thumb-size-sm': '12px',
  '--cp-thumb-size-md': '16px',
  '--cp-thumb-size-lg': '20px',
  '--cp-thumb-size-xl': '22px',
  '--cp-thumb-size': 'var(--cp-thumb-size, rem(12px))',

  position: 'relative',
  height: 'calc(var(--cp-thumb-size) + rem(2px))',
  marginInline: 'calc(var(--cp-thumb-size) / 2)',
  outline: 'none',

  '& + &': {
    marginTop: '6px',
  },

  '&:_where([data-focus-ring="auto"])': {
    '&:focus:focus-visible': {
      [`& .${ColorPickerThumbStyle}`]: {
        outline: '2px solid var(--raikou-color-blue-filled)',
      },
    },
  },

  '&:_where([data-focus-ring="always"])': {
    '&:focus': {
      [`& .${ColorPickerThumbStyle}`]: {
        outline: '2px solid var(--raikou-color-blue-filled)',
      },
    },
  },

  ...theme.applyStyles('light', {
    '--slider-checkers': theme.colors.gray[3],
  }),
  ...theme.applyStyles('dark', {
    '--slider-checkers': theme.colors.dark[4],
  }),
}));

export const ColorPickerSliderOverlayStyle = css({
  position: 'absolute',
  top: '0',
  bottom: '0',
  insetInline: 'calc(var(--cp-thumb-size) * -1 / 2 - rem(1px))',
  borderRadius: '10000rem',
});
