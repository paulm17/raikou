import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type CenterStylesNames = "root";
type CenterCssVariables = {
    root: "--center-display";
};
interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
    /** Content that should be centered vertically and horizontally */
    children?: React.ReactNode;
    /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
    inline?: boolean;
}
type CenterFactory = PolymorphicFactory<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
}>;
declare const Center: (<C = "div">(props: C extends React.ElementType<any> ? CenterProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof CenterProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : CenterProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CenterProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof CenterProps | "component"> & {
    ref?: any;
}) | (CenterProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { Center, CenterCssVariables, CenterFactory, CenterProps, CenterStylesNames };
