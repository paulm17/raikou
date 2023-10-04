import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, CompoundStylesApiProps, RaikouColor, RaikouSpacing, RaikouSize, RaikouShadow, RaikouTheme as RaikouTheme$1 } from '@raikou/core';
import React, { ReactNode, CSSProperties, MouseEvent, Dispatch, SetStateAction, Key, RefObject } from 'react';
import { RaikouTheme } from '@Raikou/core';

type ScrollAreaStylesNames = "root" | "viewport" | "viewportInner" | "scrollbar" | "thumb" | "corner";
type ScrollAreaCssVariables = {
    root: "--scrollarea-scrollbar-size";
};
interface ScrollAreaProps extends BoxProps, StylesApiProps<ScrollAreaFactory>, ElementProps<"div"> {
    /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
    scrollbarSize?: number | string;
    /**
     * Defines scrollbars behavior, `hover` by default
     * - `hover` – scrollbars are visible when mouse is over the scroll area
     * - `scroll` – scrollbars are visible when the scroll area is scrolled
     * - `always` – scrollbars are always visible
     * - `never` – scrollbars are always hidden
     * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
     * */
    type?: "auto" | "always" | "scroll" | "hover" | "never";
    /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
    scrollHideDelay?: number;
    /** Determines whether scrollbars should be offset with padding, `false` by default */
    offsetScrollbars?: boolean | "x" | "y";
    /** Assigns viewport element (scrollable container) ref */
    viewportRef?: React.ForwardedRef<HTMLDivElement>;
    /** Props passed down to the viewport element */
    viewportProps?: React.ComponentPropsWithRef<"div">;
    /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
    onScrollPositionChange?(position: {
        x: number;
        y: number;
    }): void;
}
type ScrollAreaFactory = Factory<{
    props: ScrollAreaProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaStylesNames;
    vars: ScrollAreaCssVariables;
    staticComponents: {
        Autosize: typeof ScrollAreaAutosize;
    };
}>;
declare const ScrollAreaAutosize: _raikou_core.RaikouComponent<{
    props: ScrollAreaProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaStylesNames;
    vars: ScrollAreaCssVariables;
    staticComponents: {
        Autosize: typeof ScrollAreaAutosize;
    };
}>;

interface TableElementProps<Selector extends string> extends BoxProps, CompoundStylesApiProps<Omit<TableFactory, "stylesNames"> & {
    stylesNames: Selector;
}> {
}
interface TableThProps extends TableElementProps<"th">, ElementProps<"th"> {
}
interface TableTdProps extends TableElementProps<"td">, ElementProps<"td"> {
}
interface TableTrProps extends TableElementProps<"tr">, ElementProps<"tr"> {
}
interface TableTheadProps extends TableElementProps<"thead">, ElementProps<"thead"> {
}
interface TableTbodyProps extends TableElementProps<"tbody">, ElementProps<"tbody"> {
}
interface TableTfootProps extends TableElementProps<"tfoot">, ElementProps<"tfoot"> {
}
interface TableCaptionProps extends TableElementProps<"caption">, ElementProps<"caption"> {
}
declare const TableTh: _raikou_core.RaikouComponent<{
    props: TableThProps;
    ref: HTMLTableCellElement;
    stylesNames: "th";
    compound: true;
}>;
declare const TableTd: _raikou_core.RaikouComponent<{
    props: TableTdProps;
    ref: HTMLTableCellElement;
    stylesNames: "td";
    compound: true;
}>;
declare const TableTr: _raikou_core.RaikouComponent<{
    props: TableTrProps;
    ref: HTMLTableRowElement;
    stylesNames: "tr";
    compound: true;
}>;
declare const TableThead: _raikou_core.RaikouComponent<{
    props: TableTheadProps;
    ref: HTMLTableSectionElement;
    stylesNames: "thead";
    compound: true;
}>;
declare const TableTbody: _raikou_core.RaikouComponent<{
    props: TableTbodyProps;
    ref: HTMLTableSectionElement;
    stylesNames: "tbody";
    compound: true;
}>;
declare const TableTfoot: _raikou_core.RaikouComponent<{
    props: TableTfootProps;
    ref: HTMLTableSectionElement;
    stylesNames: "tfoot";
    compound: true;
}>;
declare const TableCaption: _raikou_core.RaikouComponent<{
    props: TableCaptionProps;
    ref: HTMLTableCaptionElement;
    stylesNames: "caption";
    compound: true;
}>;

