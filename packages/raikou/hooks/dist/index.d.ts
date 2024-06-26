import * as react from 'react';
import { SetStateAction, EffectCallback, DependencyList, useEffect, Ref, RefObject } from 'react';

declare function clamp(value: number, min: number | undefined, max: number | undefined): number;

declare function lowerFirst(value: string): string;

declare function randomId(): string;

declare function range(start: number, end: number): number[];

declare function shallowEqual(a: any, b: any): boolean;

declare function upperFirst(value: string): string;

declare function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T;

declare function useDebouncedCallback<T extends (...args: any[]) => any>(callback: T, delay: number): (...args: Parameters<T>) => void;

declare function useClickOutside<T extends HTMLElement = any>(handler: () => void, events?: string[] | null, nodes?: (HTMLElement | null)[]): react.MutableRefObject<T | undefined>;

declare function useClipboard({ timeout }?: {
    timeout?: number | undefined;
}): {
    copy: (valueToCopy: any) => void;
    reset: () => void;
    error: Error | null;
    copied: boolean;
};

interface UseMediaQueryOptions {
    getInitialValueInEffect: boolean;
}
declare function useMediaQuery(query: string, initialValue?: boolean, { getInitialValueInEffect }?: UseMediaQueryOptions): boolean | undefined;

declare function useColorScheme(initialValue?: 'dark' | 'light', options?: UseMediaQueryOptions): "dark" | "light";

declare function useCounter(initialValue?: number, options?: Partial<{
    min: number;
    max: number;
}>): readonly [number, {
    readonly increment: () => void;
    readonly decrement: () => void;
    readonly set: (value: number) => void;
    readonly reset: () => void;
}];

declare function useDebouncedState<T = any>(defaultValue: T, wait: number, options?: {
    leading: boolean;
}): readonly [T, (newValue: SetStateAction<T>) => void];

declare function useDebouncedValue<T = any>(value: T, wait: number, options?: {
    leading: boolean;
}): readonly [T, () => void];

declare function useDocumentTitle(title: string): void;

declare function useDocumentVisibility(): DocumentVisibilityState;

interface UseFocusReturn {
    opened: boolean;
    shouldReturnFocus?: boolean;
}
/** Returns focus to last active element, used in Modal and Drawer */
declare function useFocusReturn({ opened, shouldReturnFocus }: UseFocusReturn): () => void;

declare function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList): void;

declare function useFocusTrap(active?: boolean): (instance: HTMLElement | null) => void;

declare function useForceUpdate(): () => void;

declare function useId(staticId?: string): string;

declare function useIdle(timeout: number, options?: Partial<{
    events: (keyof DocumentEventMap)[];
    initialState: boolean;
}>): boolean;

declare function useInterval(fn: () => void, interval: number): {
    start: () => void;
    stop: () => void;
    toggle: () => void;
    active: boolean;
};

declare const useIsomorphicEffect: typeof useEffect;

interface UseListStateHandlers<T> {
    setState: React.Dispatch<React.SetStateAction<T[]>>;
    append: (...items: T[]) => void;
    prepend: (...items: T[]) => void;
    insert: (index: number, ...items: T[]) => void;
    pop: () => void;
    shift: () => void;
    apply: (fn: (item: T, index?: number) => T) => void;
    applyWhere: (condition: (item: T, index: number) => boolean, fn: (item: T, index?: number) => T) => void;
    remove: (...indices: number[]) => void;
    reorder: ({ from, to }: {
        from: number;
        to: number;
    }) => void;
    swap: ({ from, to }: {
        from: number;
        to: number;
    }) => void;
    setItem: (index: number, item: T) => void;
    setItemProp: <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) => void;
    filter: (fn: (item: T, i: number) => boolean) => void;
}
type UseListState<T> = [T[], UseListStateHandlers<T>];
declare function useListState<T>(initialValue?: T[]): UseListState<T>;

interface StorageProperties<T> {
    /** Storage key */
    key: string;
    /** Default value that will be set if value is not found in storage */
    defaultValue?: T;
    /** If set to true, value will be update is useEffect after mount */
    getInitialValueInEffect?: boolean;
    /** Function to serialize value into string to be save in storage */
    serialize?: (value: T) => string;
    /** Function to deserialize string value from storage to value */
    deserialize?: (value: string | undefined) => T;
}

