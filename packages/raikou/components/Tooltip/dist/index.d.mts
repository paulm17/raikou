import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouRadius, RaikouColor, Factory } from '@raikou/core';
import React$1 from 'react';

type FloatingPlacement = 'end' | 'start';
type FloatingSide = 'top' | 'right' | 'bottom' | 'left';
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
type ArrowPosition = 'center' | 'side';
interface FloatingAxesOffsets {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
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
    children: (styles: React$1.CSSProperties) => JSX.Element;
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

interface PortalProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React$1.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

type TooltipStylesNames = "tooltip" | "arrow";
type TooltipVariant = string;
type TooltipCssVariables = {
    tooltip: "--tooltip-radius" | "--tooltip-bg";
};
interface TooltipBaseProps extends BoxProps, StylesApiProps<TooltipFactory>, ElementProps<"div"> {
    /** Target element, must support `ref` prop and `...others` */
    children: React.ReactNode;
    /** Tooltip position relative to target element (`Tooltip` component) or mouse (`Tooltip.Floating` component) */
    position?: FloatingPosition;
    /** Key of the prop that can be used to access element ref, `ref` by default */
    refProp?: string;
    /** Tooltip content */
    label: React.ReactNode;
    /** Determines whether tooltip should be rendered within `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Key of `theme.colors` or any valid CSS color, controls tooltip background, by default set based on current color scheme */
    color?: RaikouColor;
    /** Determines whether content should be wrapped on to the next line, `false` by default */
    multiline?: boolean;
    /** Tooltip z-index, `300` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** If set, tooltip element will not be rendered */
    disabled?: boolean;
    /** Props to pass down to the portal when withinPortal is true */
    portalProps?: Omit<PortalProps, "children" | "withinPortal">;
}

interface TooltipFloatingProps extends TooltipBaseProps {
    /** Offset from mouse in px, `10` by default */
    offset?: number;
}
declare const TooltipFloating: _raikou_core.RaikouComponent<{
    props: TooltipFloatingProps;
    ref: HTMLDivElement;
    stylesNames: TooltipStylesNames;
    vars: TooltipCssVariables;
}>;

interface TooltipGroupProps {
    /** <Tooltip /> components */
    children: React$1.ReactNode;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms */
    closeDelay?: number;
}
declare function TooltipGroup(props: TooltipGroupProps): React$1.JSX.Element;
declare namespace TooltipGroup {
    var displayName: string;
}

interface TooltipProps extends TooltipBaseProps {
    /** Called when tooltip position changes */
    onPositionChange?: (position: FloatingPosition) => void;
    /** Open delay in ms */
    openDelay?: number;
    /** Close delay in ms, `0` by default */
    closeDelay?: number;
    /** Controlled opened state */
    opened?: boolean;
    /** Space between target element and tooltip in px, `5` by default */
    offset?: number | FloatingAxesOffsets;
    /** Determines whether the tooltip should have an arrow, `false` by default */
    withArrow?: boolean;
    /** Arrow size in px, `4` by default */
    arrowSize?: number;
    /** Arrow offset in px, `5` by default */
    arrowOffset?: number;
    /** Arrow `border-radius` in px, `0` by default */
    arrowRadius?: number;
    /** Arrow position relative to the tooltip, `side` by default */
    arrowPosition?: ArrowPosition;
    /** Props passed down to the `Transition` component that used to animate tooltip presence, use to configure duration and animation type, `{ duration: 100, transition: 'fade' }` by default */
    transitionProps?: TransitionOverride;
    /** Determines which events will be used to show tooltip, `{ hover: true, focus: false, touch: false }` by default */
    events?: {
        hover: boolean;
        focus: boolean;
        touch: boolean;
    };
    /** `useEffect` dependencies to force update tooltip position */
    positionDependencies?: any[];
    /** Must be set if the tooltip target is an inline element */
    inline?: boolean;
    /** If set, the tooltip will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
}
type TooltipFactory = Factory<{
    props: TooltipProps;
    ref: HTMLDivElement;
    stylesNames: TooltipStylesNames;
    vars: TooltipCssVariables;
    staticComponents: {
        Floating: typeof TooltipFloating;
        Group: typeof TooltipGroup;
    };
}>;
declare const Tooltip: _raikou_core.RaikouComponent<{
    props: TooltipProps;
    ref: HTMLDivElement;
    stylesNames: TooltipStylesNames;
    vars: TooltipCssVariables;
    staticComponents: {
        Floating: typeof TooltipFloating;
        Group: typeof TooltipGroup;
    };
}>;

export { Tooltip, TooltipCssVariables, TooltipFactory, TooltipFloating, TooltipFloatingProps, TooltipGroup, TooltipGroupProps, TooltipProps, TooltipStylesNames, TooltipVariant };
