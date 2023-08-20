import React from 'react';
import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, RaikouColor, Factory, RaikouRadius, RaikouGradient, PolymorphicFactory } from '@raikou/core';

interface CloseIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    /** Icon width and height, `var(--icon-size)` by default */
    size?: string;
}
declare const CloseIcon: React.ForwardRefExoticComponent<CloseIconProps & React.RefAttributes<SVGSVGElement>>;

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

type ActionIconGroupStylesNames = "group";
type ActionIconGroupCssVariables = {
    group: "--ai-border-width";
};
interface ActionIconGroupProps extends BoxProps, StylesApiProps<ActionIconGroupFactory> {
    /** `ActionIcon` components only */
    children?: React.ReactNode;
    /** Controls group orientation, `'horizontal'` by default */
    orientation?: "horizontal" | "vertical";
    /** `border-width` of the child `ActionIcon` components. Default value in `1` */
    borderWidth?: number | string;
}
type ActionIconGroupFactory = Factory<{
    props: ActionIconGroupProps;
    ref: HTMLDivElement;
    stylesNames: ActionIconGroupStylesNames;
    vars: ActionIconGroupCssVariables;
}>;
declare const ActionIconGroup: _raikou_core.RaikouComponent<{
    props: ActionIconGroupProps;
    ref: HTMLDivElement;
    stylesNames: ActionIconGroupStylesNames;
    vars: ActionIconGroupCssVariables;
}>;

type ActionIconVariant = "filled" | "light" | "outline" | "transparent" | "white" | "subtle" | "default" | "gradient";
type ActionIconStylesNames = "root" | "loader";
type ActionIconCssVariables = {
    root: "--ai-radius" | "--ai-size" | "--ai-bg" | "--ai-hover" | "--ai-color" | "--ai-bd";
};
interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
    "data-disabled"?: boolean;
    __staticSelector?: string;
    /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
    loading?: boolean;
    /** Props added to the `Loader` component (only visible when `loading` prop is set) */
    loaderProps?: LoaderProps;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius | (string & {}) | number;
    /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** Icon displayed inside the button */
    children?: React.ReactNode;
}
type ActionIconFactory = PolymorphicFactory<{
    props: ActionIconProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
        Group: typeof ActionIconGroup;
    };
}>;

type CloseButtonVariant = ActionIconVariant;
type CloseButtonStylesNames = ActionIconStylesNames;
interface CloseButtonProps extends ActionIconProps {
    /** `X` icon `width` and `height`, `80%` by default */
    iconSize?: number | string;
}
type CloseButtonFactory = PolymorphicFactory<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
}>;
declare const CloseButton: (<C = "button">(props: C extends React.ElementType<any> ? CloseButtonProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof CloseButtonProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : CloseButtonProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CloseButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CloseButtonProps> & {
    ref?: any;
}) | (CloseButtonProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { CloseButton, CloseButtonFactory, CloseButtonProps, CloseButtonStylesNames, CloseButtonVariant, CloseIcon, CloseIconProps };
