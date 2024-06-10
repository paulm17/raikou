import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouColor, RaikouSize, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type NavLinkStylesNames = "root" | "section" | "body" | "label" | "description" | "chevron" | "children";
type NavLinkVariant = "filled" | "light" | "subtle";
type NavLinkCssVariables = {
    root: "--nl-color" | "--nl-bg" | "--nl-hover";
    children: "--nl-offset";
};
interface NavLinkProps extends BoxProps, StylesApiProps<NavLinkFactory> {
    /** Link content */
    label?: React.ReactNode;
    /** Link description */
    description?: React.ReactNode;
    /** Section displayed on the left side of the label */
    leftSection?: React.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React.ReactNode;
    /** Determines whether the link should have active styles, `false` by default */
    active?: boolean;
    /** Key of `theme.colors` of any valid CSS color to control active styles, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** If set, label and description will not wrap to the next line, `false` by default */
    noWrap?: boolean;
    /** Child `NavLink` components */
    children?: React.ReactNode;
    /** Controlled nested items collapse state */
    opened?: boolean;
    /** Uncontrolled nested items collapse initial state */
    defaultOpened?: boolean;
    /** Called when open state changes */
    onChange?: (opened: boolean) => void;
    /** If set, right section will not be rotated when collapse is opened, `false` by default */
    disableRightSectionRotation?: boolean;
    /** Key of `theme.spacing` or any valid CSS value to set collapsed links padding-left, `'lg'` by default */
    childrenOffset?: RaikouSize | (string & {}) | number;
    /** If set, disabled styles will be added to the root element, `false` by default */
    disabled?: boolean;
    /** Called when the link is clicked */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Link `onkeydown` event */
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}
type NavLinkFactory = PolymorphicFactory<{
    props: NavLinkProps;
    defaultRef: HTMLAnchorElement;
    defaultComponent: "a";
    stylesNames: NavLinkStylesNames;
    vars: NavLinkCssVariables;
    variant: NavLinkVariant;
}>;
declare const NavLink: (<C = "a">(props: C extends React.ElementType<any> ? NavLinkProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof NavLinkProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : NavLinkProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(NavLinkProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof NavLinkProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (NavLinkProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: NavLinkProps;
    defaultRef: HTMLAnchorElement;
    defaultComponent: "a";
    stylesNames: NavLinkStylesNames;
    vars: NavLinkCssVariables;
    variant: NavLinkVariant;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { NavLink, type NavLinkCssVariables, type NavLinkFactory, type NavLinkProps, type NavLinkStylesNames, type NavLinkVariant };
