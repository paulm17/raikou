import type { TableTrProps } from "@raikou/core";

export type DataTableDraggableRowProps = {
  /**
   * Current dragging status.
   */
  isDragging?: boolean;
} & TableTrProps;
