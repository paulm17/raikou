import { css } from '@stylefusion/react';

export const dataTableHeaderCellSortableStyle = css(({ theme }) => ({
  cursor: 'pointer',
  transition: 'background 0.2s',
  '&:hover:not(:has(button:hover))': {
    ...theme.applyStyles('light', {
      background: theme.colors.gray[0],
    }),
    ...theme.applyStyles('dark', {
      background: theme.colors.dark[6],
    }),
  },
}));

export const dataTableHeaderCellDraggableStyle = css(({ theme }) => ({
  cursor: 'grab',
  borderRadius: '6px',
  transition: 'all 0.2s',
  '&:active': {
    cursor: 'grabbing',
  },
  '&:hover:not(:has(button:hover))': {
    ...theme.applyStyles('light', {
      background: theme.colors.gray[2],
    }),
    ...theme.applyStyles('dark', {
      background: theme.colors.dark[6],
    }),
  },
}));

export const dataTableHeaderCellDraggableActionIconStyle = css({
  cursor: 'inherit',
  margin: 'rem(-2px) rem(2px) 0',
});

export const dataTableHeaderCellDragOverStyle = css(({ theme }) => ({
  ...theme.applyStyles('light', {
    background: theme.colors.gray[3],
  }),
  ...theme.applyStyles('dark', {
    background: theme.colors.dark[6],
  }),
}));

export const dataTableHeaderCellToggleableIconStyle = css({
  transition: 'opacity 0.2s',
  opacity: 0.1,
});

export const dataTableHeaderCellToggleableStyle = css({
  '&:hover': {
    [`.${dataTableHeaderCellToggleableIconStyle}`]: {
      opacity: 1,
    },
  },
});

export const dataTableHeaderCellResizableStyle = css({
  position: 'relative',
});

export const dataTableHeaderResizableHandleStyle = css(({ theme }) => ({
  position: 'absolute',
  cursor: 'col-resize',
  top: 0,
  bottom: 0,
  width: 'rem(8px)',
  background: 'inherit',
  zIndex: 1,
  transform: 'translateX(50%)',
  opacity: 0,
  transition: 'opacity 0.2s',
  '&::after': {
    position: 'absolute',
    content: "''",
    top: 'rem(1px)',
    bottom: 'rem(1px)',
    left: 'rem(2px)',
    ...theme.applyStyles('light', {
      borderRight: theme.colors.gray[3],
    }),
    ...theme.applyStyles('dark', {
      borderRight: theme.colors.dark[4],
    }),
  },
  '&:hover::after': {
    borderRightColor: 'var(--raikou-primary-color-6)',
  },
}));

// tr:hover .raikou-datatable-header-resizable-handle {
//   opacity: 1;
// }

export const dataTableHeaderCellSortableGroupStyle = css({
  gap: '0.25em',
});

export const dataTableHeaderCellSortableTextStyle = css({
  minWidth: 0,
  flexGrow: 1,
});

export const dataTableHeaderCellSortableIconStyle = css({
  transition: 'transform 0.2s',
});

export const dataTableHeaderCellSortableIconReversedStyle = css({
  transform: 'scaleY(-1)',
});

export const dataTableHeaderCellSortableUnsortedIconStyle = css(({ theme }) => ({
  ...theme.applyStyles('light', {
    color: theme.colors.gray[5],
  }),
  ...theme.applyStyles('dark', {
    color: theme.colors.dark[3],
  }),
  transition: 'color 0.2s',
  '&:hover': {
    ...theme.applyStyles('light', {
      color: theme.colors.gray[6],
    }),
    ...theme.applyStyles('dark', {
      color: theme.colors.dark[2],
    }),
  },
}));
