import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, Factory, RaikouColor, PolymorphicFactory, RaikouRadius, RaikouShadow, StylesApiProps } from '@raikou/core';
import React$1 from 'react';

type MenuDividerStylesNames = "divider";
interface MenuDividerProps extends BoxProps, CompoundStylesApiProps<MenuDividerFactory>, ElementProps<"div"> {
}
type MenuDividerFactory = Factory<{
    props: MenuDividerProps;
    ref: HTMLDivElement;
    stylesNames: MenuDividerStylesNames;
    compound: true;
}>;
declare const MenuDivider: _raikou_core.RaikouComponent<{
    props: MenuDividerProps;
    ref: HTMLDivElement;
    stylesNames: MenuDividerStylesNames;
    compound: true;
}>;

interface MenuTargetProps {
    /** Target element */
    children: React$1.ReactNode;
    /** Key of the prop that should be used to get element ref */
    refProp?: string;
}
declare const MenuTarget: React$1.ForwardRefExoticComponent<MenuTargetProps & React$1.RefAttributes<HTMLElement>>;

type MenuDropdownStylesNames = "dropdown";
interface MenuDropdownProps extends BoxProps, CompoundStylesApiProps<MenuDropdownFactory>, ElementProps<"div"> {
}
type MenuDropdownFactory = Factory<{
    props: MenuDropdownProps;
    ref: HTMLDivElement;
    stylesNames: MenuDropdownStylesNames;
    compound: true;
}>;
declare const MenuDropdown: _raikou_core.RaikouComponent<{
    props: MenuDropdownProps;
    ref: HTMLDivElement;
    stylesNames: MenuDropdownStylesNames;
    compound: true;
}>;

type MenuLabelStylesNames = "label";
interface MenuLabelProps extends BoxProps, CompoundStylesApiProps<MenuLabelFactory>, ElementProps<"div"> {
}
type MenuLabelFactory = Factory<{
    props: MenuLabelProps;
    ref: HTMLDivElement;
    stylesNames: MenuLabelStylesNames;
    compound: true;
}>;
declare const MenuLabel: _raikou_core.RaikouComponent<{
    props: MenuLabelProps;
    ref: HTMLDivElement;
    stylesNames: MenuLabelStylesNames;
    compound: true;
}>;

