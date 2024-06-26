import * as _raikou_core from '@raikou/core';
import { ElementProps, BoxProps, CompoundStylesApiProps, StylesApiProps, RaikouColor, RaikouSpacing, Factory } from '@raikou/core';
import React from 'react';

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

interface TableDataRendererProps {
    data: TableData;
}
declare function TableDataRenderer({ data }: TableDataRendererProps): React.JSX.Element;
declare namespace TableDataRenderer {
    var displayName: string;
}

type TableStylesNames = "table" | "thead" | "tbody" | "tfoot" | "tr" | "th" | "td" | "caption";
type TableCssVariables = {
    table: "--table-layout" | "--table-border-color" | "--table-caption-side" | "--table-horizontal-spacing" | "--table-vertical-spacing" | "--table-striped-color" | "--table-highlight-on-hover-color";
};
interface TableData {
    head?: React.ReactNode[];
    body?: React.ReactNode[][];
    foot?: React.ReactNode[];
    caption?: string;
}
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
    /** Data that should be used to generate table, ignored if `children` prop is set */
    data?: TableData;
    /** Determines whether `Table.Thead` should be sticky, `false` by default */
    stickyHeader?: boolean;
    /** Offset from top at which `Table.Thead` should become sticky, `0` by default */
    stickyHeaderOffset?: number | string;
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
        DataRenderer: typeof TableDataRenderer;
    };
}>;
declare const Table: _raikou_core.RaikouComponent<{
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
        DataRenderer: typeof TableDataRenderer;
    };
}>;

export { Table, TableCaption, type TableCaptionProps, type TableCssVariables, type TableFactory, type TableProps, type TableStylesNames, TableTbody, type TableTbodyProps, TableTd, type TableTdProps, TableTfoot, type TableTfootProps, TableTh, type TableThProps, TableThead, type TableTheadProps, TableTr, type TableTrProps };
