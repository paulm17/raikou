import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, Factory, RaikouRadius, RaikouShadow } from '@raikou/core';
import React$1 from 'react';
import * as _raikou_input from '@raikou/input';
import { InputProps, InputStylesNames } from '@raikou/input';

interface ComboboxItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface ComboboxItemGroup {
    group: string;
    items: (ComboboxItem | string)[];
}
interface ComboboxParsedItemGroup {
    group: string;
    items: ComboboxItem[];
}
type ComboboxData = (string | ComboboxItem | ComboboxItemGroup)[];
type ComboboxParsedItem = ComboboxItem | ComboboxParsedItemGroup;

declare function getParsedComboboxData(data: ComboboxData | undefined): ComboboxParsedItem[];

declare function getOptionsLockup(options: ComboboxParsedItem[]): Record<string, ComboboxItem>;
declare function getLabelsLockup(options: ComboboxParsedItem[]): Record<string, string>;

type ComboboxChevronStylesNames = "root";
type ComboboxChevronCSSVariables = {
    root: "--combobox-chevron-size";
};
interface ComboboxChevronProps extends BoxProps, StylesApiProps<ComboboxChevronFactory>, ElementProps<"svg", "opacity" | "display"> {
    size?: RaikouSize | (string & {});
    error?: React$1.ReactNode;
}
type ComboboxChevronFactory = Factory<{
    props: ComboboxChevronProps;
    ref: SVGSVGElement;
    stylesNames: ComboboxChevronStylesNames;
    vars: ComboboxChevronCSSVariables;
}>;
declare const ComboboxChevron: _raikou_core.RaikouComponent<{
    props: ComboboxChevronProps;
    ref: SVGSVGElement;
    stylesNames: ComboboxChevronStylesNames;
    vars: ComboboxChevronCSSVariables;
}>;

type ComboboxGroupStylesNames = "group" | "groupLabel";
interface ComboboxGroupProps extends BoxProps, StylesApiProps<ComboboxGroupFactory>, ElementProps<"div"> {
    /** Group label */
    label?: React$1.ReactNode;
}
type ComboboxGroupFactory = Factory<{
    props: ComboboxGroupProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxGroupStylesNames;
    compound: true;
}>;
declare const ComboboxGroup: _raikou_core.RaikouComponent<{
    props: ComboboxGroupProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxGroupStylesNames;
    compound: true;
}>;

interface ComboboxDropdownTargetProps {
    /** Target element */
    children: React$1.ReactNode;
    /** Key of the prop that should be used to access element ref */
    refProp?: string;
}
declare const ComboboxDropdownTarget: _raikou_core.RaikouComponent<{
    props: ComboboxDropdownTargetProps;
    ref: HTMLElement;
    compound: true;
}>;

interface ComboboxEventsTargetProps {
    /** Target element */
    children: React$1.ReactNode;
    /** Key of the prop that should be used to access element ref */
    refProp?: string;
    /** Determines whether component should respond to keyboard events, `true` by default */
    withKeyboardNavigation?: boolean;
    /** Determines whether the target should have `aria-` attributes, `true` by default */
    withAriaAttributes?: boolean;
    /** Determines which events should be handled by the target element.
     * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
     * `input` by default.
     * */
    targetType?: "button" | "input";
}
declare const ComboboxEventsTarget: _raikou_core.RaikouComponent<{
    props: ComboboxEventsTargetProps;
    ref: HTMLElement;
    compound: true;
}>;

type ComboboxHeaderStylesNames = "header";
interface ComboboxHeaderProps extends BoxProps, StylesApiProps<ComboboxHeaderFactory>, ElementProps<"div"> {
}
type ComboboxHeaderFactory = Factory<{
    props: ComboboxHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxHeaderStylesNames;
    compound: true;
}>;
declare const ComboboxHeader: _raikou_core.RaikouComponent<{
    props: ComboboxHeaderProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxHeaderStylesNames;
    compound: true;
}>;

