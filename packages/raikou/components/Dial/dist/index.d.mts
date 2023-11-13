import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type DialStylesNames = "root" | "inner" | "handle";
type DialCssVariables = {
    root: "--dial-size";
};
interface DialProps extends BoxProps, StylesApiProps<DialFactory> {
    /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
    size?: RaikouSize | (string & {});
    scale?: number;
    value: number;
    onChange: (value: number) => void;
}
type DialFactory = PolymorphicFactory<{
    props: DialProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: DialStylesNames;
    vars: DialCssVariables;
}>;
declare const Dial: (<C = "div">(props: C extends React.ElementType<any> ? DialProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof DialProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : DialProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(DialProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof DialProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (DialProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: DialProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: DialStylesNames;
    vars: DialCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { Dial, DialCssVariables, DialFactory, DialProps, DialStylesNames };
