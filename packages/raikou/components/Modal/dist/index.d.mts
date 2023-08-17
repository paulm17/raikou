import * as _raikou_core from '@raikou/core';
import { BoxProps, ElementProps, RaikouShadow, RaikouSpacing, RaikouSize, RaikouRadius, StylesApiProps, PolymorphicFactory, Factory } from '@raikou/core';
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
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | number | (string & {});
}

interface ModalBaseHeaderProps extends BoxProps, ElementProps<"div"> {
}

type OverlayStylesNames = "root";
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
}>;

interface ModalBaseOverlayProps extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">, ElementProps<"div", "color"> {
    /** Props passed down to the `Transition` component */
    transitionProps?: TransitionOverride;
}

interface ModalBaseTitleProps extends BoxProps, ElementProps<"h2"> {
}

type ModalBaseStylesNames = 'body' | 'header' | 'title' | 'overlay' | 'root' | 'content' | 'close' | 'inner';

type ScrollAreaComponent = React.FC<any>;

type ModalRootStylesNames = ModalBaseStylesNames;
type ModalRootCssVariables = {
    root: "--modal-radius" | "--modal-size" | "--modal-y-offset" | "--modal-x-offset";
};
interface ModalRootProps extends StylesApiProps<ModalRootFactory>, ModalBaseProps {
    __staticSelector?: string;
    /** Top/bottom modal offset, `5vh` by default */
    yOffset?: React$1.CSSProperties["marginTop"];
    /** Left/right modal offset, `5vw` by default */
    xOffset?: React$1.CSSProperties["marginLeft"];
    /** Scroll area component, native `div` element by default */
    scrollAreaComponent?: ScrollAreaComponent;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Determines whether the modal should be centered vertically, `false` by default */
    centered?: boolean;
    /** Determines whether the modal should take the entire screen, `false` by default */
    fullScreen?: boolean;
}
type ModalRootFactory = Factory<{
    props: ModalRootProps;
    ref: HTMLDivElement;
    stylesNames: ModalRootStylesNames;
    vars: ModalRootCssVariables;
    compound: true;
}>;
declare const ModalRoot: _raikou_core.RaikouComponent<{
    props: ModalRootProps;
    ref: HTMLDivElement;
    stylesNames: ModalRootStylesNames;
    vars: ModalRootCssVariables;
    compound: true;
}>;

type ModalBodyStylesNames = "body";
interface ModalBodyProps extends ModalBaseBodyProps, StylesApiProps<ModalBodyFactory> {
}
type ModalBodyFactory = Factory<{
    props: ModalBodyProps;
    ref: HTMLDivElement;
    stylesNames: ModalBodyStylesNames;
    compound: true;
}>;
declare const ModalBody: _raikou_core.RaikouComponent<{
    props: ModalBodyProps;
    ref: HTMLDivElement;
    stylesNames: ModalBodyStylesNames;
    compound: true;
}>;

type ModalCloseButtonStylesNames = "close";
interface ModalCloseButtonProps extends ModalBaseCloseButtonProps, StylesApiProps<ModalCloseButtonFactory> {
}
type ModalCloseButtonFactory = Factory<{
    props: ModalCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: ModalCloseButtonStylesNames;
    compound: true;
}>;
declare const ModalCloseButton: _raikou_core.RaikouComponent<{
    props: ModalCloseButtonProps;
    ref: HTMLButtonElement;
    stylesNames: ModalCloseButtonStylesNames;
    compound: true;
}>;

type ModalOverlayStylesNames = "overlay";
interface ModalOverlayProps extends ModalBaseOverlayProps, StylesApiProps<ModalOverlayFactory> {
}
type ModalOverlayFactory = Factory<{
    props: ModalOverlayProps;
    ref: HTMLDivElement;
    stylesNames: ModalOverlayStylesNames;
    compound: true;
}>;
declare const ModalOverlay: _raikou_core.RaikouComponent<{
    props: ModalOverlayProps;
    ref: HTMLDivElement;
    stylesNames: ModalOverlayStylesNames;
    compound: true;
}>;

type ModalContentStylesNames = "content" | "inner";
interface ModalContentProps extends ModalBaseContentProps, StylesApiProps<ModalContentFactory> {
}
type ModalContentFactory = Factory<{
    props: ModalContentProps;
    ref: HTMLDivElement;
    stylesNames: ModalContentStylesNames;
    compound: true;
}>;
declare const ModalContent: _raikou_core.RaikouComponent<{
    props: ModalContentProps;
    ref: HTMLDivElement;
    stylesNames: ModalContentStylesNames;
    compound: true;
}>;

type ModalTitleStylesNames = "title";
interface ModalTitleProps extends ModalBaseTitleProps, StylesApiProps<ModalTitleFactory> {
}
type ModalTitleFactory = Factory<{
    props: ModalTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: ModalTitleStylesNames;
    compound: true;
}>;
declare const ModalTitle: _raikou_core.RaikouComponent<{
    props: ModalTitleProps;
    ref: HTMLHeadingElement;
    stylesNames: ModalTitleStylesNames;
    compound: true;
}>;

type ModalHeaderStylesNames = "header";
interface ModalHeaderProps extends ModalBaseHeaderProps, StylesApiProps<ModalHeaderFactory> {
}
type ModalHeaderFactory = Factory<{
    props: ModalHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ModalHeaderStylesNames;
    compound: true;
}>;
declare const ModalHeader: _raikou_core.RaikouComponent<{
    props: ModalHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ModalHeaderStylesNames;
    compound: true;
}>;

type ModalStylesNames = ModalRootStylesNames;
type ModalCssVariables = ModalRootCssVariables;
interface ModalProps extends ModalRootProps {
    __staticSelector?: string;
    /** Modal title */
    title?: React$1.ReactNode;
    /** Determines whether the overlay should be rendered, `true` by default */
    withOverlay?: boolean;
    /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
    overlayProps?: ModalBaseOverlayProps;
    /** Modal content */
    children?: React$1.ReactNode;
    /** Determines whether the close button should be rendered, `true` by default */
    withCloseButton?: boolean;
    /** Props passed down to the close button */
    closeButtonProps?: ModalBaseCloseButtonProps;
}
type ModalFactory = Factory<{
    props: ModalProps;
    ref: HTMLDivElement;
    stylesNames: ModalStylesNames;
    vars: ModalCssVariables;
    staticComponents: {
        Root: typeof ModalRoot;
        Overlay: typeof ModalOverlay;
        Content: typeof ModalContent;
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        CloseButton: typeof ModalCloseButton;
    };
}>;
declare const Modal: _raikou_core.RaikouComponent<{
    props: ModalProps;
    ref: HTMLDivElement;
    stylesNames: ModalStylesNames;
    vars: ModalCssVariables;
    staticComponents: {
        Root: typeof ModalRoot;
        Overlay: typeof ModalOverlay;
        Content: typeof ModalContent;
        Body: typeof ModalBody;
        Header: typeof ModalHeader;
        Title: typeof ModalTitle;
        CloseButton: typeof ModalCloseButton;
    };
}>;

export { Modal, ModalBody, ModalBodyProps, ModalCloseButton, ModalCloseButtonProps, ModalContent, ModalContentProps, ModalCssVariables, ModalFactory, ModalHeader, ModalHeaderProps, ModalOverlay, ModalOverlayProps, ModalProps, ModalRoot, ModalRootProps, ModalStylesNames, ModalTitle, ModalTitleProps };
