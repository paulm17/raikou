import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouSize, Factory } from '@raikou/core';
import React from 'react';

type DividerStylesNames = "root" | "label";
type DividerVariant = "solid" | "dashed" | "dotted";
type DividerCssVariables = {
    root: "--divider-color" | "--divider-border-style" | "--divider-size";
};
interface DividerProps extends BoxProps, StylesApiProps<DividerFactory>, ElementProps<"div"> {
    /** Key of `theme.colors` or any valid CSS color value, by default value depends on color scheme */
    color?: RaikouColor;
    /** Controls width/height (depends on orientation), `'xs'` by default */
    size?: RaikouSize | number | (string & {});
    /** Divider label, visible only when `orientation` is `horizontal` */
    label?: React.ReactNode;
    /** Controls label position, `'left'` by default */
    labelPosition?: "left" | "center" | "right";
    /** Controls orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
}
type DividerFactory = Factory<{
    props: DividerProps;
    ref: HTMLDivElement;
    stylesNames: DividerStylesNames;
    vars: DividerCssVariables;
    variant: DividerVariant;
}>;
declare const Divider: _raikou_core.RaikouComponent<{
    props: DividerProps;
    ref: HTMLDivElement;
    stylesNames: DividerStylesNames;
    vars: DividerCssVariables;
    variant: DividerVariant;
}>;

export { Divider, DividerCssVariables, DividerFactory, DividerProps, DividerStylesNames, DividerVariant };