type MenuItemStylesNames = "item" | "itemLabel" | "itemSection";
interface MenuItemProps extends BoxProps, CompoundStylesApiProps<MenuItemFactory> {
    /** Item label */
    children?: React$1.ReactNode;
    /** Key of `theme.colors` or any valid CSS color */
    color?: RaikouColor;
    /** Determines whether the menu should be closed when the item is clicked, overrides `closeOnItemClick` prop on the `Menu` component */
    closeMenuOnClick?: boolean;
    /** Section displayed on the left side of the label */
    leftSection?: React$1.ReactNode;
    /** Section displayed on the right side of the label */
    rightSection?: React$1.ReactNode;
    /** Disables item */
    disabled?: boolean;
}
type MenuItemFactory = PolymorphicFactory<{
    props: MenuItemProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: MenuItemStylesNames;
    compound: true;
}>;
declare const MenuItem: (<C = "button">(props: C extends React$1.ElementType<any> ? MenuItemProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React$1.PropsWithoutRef<React$1.ComponentProps<C>>>, "component" | keyof MenuItemProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React$1.ElementType<any> ? React$1.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : MenuItemProps & {
    component: React$1.ElementType<any>;
    renderRoot?(props: any): any;
}) => React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>) & Omit<React$1.FunctionComponent<(MenuItemProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MenuItemProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MenuItemProps & {
    component: React$1.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: MenuItemProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: MenuItemStylesNames;
    compound: true;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

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

type PopoverWidth = "target" | React.CSSProperties["width"];
interface PopoverMiddlewares {
    shift: boolean;
    flip: boolean;
    inline?: boolean;
    size?: boolean;
}

type PopoverStylesNames = "dropdown" | "arrow";
interface __PopoverProps {
    /** Dropdown position relative to the target element, `'bottom'` by default */
    position?: FloatingPosition;
    /** Offset of the dropdown element, `8` by default */
    offset?: number | FloatingAxesOffsets;
    /** Called when dropdown position changes */
    onPositionChange?: (position: FloatingPosition) => void;
    /** `useEffect` dependencies to force update dropdown position, `[]` by default */
    positionDependencies?: any[];
    /** Called when dropdown closes */
    onClose?: () => void;
    /** Called when dropdown opens */
    onOpen?: () => void;
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

type MenuStylesNames = "item" | "itemLabel" | "itemSection" | "label" | "divider" | PopoverStylesNames;
type MenuFactory = Factory<{
    props: MenuProps;
    ref: HTMLDivElement;
    stylesNames: MenuStylesNames;
}>;
interface MenuProps extends __PopoverProps, StylesApiProps<MenuFactory> {
    variant?: string;
    /** Menu content */
    children?: React$1.ReactNode;
    /** Controlled menu opened state */
    opened?: boolean;
    /** Uncontrolled menu initial opened state */
    defaultOpened?: boolean;
    /** Called when menu opened state changes */
    onChange?: (opened: boolean) => void;
    /** Called when Menu is opened */
    onOpen?: () => void;
    /** Called when Menu is closed */
    onClose?: () => void;
    /** Determines whether Menu should be closed when item is clicked */
    closeOnItemClick?: boolean;
    /** Determines whether arrow key presses should loop though items (first to last and last to first) */
    loop?: boolean;
    /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
    closeOnEscape?: boolean;
    /** Event which should open menu */
    trigger?: "click" | "hover";
    /** Open delay in ms, applicable only to trigger="hover" variant */
    openDelay?: number;
    /** Close delay in ms, applicable only to trigger="hover" variant */
    closeDelay?: number;
    /** Determines whether dropdown should be closed on outside clicks, default to true */
    closeOnClickOutside?: boolean;
    /** Events that trigger outside clicks */
    clickOutsideEvents?: string[];
    /** id base to create accessibility connections */
    id?: string;
}
declare function Menu(_props: MenuProps): React$1.JSX.Element;
declare namespace Menu {
    var extend: (input: _raikou_core.ExtendsRootComponent<{
        props: MenuProps;
        ref: HTMLDivElement;
        stylesNames: MenuStylesNames;
    }>) => _raikou_core.ExtendsRootComponent<{
        props: MenuProps;
        ref: HTMLDivElement;
        stylesNames: MenuStylesNames;
    }>;
    var displayName: string;
    var Item: (<C = "button">(props: C extends React$1.ElementType<any> ? MenuItemProps & {
        component?: C | undefined;
    } & Omit<JSX.LibraryManagedAttributes<C, React$1.PropsWithoutRef<React$1.ComponentProps<C>>>, "component" | keyof MenuItemProps> & {
        ref?: (C extends infer T ? T extends C ? T extends React$1.ElementType<any> ? React$1.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
        renderRoot?(props: any): any;
    } : MenuItemProps & {
        component: React$1.ElementType<any>;
        renderRoot?(props: any): any;
    }) => React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>) & Omit<React$1.FunctionComponent<(MenuItemProps & {
        component?: any;
    } & Omit<Omit<any, "ref">, "component" | keyof MenuItemProps> & {
        ref?: any;
        renderRoot?(props: any): any;
    }) | (MenuItemProps & {
        component: React$1.ElementType<any>;
        renderRoot?(props: any): any;
    })>, never> & _raikou_core.ThemeExtend<{
        props: MenuItemProps; /** Uncontrolled menu initial opened state */
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: MenuItemStylesNames;
        compound: true;
    }> & {
        classes: Record<string, string>;
    } & Record<string, never>;
    var Label: _raikou_core.RaikouComponent<{
        props: MenuLabelProps;
        ref: HTMLDivElement;
        stylesNames: "label";
        compound: true;
    }>;
    var Dropdown: _raikou_core.RaikouComponent<{
        props: MenuDropdownProps;
        ref: HTMLDivElement;
        stylesNames: "dropdown";
        compound: true;
    }>;
    var Target: React$1.ForwardRefExoticComponent<MenuTargetProps & React$1.RefAttributes<HTMLElement>>;
    var Divider: _raikou_core.RaikouComponent<{
        props: MenuDividerProps;
        ref: HTMLDivElement;
        stylesNames: "divider";
        compound: true;
    }>;
}

export { Menu, MenuDivider, MenuDividerProps, MenuDropdown, MenuDropdownProps, MenuFactory, MenuItem, MenuItemProps, MenuLabel, MenuLabelProps, MenuProps, MenuStylesNames, MenuTarget, MenuTargetProps };
