import type { DataTableColumn } from "./DataTableColumn";
import type { DataTableColumnGroup } from "./DataTableColumnGroup";

export type DataTableColumnProps =
  | {
      /**
       * Grouped columns
       */
      groups: readonly DataTableColumnGroup[];
      columns?: never;
    }
  | {
      /**
       * Visible columns
       */
      columns: DataTableColumn[];
      groups?: never;
    };
