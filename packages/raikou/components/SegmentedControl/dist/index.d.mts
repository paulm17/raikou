import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouSize, RaikouRadius, Factory } from '@raikou/core';
import React from 'react';

type SegmentedControlStylesNames = "root" | "input" | "label" | "control" | "indicator" | "innerLabel";
type SegmentedControlCssVariables = {
    root: "--sc-radius" | "--sc-color" | "--sc-font-size" | "--sc-padding" | "--sc-shadow" | "--sc-transition-duration" | "--sc-transition-timing-function";
};
interface SegmentedControlItem {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
interface SegmentedControlProps extends BoxProps, StylesApiProps<SegmentedControlFactory>, ElementProps<"div", "onChange"> {
    /** Data based on which controls are rendered */
    data: (string | SegmentedControlItem)[];
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when value changes */
    onChange?: (value: string) => void;
    /** Determines whether the component is disabled */
    disabled?: boolean;
    /** Name of the radio group, by default random name is generated */
    name?: string;
    /** Determines whether the component should take 100% width of its parent, `false` by default */
    fullWidth?: boolean;
    /** Key of `theme.colors` or any valid CSS color, changes color of indicator, by default color is based on current color scheme */
    color?: RaikouColor;
    /** Controls `font-size`, `padding` and `height` properties, `'sm'` by default */
    size?: RaikouSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Indicator `transition-duration` in ms, set `0` to turn off transitions, `200` by default */
    transitionDuration?: number;
    /** Indicator `transition-timing-function` property, `ease` by default */
    transitionTimingFunction?: string;
    /** Determines in which orientation component id displayed, `'horizontal'` by default */
    orientation?: "vertical" | "horizontal";
    /** Determines whether the value can be changed */
    readOnly?: boolean;
    /** Determines whether text color should depend on `background-color` of the indicator. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
    /** Determines whether there should be borders between items, `true` by default */
    withItemsBorders?: boolean;
}
type SegmentedControlFactory = Factory<{
    props: SegmentedControlProps;
    ref: HTMLDivElement;
    stylesNames: SegmentedControlStylesNames;
    vars: SegmentedControlCssVariables;
}>;
declare const SegmentedControl: _raikou_core.RaikouComponent<{
    props: SegmentedControlProps;
    ref: HTMLDivElement;
    stylesNames: SegmentedControlStylesNames;
    vars: SegmentedControlCssVariables;
}>;

export { SegmentedControl, type SegmentedControlCssVariables, type SegmentedControlFactory, type SegmentedControlItem, type SegmentedControlProps, type SegmentedControlStylesNames };