type TableStylesNames = "table" | "thead" | "tbody" | "tfoot" | "tr" | "th" | "td" | "caption";
type TableCssVariables = {
    table: "--table-layout" | "--table-border-color" | "--table-caption-side" | "--table-horizontal-spacing" | "--table-vertical-spacing" | "--table-striped-color" | "--table-highlight-on-hover-color";
};
interface TableProps extends BoxProps, StylesApiProps<TableFactory>, ElementProps<"table"> {
    /** Value of `table-layout` style, `auto` by default */
    layout?: React.CSSProperties["tableLayout"];
    /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
    captionSide?: "top" | "bottom";
    /** Color of table borders, key of `theme.colors` or any valid CSS color */
    borderColor?: RaikouColor;
    /** Determines whether the table should have outer border, `false` by default */
    withTableBorder?: boolean;
    /** Determines whether the table should have borders between columns, `false` by default */
    withColumnBorders?: boolean;
    /** Determines whether the table should have borders between rows, `true` by default */
    withRowBorders?: boolean;
    /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    horizontalSpacing?: RaikouSpacing;
    /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
    verticalSpacing?: RaikouSpacing;
    /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
    striped?: boolean | "odd" | "even";
    /** Background color of striped rows, key of `theme.colors` or any valid CSS color */
    stripedColor?: RaikouColor;
    /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
    highlightOnHover?: boolean;
    /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color */
    highlightOnHoverColor?: RaikouColor;
}
type TableFactory = Factory<{
    props: TableProps;
    ref: HTMLTableElement;
    stylesNames: TableStylesNames;
    vars: TableCssVariables;
    staticComponents: {
        Thead: typeof TableThead;
        Tbody: typeof TableTbody;
        Tfoot: typeof TableTfoot;
        Td: typeof TableTd;
        Th: typeof TableTh;
        Tr: typeof TableTr;
        Caption: typeof TableCaption;
    };
}>;

type DataTableColumnTextAlignment = 'left' | 'center' | 'right';

