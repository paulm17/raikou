import { css } from '@stylefusion/react';

export const FieldsetRootStyle = css(({ theme }) => ({
  padding: 'var(--raikou-spacing-lg)',
  paddingTop: 'var(--raikou-spacing-xs)',
  borderRadius: 'var(--fieldset-radius, var(--raikou-radius-default))',
  minInlineSize: 'auto',

  '&[data-variant=default]': {
    border: '1px solid',

    ...theme.applyStyles('light', {
      borderColor: theme.colors.gray[3],
      backgroundColor: theme.colors.white,
    }),

    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[4],
      backgroundColor: theme.colors.dark[7],
    }),
  },

  '&[data-variant=filled]': {
    border: '1px solid',

    ...theme.applyStyles('light', {
      borderColor: theme.colors.gray[3],
      backgroundColor: theme.colors.gray[0],
    }),

    ...theme.applyStyles('dark', {
      borderColor: theme.colors.dark[4],
      backgroundColor: theme.colors.dark[6],
    }),
  },
}));

export const FieldsetLegendStyle = css({
  fontSize: 'var(--raikou-font-size-sm)',
});
