import * as _raikou_core from '@raikou/core';
import { RaikouShadow, RaikouRadius, BoxProps, StylesApiProps, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type PaperStylesNames = "root";
type PaperCssVariables = {
    root: "--paper-radius" | "--paper-shadow";
};
interface PaperBaseProps {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
}
interface PaperProps extends BoxProps, PaperBaseProps, StylesApiProps<PaperFactory> {
}
type PaperFactory = PolymorphicFactory<{
    props: PaperProps;
    defaultComponent: "div";
    defaultRef: HTMLDivElement;
    stylesNames: PaperStylesNames;
    vars: PaperCssVariables;
}>;
declare const Paper: (<C = "div">(props: C extends React.ElementType<any> ? PaperProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof PaperProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : PaperProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaperProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof PaperProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaperProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: PaperProps;
    defaultComponent: "div";
    defaultRef: HTMLDivElement;
    stylesNames: PaperStylesNames;
    vars: PaperCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { Paper, type PaperBaseProps, type PaperCssVariables, type PaperFactory, type PaperProps, type PaperStylesNames };
