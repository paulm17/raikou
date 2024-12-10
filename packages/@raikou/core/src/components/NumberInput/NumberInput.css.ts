import { css } from '@stylefusion/react';

export const NumberInputRootStyle = css({
  '--ni-right-section-width-xs': '17px',
  '--ni-right-section-width-sm': '24px',
  '--ni-right-section-width-md': '27px',
  '--ni-right-section-width-lg': '31px',
  '--ni-right-section-width-xl': '34px',
});

export const NumberInputControlsStyle = css({
  '--ni-chevron-size-xs': '10px',
  '--ni-chevron-size-sm': '14px',
  '--ni-chevron-size-md': '16px',
  '--ni-chevron-size-lg': '18px',
  '--ni-chevron-size-xl': '20px',
  '--ni-chevron-size': 'var(--ni-chevron-size-sm)',

  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(var(--input-height) - rem(2px))',
  maxWidth: 'calc(var(--ni-chevron-size) * 1.7)',
  marginInlineStart: 'auto',
});

export const NumberInputControlStyle = css(({ theme }) => ({
  '--control-border': '1px solid var(--input-bd)',
  '--control-radius': 'calc(var(--input-radius) - rem(1px))',

  flex: '0 0 50%',
  width: '100%',
  padding: 0,
  height: 'calc(var(--input-height) / 2 - rem(1px))',
  borderInlineStart: 'var(--control-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--raikou-color-text)',
  backgroundColor: 'transparent',
  cursor: 'pointer',

  '&:_where(:disabled)': {
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
    opacity: 0.6,

    ...theme.applyStyles('light', {
      color: theme.colors.gray[4],
    }),

    ...theme.applyStyles('dark', {
      color: theme.colors.dark[3],
    }),
  },

  '.root[data-error] :_where(&)': {
    color: 'var(--raikou-color-error)',
  },

  ...theme.applyMixin('hover', {
    '&:hover': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),

      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[4],
      }),
    },
  }),

  '&:_where(:first-of-type)': {
    borderRadius: 0,
    borderStartEndRadius: 'var(--control-radius)',
  },

  '&:_where(:last-of-type)': {
    borderRadius: 0,
    borderEndEndRadius: 'var(--control-radius)',
  },
}));
