import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { BoxProps, ElementProps, RaikouShadow, RaikouSpacing, RaikouSize, StylesApiProps, PolymorphicFactory, RaikouRadius } from '@raikou/core';

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
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
    children: (styles: React.CSSProperties) => JSX.Element;
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

type RemoveScrollProps = Omit<React.ComponentProps<typeof RemoveScroll>, "children">;
interface ModalBaseProps extends BoxProps, ElementProps<"div", "title"> {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened: boolean;
    /** Called when modal/drawer is closed */
    onClose: () => void;
    /** Id used to connect modal/drawer with body and title */
    id?: string;
    /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
    lockScroll?: boolean;
    /** Determines whether focus should be trapped, `true` by default */
    trapFocus?: boolean;
    /** Determines whether the component should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props passed down to the Portal component when `withinPortal` is set */
    portalProps?: Omit<PortalProps, "children">;
    /** Modal/drawer content */
    children?: React.ReactNode;
    /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
    closeOnClickOutside?: boolean;
    /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
    transitionProps?: TransitionOverride;
    /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
    closeOnEscape?: boolean;
    /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
    returnFocus?: boolean;
    /** `z-index` CSS property of the root element, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
    shadow?: RaikouShadow;
    /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
    padding?: RaikouSpacing;
    /** Controls width of the content area, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Props passed down to react-remove-scroll, can be used to customize scroll lock behavior */
    removeScrollProps?: RemoveScrollProps;
}
declare const ModalBase: React.ForwardRefExoticComponent<ModalBaseProps & React.RefAttributes<HTMLDivElement>>;

interface ModalBaseBodyProps extends BoxProps, ElementProps<"div"> {
}
declare const ModalBaseBody: React.ForwardRefExoticComponent<ModalBaseBodyProps & React.RefAttributes<HTMLDivElement>>;

type CloseButtonVariant = "subtle" | "transparent";
type CloseButtonStylesNames = "root";
type CloseButtonCssVariables = {
    root: "--cb-icon-size" | "--cb-size" | "--cb-radius";
};
interface __CloseButtonProps {
    "data-disabled"?: boolean;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** `X` icon `width` and `height`, `80%` by default */
    iconSize?: number | string;
    /** Content rendered inside the button, for example `VisuallyHidden` with label for screen readers */
    children?: React.ReactNode;
}
interface CloseButtonProps extends __CloseButtonProps, BoxProps, StylesApiProps<CloseButtonFactory> {
}
type CloseButtonFactory = PolymorphicFactory<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
    vars: CloseButtonCssVariables;
}>;

interface ModalBaseCloseButtonProps extends CloseButtonProps, BoxProps, ElementProps<"button"> {
}
declare const ModalBaseCloseButton: React.ForwardRefExoticComponent<ModalBaseCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface ModalBaseContentProps extends BoxProps, ElementProps<"div"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
}
interface _ModalBaseContentProps extends ModalBaseContentProps {
    innerProps: React.ComponentPropsWithoutRef<"div">;
}
declare const ModalBaseContent: React.ForwardRefExoticComponent<_ModalBaseContentProps & React.RefAttributes<HTMLDivElement>>;

interface ModalBaseHeaderProps extends BoxProps, ElementProps<"div"> {
}
declare const ModalBaseHeader: React.ForwardRefExoticComponent<ModalBaseHeaderProps & React.RefAttributes<HTMLDivElement>>;

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

interface ModalBaseOverlayProps extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">, ElementProps<"div", "color"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}
declare const ModalBaseOverlay: React.ForwardRefExoticComponent<ModalBaseOverlayProps & React.RefAttributes<HTMLDivElement>>;

interface ModalBaseTitleProps extends BoxProps, ElementProps<"h2"> {
}
declare const ModalBaseTitle: React.ForwardRefExoticComponent<ModalBaseTitleProps & React.RefAttributes<HTMLHeadingElement>>;

interface NativeScrollAreaProps {
    children: React.ReactNode;
}
declare function NativeScrollArea({ children }: NativeScrollAreaProps): React.JSX.Element;

type ModalBaseStylesNames = 'body' | 'header' | 'title' | 'overlay' | 'root' | 'content' | 'close' | 'inner';

export { ModalBase, ModalBaseBody, type ModalBaseBodyProps, ModalBaseCloseButton, type ModalBaseCloseButtonProps, ModalBaseContent, type ModalBaseContentProps, ModalBaseHeader, type ModalBaseHeaderProps, ModalBaseOverlay, type ModalBaseOverlayProps, type ModalBaseProps, type ModalBaseStylesNames, ModalBaseTitle, type ModalBaseTitleProps, NativeScrollArea };
