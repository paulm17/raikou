import React$1 from 'react';
import { RaikouStyleProp, StylesRecord, RaikouShadow, RaikouRadius, RaikouColor } from '@raikou/core';

/**
 * Utility type that makes a property required
 */
type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
    [Property in Key]-?: Type[Property];
};
/**
 * Utility type that makes a property optional
 */
type WithOptionalProperty<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/**
 * Context menu options
 */
type ContextMenuOptions = {
    /**
     * The z-index of context menu.
     * @default 9999
     */
    zIndex?: number;
    /**
     * Context menu container class name.
     */
    className?: string;
    /**
     * Context menu container style.
     */
    style?: RaikouStyleProp;
    /**
     * Context menu elements class names.
     */
    classNames?: Partial<Record<"root" | "item" | "divider", string>>;
    /**
     * Context menu styles.
     * Can be an object with `root`, `item` and `divider` keys and style objects as values,
     * or a function that accepts the current theme and returns a similarly structured object.
     */
    styles?: StylesRecord<"root" | "item" | "divider", RaikouStyleProp>;
};
/**
 * Generic context menu settings
 */
type ContextMenuSettings = {
    /**
     * Context menu shadow.
     * @default 'sm'
     */
    shadow?: RaikouShadow;
    /**
     * Context menu border radius.
     * @default 'xs'
     */
    borderRadius?: RaikouRadius;
    /**
     * Delay in ms to use when showing and hiding submenus.
     * @default 500
     */
    submenuDelay?: number;
};
/**
 * Context menu provider props
 */
type ContextMenuProviderProps = ContextMenuSettings & ContextMenuOptions & {
    children: React.ReactNode;
};
/**
 * Context menu item options
 */
type ContextMenuItemOptions = {
    /**
     * Unique key of the context menu item or divider.
     */
    key: string;
    /**
     * Context menu item or divider className.
     */
    className?: string;
    /**
     * Context menu item or divider style.
     */
    style?: RaikouStyleProp;
    /**
     * Boolean indicating whether the context menu item is hidden.
     */
    hidden?: boolean;
} & (({
    /**
     * Optional context menu item icon.
     */
    icon?: React.ReactNode;
    /**
     * Optional context menu item title.
     * If not provided, one will be generated automatically by "humanizing" the key.
     * @default humanize(key)
     */
    title?: React.ReactNode;
    /**
     * Optional context menu item color.
     */
    color?: RaikouColor;
    /**
     * Boolean indicating whether the context menu item is disabled.
     */
    disabled?: boolean;
} & ({
    /**
     * Optional context menu item `onClick` handler.
     * If not provided, a divider will be rendered instead.
     */
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    items?: never;
} | {
    onClick?: never;
    /**
     * Optional items.
     * If provided, a submenu will be rendered.
     */
    items: ContextMenuItemOptions[];
})) | {
    icon?: never;
    title?: never;
    color?: never;
    disabled?: never;
    onClick?: never;
    items?: never;
});
/**
 * Context menu content.
 * Either an array of context menu items, or a function that accepts a close callback and returns context menu content.
 */
type ContextMenuContent = ContextMenuItemOptions[] | ((close: () => void) => JSX.Element);
/**
 * Show context menu function
 */
type ShowContextMenuFunction = (
/**
 * Context menu content.
 * Either an array of context menu items or a function that accepts a close callback and returns context menu content.
 */
content: ContextMenuContent, 
/**
 * Context menu options (overrides provider props).
 */
options?: ContextMenuOptions) => React.MouseEventHandler;
/**
 * Hide context menu function
 */
type HideContextMenuFunction = () => void;

type ContextMenuDividerProps = Pick<ContextMenuItemOptions, "className" | "style">;
declare function ContextMenuDivider({ className, style, }: ContextMenuDividerProps): React$1.JSX.Element;

declare function ContextMenuItem({ className, style, icon, title, color, disabled, onClick, onHide, items, }: WithRequiredProperty<Omit<ContextMenuItemOptions, "key">, "title"> & {
    onHide: () => void;
}): React$1.JSX.Element;

type ContextMenuInstanceOptions = {
    x: number;
    y: number;
    content: ContextMenuContent;
};
type ContextMenuProps = ContextMenuOptions & ContextMenuInstanceOptions & {
    onHide: () => void;
};

type ContextMenuPortalProps = ContextMenuProps & {
    zIndex?: number;
};
declare function ContextMenuPortal({ onHide, zIndex, ...otherProps }: ContextMenuPortalProps): React$1.JSX.Element;

declare const ContextMenuSettingsCtx: React$1.Context<WithRequiredProperty<ContextMenuSettings, "shadow" | "borderRadius" | "submenuDelay">>;
declare const ContextMenuCtx: React$1.Context<{
    /**
     * Function that shows the context menu.
     */
    showContextMenu: ShowContextMenuFunction;
    /**
     * Function that hides the context menu.
     */
    hideContextMenu: HideContextMenuFunction;
    /**
     * Boolean indicating whether the context menu is currently visible.
     */
    isContextMenuVisible: boolean;
}>;
/**
 * Provider that allows to show a context menu anywhere in your application.
 * If you wrap your application with this provider, you can use the `useContextMenu` hook
 * anywhere in the component tree to access a function that shows the context menu.
 */
declare function ContextMenuProvider({ zIndex, shadow, borderRadius, submenuDelay, children, }: ContextMenuProviderProps): React$1.JSX.Element;
/**
 * Hook returning functions that show and hide the context menu.
 */
declare function useContextMenu(): {
    /**
     * Function that shows the context menu.
     */
    showContextMenu: ShowContextMenuFunction;
    /**
     * Function that hides the context menu.
     */
    hideContextMenu: HideContextMenuFunction;
    /**
     * Boolean indicating whether the context menu is currently visible.
     */
    isContextMenuVisible: boolean;
};

/**
 * Utility function that returns a humanized version of a string, e.g. "camelCase" -> "Camel Case"
 */
declare function humanize(value: string): string;

export { type ContextMenuContent, ContextMenuCtx, ContextMenuDivider, type ContextMenuDividerProps, ContextMenuItem, type ContextMenuItemOptions, type ContextMenuOptions, ContextMenuPortal, type ContextMenuPortalProps, ContextMenuProvider, type ContextMenuProviderProps, type ContextMenuSettings, ContextMenuSettingsCtx, type HideContextMenuFunction, type ShowContextMenuFunction, type WithOptionalProperty, type WithRequiredProperty, humanize, useContextMenu };
