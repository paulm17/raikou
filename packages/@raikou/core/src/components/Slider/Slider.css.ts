import { css } from '@stylefusion/react';

export const SliderRootStyle = css(({ theme }) => ({
  '--slider-size-xs': '4px',
  '--slider-size-sm': '6px',
  '--slider-size-md': '8px',
  '--slider-size-lg': '10px',
  '--slider-size-xl': '12px',

  '--slider-size': 'var(--slider-size-md)',
  '--slider-radius': '1000px',
  '--slider-color': 'var(--raikou-primary-color-filled)',

  webkitTapHighlightColor: 'transparent',
  outline: 'none',
  height: 'calc(var(--slider-size) * 2)',
  paddingInline: 'var(--slider-size)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  touchAction: 'none',
  position: 'relative',

  ...theme.applyStyles('light', {
    '--slider-track-bg': theme.colors.gray[2],
    '--slider-track-disabled-bg': theme.colors.gray[4],
  }),

  ...theme.applyStyles('dark', {
    '--slider-track-bg': theme.colors.dark[4],
    '--slider-track-disabled-bg': theme.colors.dark[3],
  }),
}));

export const SliderLabelStyle = css(({ theme }) => ({
  position: 'absolute',
  top: '-36px',
  fontSize: 'var(--raikou-font-size-xs)',
  color: 'var(--raikou-color-white)',
  padding: `calc(var(--raikou-spacing-xs) / 2)`,
  borderRadius: 'var(--raikou-radius-sm)',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
  touchAction: 'none',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[9],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[4],
  }),
}));

export const SliderThumbStyle = css(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  height: 'var(--slider-thumb-size)',
  width: 'var(--slider-thumb-size)',
  border: '4px solid',
  transform: 'translate(-50%, -50%)',
  color: 'var(--slider-color)',
  top: '50%',
  cursor: 'pointer',
  borderRadius: 'var(--slider-radius)',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow 100ms ease, transform 100ms ease',
  zIndex: 3,
  userSelect: 'none',
  touchAction: 'none',
  outlineOffset: '2px',
  left: 'var(--slider-thumb-offset)',

  ...theme.applyMixin('where-rtl', {
    left: 'auto',
    right: 'calc(var(--slider-thumb-offset) - var(--slider-thumb-size))',
  }),

  'fieldset:disabled &, &:_where([data-disabled])': {
    display: 'none',
  },

  '&:_where([data-dragging])': {
    transform: 'translate(-50%, -50%) scale(1.05)',
    boxShadow: 'var(--raikou-shadow-sm)',
  },

  ...theme.applyStyles('light', {
    borderColor: 'var(--slider-color)',
    backgroundColor: 'var(--raikou-color-white)',
  }),

  ...theme.applyStyles('dark', {
    borderColor: 'var(--raikou-color-white)',
    backgroundColor: 'var(--slider-color)',
  }),
}));

export const SliderTrackContainerStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 'calc(var(--slider-size) * 2)',
  cursor: 'pointer',

  'fieldset:disabled &, &:_where([data-disabled])': {
    cursor: 'not-allowed',
  },
});

export const SliderTrackStyle = css({
  position: 'relative',
  width: '100%',
  height: 'var(--slider-size)',

  '&:_where([data-inverted]:not([data-disabled]))': {
    backgroundColor: 'var(--slider-color)',
  },

  'fieldset:disabled &:_where([data-disabled]), &:_where([data-disabled][data-inverted])': {
    '--track-bg': 'var(--slider-track-disabled-bg)',
  },

  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    borderRadius: 'var(--slider-radius)',
    insetInline: 'calc(var(--slider-size) * -1)',
    backgroundColor: 'var(--track-bg, var(--slider-track-bg))',
    zIndex: 0,
  },
});

export const SliderTrackBarStyle = css(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  bottom: 0,
  backgroundColor: 'var(--slider-color)',
  borderRadius: 'var(--slider-radius)',
  width: 'var(--slider-bar-width)',
  insetInlineStart: 'var(--slider-bar-offset)',

  '&:_where([data-inverted])': {
    backgroundColor: 'var(--slider-track-bg)',
  },

  'fieldset:disabled &:_where(:not([data-inverted])), &:_where([data-disabled]:not([data-inverted]))':
    {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[4],
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[3],
      }),
    },
}));

export const SliderMarkWrapperStyle = css({
  position: 'absolute',
  insetInlineStart: 'calc(var(--mark-offset) - var(--slider-size) / 2)',
  top: 0,
  zIndex: 2,
  height: 0,
  pointerEvents: 'none',
});

export const SliderMarkStyle = css(({ theme }) => ({
  border: '2px solid',
  height: 'var(--slider-size)',
  width: 'var(--slider-size)',
  borderRadius: '1000px',
  backgroundColor: 'var(--raikou-color-white)',
  pointerEvents: 'none',

  ...theme.applyStyles('light', {
    borderColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    borderColor: theme.colors.dark[4],
  }),

  '&:_where([data-filled])': {
    borderColor: 'var(--slider-color)',

    '&:_where([data-disabled])': {
      ...theme.applyStyles('light', {
        borderColor: theme.colors.gray[4],
      }),

      ...theme.applyStyles('dark', {
        borderColor: theme.colors.dark[3],
      }),
    },
  },
}));

export const SliderMarkLabelStyle = css(({ theme }) => ({
  transform: 'translate(calc(-50% + var(--slider-size) / 2), calc(var(--raikou-spacing-xs) / 2))',
  fontSize: 'var(--raikou-font-size-sm)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',

  ...theme.applyStyles('light', {
    color: theme.colors.gray[6],
  }),

  ...theme.applyStyles('dark', {
    color: theme.colors.dark[2],
  }),
}));
