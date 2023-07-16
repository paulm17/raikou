import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type BackgroundImageStylesNames = "root";
type BackgroundImageVariant = string;
type BackgroundImageCssVariables = {
    root: "--bi-radius";
};
interface BackgroundImageProps extends BoxProps, StylesApiProps<BackgroundImageFactory> {
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Image url */
    src: string;
}
type BackgroundImageFactory = PolymorphicFactory<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    variant: BackgroundImageVariant;
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
}>;
declare const BackgroundImage: (<C = "div">(props: C extends React.ElementType<any> ? BackgroundImageProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof BackgroundImageProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : BackgroundImageProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BackgroundImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof BackgroundImageProps | "component"> & {
    ref?: any;
}) | (BackgroundImageProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    variant: BackgroundImageVariant;
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
}> & {
    classes: Record<"root", string>;
} & Record<string, never>;

export { BackgroundImage, BackgroundImageCssVariables, BackgroundImageFactory, BackgroundImageProps, BackgroundImageStylesNames, BackgroundImageVariant };
