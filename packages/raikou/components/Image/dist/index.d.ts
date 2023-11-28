import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type ImageStylesNames = "root";
type ImageCssVariables = {
    root: "--image-radius" | "--image-object-fit";
};
interface ImageProps extends BoxProps, StylesApiProps<ImageFactory> {
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `0` by default */
    radius?: RaikouRadius;
    /** Controls `object-fit` style, `'cover'` by default */
    fit?: React.CSSProperties["objectFit"];
    /** Image url that will be used as a fallback in case `src` prop is not set or image cannot be loaded */
    fallbackSrc?: string;
    /** Image url */
    src?: any;
    /** Called when image fails to load */
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
type ImageFactory = PolymorphicFactory<{
    props: ImageProps;
    defaultRef: HTMLImageElement;
    defaultComponent: "img";
    stylesNames: ImageStylesNames;
    vars: ImageCssVariables;
}>;
declare const Image: (<C = "img">(props: C extends React.ElementType<any> ? ImageProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof ImageProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : ImageProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof ImageProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ImageProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: ImageProps;
    defaultRef: HTMLImageElement;
    defaultComponent: "img";
    stylesNames: ImageStylesNames;
    vars: ImageCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { Image, ImageCssVariables, ImageFactory, ImageProps, ImageStylesNames };
