import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type ColorSwatchStylesNames = "root" | "alphaOverlay" | "shadowOverlay" | "colorOverlay" | "childrenOverlay";
type ColorSwatchCssVariables = {
    root: "--cs-radius" | "--cs-size";
};
interface ColorSwatchProps extends BoxProps, StylesApiProps<ColorSwatchFactory> {
    /** Color to display, not related to `theme.colors` – supports only CSS color values */
    color: string;
    /** Controls `width` and `height` of the swatch, any valid CSS value, numbers are converted to rem */
    size?: React.CSSProperties["width"];
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem */
    radius?: RaikouRadius;
    /** Determines whether the swatch should have inner `box-shadow`, `true` by default */
    withShadow?: boolean;
    /** Content rendered inside the swatch */
    children?: React.ReactNode;
}
type ColorSwatchFactory = PolymorphicFactory<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
}>;
declare const ColorSwatch: (<C = "div">(props: C extends React.ElementType<any> ? ColorSwatchProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof ColorSwatchProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : ColorSwatchProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ColorSwatchProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof ColorSwatchProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ColorSwatchProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { ColorSwatch, ColorSwatchCssVariables, ColorSwatchFactory, ColorSwatchProps, ColorSwatchStylesNames };
