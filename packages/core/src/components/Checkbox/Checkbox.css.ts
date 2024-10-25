import { css } from "@stylefusion/react";

export const CheckboxRootStyle = css({
  '--checkbox-size-xs': '16px',
  '--checkbox-size-sm': '20px',
  '--checkbox-size-md': '24px',
  '--checkbox-size-lg': '30px',
  '--checkbox-size-xl': '36px',

  '--checkbox-size': 'var(--checkbox-size-sm)',
  '--checkbox-color': 'var(--raikou-primary-color-filled)',
  '--checkbox-icon-color': 'var(--raikou-color-white)',
})

export const CheckboxInnerStyle = css({
  position: 'relative',
  width: 'var(--checkbox-size)',
  height: 'var(--checkbox-size)',
  order: 1,

  '&:_where([data-label-position="left"])': {
    order: 2,
  },
})

export const CheckboxInputStyle = css(({ theme }: any) => ({
  appearance: 'none',
  border: '1px solid transparent',
  width: 'var(--checkbox-size)',
  height: 'var(--checkbox-size)',
  borderRadius: 'var(--checkbox-radius, var(--raikou-radius-default))',
  padding: 0,
  display: 'block',
  margin: 0,
  transition: 'border-color 100ms ease, background-color 100ms ease',
  cursor: 'var(--raikou-cursor-type)',
  WebkitTapHighlightColor: 'transparent',

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
  }),
  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.dark[4],
  }),

  '&:_where([data-error])': {
    borderColor: "var(--raikou-color-error)",
  },

  '&[data-indeterminate], &:checked': {
    backgroundColor: 'var(--checkbox-color)',
    borderColor: 'var(--checkbox-color)',

    [`& + .${CheckboxIconStyle}`]: {
      opacity: 1,
      transform: 'none',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[2],
      borderColor: theme.colors.gray[3],
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[6],
      borderColor: theme.colors.dark[6],
    }),

    [`& + .${CheckboxIconStyle}`]: {
      ...theme.applyStyles('light', {
        color: theme.colors.gray[5],
      }),
      ...theme.applyStyles('dark', {
        color: theme.colors.dark[3],
      }),
    },
  },
  "[data-variant=outline] &": {
    [`& + .${CheckboxIconStyle}`]: {
      color: 'var(--checkbox-color)',
    },
    '&[data-indeterminate]:not(:disabled), &:checked:not(:disabled)': {
      backgroundColor: 'transparent',
      borderColor: 'var(--checkbox-color)',

      [`& + .${CheckboxIconStyle}`]: {
        color: 'var(--checkbox-color)',
        opacity: 1,
        transform: 'none',
      },
    },
  }
}));

export const CheckboxIconStyle = css({
  position: 'absolute',
  inset: 0,
  width: '60%',
  margin: 'auto',
  color: 'var(--checkbox-icon-color)',
  pointerEvents: 'none',
  transform: 'translateY(rem(5px)) scale(0.5)',
  opacity: 0,
  transition: 'transform 100ms ease, opacity 100ms ease',
})