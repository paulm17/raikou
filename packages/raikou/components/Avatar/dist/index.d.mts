import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSpacing, Factory, RaikouSize, RaikouRadius, RaikouColor, RaikouGradient, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type AvatarGroupStylesNames = "root";
type AvatarGroupVariant = string;
type AvatarGroupCssVariables = {
    root: "--ag-spacing";
};
interface AvatarGroupProps extends BoxProps, StylesApiProps<AvatarGroupFactory>, ElementProps<"div"> {
    /** Negative space between Avatar components, `'sm'` by default */
    spacing?: RaikouSpacing | (string & {}) | number;
}
type AvatarGroupFactory = Factory<{
    props: AvatarGroupProps;
    ref: HTMLDivElement;
    stylesNames: AvatarGroupStylesNames;
    vars: AvatarGroupCssVariables;
    variant: AvatarGroupVariant;
}>;
declare const AvatarGroup: _raikou_core.RaikouComponent<{
    props: AvatarGroupProps;
    ref: HTMLDivElement;
    stylesNames: AvatarGroupStylesNames;
    vars: AvatarGroupCssVariables;
    variant: AvatarGroupVariant;
}>;

type AvatarStylesNames = "root" | "placeholder" | "image";
type AvatarVariant = "filled" | "light" | "gradient" | "outline" | "transparent" | "default" | "white";
type AvatarCssVariables = {
    root: "--avatar-size" | "--avatar-radius" | "--avatar-bg" | "--avatar-color" | "--avatar-bd";
};
interface AvatarProps extends BoxProps, StylesApiProps<AvatarFactory> {
    /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
    color?: RaikouColor;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
    src?: string | null;
    /** Image `alt` attribute, also used as `title` attribute for placeholder */
    alt?: string;
    /** `img` tag attributes */
    imageProps?: React.ComponentPropsWithoutRef<"img">;
    /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
    children?: React.ReactNode;
}
type AvatarFactory = PolymorphicFactory<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
        Group: typeof AvatarGroup;
    };
}>;
declare const Avatar: (<C = "div">(props: C extends React.ElementType<any> ? AvatarProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof AvatarProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : AvatarProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AvatarProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AvatarProps> & {
    ref?: any;
}) | (AvatarProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
        Group: typeof AvatarGroup;
    };
}> & {
    classes: Record<AvatarStylesNames, string>;
} & {
    Group: typeof AvatarGroup;
};

export { Avatar, AvatarCssVariables, AvatarFactory, AvatarGroup, AvatarGroupCssVariables, AvatarGroupFactory, AvatarGroupProps, AvatarGroupStylesNames, AvatarProps, AvatarStylesNames, AvatarVariant };