declare function useLocalStorage<T = string>(props: StorageProperties<T>): [T, (val: T | ((prevState: T) => T)) => void, () => void];
declare const readLocalStorageValue: <T>({ key, defaultValue, deserialize, }: StorageProperties<T>) => T;

declare function useSessionStorage<T = string>(props: StorageProperties<T>): [T, (val: T | ((prevState: T) => T)) => void, () => void];
declare const readSessionStorageValue: <T>({ key, defaultValue, deserialize, }: StorageProperties<T>) => T;

type PossibleRef<T> = Ref<T> | undefined;
declare function assignRef<T>(ref: PossibleRef<T>, value: T): void;
declare function mergeRefs<T>(...refs: PossibleRef<T>[]): (node: T | null) => void;
declare function useMergedRef<T>(...refs: PossibleRef<T>[]): (node: T | null) => void;

declare function useMouse<T extends HTMLElement = any>(options?: {
    resetOnExit?: boolean;
}): {
    x: number;
    y: number;
    ref: react.MutableRefObject<T | undefined>;
};

interface UseMovePosition {
    x: number;
    y: number;
}
declare function clampUseMovePosition(position: UseMovePosition): {
    x: number;
    y: number;
};
interface useMoveHandlers {
    onScrubStart?: () => void;
    onScrubEnd?: () => void;
}
declare function useMove<T extends HTMLElement = HTMLDivElement>(onChange: (value: UseMovePosition) => void, handlers?: useMoveHandlers, dir?: 'ltr' | 'rtl'): {
    ref: react.RefObject<T>;
    active: boolean;
};

interface PaginationParams {
    /** Page selected on initial render, defaults to 1 */
    initialPage?: number;
    /** Controlled active page number */
    page?: number;
    /** Total amount of pages */
    total: number;
    /** Siblings amount on left/right side of selected page, defaults to 1 */
    siblings?: number;
    /** Amount of elements visible on left/right edges, defaults to 1  */
    boundaries?: number;
    /** Callback fired after change of each page */
    onChange?: (page: number) => void;
}
declare function usePagination({ total, siblings, boundaries, page, initialPage, onChange, }: PaginationParams): {
    range: (number | "dots")[];
    active: number;
    setPage: (pageNumber: number) => void;
    next: () => void;
    previous: () => void;
    first: () => void;
    last: () => void;
};

declare function useQueue<T>({ initialValues, limit }: {
    initialValues?: T[];
    limit: number;
}): {
    state: T[];
    queue: T[];
    add: (...items: T[]) => void;
    update: (fn: (state: T[]) => T[]) => void;
    cleanQueue: () => void;
};

declare function usePageLeave(onPageLeave: () => void): void;

declare function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions): boolean | undefined;

interface ScrollIntoViewAnimation {
    /** target element alignment relatively to parent based on current axis */
    alignment?: 'start' | 'end' | 'center';
}
interface ScrollIntoViewParams {
    /** callback fired after scroll */
    onScrollFinish?: () => void;
    /** duration of scroll in milliseconds */
    duration?: number;
    /** axis of scroll */
    axis?: 'x' | 'y';
    /** custom mathematical easing function */
    easing?: (t: number) => number;
    /** additional distance between nearest edge and element */
    offset?: number;
    /** indicator if animation may be interrupted by user scrolling */
    cancelable?: boolean;
    /** prevents content jumping in scrolling lists with multiple targets */
    isList?: boolean;
}
interface ScrollIntoViewReturnType<Target extends HTMLElement, Parent extends HTMLElement | null = null> {
    scrollableRef: React.MutableRefObject<Parent>;
    targetRef: React.MutableRefObject<Target>;
    scrollIntoView: (params?: ScrollIntoViewAnimation) => void;
    cancel: () => void;
}
declare function useScrollIntoView<Target extends HTMLElement, Parent extends HTMLElement | null = null>({ duration, axis, onScrollFinish, easing, offset, cancelable, isList, }?: ScrollIntoViewParams): ScrollIntoViewReturnType<Target, Parent>;

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;
declare function useResizeObserver<T extends HTMLElement = any>(options?: ResizeObserverOptions): readonly [react.RefObject<T>, ObserverRect];
declare function useElementSize<T extends HTMLElement = any>(options?: ResizeObserverOptions): {
    ref: react.RefObject<T>;
    width: number;
    height: number;
};