type ComboboxFooterStylesNames = "footer";
interface ComboboxFooterProps extends BoxProps, StylesApiProps<ComboboxFooterFactory>, ElementProps<"div"> {
}
type ComboboxFooterFactory = Factory<{
    props: ComboboxFooterProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxFooterStylesNames;
    compound: true;
}>;
declare const ComboboxFooter: _raikou_core.RaikouComponent<{
    props: ComboboxFooterProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxFooterStylesNames;
    compound: true;
}>;

type ComboboxEmptyStylesNames = "empty";
interface ComboboxEmptyProps extends BoxProps, StylesApiProps<ComboboxEmptyFactory>, ElementProps<"div"> {
}
type ComboboxEmptyFactory = Factory<{
    props: ComboboxEmptyProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxEmptyStylesNames;
    compound: true;
}>;
declare const ComboboxEmpty: _raikou_core.RaikouComponent<{
    props: ComboboxEmptyProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxEmptyStylesNames;
    compound: true;
}>;

type ComboboxSearchStylesNames = InputStylesNames;
interface ComboboxSearchProps extends InputProps, ElementProps<"input", "size"> {
    /** Determines whether the search input should have `aria-` attribute, `true` by default */
    withAriaAttributes?: boolean;
    /** Determines whether the search input should handle keyboard navigation, `true` by default */
    withKeyboardNavigation?: boolean;
}
declare const ComboboxSearch: _raikou_core.RaikouComponent<{
    props: ComboboxSearchProps;
    ref: HTMLInputElement;
    stylesNames: ComboboxSearchStylesNames;
}>;

type ComboboxOptionsStylesNames = "options";
interface ComboboxOptionsProps extends BoxProps, StylesApiProps<ComboboxOptionsFactory>, ElementProps<"div"> {
}
type ComboboxOptionsFactory = Factory<{
    props: ComboboxOptionsProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionsStylesNames;
    compound: true;
}>;
declare const ComboboxOptions: _raikou_core.RaikouComponent<{
    props: ComboboxOptionsProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionsStylesNames;
    compound: true;
}>;

interface PopoverDropdownProps extends BoxProps, StylesApiProps<PopoverDropdownFactory>, ElementProps<"div"> {
}
type PopoverDropdownFactory = Factory<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
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
    radius?: RaikouRadius | (string & {}) | number;
    /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
    shadow?: RaikouShadow | (string & {});
    /** If set, popover dropdown will not be rendered */
    disabled?: boolean;
    /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
    returnFocus?: boolean;
}

type ComboboxDropdownStylesNames = "dropdown";
interface ComboboxDropdownProps extends PopoverDropdownProps {
    /** Determines whether the dropdown should be hidden, for example, when there are no options to display */
    hidden?: boolean;
}
declare const ComboboxDropdown: _raikou_core.RaikouComponent<{
    props: ComboboxDropdownProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxDropdownStylesNames;
    compound: true;
}>;

interface ComboboxTargetProps {
    /** Target element */
    children: React$1.ReactNode;
    /** Key of the prop that should be used to access element ref */
    refProp?: string;
    /** Determines whether component should respond to keyboard events, `true` by default */
    withKeyboardNavigation?: boolean;
    /** Determines whether the target should have `aria-` attributes, `true` by default */
    withAriaAttributes?: boolean;
    /** Determines which events should be handled by the target element.
     * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
     * `input` by default.
     * */
    targetType?: "button" | "input";
}
declare const ComboboxTarget: _raikou_core.RaikouComponent<{
    props: ComboboxTargetProps;
    ref: HTMLElement;
    compound: true;
}>;

