import * as _raikou_core from '@raikou/core';
import { BoxProps, ElementProps, RaikouShadow, RaikouSpacing, RaikouSize, StylesApiProps, RaikouRadius, PolymorphicFactory, Factory } from '@raikou/core';
import React$1 from 'react';

interface PortalProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React$1.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

interface RaikouTransitionStyles {
    common?: React$1.CSSProperties;
    in: React$1.CSSProperties;
    out: React$1.CSSProperties;
    transitionProperty: React$1.CSSProperties["transitionProperty"];
}
type RaikouTransitionName = "fade" | "skew-up" | "skew-down" | "rotate-right" | "rotate-left" | "slide-down" | "slide-up" | "slide-right" | "slide-left" | "scale-y" | "scale-x" | "scale" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;

interface TransitionProps {
    /** If set element will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
    /** Transition name or object */
    transition: RaikouTransition;
    /** Transition duration in ms, `250` by default */
    duration?: number;
    /** Exit transition duration in ms, `250` by default */
    exitDuration?: number;
    /** Transition timing function, `theme.transitionTimingFunction` by default */
    timingFunction?: string;
    /** Determines whether component should be mounted to the DOM */
    mounted: boolean;
    /** Render function with transition styles argument */
    children(styles: React$1.CSSProperties): JSX.Element;
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

interface ModalBaseProps extends BoxProps, ElementProps<"div", "title"> {
    /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Determines whether modal/drawer is opened */
    opened: boolean;
    /** Called when modal/drawer is closed */
    onClose(): void;
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
    children?: React$1.ReactNode;
    /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
    closeOnClickOutside?: boolean;
    /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
    transitionProps?: TransitionOverride;
    /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
    closeOnEscape?: boolean;
    /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
    returnFocus?: boolean;
    /** `z-index` CSS property of the root element, `200` by default */
    zIndex?: React$1.CSSProperties["zIndex"];
    /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
    shadow?: RaikouShadow | (string & {});
    /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
    padding?: RaikouSpacing | (string & {}) | number;
    /** Controls width of the content area, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
}

interface ModalBaseBodyProps extends BoxProps, ElementProps<"div"> {
}

interface ModalBaseCloseButtonProps extends BoxProps, ElementProps<"button"> {
}

interface ModalBaseContentProps extends BoxProps, ElementProps<"div"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}

interface ModalBaseHeaderProps extends BoxProps, ElementProps<"div"> {
}

type OverlayStylesNames = "root";
type OverlayVariant = string;
type OverlayCssVariables = {
    root: "--overlay-bg" | "--overlay-filter" | "--overlay-radius" | "--overlay-z-index";
};
interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
    /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
    backgroundOpacity?: number;
    /** Overlay `background-color`, `#000` by default */
    color?: React$1.CSSProperties["backgroundColor"];
    /** Overlay background blur, `0` by default */
    blur?: number | string;
    /** Changes overlay to gradient. If set, `color` prop is ignored */
    gradient?: string;
    /** Overlay z-index, `200` by default */
    zIndex?: React$1.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Content inside overlay */
    children?: React$1.ReactNode;
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
    variant: OverlayVariant;
}>;

interface ModalBaseOverlayProps extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">, ElementProps<"div", "color"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}

interface ModalBaseTitleProps extends BoxProps, ElementProps<"h2"> {
}

type ModalBaseStylesNames = 'body' | 'header' | 'title' | 'overlay' | 'root' | 'content' | 'close' | 'inner';

type ScrollAreaComponent = React.FC<any>;

type DrawerPosition = "bottom" | "left" | "right" | "top";
type DrawerRootStylesNames = ModalBaseStylesNames;
type DrawerRootVariant = string;
type DrawerRootCssVariables = {
    root: "--drawer-size" | "--drawer-flex" | "--drawer-height" | "--drawer-align" | "--drawer-justify";
};
interface DrawerRootProps extends StylesApiProps<DrawerRootFactory>, ModalBaseProps {
    /** Scroll area component, native `div` element by default */
    scrollAreaComponent?: ScrollAreaComponent;
    /** Side of the screen on which drawer will be opened, `'left'` by default */
    position?: DrawerPosition;
}
type DrawerRootFactory = Factory<{
    props: DrawerRootProps;
    ref: HTMLDivElement;
    stylesNames: DrawerRootStylesNames;
    vars: DrawerRootCssVariables;
    variant: DrawerRootVariant;
    compound: true;
}>;
declare const DrawerRoot: _raikou_core.RaikouComponent<{
    props: DrawerRootProps;
    ref: HTMLDivElement;
    stylesNames: DrawerRootStylesNames;
    vars: DrawerRootCssVariables;
    variant: DrawerRootVariant;
    compound: true;
}>;

type DrawerBodyStylesNames = "body";
interface DrawerBodyProps extends ModalBaseBodyProps, StylesApiProps<DrawerBodyFactory> {
}
type DrawerBodyFactory = Factory<{
    props: DrawerBodyProps;
    ref: HTMLDivElement;
    stylesNames: DrawerBodyStylesNames;
    compound: true;
}>;
declare const DrawerBody: _raikou_core.RaikouComponent<{
    props: DrawerBodyProps;
    ref: HTMLDivElement;
    stylesNames: DrawerBodyStylesNames;
    compound: true;
}>;

type DrawerCloseButtonStylesNames = "close";
interface DrawerCloseButtonProps extends ModalBaseCloseButtonProps, StylesApiProps<DrawerCloseButtonFactory> {
}
type DrawerCloseButtonFactory = Factory<{
    props: DrawerCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: DrawerCloseButtonStylesNames;
    compound: true;
}>;
declare const DrawerCloseButton: _raikou_core.RaikouComponent<{
    props: DrawerCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: DrawerCloseButtonStylesNames;
    compound: true;
}>;

type DrawerOverlayStylesNames = "overlay";
interface DrawerOverlayProps extends ModalBaseOverlayProps, StylesApiProps<DrawerOverlayFactory> {
}
type DrawerOverlayFactory = Factory<{
    props: DrawerOverlayProps;
    ref: HTMLDivElement;
    stylesNames: DrawerOverlayStylesNames;
    compound: true;
}>;
declare const DrawerOverlay: _raikou_core.RaikouComponent<{
    props: DrawerOverlayProps;
    ref: HTMLDivElement;
    stylesNames: DrawerOverlayStylesNames;
    compound: true;
}>;

type DrawerContentStylesNames = "content" | "inner";
interface DrawerContentProps extends ModalBaseContentProps, StylesApiProps<DrawerContentFactory> {
}
type DrawerContentFactory = Factory<{
    props: DrawerContentProps;
    ref: HTMLDivElement;
    stylesNames: DrawerContentStylesNames;
    compound: true;
}>;
declare const DrawerContent: _raikou_core.RaikouComponent<{
    props: DrawerContentProps;
    ref: HTMLDivElement;
    stylesNames: DrawerContentStylesNames;
    compound: true;
}>;

type DrawerTitleStylesNames = "title";
interface DrawerTitleProps extends ModalBaseTitleProps, StylesApiProps<DrawerTitleFactory> {
}
type DrawerTitleFactory = Factory<{
    props: DrawerTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: DrawerTitleStylesNames;
    compound: true;
}>;
declare const DrawerTitle: _raikou_core.RaikouComponent<{
    props: DrawerTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: DrawerTitleStylesNames;
    compound: true;
}>;

type DrawerHeaderStylesNames = "header";
interface DrawerHeaderProps extends ModalBaseHeaderProps, StylesApiProps<DrawerHeaderFactory> {
}
type DrawerHeaderFactory = Factory<{
    props: DrawerHeaderProps;
    ref: HTMLDivElement;
    stylesNames: DrawerHeaderStylesNames;
    compound: true;
}>;
declare const DrawerHeader: _raikou_core.RaikouComponent<{
    props: DrawerHeaderProps;
    ref: HTMLDivElement;
    stylesNames: DrawerHeaderStylesNames;
    compound: true;
}>;

type DrawerStylesNames = DrawerRootStylesNames;
type DrawerVariant = string;
type DrawerCssVariables = DrawerRootCssVariables;
interface DrawerProps extends DrawerRootProps {
    /** Drawer title */
    title?: React$1.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, can be used to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Drawer content */
    children?: React$1.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
}
type DrawerFactory = Factory<{
    props: DrawerProps;
    ref: HTMLDivElement;
    stylesNames: DrawerStylesNames;
    vars: DrawerCssVariables;
    variant: DrawerVariant;
    staticComponents: {
        Root: typeof DrawerRoot;
        Overlay: typeof DrawerOverlay;
        Content: typeof DrawerContent;
        Body: typeof DrawerBody;
        Header: typeof DrawerHeader;
        Title: typeof DrawerTitle;
        CloseButton: typeof DrawerCloseButton;
    };
}>;
declare const Drawer: _raikou_core.RaikouComponent<{
    props: DrawerProps;
    ref: HTMLDivElement;
    stylesNames: DrawerStylesNames;
    vars: DrawerCssVariables;
    variant: DrawerVariant;
    staticComponents: {
        Root: typeof DrawerRoot;
        Overlay: typeof DrawerOverlay;
        Content: typeof DrawerContent;
        Body: typeof DrawerBody;
        Header: typeof DrawerHeader;
        Title: typeof DrawerTitle;
        CloseButton: typeof DrawerCloseButton;
    };
}>;

export { Drawer, DrawerBody, DrawerBodyProps, DrawerCloseButton, DrawerCloseButtonProps, DrawerContent, DrawerContentProps, DrawerCssVariables, DrawerFactory, DrawerHeader, DrawerHeaderProps, DrawerOverlay, DrawerOverlayProps, DrawerProps, DrawerRoot, DrawerRootProps, DrawerStylesNames, DrawerTitle, DrawerTitleProps, DrawerVariant };
