import { css } from '@stylefusion/react';

export const dataTableRowExpansionCellStyle = css({
  padding: 0,
});

export const dataTableRowExpansionCellContentStyle = css({
  'tr:not(:last-of-type) &': {
    borderBottom: 'rem(1px) solid var(--raikou-datatable-row-border-color)',
  },
  borderTop: 'rem(1px) solid var(--raikou-datatable-row-border-color)',
  '[data-with-row-border] &': {
    borderTop: 0,
  },
});
