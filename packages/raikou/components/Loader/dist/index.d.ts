import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, RaikouColor, Factory } from '@raikou/core';
import React from 'react';

interface SvgLoaderProps extends React.ComponentPropsWithoutRef<any> {
}
type RaikouLoaderComponent = React.ForwardRefExoticComponent<React.HTMLAttributes<any> & React.RefAttributes<any>>;
type RaikouLoadersRecord = Partial<Record<"bars" | "dots" | "oval" | "progress" | (string & {}), RaikouLoaderComponent>>;
type RaikouLoader = keyof RaikouLoadersRecord;

type LoaderStylesNames = "root";
type LoaderCssVariables = {
    root: "--loader-size" | "--loader-color";
};
interface LoaderProps extends BoxProps, StylesApiProps<LoaderFactory>, Omit<React.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
    /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: RaikouColor;
    /** Loader type, key of `loaders` prop, default value is `'oval'` */
    type?: RaikouLoader;
    /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
    loaders?: RaikouLoadersRecord;
}
type LoaderFactory = Factory<{
    props: LoaderProps;
    ref: HTMLSpanElement;
    stylesNames: LoaderStylesNames;
    vars: LoaderCssVariables;
    staticComponents: {
        defaultLoaders: typeof defaultLoaders;
    };
}>;
declare const defaultLoaders: RaikouLoadersRecord;
declare const Loader: _raikou_core.RaikouComponent<{
    props: LoaderProps;
    ref: HTMLSpanElement;
    stylesNames: LoaderStylesNames;
    vars: LoaderCssVariables;
    staticComponents: {
        defaultLoaders: typeof defaultLoaders;
    };
}>;

export { Loader, LoaderCssVariables, LoaderFactory, LoaderProps, LoaderStylesNames, RaikouLoader, RaikouLoaderComponent, RaikouLoadersRecord, SvgLoaderProps, defaultLoaders };
