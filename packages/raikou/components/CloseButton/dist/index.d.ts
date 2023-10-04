import React from 'react';
import * as _raikou_core from '@raikou/core';
import { RaikouSize, RaikouRadius, BoxProps, StylesApiProps, PolymorphicFactory } from '@raikou/core';

interface CloseIconProps extends React.ComponentPropsWithoutRef<"svg"> {
    /** Icon width and height, `var(--icon-size)` by default */
    size?: string;
}
declare const CloseIcon: React.ForwardRefExoticComponent<CloseIconProps & React.RefAttributes<SVGSVGElement>>;

type CloseButtonVariant = "subtle" | "transparent";
type CloseButtonStylesNames = "root";
type CloseButtonCssVariables = {
    root: "--cb-icon-size" | "--cb-size" | "--cb-radius";
};
interface __CloseButtonProps {
    "data-disabled"?: boolean;
    /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
    size?: RaikouSize | (string & {}) | number;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: RaikouRadius;
    /** Sets `disabled` and `data-disabled` attributes on the button element */
    disabled?: boolean;
    /** `X` icon `width` and `height`, `80%` by default */
    iconSize?: number | string;
    /** Content rendered inside the button, for example `VisuallyHidden` with label for screen readers */
    children?: React.ReactNode;
}
interface CloseButtonProps extends __CloseButtonProps, BoxProps, StylesApiProps<CloseButtonFactory> {
}
type CloseButtonFactory = PolymorphicFactory<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
    vars: CloseButtonCssVariables;
}>;
declare const CloseButton: (<C = "button">(props: C extends React.ElementType<any> ? CloseButtonProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof CloseButtonProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : CloseButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CloseButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CloseButtonProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (CloseButtonProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
    vars: CloseButtonCssVariables;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { CloseButton, CloseButtonCssVariables, CloseButtonFactory, CloseButtonProps, CloseButtonStylesNames, CloseButtonVariant, CloseIcon, CloseIconProps, __CloseButtonProps };