declare function useShallowEffect(cb: () => void, dependencies?: React.DependencyList): void;

declare function useToggle<T = boolean>(options?: readonly T[]): readonly [T, (value?: React.SetStateAction<T>) => void];

interface UseUncontrolledInput<T> {
    /** Value for controlled state */
    value?: T;
    /** Initial value for uncontrolled state */
    defaultValue?: T;
    /** Final value for uncontrolled state when value and defaultValue are not provided */
    finalValue?: T;
    /** Controlled state onChange handler */
    onChange?: (value: T, ...payload: any[]) => void;
}
declare function useUncontrolled<T>({ value, defaultValue, finalValue, onChange, }: UseUncontrolledInput<T>): [T, (value: T, ...payload: any[]) => void, boolean];

declare function useViewportSize(): {
    width: number;
    height: number;
};

declare function useWindowEvent<K extends string>(type: K, listener: K extends keyof WindowEventMap ? (this: Window, ev: WindowEventMap[K]) => void : (this: Window, ev: CustomEvent) => void, options?: boolean | AddEventListenerOptions): void;

interface ScrollPosition {
    x: number;
    y: number;
}
declare function scrollTo({ x, y }: Partial<ScrollPosition>): void;
declare function useWindowScroll(): readonly [ScrollPosition, typeof scrollTo];

declare function useIntersection<T extends HTMLElement = any>(options?: ConstructorParameters<typeof IntersectionObserver>[1]): {
    ref: (element: T | null) => void;
    entry: IntersectionObserverEntry | null;
};

interface UseHashOptions {
    getInitialValueInEffect?: boolean;
}
declare function useHash({ getInitialValueInEffect }?: UseHashOptions): readonly [string, (value: string) => void];

interface HotkeyItemOptions {
    preventDefault?: boolean;
}
type HotkeyItem$1 = [string, (event: any) => void, HotkeyItemOptions?];
declare function getHotkeyHandler(hotkeys: HotkeyItem$1[]): (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => void;

type HotkeyItem = [string, (event: KeyboardEvent) => void, HotkeyItemOptions?];
declare function useHotkeys(hotkeys: HotkeyItem[], tagsToIgnore?: string[], triggerOnContentEditable?: boolean): void;

declare function useFullscreen<T extends HTMLElement = any>(): {
    readonly ref: (element: T | null) => void;
    readonly toggle: () => Promise<void>;
    readonly fullscreen: boolean;
};

declare function useLogger(componentName: string, props: any[]): null;

declare function useHover<T extends HTMLElement = HTMLDivElement>(): {
    ref: react.RefObject<T>;
    hovered: boolean;
};

declare function useValidatedState<T>(initialValue: T, validation: (value: T) => boolean, initialValidationState?: boolean): readonly [{
    readonly value: T;
    readonly lastValidValue: T | undefined;
    readonly valid: boolean;
}, (val: T) => void];

type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';
interface UseOsOptions {
    getValueInEffect: boolean;
}
declare function useOs(options?: UseOsOptions): OS;

declare function useSetState<T extends Record<string, any>>(initialState: T): readonly [T, (statePartial: Partial<T> | ((currentState: T) => Partial<T>)) => void];

declare function useInputState<T>(initialState: T): [T, (value: null | undefined | T | React.ChangeEvent<any>) => void];

declare function useEventListener<K extends keyof HTMLElementEventMap, T extends HTMLElement = any>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): react.MutableRefObject<T | undefined>;

declare function useDisclosure(initialState?: boolean, callbacks?: {
    onOpen?: () => void;
    onClose?: () => void;
}): readonly [boolean, {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
}];

