import { css } from '@stylefusion/react';

export const PickerControlStyle = css(({ theme }) => ({
  '--dpc-size-xs': '30px',
  '--dpc-size-sm': '36px',
  '--dpc-size-md': '42px',
  '--dpc-size-lg': '48px',
  '--dpc-size-xl': '54px',
  '--dpc-size': 'var(--dpc-size-sm)',

  fontSize: 'var(--dpc-fz, var(--raikou-font-size-sm))',
  height: 'var(--dpc-size)',
  width: 'calc((var(--dpc-size) * 7) / 3 + rem(1.5px))',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: 'var(--raikou-color-text)',
  opacity: 1,
  borderRadius: 'var(--raikou-radius-default)',

  ...theme.applyMixin('hover', {
    '&:_where(:not([data-disabled], :disabled))': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[5],
      }),
    },
  }),
  '&:_where(:disabled, [data-disabled])': {
    color: 'var(--raikou-color-dimmed)',
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:_where([data-selected])': {
    backgroundColor: 'var(--raikou-primary-color-filled)',
    color: 'var(--raikou-primary-color-contrast)',

    ...theme.applyMixin('hover', {
      backgroundColor: 'var(--raikou-primary-color-filled-hover)',
    }),
  },

  '&:_where([data-in-range])': {
    backgroundColor: 'var(--raikou-primary-color-light-hover)',
    borderRadius: 0,

    ...theme.applyMixin('hover', {
      backgroundColor: 'var(--raikou-primary-color-light)',
    }),
  },

  '&:_where([data-first-in-range])': {
    borderRadius: 0,
    borderStartStartRadius: 'var(--raikou-radius-default)',
    borderEndStartRadius: 'var(--raikou-radius-default)',
  },

  '&:_where([data-last-in-range])': {
    borderRadius: 0,
    borderEndEndRadius: 'var(--raikou-radius-default)',
    borderStartEndRadius: 'var(--raikou-radius-default)',
  },

  '&:_where([data-first-in-range][data-last-in-range])': {
    borderRadius: 'var(--raikou-radius-default)',
  },
}));
