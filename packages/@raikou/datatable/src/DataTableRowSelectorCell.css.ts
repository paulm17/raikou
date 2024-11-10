import { css } from '@stylefusion/react';

export const dataTableRowSelectorCellStyle = css({
  position: 'sticky',
  width: 0,
  left: 0,

  'tr[data-selected] &': {
    background: 'inherit',
    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'var(--raikou-primary-color-light)',
    },
  },
  '&:after': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 'calc(-1 * var(--raikou-spacing-xs))',
    bottom: 0,
    borderLeft: '1px solid var(--raikou-datatable-row-border-color)',
    width: 'var(--raikou-spacing-xs)',
    background: 'var(--raikou-datatable-shadow-background-left)',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity 0.2s',
  },

  'tr[data-with-row-border] &:after': {
    top: 'rem(-1px)',
    bottom: 'rem(-1px)',
  },

  'tr:last-of-type &:after': {
    bottom: 0,
  },

  '&[data-shadow-visible]:after': {
    opacity: 1,
  },
});

export const dataTableRowSelectorCellCheckboxStyle = css({
  cursor: 'pointer',
});