type ComboboxDropdownEventSource = "keyboard" | "mouse" | "unknown";
interface ComboboxStore {
    /** Current dropdown opened state */
    dropdownOpened: boolean;
    /** Opens dropdown */
    openDropdown(eventSource?: ComboboxDropdownEventSource): void;
    /** Closes dropdown */
    closeDropdown(eventSource?: ComboboxDropdownEventSource): void;
    /** Toggles dropdown opened state */
    toggleDropdown(eventSource?: ComboboxDropdownEventSource): void;
    /** Selected option index */
    selectedOptionIndex: number;
    /** Selects `Combobox.Option` by index */
    selectOption(index: number): void;
    /** Selects first `Combobox.Option` with `active` prop.
     *  If there are no such options, the function does nothing.
     */
    selectActiveOption(): string | null;
    /** Selects first `Combobox.Option` that is not disabled.
     *  If there are no such options, the function does nothing.
     * */
    selectFirstOption(): string | null;
    /** Selects next `Combobox.Option` that is not disabled.
     *  If the current option is the last one, the function selects first option, if `loop` is true.
     */
    selectNextOption(): string | null;
    /** Selects previous `Combobox.Option` that is not disabled.
     *  If the current option is the first one, the function selects last option, if `loop` is true.
     * */
    selectPreviousOption(): string | null;
    /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */
    resetSelectedOption(): void;
    /** Triggers `onClick` event of selected option.
     *  If there is no selected option, the function does nothing.
     */
    clickSelectedOption(): void;
    /** Updates selected option index to currently selected or active option.
     *  The function is required to be used with searchable components to update selected option index
     *  when options list changes based on search query.
     */
    updateSelectedOptionIndex(target?: "active" | "selected"): void;
    /** List id, used for `aria-*` attributes */
    listId: string | null;
    /** Sets list id */
    setListId(id: string): void;
    /** Ref of `Combobox.Search` input */
    searchRef: React.MutableRefObject<HTMLInputElement | null>;
    /** Moves focus to `Combobox.Search` input */
    focusSearchInput(): void;
    /** Ref of the target element */
    targetRef: React.MutableRefObject<HTMLElement | null>;
    /** Moves focus to the target element */
    focusTarget(): void;
}
interface UseComboboxOptions$1 {
    /** Default value for `dropdownOpened`, `false` by default */
    defaultOpened?: boolean;
    /** Controlled `dropdownOpened` state */
    opened?: boolean;
    /** Called when `dropdownOpened` state changes */
    onOpenedChange?(opened: boolean): void;
    /** Called when dropdown closes with event source: keyboard, mouse or unknown */
    onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;
    /** Called when dropdown opens with event source: keyboard, mouse or unknown */
    onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;
    /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
    loop?: boolean;
    /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
    scrollBehavior?: ScrollBehavior;
}
declare function useCombobox({ defaultOpened, opened, onOpenedChange, onDropdownClose, onDropdownOpen, loop, scrollBehavior, }?: UseComboboxOptions$1): ComboboxStore;

type ComboboxOptionStylesNames = "option";
interface ComboboxOptionProps extends BoxProps, StylesApiProps<ComboboxOptionFactory>, ElementProps<"div"> {
    /** Option value */
    value: string;
    /** Determines whether the option is selected */
    active?: boolean;
    /** Determines whether the option can be selected */
    disabled?: boolean;
    /** Determines whether item is selected, useful for virtualized comboboxes */
    selected?: boolean;
}
type ComboboxOptionFactory = Factory<{
    props: ComboboxOptionProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionStylesNames;
    compound: true;
}>;
declare const ComboboxOption: _raikou_core.RaikouComponent<{
    props: ComboboxOptionProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxOptionStylesNames;
    compound: true;
}>;

