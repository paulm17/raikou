import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, StyleProp, Factory, RaikouSpacing } from '@raikou/core';
import React from 'react';

type GridColStylesNames = "col";
type ColSpan = number | "auto" | "content";
interface GridColProps extends BoxProps, StylesApiProps<GridColFactory>, ElementProps<"div"> {
    /** Column span, `12` by default */
    span?: StyleProp<ColSpan>;
    /** Column order, can be used to reorder columns at different viewport sizes */
    order?: StyleProp<number>;
    /** Column offset on the left side – number of columns that should be left empty before this column */
    offset?: StyleProp<number>;
}
type GridColFactory = Factory<{
    props: GridColProps;
    ref: HTMLDivElement;
    stylesNames: GridColStylesNames;
    compound: true;
}>;
declare const GridCol: _raikou_core.RaikouComponent<{
    props: GridColProps;
    ref: HTMLDivElement;
    stylesNames: GridColStylesNames;
    compound: true;
}>;

type GridStylesNames = "root" | "col" | "inner";
type GridCssVariables = {
    root: "--grid-justify" | "--grid-align";
};
interface GridProps extends BoxProps, StylesApiProps<GridFactory>, ElementProps<"div"> {
    /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    gutter?: StyleProp<RaikouSpacing | (string & {}) | number>;
    /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
    grow?: boolean;
    /** Sets `justify-content`, `flex-start` by default */
    justify?: React.CSSProperties["justifyContent"];
    /** Sets `align-items`, `stretch` by default */
    align?: React.CSSProperties["alignItems"];
    /** Number of columns in each row, `12` by default */
    columns?: number;
}
type GridFactory = Factory<{
    props: GridProps;
    ref: HTMLDivElement;
    stylesNames: GridStylesNames;
    vars: GridCssVariables;
    staticComponents: {
        Col: typeof GridCol;
    };
}>;
declare const Grid: _raikou_core.RaikouComponent<{
    props: GridProps;
    ref: HTMLDivElement;
    stylesNames: GridStylesNames;
    vars: GridCssVariables;
    staticComponents: {
        Col: typeof GridCol;
    };
}>;

export { Grid, GridCol, GridColProps, GridCssVariables, GridFactory, GridProps, GridStylesNames };
