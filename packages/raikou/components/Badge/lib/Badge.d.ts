import React from "react";
import { BoxProps, StylesApiProps, PolymorphicFactory, RaikouSize, RaikouRadius, RaikouColor, RaikouGradient } from "@raikou/core";
export type BadgeStylesNames = "root" | "root--dot" | "section" | "label";
export type BadgeVariant = "filled" | "light" | "outline" | "dot" | "transparent" | "white" | "default" | "gradient";
export type BadgeCssVariables = {
    root: "--badge-height" | "--badge-padding-x" | "--badge-fz" | "--badge-radius" | "--badge-bg" | "--badge-color" | "--badge-bd" | "--badge-dot-color";
};
export interface BadgeProps extends BoxProps, StylesApiProps<BadgeFactory> {
    /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
    size?: RaikouSize | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
    radius?: RaikouRadius;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
    gradient?: RaikouGradient;
    /** Content displayed on the left side of the badge label */
    leftSection?: React.ReactNode;
    /** Content displayed on the right side of the badge label */
    rightSection?: React.ReactNode;
    /** Determines whether Badge should take 100% of its parent width, `false` by default */
    fullWidth?: boolean;
    /** Main badge content */
    children?: React.ReactNode;
}
export type BadgeFactory = PolymorphicFactory<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
}>;
export declare const Badge: (<C = "div">(props: C extends React.ElementType<any> ? BadgeProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof BadgeProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : BadgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(BadgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof BadgeProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (BadgeProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & import("@raikou/core").ThemeExtend<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;