type DataTableColumn = {
    /**
     * Column accessor; you can use dot-notation for nested objects property drilling
     * (i.e. `department.name` or `department.company.name`)
     */
    accessor: string;
    /**
     * Optional column header title; if not present, one will be generated by "humanizing"
     * the provided column accessor
     * (i.e. `firstName` -> `First name`; `user.firstName` -> `User first name`)
     */
    title?: ReactNode;
    /**
     * Custom cell data render function accepting the current record and its index in `records`
     */
    render?: (record: any, index: number) => ReactNode;
    /**
     * Column text alignment; defaults to `left`
     */
    textAlignment?: DataTableColumnTextAlignment;
    /**
     * If true, column will be sortable
     */
    sortable?: boolean;
    /**
     * Optional node providing the user with filtering options.
     * If present, a filter button will be added to the column's header. Upon clicking that button,
     * a pop-over showing the provided node will be opened.
     *
     * Alternatively, a function returning a node can be provided. The function receives props with a `close`
     * method which allows programatically closing the pop-over.
     *
     * ```tsx
     * // …
     * columns={[
     *   {
     *     accessor: 'name',
     *     filter: ({ close }) => {
     *       return <Stack>
     *         <Button onClick={() => { setFilter(undefined); close(); }}>Reset</Button>
     *       </Stack>
     *     },
     *   }
     * ]}
     * // …
     * ```
     *
     * Note: this property only takes care of rendering the node which provides the filtering options.
     * It is assumed that the actual filtering is performed somewhere in user code.
     */
    filter?: ReactNode | ((filterProps: {
        close: () => void;
    }) => ReactNode);
    /**
     * If true, filter icon will be styled differently to indicate the filter is in effect.
     */
    filtering?: boolean;
    /**
     * Desired column width
     */
    width?: string | number;
    /**
     * If true, column will not be visible
     */
    hidden?: boolean;
    /**
     * If set, the column will only be visible according to the specified media query
     */
    visibleMediaQuery?: string | ((theme: RaikouTheme) => string);
    /**
     * Optional class name passed to the column title
     */
    titleClassName?: string;
    /**
     * Optional style passed to the column title
     */
    titleStyle?: CSSProperties;
    /**
     * Optional style passed to the column title; see https://mantine.dev/styles/sx/
     */
    /**
     * Optional class name passed to each data cell in the column; can be a string or a function
     * receiving the current record and its index as arguments and returning a string
     */
    cellsClassName?: string | ((record: any, recordIndex: number) => string | undefined);
    /**
     * Optional style passed to each data cell in the column; can be a CSS properties object or
     * a function receiving the current record and its index as arguments and returning a CSS properties object
     */
    cellsStyle?: CSSProperties | ((record: any, recordIndex: number) => CSSProperties | undefined);
    /**
     * Optional style passed to each data cell in the column; see https://mantine.dev/styles/sx/
     */
    /**
     * Optional function returning an object of custom attributes to be applied to each cell in the column.
     * Receives the current record and its index as arguments.
     * Useful for adding data attributes, handling middle-clicks, etc.
     */
    customCellAttributes?: (record: any, recordIndex: number) => Record<string, unknown>;
    /**
     * Optional column footer content; if at least one column has a footer, the table will display a footer row
     */
    footer?: ReactNode;
    /**
     * Optional class name passed to the column footer
     */
    footerClassName?: string;
    /**
     * Optional style passed to the column footer
     */
    footerStyle?: CSSProperties;
} & ({
    /**
     * If true, cell content in this column will be truncated with ellipsis as needed and will not wrap
     * to multiple lines.
     * (i.e. `overflow: hidden; text-overflow: ellipsis`; `white-space: nowrap`)
     * On a column you can either set this property or `noWrap` but not both.
     */
    ellipsis?: boolean;
    noWrap?: never;
} | {
    ellipsis?: never;
    /**
     * If true, cell content in this column will not wrap to multiple lines
     * (i.e. `white-space: nowrap`)
     * On a column you can either set this property or `ellipsis` but not both.
     */
    noWrap?: boolean;
});

