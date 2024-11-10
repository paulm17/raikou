import { css } from '@stylefusion/react';

export const dataTablePaginationStyle = css({
  background: 'inherit',
  borderTop: 'rem(1px) solid var(--raikou-datatable-border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--raikou-spacing-xs)',
});

export const dataTablePaginationTextStyle = css({
  flex: '1 1 auto',
});

export const dataTablePaginationPagesStyle = css(({ theme }) => ({
  ...theme.applyStyles('light', {
    '--raikou-datatable-pagination-active-text-color':
      'var(--raikou-datatable-pagination-active-text-color-light, var(--raikou-color-white))',
    '--raikou-datatable-pagination-active-background-color':
      'var(--raikou-datatable-pagination-active-background-color-light, var(--raikou-primary-color-filled))',
  }),
  ...theme.applyStyles('dark', {
    '--raikou-datatable-pagination-active-text-color':
      'var(--raikou-datatable-pagination-active-text-color-dark, var(--raikou-color-white))',
    '--raikou-datatable-pagination-active-background-color':
      'var(--raikou-datatable-pagination-active-background-color-dark, var(--raikou-primary-color-filled))',
  }),
  opacity: 1,
  transition: 'opacity 0.2s',
}));

export const dataTablePaginationPagesFetchingStyle = css({
  opacity: 0,
});

export const dataTablePaginationPagesControlStyle = css({
  color: 'var(--raikou-datatable-color)',
  borderColor: 'var(--raikou-datatable-border-color)',

  '&[data-active]': {
    color: 'var(--raikou-datatable-pagination-active-text-color)',
    background: 'var(--raikou-datatable-pagination-active-background-color)',
    borderColor: 'transparent',
  },
});
