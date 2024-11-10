import type { RaikouColor, RaikouSize } from '@raikou/core';
import type { DataTablePageSizeSelectorProps } from './DataTablePageSizeSelectorProps';

export type DataTablePaginationProps = (
  | {
      paginationWithEdges?: never;
      paginationWithControls?: never;
      page?: never;
      onPageChange?: never;
      totalRecords?: never;
      recordsPerPage?: never;
      paginationActiveTextColor?: never;
      paginationActiveBackgroundColor?: never;
      paginationSize?: never;
      loadingText?: never;
      paginationText?: never;
      paginationWrapBreakpoint?: never;
      getPaginationControlProps?: never;
    }
  | {
      /**
       * Whether to show first and last page navigation buttons.
       */
      paginationWithEdges?: boolean;

      /**
       * Whether to show next and previous page navigation buttons.
       */
      paginationWithControls?: boolean;

      /**
       * Current page number (1-based).
       * If provided, a pagination component is shown.
       */
      page: number;

      /**
       * Callback fired after page change.
       * Receives the new page number as argument.
       */
      onPageChange: (page: number) => void;

      /**
       * Total number of records in the dataset.
       */
      totalRecords: number | undefined;

      /**
       * Number of records per page.
       */
      recordsPerPage: number;

      /**
       * Pagination component size.
       * @default `sm`
       */
      paginationSize?: RaikouSize;

      /**
       * Color applied to active page button text.
       * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
       * or an object with `light` and `dark` keys and `RaikouColor` values.
       * Defaults to white.
       */
      paginationActiveTextColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

      /**
       * Color applied to active page button background.
       * Can be a `RaikouColor` (key of `theme.colors` or any valid CSS color string),
       * or an object with `light` and `dark` keys and `RaikouColor` values.
       * Defaults to primary theme color.
       */
      paginationActiveBackgroundColor?: RaikouColor | { light: RaikouColor; dark: RaikouColor };

      /**
       * Text to show while records are loading.
       */
      loadingText?: string;

      /**
       * Pagination text. Defaults to ```({ from, to, totalRecords }) => `${from}-${to}/${totalRecords}`
       * ```
       */
      paginationText?: (params: {
        from: number;
        to: number;
        totalRecords: number;
      }) => React.ReactNode;

      /**
       * Pagination wrap breakpoints.
       * Below this breakpoint the content will be displayed on multiple lines,
       * above it the content will be displayed on a single line.
       * @default `sm`
       */
      paginationWrapBreakpoint?: RaikouSize | (string & NonNullable<unknown>) | number;

      /**
       * Function that returns props object for pagination control.
       * Useful for improving accessibility.
       */
      getPaginationControlProps?: (
        control: 'first' | 'last' | 'previous' | 'next'
      ) => Record<string, unknown>;
    }
) &
  DataTablePageSizeSelectorProps;