interface UseFocusWithinOptions {
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
declare function useFocusWithin<T extends HTMLElement = any>({ onBlur, onFocus, }?: UseFocusWithinOptions): {
    ref: React.MutableRefObject<T>;
    focused: boolean;
};

interface NetworkStatus {
    downlink?: number;
    downlinkMax?: number;
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    rtt?: number;
    saveData?: boolean;
    type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';
}
declare function useNetwork(): {
    online: boolean;
} & NetworkStatus;

declare function useTimeout(callback: (...callbackParams: any[]) => void, delay: number, options?: {
    autoInvoke: boolean;
}): {
    start: (...callbackParams: any[]) => void;
    clear: () => void;
};

declare function useTextSelection(): Selection | null;

declare function usePrevious<T>(value: T): T | undefined;

declare function useFavicon(url: string): void;

interface UseHeadroomInput {
    /** Number in px at which element should be fixed */
    fixedAt?: number;
    /** Called when element is pinned */
    onPin?: () => void;
    /** Called when element is at fixed position */
    onFix?: () => void;
    /** Called when element is unpinned */
    onRelease?: () => void;
}
declare function useHeadroom({ fixedAt, onPin, onFix, onRelease }?: UseHeadroomInput): boolean;

interface EyeDropperOpenOptions {
    signal?: AbortSignal;
}
interface EyeDropperOpenReturnType {
    sRGBHex: string;
}
declare function useEyeDropper(): {
    supported: boolean;
    open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;
};

declare function useInViewport<T extends HTMLElement = any>(): {
    ref: react.RefObject<T>;
    inViewport: boolean;
};

declare function useMutationObserver<Element extends HTMLElement>(callback: MutationCallback, options: MutationObserverInit, target?: HTMLElement | (() => HTMLElement) | null): RefObject<Element>;

declare function useMounted(): boolean;

interface UseStateHistoryHandlers<T> {
    set: (value: T) => void;
    back: (steps?: number) => void;
    forward: (steps?: number) => void;
}
interface StateHistory<T> {
    history: T[];
    current: number;
}
declare function useStateHistory<T>(initialValue: T): [T, UseStateHistoryHandlers<T>, StateHistory<T>];

declare function useMap<T, V>(initialState?: [T, V][]): Map<T, V>;

declare function useSet<T>(values?: T[]): Set<T>;

declare function useThrottledCallback<T extends (...args: any[]) => any>(callback: T, wait: number): (...args: Parameters<T>) => void;

declare function useThrottledState<T = any>(defaultValue: T, wait: number): readonly [T, (value: react.SetStateAction<T>) => void];

declare function useThrottledValue<T>(value: T, wait: number): T;

declare function useIsFirstRender(): boolean;

declare function useOrientation(): {
    angle: number;
    type: string;
};

interface UseFetchOptions extends RequestInit {
    autoInvoke?: boolean;
}
declare function useFetch<T>(url: string, { autoInvoke, ...options }?: UseFetchOptions): {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => Promise<any> | undefined;
    abort: () => void;
};

export { type EyeDropperOpenReturnType, type HotkeyItem, type HotkeyItemOptions, type OS, type StateHistory, type UseFetchOptions, type UseListStateHandlers, type UseMediaQueryOptions, type UseMovePosition, type UseStateHistoryHandlers, assignRef, clamp, clampUseMovePosition, getHotkeyHandler, lowerFirst, mergeRefs, randomId, range, readLocalStorageValue, readSessionStorageValue, shallowEqual, upperFirst, useCallbackRef, useClickOutside, useClipboard, useColorScheme, useCounter, useDebouncedCallback, useDebouncedState, useDebouncedValue, useDidUpdate, useDisclosure, useDocumentTitle, useDocumentVisibility, useElementSize, useEventListener, useEyeDropper, useFavicon, useFetch, useFocusReturn, useFocusTrap, useFocusWithin, useForceUpdate, useFullscreen, useHash, useHeadroom, useHotkeys, useHover, useId, useIdle, useInViewport, useInputState, useIntersection, useInterval, useIsFirstRender, useIsomorphicEffect, useListState, useLocalStorage, useLogger, useMap, useMediaQuery, useMergedRef, useMounted, useMouse, useMove, useMutationObserver, useNetwork, useOrientation, useOs, usePageLeave, usePagination, usePrevious, useQueue, useReducedMotion, useResizeObserver, useScrollIntoView, useSessionStorage, useSet, useSetState, useShallowEffect, useStateHistory, useTextSelection, useThrottledCallback, useThrottledState, useThrottledValue, useTimeout, useToggle, useUncontrolled, useValidatedState, useViewportSize, useWindowEvent, useWindowScroll };
