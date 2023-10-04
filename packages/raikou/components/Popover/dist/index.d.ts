import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, Factory, RaikouRadius, RaikouShadow, StylesApiProps } from '@raikou/core';
import React$1 from 'react';

interface PopoverDropdownProps extends BoxProps, CompoundStylesApiProps<PopoverDropdownFactory>, ElementProps<"div"> {
}
type PopoverDropdownFactory = Factory<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
    compound: true;
}>;
declare const PopoverDropdown: _raikou_core.RaikouComponent<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
    compound: true;
}>;

interface PopoverTargetProps {
    /** Target element */
    children: React$1.ReactNode;
    /** Key of the prop that should be used to access element ref */
    refProp?: string;
    /** Popup accessible type, `'dialog'` by default */
    popupType?: string;
}
declare const PopoverTarget: _raikou_core.RaikouComponent<{
    props: PopoverTargetProps;
    ref: HTMLElement;
    compound: true;
}>;

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

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
type ArrowPosition = 'center' | 'side';
interface FloatingAxesOffsets {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
}

interface PortalProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React$1.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type PopoverWidth = 'target' | React.CSSProperties['width'];
interface PopoverMiddlewares {
    shift: boolean;
    flip: boolean;
    inline?: boolean;
}

type PopoverStylesNames = "dropdown" | "arrow";
type PopoverCssVariables = {
    dropdown: "--popover-radius" | "--popover-shadow";
};
interface __PopoverProps {
    /** Dropdown position relative to the target element, `'bottom'` by default */
    position?: FloatingPosition;
    /** Offset of the dropdown element, `8` by default */
    offset?: number | FloatingAxesOffsets;
    /** Called when dropdown position changes */
    onPositionChange?(position: FloatingPosition): void;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?(): void;
    /** Called when dropdown opens */
    onOpen?(): void;
    /** If set dropdown will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
    keepMounted?: boolean;
    /** Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
    transitionProps?: TransitionOverride;
    /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
    width?: PopoverWidth;
    /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
    middlewares?: PopoverMiddlewares;
    /** Determines whether component should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `7` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position */
    arrowPosition?: ArrowPosition;
    /** Determines whether dropdown should be rendered within the `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` when `withinPortal` is true */
    portalProps?: Omit<PortalProps, "children">;
    /** Dropdown `z-index`, `300` by default */
    zIndex?: React$1.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: RaikouShadow;
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
}
interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
    __staticSelector?: string;
    /** `Popover.Target` and `Popover.Dropdown` components */
    children?: React$1.ReactNode;
    /** Initial opened state for uncontrolled component */
    defaultOpened?: boolean;
    /** Controlled dropdown opened state */
    opened?: boolean;
    /** Called with current state when dropdown opens or closes */
    onChange?(opened: boolean): void;
    /** Determines whether dropdown should be closed on outside clicks, `true` by default */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** Determines whether focus should be trapped within dropdown, `false` by default */
    trapFocus?: boolean;
    /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
    closeOnEscape?: boolean;
    /** id base to create accessibility connections */
    id?: string;
    /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
    withRoles?: boolean;
}
type PopoverFactory = Factory<{
    props: PopoverProps;
    stylesNames: PopoverStylesNames;
    vars: PopoverCssVariables;
}>;
declare function Popover(_props: PopoverProps): React$1.JSX.Element;
declare namespace Popover {
    var Target: _raikou_core.RaikouComponent<{
        props: PopoverTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Dropdown: _raikou_core.RaikouComponent<{
        props: PopoverDropdownProps;
        ref: HTMLDivElement;
        stylesNames: PopoverStylesNames;
        compound: true;
    }>;
    var displayName: string;
    var extend: (input: _raikou_core.ExtendsRootComponent<{
        props: PopoverProps;
        stylesNames: PopoverStylesNames;
        vars: PopoverCssVariables;
    }>) => _raikou_core.ExtendsRootComponent<{
        props: PopoverProps;
        stylesNames: PopoverStylesNames;
        vars: PopoverCssVariables;
    }>;
}

export { Popover, PopoverDropdown, PopoverDropdownProps, PopoverFactory, PopoverProps, PopoverStylesNames, PopoverTarget, PopoverTargetProps, PopoverWidth, __PopoverProps };
