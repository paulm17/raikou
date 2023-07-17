import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, PolymorphicFactory, RaikouSpacing, RaikouBreakpoint } from '@raikou/core';
import React from 'react';

type AppShellNavbarStylesNames = "navbar";
interface AppShellNavbarProps extends BoxProps, StylesApiProps<AppShellNavbarFactory>, ElementProps<"div"> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: React.CSSProperties["zIndex"];
}
type AppShellNavbarFactory = Factory<{
    props: AppShellNavbarProps;
    ref: HTMLElement;
    stylesNames: AppShellNavbarStylesNames;
}>;
declare const AppShellNavbar: _raikou_core.RaikouComponent<{
    props: AppShellNavbarProps;
    ref: HTMLElement;
    stylesNames: AppShellNavbarStylesNames;
}>;

type AppShellHeaderStylesNames = "header";
type AppShellHeaderVariant = string;
type AppShellHeaderCssVariables = {
    root: "--test";
};
interface AppShellHeaderProps extends BoxProps, StylesApiProps<AppShellHeaderFactory>, ElementProps<"header"> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: React.CSSProperties["zIndex"];
}
type AppShellHeaderFactory = Factory<{
    props: AppShellHeaderProps;
    ref: HTMLElement;
    stylesNames: AppShellHeaderStylesNames;
    vars: AppShellHeaderCssVariables;
    variant: AppShellHeaderVariant;
}>;
declare const AppShellHeader: _raikou_core.RaikouComponent<{
    props: AppShellHeaderProps;
    ref: HTMLElement;
    stylesNames: AppShellHeaderStylesNames;
    vars: AppShellHeaderCssVariables;
    variant: AppShellHeaderVariant;
}>;

type AppShellFooterStylesNames = "footer";
type AppShellFooterVariant = string;
type AppShellFooterCssVariables = {
    root: "--test";
};
interface AppShellFooterProps extends BoxProps, StylesApiProps<AppShellFooterFactory>, ElementProps<"footer"> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: React.CSSProperties["zIndex"];
}
type AppShellFooterFactory = Factory<{
    props: AppShellFooterProps;
    ref: HTMLElement;
    stylesNames: AppShellFooterStylesNames;
    vars: AppShellFooterCssVariables;
    variant: AppShellFooterVariant;
}>;
declare const AppShellFooter: _raikou_core.RaikouComponent<{
    props: AppShellFooterProps;
    ref: HTMLElement;
    stylesNames: AppShellFooterStylesNames;
    vars: AppShellFooterCssVariables;
    variant: AppShellFooterVariant;
}>;

type AppShellAsideStylesNames = "aside";
interface AppShellAsideProps extends BoxProps, StylesApiProps<AppShellAsideFactory>, ElementProps<"aside"> {
    /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
    withBorder?: boolean;
    /** Component `z-index`, by default inherited from the `AppShell` */
    zIndex?: React.CSSProperties["zIndex"];
}
type AppShellAsideFactory = Factory<{
    props: AppShellAsideProps;
    ref: HTMLElement;
    stylesNames: AppShellAsideStylesNames;
}>;
declare const AppShellAside: _raikou_core.RaikouComponent<{
    props: AppShellAsideProps;
    ref: HTMLElement;
    stylesNames: AppShellAsideStylesNames;
}>;

type AppShellMainStylesNames = "main";
interface AppShellMainProps extends BoxProps, StylesApiProps<AppShellMainFactory>, ElementProps<"main"> {
}
type AppShellMainFactory = Factory<{
    props: AppShellMainProps;
    ref: HTMLElement;
    stylesNames: AppShellMainStylesNames;
    compound: true;
}>;
declare const AppShellMain: _raikou_core.RaikouComponent<{
    props: AppShellMainProps;
    ref: HTMLElement;
    stylesNames: AppShellMainStylesNames;
    compound: true;
}>;