type DataTableCellClickHandler = (params: {
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

type DataTableColumnGroup = {
    /**
     * Used as the `key` prop for the created `<th />`.
     */
    id: string;
    /**
     * Component to render inside the column group header
     */
    title?: ReactNode;
    /**
     * Columns which are part of the group.
     */
    columns: readonly DataTableColumn[];
    className?: string;
    style?: CSSProperties;
};

type DataTableContextMenuItemProps = {
    /**
     * Unique item key
     */
    key: string;
} & ({
    /**
     * If true, insert an actions divider
     */
    divider: true;
    icon?: never;
    title?: never;
    color?: never;
    hidden?: never;
    disabled?: never;
    onClick?: never;
} | {
    divider?: never;
    /**
     * Item icon
     */
    icon?: ReactNode;
    /**
     * Item title; if not present, one will be generated by "humanizing"
     * the provided item key
     * (i.e. `viewRecord` -> `View record`)
     */
    title?: ReactNode;
    /**
     * Item color
     */
    color?: any;
    /**
     * if true, the menu item will not be shown
     */
    hidden?: boolean;
    /**
     * if true, the menu item will be disabled
     */
    disabled?: boolean;
    /**
     * Function to call when the menu item is clicked
     */
    onClick: () => void;
});

type DataTableContextMenuProps<T> = {
    /**
     * Context menu trigger; defaults to `rightClick` for classic behavior
     */
    trigger?: "rightClick" | "click";
    /**
     * Menu z-index; defaults to `3`
     */
    zIndex?: number;
    /**
     * Menu border radius; defaults to `xs`
     */
    borderRadius?: RaikouSize;
    /**
     * Menu shadow; defaults to `sm`
     */
    shadow?: RaikouShadow;
    /**
     * Boolean or a function accepting the current record and its index as arguments and returning a boolean value;
     * if true, the menu will not be shown
     */
    hidden?: boolean | ((record: T, recordIndex: number) => boolean);
    /**
     * Function accepting the current record and its index as arguments and returning the row menu items
     */
    items: (record: T, recordIndex: number) => DataTableContextMenuItemProps[];
};

type DataTableDefaultColumnProps = Omit<DataTableColumn, "accessor" | "hidden" | "visibleMediaQuery" | "render">;

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
type DataTableEmptyStateProps = DataTableEmptyStateProps1 | DataTableEmptyStateProps2;

type DataTableOuterBorderProps = {
    withBorder?: never;
    borderRadius?: never;
} | {
    /**
     * If true, table will have border
     */
    withBorder: boolean;
    /**
     * Table border radius
     */
    borderRadius?: RaikouSize;
};

type DataTablePageSizeSelectorProps = {
    onRecordsPerPageChange?: never;
    recordsPerPageOptions?: never;
    recordsPerPageLabel?: never;
} | {
    /**
     * Callback fired a new page size is selected
     */
    onRecordsPerPageChange: (recordsPerPage: number) => void;
    /**
     * Array of options to show in records per page selector
     */
    recordsPerPageOptions: number[];
    /**
     * Label for records per page selector
     */
    recordsPerPageLabel?: string;
};

type _DataTablePaginationProps = ({
    page?: never;
    onPageChange?: never;
    totalRecords?: never;
    recordsPerPage?: never;
    paginationColor?: never;
    paginationSize?: never;
    loadingText?: never;
    paginationText?: never;
    paginationWrapBreakpoint?: never;
    getPaginationControlProps?: never;
} | {
    /**
     * Current page number (1-based); if provided, a pagination component is shown
     */
    page: number;
    /**
     * Callback fired after change of each page
     */
    onPageChange: (page: number) => void;
    /**
     * Total number of records in the dataset
     */
    totalRecords: number | undefined;
    /**
     * Number of records per page
     */
    recordsPerPage: number;
    /**
     * Pagination component size; defaults to `sm`
     */
    paginationSize?: RaikouSize;
    /**
     * Pagination component color; defaults to primary theme color
     */
    paginationColor?: any;
    /**
     * Text to show while records are loading
     */
    loadingText?: string;
    /**
     * Pagination text; defaults to ```({ from, to, totalRecords }) => `${from}-${to}/${totalRecords}`
     * ```
     */
    paginationText?: (options: {
        from: number;
        to: number;
        totalRecords: number;
    }) => ReactNode;
    /**
     * Pagination wrap breakpoints; defaults to `sm`.
     * Below this breakpoint the content will be displayed on multiple lines;
     * above it the content will be displayed on a single line.
     */
    paginationWrapBreakpoint?: RaikouSize;
    /**
     * Function that returns props object for pagination control; useful for improving accessibility
     */
    getPaginationControlProps?: (control: "previous" | "next") => Record<string, unknown>;
}) & DataTablePageSizeSelectorProps;

interface CollapseProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<"div">, keyof BoxProps> {
    /** Opened state */
    in: boolean;
    /** Called each time transition ends */
    onTransitionEnd?(): void;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Transition timing function, default value is `ease` */
    transitionTimingFunction?: string;
    /** Determines whether opacity should be animated, `true` by default */
    animateOpacity?: boolean;
}

type DataTableRowExpansionCollapseProps = Pick<CollapseProps, "animateOpacity" | "transitionDuration" | "transitionTimingFunction">;

type DataTableRowExpansionProps<T> = {
    /**
     * Defines when rows should expand; defaults to `click`
     */
    trigger?: 'click' | 'always' | 'never';
    /**
     * If true, multiple rows can be expanded at the same time
     */
    allowMultiple?: boolean;
    /**
     * Function defining which records will be initially expanded;
     * does nothing if `trigger === 'always'`
     */
    initiallyExpanded?: (record: T, recordIndex: number) => boolean;
    /**
     * Additional properties passed to the Mantine Collapse component wrapping the custom content
     */
    collapseProps?: DataTableRowExpansionCollapseProps;
    /**
     * An object defining the row expansion behavior in controlled mode
     */
    expanded?: {
        /**
         * Currently expanded record IDs
         */
        recordIds: unknown[];
        /**
         * Callback fired when expanded records change;
         * receives an array containing the newly expanded record IDs
         */
        onRecordIdsChange?: Dispatch<SetStateAction<any[]>> | ((recordIds: unknown[]) => void);
    };
    /**
     * Function returning the custom content to be lazily rendered for an expanded row;
     * accepts the current record and a `collapse()` callback that can be used to collapse the expanded row
     */
    content: (props: {
        record: T;
        recordIndex: number;
        collapse: () => void;
    }) => ReactNode;
};

type DataTableSelectionProps = {
    selectedRecords?: never;
    onSelectedRecordsChange?: never;
    isRecordSelectable?: never;
    getRecordSelectionCheckboxProps?: never;
    allRecordsSelectionCheckboxProps?: never;
} | {
    /**
     * Currently-selected records
     */
    selectedRecords?: any[];
    /**
     * Callback fired when selected records change
     */
    onSelectedRecordsChange?: (selectedRecords: any[]) => void;
    /**
     * A function used to determine whether a certain record is selectable;
     * if the function returns false, the row selection checkbox is disabled
     */
    isRecordSelectable?: (record: any, index: number) => boolean;
    /**
     * A function used to determine additional props of the row selection checkbox
     */
    getRecordSelectionCheckboxProps?: (record: any, index: number) => Record<string, unknown>;
    /**
     * Additional props for the header checkbox that toggles selection of all records
     */
    allRecordsSelectionCheckboxProps?: Record<string, unknown>;
};

type DataTableSortStatus = {
    /**
     * Sort column accessor; you can use dot-notation for nested objects property drilling
     * (i.e. `department.name` or `department.company.name`)
     */
    columnAccessor: string;
    /**
     * Sort direction; `asc` for ascending or `desc` for descending
     */
    direction: 'asc' | 'desc';
};

type DataTableSortProps = {
    sortStatus?: never;
    onSortStatusChange?: never;
    sortIcons?: never;
} | {
    /**
     * Current sort status (sort column accessor & direction)
     */
    sortStatus: DataTableSortStatus;
    /**
     * Callback fired after change of sort status
     */
    onSortStatusChange?: (sortStatus: DataTableSortStatus) => void;
    /**
     * Custom sort icons
     */
    sortIcons?: {
        /**
         * Icon to display when column is sorted ascending;
         * will be rotated 180deg for descending sort
         */
        sorted: ReactNode;
        /**
         * Icon to display when column is not sorted
         */
        unsorted: ReactNode;
    };
};

type DataTableVerticalAlignment = 'top' | 'center' | 'bottom';

type DataTableColumnProps = {
    /**
     * Grouped columns
     */
    groups: readonly DataTableColumnGroup[];
    columns?: never;
} | {
    /**
     * Visible columns
     */
    columns: DataTableColumn[];
    groups?: never;
};

type DataTableLoaderProps = {
    /**
     * Loader background blur (in pixels)
     */
    loaderBackgroundBlur?: number;
} & ({
    loaderSize?: never;
    loaderVariant?: never;
    loaderColor?: never;
    /**
     * Custom loader component to use instead of default one
     */
    customLoader?: ReactNode;
} | {
    /**
     * Loader size; defaults to `lg`
     */
    loaderSize?: RaikouSize;
    /**
     * Loader variant
     */
    loaderVariant?: any;
    /**
     * Loader color
     */
    loaderColor?: any;
    customLoader?: never;
});

interface _DataTableProps extends BoxProps, StylesApiProps<DataTableFactory>, ElementProps<"div">, Pick<TableProps, "striped" | "highlightOnHover" | "horizontalSpacing" | "verticalSpacing"> {
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
    borderColor?: string | ((theme: RaikouTheme$1) => string);
    /**
     * Row border color; defaults to
     * `(theme) => (theme.fn.rgba(theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3], 0.65))`
     */
    rowBorderColor?: string | ((theme: RaikouTheme$1) => string);
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
    defaultColumnRender?: (record: any, index: number, accesor: string) => ReactNode;
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
    rowClassName?: string | ((record: any, recordIndex: number) => string | undefined);
    /**
     * Optional style passed to each row; can be a CSS properties object or
     * a function receiving the current record and its index as arguments and returning a CSS properties object
     */
    rowStyle?: CSSProperties | ((record: any, recordIndex: number) => CSSProperties | undefined);
    /**
     * Optional style passed to each row; see https://mantine.dev/styles/sx/
     */
    /**
     * Optional function returning an object of custom attributes to be applied to each row in the table.
     * Receives the current record and its index as arguments.
     * Useful for adding data attributes, handling middle-clicks, etc.
     */
    customRowAttributes?: (record: any, recordIndex: number) => Record<string, unknown>;
    /**
     * Ref pointing to the scrollable viewport element; useful for imperative scrolling
     */
    scrollViewportRef?: RefObject<HTMLDivElement>;
    /**
     * Additional props passed to the underlying `ScrollArea` element
     */
    scrollAreaProps?: Omit<ScrollAreaProps, "classNames" | "styles" | "onScrollPositionChange">;
    /**
     * Ref pointing to the table body element
     */
    bodyRef?: ((instance: HTMLTableSectionElement | null) => void) | RefObject<HTMLTableSectionElement>;
}
type DataTableProps = _DataTableProps & DataTableColumnProps & DataTableOuterBorderProps & DataTableLoaderProps & DataTableEmptyStateProps & _DataTablePaginationProps & DataTableSortProps & DataTableSelectionProps;

type DataTableStylesNames = "root" | "textSelectionDisabled" | "table" | "table-tr" | "table-td" | "tableWithBorder" | "tableWithColumnBorders" | "tableWithColumnBordersAndSelectableRecords" | "verticalAlignmentTop" | "verticalAlignmentBottom";
type DataTableCssVariables = {
    root: "--datatable-height" | "--datatable-min-height" | "--datatable-shadow" | "--datatable-border-color" | "--datatable-row-border-color";
};
type DataTableFactory = Factory<{
    props: DataTableProps;
    ref: HTMLDivElement;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: DataTableStylesNames;
    vars: DataTableCssVariables;
}>;
declare const DataTable: _raikou_core.RaikouComponent<{
    props: DataTableProps;
    ref: HTMLDivElement;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: DataTableStylesNames;
    vars: DataTableCssVariables;
}>;

/**
 * Utility function that returns a humanized version of a string, e.g. "camelCase" -> "Camel Case"
 */
declare function humanize(value: string): string;
/**
 * Utility function that returns an array of values that are present in the first array but not in the second
 */
declare function differenceBy<T>(arr1: T[], arr2: T[], iteratee: (value: T) => unknown): T[];
/**
 * Utility function that returns an array of unique values from a given array
 */
declare function uniqBy<T>(arr: T[], iteratee: (value: T) => unknown): T[];
/**
 * Utility function that returns the value at a given path in an object
 */
declare function getValueAtPath(obj: unknown, path: string): unknown;

export { DataTable, DataTableCellClickHandler, DataTableColumn, DataTableColumnGroup, DataTableColumnTextAlignment, DataTableContextMenuItemProps, DataTableContextMenuProps, DataTableDefaultColumnProps, DataTableEmptyStateProps, DataTableOuterBorderProps, DataTableProps, DataTableRowExpansionCollapseProps, DataTableRowExpansionProps, DataTableSelectionProps, DataTableSortProps, DataTableSortStatus, DataTableVerticalAlignment, _DataTablePaginationProps, _DataTableProps, differenceBy, getValueAtPath, humanize, uniqBy };
