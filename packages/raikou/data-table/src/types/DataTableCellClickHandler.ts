import type { MouseEvent } from "react";
import type { DataTableColumn } from "./DataTableColumn";

export type DataTableCellClickHandler = (params: {
  /**
   * Click event
   */
  event: MouseEvent;

  /**
   * Clicked record
   */
  record: any;
  /**
   * Clicked record index
   */
  recordIndex: number;
  /**
   * Clicked column information
   */
  column: DataTableColumn;
  /**
   * Clicked column index
   */
  columnIndex: number;
}) => void;
