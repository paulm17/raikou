import type { ReactNode } from "react";

interface DataTableEmptyStateProps1 {
  /**
   * Content to show when no records are available; the provided content
   * will be overlaid and centered automatically
   */
  emptyState?: ReactNode;

  noRecordsIcon?: never;
}

interface DataTableEmptyStateProps2 {
  emptyState?: never;

  /**
   * Icon to show when no records are available
   */
  noRecordsIcon?: ReactNode;
}

export type DataTableEmptyStateProps =
  | DataTableEmptyStateProps1
  | DataTableEmptyStateProps2;
