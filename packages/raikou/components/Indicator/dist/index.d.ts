import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, RaikouColor, Factory } from '@raikou/core';
import React from 'react';

type Position = 'top' | 'middle' | 'bottom';
type Placement = 'start' | 'center' | 'end';
type IndicatorPosition = `${Position}-${Placement}`;

type IndicatorPositionVariables = "--indicator-top" | "--indicator-bottom" | "--indicator-left" | "--indicator-right" | "--indicator-translate-x" | "--indicator-translate-y";
type IndicatorStylesNames = "root" | "indicator";
type IndicatorCssVariables = {
    root: "--indicator-color" | "--indicator-size" | "--indicator-radius" | "--indicator-z-index" | IndicatorPositionVariables;
};
interface IndicatorProps extends BoxProps, StylesApiProps<IndicatorFactory>, ElementProps<"div"> {
    /** Indicator position relative to the target element, `'top-end'` by default */
    position?: IndicatorPosition;
    /** Indicator offset relative to the target element, usually used for elements with border-radius, equals to `size` by default */
    offset?: number;
    /** Determines whether the indicator container should be an inline element, `false` by default */
    inline?: boolean;
    /** Indicator width and height, `10` by default */
    size?: number | string;
    /** Label rendered inside the indicator, for example, notification count */
    label?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `100` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color value, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Determines whether the indicator should have a border (color of the border is the same as the body element), `false` by default */
    withBorder?: boolean;
    /** When Indicator is disabled it renders children only */
    disabled?: boolean;
    /** Determines whether the indicator should have processing animation, `false` by default */
    processing?: boolean;
    /** Indicator z-index, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
}
type IndicatorFactory = Factory<{
    props: IndicatorProps;
    ref: HTMLDivElement;
    stylesNames: IndicatorStylesNames;
    vars: IndicatorCssVariables;
}>;
declare const Indicator: _raikou_core.RaikouComponent<{
    props: IndicatorProps;
    ref: HTMLDivElement;
    stylesNames: IndicatorStylesNames;
    vars: IndicatorCssVariables;
}>;

export { Indicator, IndicatorCssVariables, IndicatorFactory, IndicatorPositionVariables, IndicatorProps, IndicatorStylesNames };
