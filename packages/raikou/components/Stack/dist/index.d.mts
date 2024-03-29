import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSpacing, Factory } from '@raikou/core';
import React from 'react';

type StackStylesNames = "root";
type StackCssVariables = {
    root: "--stack-gap" | "--stack-align" | "--stack-justify";
};
interface StackProps extends BoxProps, StylesApiProps<StackFactory>, ElementProps<"div"> {
    /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
    gap?: RaikouSpacing;
    /** Controls `align-items` CSS property, `'stretch'` by default */
    align?: React.CSSProperties["alignItems"];
    /** Controls `justify-content` CSS property, `'flex-start'` by default */
    justify?: React.CSSProperties["justifyContent"];
}
type StackFactory = Factory<{
    props: StackProps;
    ref: HTMLDivElement;
    stylesNames: StackStylesNames;
    vars: StackCssVariables;
}>;
declare const Stack: _raikou_core.RaikouComponent<{
    props: StackProps;
    ref: HTMLDivElement;
    stylesNames: StackStylesNames;
    vars: StackCssVariables;
}>;

export { Stack, type StackCssVariables, type StackFactory, type StackProps, type StackStylesNames };
