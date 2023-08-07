import React from 'react';
import { ElementProps, RaikouColor } from '@raikou/core';
import { RaikouStore } from '@raikou/store';

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Portal children, for example, custom modal or popover */
    children: React.ReactNode;
    /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
    target?: HTMLElement | string;
}

interface NprogressState {
    mounted: boolean;
    progress: number;
    interval: number;
    step: number;
    stepInterval: number;
    timeouts: number[];
}
type NprogressStore = RaikouStore<NprogressState>;
declare const createNprogressStore: () => RaikouStore<NprogressState>;
declare const useNprogress: (store: NprogressStore) => NprogressState;
declare function updateNavigationProgressStateAction(update: (state: NprogressState) => Partial<NprogressState>, store: NprogressStore): void;
declare function decrementNavigationProgressAction(store: NprogressStore): void;
declare function setNavigationProgressAction(value: number, store: NprogressStore): void;
declare function cleanupNavigationProgressAction(store: NprogressStore): void;
declare function completeNavigationProgressAction(store: NprogressStore): void;
declare function startNavigationProgressAction(store: NprogressStore): void;
declare function stopNavigationProgressAction(store: NprogressStore): void;
declare function resetNavigationProgressAction(store: NprogressStore): void;
declare function incrementNavigationProgressAction(store: NprogressStore): void;
declare function createNprogress(): readonly [RaikouStore<NprogressState>, {
    start: () => void;
    stop: () => void;
    reset: () => void;
    set: (value: number) => void;
    increment: () => void;
    decrement: () => void;
    complete: () => void;
    cleanup: () => void;
}];
declare const nprogressStore: RaikouStore<NprogressState>;
declare const nprogress: {
    start: () => void;
    stop: () => void;
    reset: () => void;
    set: (value: number) => void;
    increment: () => void;
    decrement: () => void;
    complete: () => void;
    cleanup: () => void;
};
declare const startNavigationProgress: () => void;
declare const stopNavigationProgress: () => void;
declare const resetNavigationProgress: () => void;
declare const setNavigationProgress: (value: number) => void;
declare const incrementNavigationProgress: () => void;
declare const decrementNavigationProgress: () => void;
declare const completeNavigationProgress: () => void;
declare const cleanupNavigationProgress: () => void;

interface NavigationProgressProps extends ElementProps<"div"> {
    /** Component store, controls state */
    store?: NprogressStore;
    /** Initial progress value, `0` by default */
    initialProgress?: number;
    /** Key of `theme.colors` of any other valid CSS color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Controls height of the progress bar */
    size?: number;
    /** Step interval in ms, `500` by default */
    stepInterval?: number;
    /** Determines whether the progress bar should be rendered within `Portal`, `true` by default */
    withinPortal?: boolean;
    /** Props to pass down to the `Portal` when `withinPortal` is `true` */
    portalProps?: Omit<PortalProps, "children" | "withinPortal">;
    /** Progressbar z-index, `9999` by default */
    zIndex?: React.CSSProperties["zIndex"];
}
declare function NavigationProgress({ initialProgress, color, size, stepInterval, withinPortal, portalProps, zIndex, store, ...others }: NavigationProgressProps): React.JSX.Element;
declare namespace NavigationProgress {
    var displayName: string;
}

export { NavigationProgress, NavigationProgressProps, NprogressState, NprogressStore, cleanupNavigationProgress, cleanupNavigationProgressAction, completeNavigationProgress, completeNavigationProgressAction, createNprogress, createNprogressStore, decrementNavigationProgress, decrementNavigationProgressAction, incrementNavigationProgress, incrementNavigationProgressAction, nprogress, nprogressStore, resetNavigationProgress, resetNavigationProgressAction, setNavigationProgress, setNavigationProgressAction, startNavigationProgress, startNavigationProgressAction, stopNavigationProgress, stopNavigationProgressAction, updateNavigationProgressStateAction, useNprogress };
