import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouShadow, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type PaperStylesNames = "root";
type PaperVariant = string;
type PaperCssVariables = {
    root: "--paper-radius" | "--paper-shadow";
};
interface PaperProps extends BoxProps, StylesApiProps<PaperFactory> {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | number | (string & {});
    /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
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
} : PaperProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(PaperProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof PaperProps | "component"> & {
    ref?: any;
}) | (PaperProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: PaperProps;
    defaultComponent: "div";
    defaultRef: HTMLDivElement;
    stylesNames: PaperStylesNames;
    vars: PaperCssVariables;
}> & {
    classes: Record<"root", string>;
} & Record<string, never>;

export { Paper, PaperCssVariables, PaperFactory, PaperProps, PaperStylesNames, PaperVariant };
