import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSpacing, Factory } from '@raikou/core';
import React from 'react';

type FlexStylesNames = "root";
type FlexVariant = string;
type FlexCssVariables = {
    root: "--flex-gap" | "--flex-align" | "--flex-justify" | "--flex-wrap" | "--flex-direction";
};
interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<"div"> {
    /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
    gap?: RaikouSpacing | (string & {}) | number;
    /** Controls `align-items` CSS property, `'stretch'` by default */
    align?: React.CSSProperties["alignItems"];
    /** Controls `justify-content` CSS property, `'flex-start'` by default */
    justify?: React.CSSProperties["justifyContent"];
    /** Controls `flex-wrap` CSS property, `'wrap'` by default */
    wrap?: React.CSSProperties["flexWrap"];
    /** Controls `direction` CSS property, `'row'` by default */
    direction?: React.CSSProperties["flexDirection"];
}
type FlexFactory = Factory<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
    vars: FlexCssVariables;
    variant: FlexVariant;
}>;
declare const Flex: _raikou_core.RaikouComponent<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
    vars: FlexCssVariables;
    variant: FlexVariant;
}>;

export { Flex, FlexCssVariables, FlexFactory, FlexProps, FlexStylesNames, FlexVariant };
