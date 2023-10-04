import * as _raikou_core from '@raikou/core';
import { RaikouShadow, RaikouRadius, BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory } from '@raikou/core';
import React from 'react';

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

interface AffixBaseProps {
    /** Root element `z-index` property, `200` by default */
    zIndex?: string | number;
    /** Determines whether component should be rendered within portal, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` component when `withinPortal` is set */
    portalProps?: Omit<PortalProps, "children">;
    /** Affix position on screen, defaults value is `{ bottom: 0, right: 0 }` */
    position?: {
        top?: string | number;
        left?: string | number;
        bottom?: string | number;
        right?: string | number;
    };
}

interface PaperBaseProps {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
}

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

type DialogStylesNames = "root" | "closeButton";
type DialogCssVariables = {
    root: "--dialog-size";
};
interface DialogProps extends BoxProps, AffixBaseProps, PaperBaseProps, StylesApiProps<DialogFactory>, ElementProps<"div"> {
    /** If set dialog will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
    keepMounted?: boolean;
    /** Determines whether the close button should be displayed, `true` by default */
    withCloseButton?: boolean;
    /** Called when the close button is clicked */
    onClose?(): void;
    /** Dialog content */
    children?: React.ReactNode;
    /** Opened state */
    opened: boolean;
    /** Overrides default transition, `{ transition: 'pop-top-right', duration: 200 }` by default */
    transitionProps?: TransitionOverride;
    /** Controls `width` of the dialog, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
}
type DialogFactory = Factory<{
    props: DialogProps;
    ref: HTMLDivElement;
    stylesNames: DialogStylesNames;
    vars: DialogCssVariables;
}>;
declare const Dialog: _raikou_core.RaikouComponent<{
    props: DialogProps;
    ref: HTMLDivElement;
    stylesNames: DialogStylesNames;
    vars: DialogCssVariables;
}>;

export { Dialog, DialogCssVariables, DialogFactory, DialogProps, DialogStylesNames };
