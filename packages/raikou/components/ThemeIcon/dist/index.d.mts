import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, RaikouColor, RaikouRadius, RaikouGradient, Factory } from '@raikou/core';
import React from 'react';

type ThemeIconStylesNames = "root";
type ThemeIconVariant = "filled" | "light" | "outline" | "transparent" | "white" | "default" | "gradient";
type ThemeIconCssVariables = {
    root: "--ti-radius" | "--ti-size" | "--ti-bg" | "--ti-color" | "--ti-bd";
};
interface ThemeIconProps extends BoxProps, StylesApiProps<ThemeIconFactory>, ElementProps<"div"> {
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Icon displayed inside the component */
    children?: React.ReactNode;
}
type ThemeIconFactory = Factory<{
    props: ThemeIconProps;
    ref: HTMLDivElement;
    stylesNames: ThemeIconStylesNames;
    vars: ThemeIconCssVariables;
    variant: ThemeIconVariant;
}>;
declare const ThemeIcon: _raikou_core.RaikouComponent<{
    props: ThemeIconProps;
    ref: HTMLDivElement;
    stylesNames: ThemeIconStylesNames;
    vars: ThemeIconCssVariables;
    variant: ThemeIconVariant;
}>;

export { ThemeIcon, ThemeIconCssVariables, ThemeIconFactory, ThemeIconProps, ThemeIconStylesNames, ThemeIconVariant };
