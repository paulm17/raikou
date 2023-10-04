import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouSize, RaikouColor, Factory, RaikouRadius, PolymorphicFactory, ElementProps } from '@raikou/core';
import React from 'react';

interface RaikouTransitionStyles {
    common?: React.CSSProperties;
    in: React.CSSProperties;
    out: React.CSSProperties;
    transitionProperty: React.CSSProperties["transitionProperty"];
}
type RaikouTransitionName = "fade" | "skew-up" | "skew-down" | "rotate-right" | "rotate-left" | "slide-down" | "slide-up" | "slide-right" | "slide-left" | "scale-y" | "scale-x" | "scale" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;

interface TransitionProps {
    /** If set element will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
    /** Transition name or object */
    transition?: RaikouTransition;
    /** Transition duration in ms, `250` by default */
    duration?: number;
    /** Exit transition duration in ms, `250` by default */
    exitDuration?: number;
    /** Transition timing function, `theme.transitionTimingFunction` by default */
    timingFunction?: string;
    /** Determines whether component should be mounted to the DOM */
    mounted: boolean;
    /** Render function with transition styles argument */
    children(styles: React.CSSProperties): JSX.Element;
    /** Called when exit transition ends */
    onExited?: () => void;
    /** Called when exit transition starts */
    onExit?: () => void;
    /** Called when enter transition starts */
    onEnter?: () => void;
    /** Called when enter transition ends */
    onEntered?: () => void;
}
type TransitionOverride = Partial<Omit<TransitionProps, "mounted">>;

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

type OverlayStylesNames = "root";
type OverlayCssVariables = {
    root: "--overlay-bg" | "--overlay-filter" | "--overlay-radius" | "--overlay-z-index";
};
interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
    /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
    backgroundOpacity?: number;
    /** Overlay `background-color`, `#000` by default */
    color?: React.CSSProperties["backgroundColor"];
    /** Overlay background blur, `0` by default */
    blur?: number | string;
    /** Changes overlay to gradient. If set, `color` prop is ignored */
    gradient?: string;
    /** Overlay z-index, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
    radius?: RaikouRadius;
    /** Content inside overlay */
    children?: React.ReactNode;
    /** Determines whether content inside overlay should be vertically and horizontally centered, `false` by default */
    center?: boolean;
    /** Determines whether overlay should have fixed position instead of absolute, `false` by default */
    fixed?: boolean;
}
type OverlayFactory = PolymorphicFactory<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}>;

type LoadingOverlayStylesNames = "root" | "loader" | "overlay";
type LoadingOverlayCssVariables = {
    root: "--lo-z-index";
};
interface LoadingOverlayProps extends BoxProps, StylesApiProps<LoadingOverlayFactory>, ElementProps<"div"> {
    /** Props passed down to `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
    transitionProps?: TransitionOverride;
    /** Props passed down to `Loader` component */
    loaderProps?: LoaderProps;
    /** Props passed down to `Overlay` component */
    overlayProps?: OverlayProps;
    /** Determines whether the overlay should be visible, `false` by default */
    visible?: boolean;
    /** Controls overlay `z-index`, `400` by default */
    zIndex?: string | number;
}
type LoadingOverlayFactory = Factory<{
    props: LoadingOverlayProps;
    ref: HTMLDivElement;
    stylesNames: LoadingOverlayStylesNames;
    vars: LoadingOverlayCssVariables;
}>;
declare const LoadingOverlay: _raikou_core.RaikouComponent<{
    props: LoadingOverlayProps;
    ref: HTMLDivElement;
    stylesNames: LoadingOverlayStylesNames;
    vars: LoadingOverlayCssVariables;
}>;

export { LoadingOverlay, LoadingOverlayCssVariables, LoadingOverlayFactory, LoadingOverlayProps, LoadingOverlayStylesNames };
