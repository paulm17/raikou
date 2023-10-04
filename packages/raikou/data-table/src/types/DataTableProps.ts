import type {
  CSSProperties,
  Key,
  MouseEvent,
  ReactNode,
  RefObject,
} from "react";
import {
  BoxProps,
  ElementProps,
  RaikouShadow,
  RaikouSize,
  RaikouTheme,
  StylesApiProps,
} from "@raikou/core";
import { ScrollAreaProps } from "../../../components/ScrollArea/src";
import type { TableProps } from "../../../components/Table/src";
import { DataTableFactory } from "../DataTable";
import {
  DataTableVerticalAlignment,
  DataTableContextMenuProps,
  DataTableRowExpansionProps,
  DataTableCellClickHandler,
  DataTableDefaultColumnProps,
  DataTableOuterBorderProps,
  _DataTablePaginationProps,
  DataTableSortProps,
  DataTableSelectionProps,
} from "./";
import { DataTableEmptyStateProps } from "./DataTableEmptyStateProps";
import { DataTableColumnProps } from "./DataTableColumnProps";
import { DataTableLoaderProps } from "./DataTableLoaderProps";

export interface _DataTableProps
  extends BoxProps,
    StylesApiProps<DataTableFactory>,
    ElementProps<"div">,
    Pick<
      TableProps,
      "striped" | "highlightOnHover" | "horizontalSpacing" | "verticalSpacing"
    > {
  /**
   * Table height; defaults to `100%`
   */
  height?: RaikouSize;

  /**
   * Minimum table height
   */
  minHeight?: RaikouSize;

  /**
   * `DataTable` component shadow
   */
  shadow?: RaikouShadow;

  /**
   * If true, columns will have vertical borders
   */
  withColumnBorders?: boolean;

  /**
   * Table border color, applied to the outer border, the header bottom border, and the pagination
   * footer top border; defaults to
   * `(theme) => (theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3])`
   */
  borderColor?: string | ((theme: RaikouTheme) => string);

  /**
   * Row border color; defaults to
   * `(theme) => (theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3], 0.65))`
   */
  rowBorderColor?: string | ((theme: RaikouTheme) => string);

  /**
   * If true, the user will not be able to select text
   */
  textSelectionDisabled?: boolean;

  /**
   * Vertical alignment for row cells; defaults to `center`
   */
  verticalAlignment?: DataTableVerticalAlignment;

  /**
   * If true, will show a loader with semi-transparent background, centered over the table
   */
  fetching?: boolean;

  /**
   * Default column props; will be merged with column props provided to each column
   */
  defaultColumnProps?: DataTableDefaultColumnProps;

  /**
   * A default render function for all columns; accepts the current record, its index in `records`
   * and the column accessor
   */
  defaultColumnRender?: (
    record: any,
    index: number,
    accesor: string,
  ) => ReactNode;

  /**
   * Accessor to use as unique record key; can be a string representing a property name
   * or a function receiving the current record and returning a unique value.
   * If you're providing a string, you can use dot-notation for nested objects property drilling
   * (i.e. `department.name` or `department.company.name`);
   * defaults to `id`
   */
  idAccessor?: string | ((record: any) => Key);

  /**
   * Visible records; the `DataTable` component will try to infer its row type from here
   */
  records?: any[];

  /**
   * Text to show on empty state and pagination footer when no records are available
   */
  noRecordsText?: string;

  /**
   * If true, the table will not show the header with column titles
   */
  noHeader?: boolean;

  /**
   * Function to call when a row cell is clicked
   */
  onCellClick?: DataTableCellClickHandler;

  /**
   * Function to call when a row is clicked, receiving the current record, its index in `records` and the click event
   */
  onRowClick?: (record: any, recordIndex: number, event: MouseEvent) => void;

  /**
   * Function to call when the DataTable is scrolled to top
   */
  onScrollToTop?: () => void;

  /**
   * Function to call when the DataTable is scrolled to bottom
   */
  onScrollToBottom?: () => void;

  /**
   * Function to call when the DataTable is scrolled to left
   */
  onScrollToLeft?: () => void;

  /**
   * Function to call when the DataTable is scrolled to right
   */
  onScrollToRight?: () => void;

  /**
   * Defines a context-menu to show when user right-clicks or clicks on a row
   */
  rowContextMenu?: DataTableContextMenuProps<any>;

  /**
   * Defines the row expansion behavior
   */
  rowExpansion?: DataTableRowExpansionProps<any>;

  /**
   * Optional class name passed to each row; can be a string or a function
   * receiving the current record and its index as arguments and returning a string
   */
  rowClassName?:
    | string
    | ((record: any, recordIndex: number) => string | undefined);

  /**
   * Optional style passed to each row; can be a CSS properties object or
   * a function receiving the current record and its index as arguments and returning a CSS properties object
   */
  rowStyle?:
    | CSSProperties
    | ((record: any, recordIndex: number) => CSSProperties | undefined);

  /**
   * Optional style passed to each row; see https://mantine.dev/styles/sx/
   */
  // rowSx?: Sx;

  /**
   * Optional function returning an object of custom attributes to be applied to each row in the table.
   * Receives the current record and its index as arguments.
   * Useful for adding data attributes, handling middle-clicks, etc.
   */
  customRowAttributes?: (
    record: any,
    recordIndex: number,
  ) => Record<string, unknown>;

  /**
   * Ref pointing to the scrollable viewport element; useful for imperative scrolling
   */
  scrollViewportRef?: RefObject<HTMLDivElement>;

  /**
   * Additional props passed to the underlying `ScrollArea` element
   */
  scrollAreaProps?: Omit<
    ScrollAreaProps,
    "classNames" | "styles" | "onScrollPositionChange"
  >;
  /**
   * Ref pointing to the table body element
   */
  bodyRef?:
    | ((instance: HTMLTableSectionElement | null) => void)
    | RefObject<HTMLTableSectionElement>;
}

export type DataTableProps = _DataTableProps &
  DataTableColumnProps &
  DataTableOuterBorderProps &
  DataTableLoaderProps &
  DataTableEmptyStateProps &
  _DataTablePaginationProps &
  DataTableSortProps &
  DataTableSelectionProps;
