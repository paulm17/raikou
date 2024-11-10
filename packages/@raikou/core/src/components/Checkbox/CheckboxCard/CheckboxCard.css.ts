import { css } from '@stylefusion/react';

export const CheckboxCardStyle = css(({ theme }) => ({
  '--card-radius': 'var(--raikou-radius-default)',

  display: 'block',
  width: '100%',
  borderRadius: 'var(--card-radius)',
  cursor: 'pointer',

  '& :_where(*)': {
    cursor: 'inherit',
  },

  '&:_where([data-with-border])': {
    border: '1px solid transparent',

    ...theme.applyStyles('light', {
      borderColor: theme.colors.gray[3],
    }),

    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[4],
    }),
  },
}));