type ComboboxStylesNames = "options" | "dropdown" | "option" | "search" | "empty" | "footer" | "header" | "group" | "groupLabel";
type ComboboxCSSVariables = {
    options: "--combobox-option-fz" | "--combobox-option-padding";
    dropdown: "--combobox-padding" | "--combobox-option-fz" | "--combobox-option-padding";
};
interface ComboboxProps extends __PopoverProps, StylesApiProps<ComboboxFactory> {
    /** Combobox content */
    children: React$1.ReactNode;
    /** Combobox store, can be used to control combobox state */
    store?: ComboboxStore;
    /** Called when item is selected with `Enter` key or by clicking it */
    onOptionSubmit?(value: string, optionProps: ComboboxOptionProps): void;
    /** Controls items `font-size` and `padding`, `'sm'` by default */
    size?: RaikouSize | (string & {});
    /** Controls `padding` of the dropdown, `4` by default */
    dropdownPadding?: React$1.CSSProperties["padding"];
    /** Determines whether selection should be reset when option is hovered, `false` by default */
    resetSelectionOnOptionHover?: boolean;
}
type ComboboxFactory = Factory<{
    props: ComboboxProps;
    ref: HTMLDivElement;
    stylesNames: ComboboxStylesNames;
    vars: ComboboxCSSVariables;
    staticComponents: {
        Target: typeof ComboboxTarget;
        Dropdown: typeof ComboboxDropdown;
        Options: typeof ComboboxOptions;
        Option: typeof ComboboxOption;
        Search: typeof ComboboxSearch;
        Empty: typeof ComboboxEmpty;
        Chevron: typeof ComboboxChevron;
        Footer: typeof ComboboxFooter;
        Header: typeof ComboboxHeader;
        EventsTarget: typeof ComboboxEventsTarget;
        DropdownTarget: typeof ComboboxDropdownTarget;
        Group: typeof ComboboxGroup;
    };
}>;
declare function Combobox(_props: ComboboxProps): JSX.Element;
declare namespace Combobox {
    var displayName: string;
    var Target: _raikou_core.RaikouComponent<{
        props: ComboboxTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Dropdown: _raikou_core.RaikouComponent<{
        props: ComboboxDropdownProps;
        ref: HTMLDivElement;
        stylesNames: "dropdown";
        compound: true;
    }>;
    var Options: _raikou_core.RaikouComponent<{
        props: ComboboxOptionsProps;
        ref: HTMLDivElement;
        stylesNames: "options";
        compound: true;
    }>;
    var Option: _raikou_core.RaikouComponent<{
        props: ComboboxOptionProps;
        ref: HTMLDivElement;
        stylesNames: "option";
        compound: true;
    }>;
    var Search: _raikou_core.RaikouComponent<{
        props: ComboboxSearchProps;
        ref: HTMLInputElement;
        stylesNames: _raikou_input.InputStylesNames;
    }>;
    var Empty: _raikou_core.RaikouComponent<{
        props: ComboboxEmptyProps;
        ref: HTMLDivElement;
        stylesNames: "empty";
        compound: true;
    }>;
    var Chevron: _raikou_core.RaikouComponent<{
        props: ComboboxChevronProps;
        ref: SVGSVGElement;
        stylesNames: "root";
        vars: ComboboxChevronCSSVariables;
    }>;
    var Footer: _raikou_core.RaikouComponent<{
        props: ComboboxFooterProps;
        ref: HTMLDivElement;
        stylesNames: "footer";
        compound: true;
    }>;
    var Header: _raikou_core.RaikouComponent<{
        props: ComboboxHeaderProps;
        ref: HTMLDivElement;
        stylesNames: "header";
        compound: true;
    }>;
    var EventsTarget: _raikou_core.RaikouComponent<{
        props: ComboboxEventsTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var DropdownTarget: _raikou_core.RaikouComponent<{
        props: ComboboxDropdownTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Group: _raikou_core.RaikouComponent<{
        props: ComboboxGroupProps;
        ref: HTMLDivElement;
        stylesNames: ComboboxGroupStylesNames;
        compound: true;
    }>;
}

interface FilterOptionsInput {
    options: ComboboxParsedItem[];
    search: string;
    limit: number;
}

type OptionsFilter = (input: FilterOptionsInput) => ComboboxParsedItem[];
interface OptionsGroup {
    group: string;
    items: ComboboxItem[];
}
type OptionsData = (ComboboxItem | OptionsGroup)[];
interface OptionsDropdownProps {
    data: OptionsData;
    filter: OptionsFilter | undefined;
    search: string | undefined;
    limit: number | undefined;
    withScrollArea: boolean | undefined;
    maxDropdownHeight: number | string | undefined;
    hidden?: boolean;
    hiddenWhenEmpty?: boolean;
}
declare function OptionsDropdown({ data, hidden, hiddenWhenEmpty, filter, search, limit, maxDropdownHeight, withScrollArea, }: OptionsDropdownProps): JSX.Element;

interface UseComboboxOptions {
    /** Default value for `dropdownOpened`, `false` by default */
    defaultOpened?: boolean;
    /** Controlled `dropdownOpened` state */
    opened?: boolean;
    /** Called when `dropdownOpened` state changes */
    onOpenedChange?(opened: boolean): void;
    /** Called when dropdown closes */
    onDropdownClose?(): void;
    /** Called when dropdown opens */
    onDropdownOpen?(): void;
    /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
    loop?: boolean;
    /** Function to determine whether the option is disabled */
    isOptionDisabled?(optionIndex: number): boolean;
    totalOptionsCount: number;
    getOptionId(index: number): string | null;
    selectedOptionIndex: number;
    setSelectedOptionIndex(index: number): void;
    activeOptionIndex?: number;
    onSelectedOptionSubmit(index: number): void;
}
declare function useVirtualizedCombobox({ defaultOpened, opened, onOpenedChange, onDropdownClose, onDropdownOpen, loop, totalOptionsCount, isOptionDisabled, getOptionId, selectedOptionIndex, setSelectedOptionIndex, activeOptionIndex, onSelectedOptionSubmit, }?: UseComboboxOptions): ComboboxStore;

interface UseComboboxTargetPropsInput {
    targetType: 'input' | 'button' | undefined;
    withAriaAttributes: boolean | undefined;
    withKeyboardNavigation: boolean | undefined;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}
declare function useComboboxTargetProps({ onKeyDown, withKeyboardNavigation, withAriaAttributes, targetType, }: UseComboboxTargetPropsInput): {
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    'aria-haspopup': string;
    'aria-expanded': any;
    'aria-controls': any;
    'aria-activedescendant': string | undefined;
    autoComplete: string;
    'data-expanded': boolean | undefined;
} | {
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    "aria-haspopup"?: undefined;
    "aria-expanded"?: undefined;
    "aria-controls"?: undefined;
    'aria-activedescendant'?: undefined;
    autoComplete?: undefined;
    'data-expanded'?: undefined;
};

export { Combobox, ComboboxChevron, ComboboxChevronProps, ComboboxData, ComboboxDropdown, ComboboxDropdownEventSource, ComboboxDropdownProps, ComboboxDropdownTarget, ComboboxDropdownTargetProps, ComboboxEmpty, ComboboxEmptyProps, ComboboxEventsTarget, ComboboxEventsTargetProps, ComboboxFactory, ComboboxFooter, ComboboxFooterProps, ComboboxGroup, ComboboxGroupProps, ComboboxHeader, ComboboxHeaderProps, ComboboxItem, ComboboxItemGroup, ComboboxOption, ComboboxOptionProps, ComboboxOptions, ComboboxOptionsProps, ComboboxParsedItem, ComboboxParsedItemGroup, ComboboxProps, ComboboxSearch, ComboboxSearchProps, ComboboxStore, ComboboxStylesNames, ComboboxTarget, ComboboxTargetProps, OptionsData, OptionsDropdown, OptionsDropdownProps, OptionsFilter, UseComboboxOptions$1 as UseComboboxOptions, getLabelsLockup, getOptionsLockup, getParsedComboboxData, useCombobox, useComboboxTargetProps, useVirtualizedCombobox };
