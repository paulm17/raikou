import { css } from '@stylefusion/react';

export const CalendarHeaderStyle = css({
  '--dch-control-size-xs': '30px',
  '--dch-control-size-sm': '36px',
  '--dch-control-size-md': '42px',
  '--dch-control-size-lg': '48px',
  '--dch-control-size-xl': '54px',
  '--dch-control-size': 'var(--dch-control-size-sm)',

  display: 'flex',
  maxWidth: 'calc(var(--dch-control-size) * 8 + rem(7px))',
  marginBottom: 'var(--raikou-spacing-xs)',
});

export const CalendarHeaderLevelStyle = css(({ theme }) => ({
  height: 'var(--dch-control-size)',
  borderRadius: 'var(--raikou-radius-default)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  opacity: 1,
  cursor: 'pointer',

  ...theme.applyMixin('hover', {
    '&:_where(:not([data-disabled], :disabled)):hover': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[5],
      }),
    },
  }),

  '&:_where(:disabled, [data-disabled])': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },

  flex: 1,
  fontSize: 'var(--dch-fz, var(--raikou-font-size-sm))',
  fontWeight: 500,
  textTransform: 'capitalize',
}));

export const CalendarHeaderControlStyle = css(({ theme }) => ({
  height: 'var(--dch-control-size)',
  borderRadius: 'var(--raikou-radius-default)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  opacity: 1,
  cursor: 'pointer',

  ...theme.applyMixin('hover', {
    '&:_where(:not([data-disabled], :disabled)):hover': {
      ...theme.applyStyles('light', {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: theme.colors.dark[5],
      }),
    },
  }),

  '&:_where(:disabled, [data-disabled])': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },

  width: 'var(--dch-control-size)',
}));

export const CalendarHeaderControlIconStyle = css(({ theme }) => ({
  width: '60%',
  height: '60%',

  '&:_where([data-direction="next"])': {
    transform: 'rotate(270deg)',

    ...theme.applyMixin('rtl', {
      transform: 'rotate(90deg)',
    }),
  },

  '&:_where([data-direction="previous"])': {
    transform: 'rotate(90deg)',

    ...theme.applyMixin('rtl', {
      transform: 'rotate(270deg)',
    }),
  },
}));