type AppShellSectionStylesNames = "section";
interface AppShellSectionProps extends BoxProps, StylesApiProps<AppShellSectionFactory> {
    /** Determines whether the section should take all available space, `false` by default */
    grow?: boolean;
}
type AppShellSectionFactory = PolymorphicFactory<{
    props: AppShellSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AppShellSectionStylesNames;
    compound: true;
}>;
declare const AppShellSection: (<C = "div">(props: C extends React.ElementType<any> ? AppShellSectionProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof AppShellSectionProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : AppShellSectionProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AppShellSectionProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AppShellSectionProps> & {
    ref?: any;
}) | (AppShellSectionProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: AppShellSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AppShellSectionStylesNames;
    compound: true;
}> & {
    classes: Record<"section", string>;
} & Record<string, never>;

type AppShellStylesNames = "root" | "navbar" | "main" | "header" | "footer" | "aside" | "section";
type AppShellCssVariables = {
    root: "--app-shell-transition-duration" | "--app-shell-transition-timing-function";
};
type AppShellSize = number | (string & {});
interface AppShellResponsiveSize {
    base?: AppShellSize;
    xs?: AppShellSize;
    sm?: AppShellSize;
    md?: AppShellSize;
    lg?: AppShellSize;
    xl?: AppShellSize;
    [key: string]: AppShellSize | undefined;
}
interface AppShellProps extends BoxProps, StylesApiProps<AppShellFactory>, ElementProps<"div"> {
    /** Determines whether associated components should have a border, `true` by default */
    withBorder?: boolean;
    /** Main content section padding, `0` by default */
    padding?: RaikouSpacing | AppShellSize | AppShellResponsiveSize;
    /** Navbar configuration */
    navbar?: {
        width: AppShellSize | AppShellResponsiveSize;
        breakpoint: RaikouBreakpoint | (string & {}) | number;
        collapsed?: {
            desktop?: boolean;
            mobile?: boolean;
        };
    };
    /** Aside configuration */
    aside?: {
        width: AppShellSize | AppShellResponsiveSize;
        breakpoint: RaikouBreakpoint | (string & {}) | number;
        collapsed?: {
            desktop?: boolean;
            mobile?: boolean;
        };
    };
    /** Header configuration */
    header?: {
        height: AppShellSize | AppShellResponsiveSize;
        collapsed?: boolean;
        offset?: boolean;
    };
    /** Footer configuration */
    footer?: {
        height: AppShellSize | AppShellResponsiveSize;
        collapsed?: boolean;
        offset?: boolean;
    };
    /** Duration of all transitions in ms, `200` by default */
    transitionDuration?: number;
    /** Timing function of all transitions, `ease` by default */
    transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
    /** `z-index` of all associated elements, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** Determines how Navbar/Aside are arranged relative to Header/Footer, `default` by default */
    layout?: "default" | "alt";
    /** If set, Navbar, Aside, Header and Footer components will not be rendered */
    disabled?: boolean;
}
type AppShellFactory = Factory<{
    props: AppShellProps;
    ref: HTMLDivElement;
    stylesNames: AppShellStylesNames;
    vars: AppShellCssVariables;
    staticComponents: {
        Navbar: typeof AppShellNavbar;
        Header: typeof AppShellHeader;
        Main: typeof AppShellMain;
        Aside: typeof AppShellAside;
        Footer: typeof AppShellFooter;
        Section: typeof AppShellSection;
    };
}>;
declare const AppShell: _raikou_core.RaikouComponent<{
    props: AppShellProps;
    ref: HTMLDivElement;
    stylesNames: AppShellStylesNames;
    vars: AppShellCssVariables;
    staticComponents: {
        Navbar: typeof AppShellNavbar;
        Header: typeof AppShellHeader;
        Main: typeof AppShellMain;
        Aside: typeof AppShellAside;
        Footer: typeof AppShellFooter;
        Section: typeof AppShellSection;
    };
}>;

export { AppShell, AppShellAside, AppShellAsideProps, AppShellCssVariables, AppShellFactory, AppShellFooter, AppShellFooterProps, AppShellHeader, AppShellHeaderProps, AppShellMain, AppShellMainProps, AppShellNavbar, AppShellNavbarProps, AppShellProps, AppShellResponsiveSize, AppShellSection, AppShellSectionProps, AppShellSize, AppShellStylesNames };
