import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, RaikouColor, Factory, RaikouRadius, RaikouGradient, PolymorphicFactory } from '@raikou/core';
import React from 'react';

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
    /** Overrides default loader with given content */
    children?: React.ReactNode;
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

type ButtonGroupStylesNames = "group";
type ButtonGroupVariant = string;
type ButtonGroupCssVariables = {
    group: "--button-border-width";
};
interface ButtonGroupProps extends BoxProps, StylesApiProps<ButtonGroupFactory> {
    /** `Button` components */
    children?: React.ReactNode;
    /** Orientation of the group, `horizontal` by default */
    orientation?: "horizontal" | "vertical";
    /** `border-width` of the child `Button` components. Numbers are converted to rem. Default value in `1`. */
    borderWidth?: number | string;
}
type ButtonGroupFactory = Factory<{
    props: ButtonGroupProps;
    ref: HTMLDivElement;
    variant: ButtonGroupVariant;
    stylesNames: ButtonGroupStylesNames;
    vars: ButtonGroupCssVariables;
}>;
declare const ButtonGroup: _raikou_core.RaikouComponent<{
    props: ButtonGroupProps;
    ref: HTMLDivElement;
    variant: ButtonGroupVariant;
    stylesNames: ButtonGroupStylesNames;
    vars: ButtonGroupCssVariables;
}>;

type ButtonStylesNames = "root" | "inner" | "loader" | "section" | "label";
type ButtonVariant = "filled" | "light" | "outline" | "transparent" | "white" | "subtle" | "default" | "gradient";
type ButtonCssVariables = {
    root: "--button-justify" | "--button-height" | "--button-padding-x" | "--button-fz" | "--button-radius" | "--button-bg" | "--button-hover" | "--button-color" | "--button-bd";
};
interface ButtonProps extends BoxProps, StylesApiProps<ButtonFactory> {
    "data-disabled"?: boolean;
    /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
    size?: RaikouSize | `compact-${RaikouSize}` | (string & {});
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
    justify?: React.CSSProperties["justifyContent"];
    /** Content displayed on the left side of the button label */
    leftSection?: React.ReactNode;
    /** Content displayed on the right side of the button label */
    rightSection?: React.ReactNode;
    /** Determines whether button should take 100% width of its parent container, `false` by default */
    fullWidth?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Indicates disabled state */
    disabled?: boolean;
    /** Button content */
    children?: React.ReactNode;
    /** Determines whether the `Loader` component should be displayed over the button */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Loader position relative to button label */
    loaderPosition?: "left" | "right" | "center";
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}
type ButtonFactory = PolymorphicFactory<{
    props: ButtonProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: ButtonStylesNames;
    vars: ButtonCssVariables;
    staticComponents: {
        Group: typeof ButtonGroup;
    };
    variant: ButtonVariant;
}>;
declare const Button: (<C = "button">(props: C extends React.ElementType<any> ? ButtonProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof ButtonProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : ButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(ButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ButtonProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: ButtonProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: ButtonStylesNames;
    vars: ButtonCssVariables;
    staticComponents: {
        Group: typeof ButtonGroup;
    };
    variant: ButtonVariant;
}> & {
    classes: Record<string, string>;
} & {
    Group: typeof ButtonGroup;
};

export { Button, type ButtonCssVariables, type ButtonFactory, ButtonGroup, type ButtonGroupCssVariables, type ButtonGroupFactory, type ButtonGroupProps, type ButtonGroupStylesNames, type ButtonProps, type ButtonStylesNames, type ButtonVariant };
