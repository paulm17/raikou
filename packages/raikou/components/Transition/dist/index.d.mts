import React from 'react';
import { SetRequired } from 'type-fest';

interface RaikouTransitionStyles {
    common?: React.CSSProperties;
    in: React.CSSProperties;
    out: React.CSSProperties;
    transitionProperty: React.CSSProperties["transitionProperty"];
}
type RaikouTransitionName = "fade" | "skew-up" | "skew-down" | "rotate-right" | "rotate-left" | "slide-down" | "slide-up" | "slide-right" | "slide-left" | "scale-y" | "scale-x" | "scale" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;
declare const transitions: Record<RaikouTransitionName, RaikouTransitionStyles>;

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
declare function Transition({ keepMounted, transition, duration, exitDuration, mounted, children, timingFunction, onExit, onEntered, onEnter, onExited, }: TransitionProps): JSX.Element | null;
declare namespace Transition {
    var displayName: string;
}

type MinimalTransitionOverride = SetRequired<TransitionOverride, 'duration' | 'transition'>;
declare function getTransitionProps(transitionProps: TransitionOverride | undefined, componentTransition: TransitionOverride | undefined): MinimalTransitionOverride;

export { transitions as RAIKOU_TRANSITIONS, RaikouTransition, Transition, TransitionOverride, TransitionProps, getTransitionProps };
