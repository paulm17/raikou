import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, RaikouRadius, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type OverlayStylesNames = "root";
type OverlayCssVariables = {
    root: "--overlay-bg" | "--overlay-filter" | "--overlay-radius" | "--overlay-z-index";
};
interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
    /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
    backgroundOpacity?: number;
    /** Overlay `background-color`, `#000` by default */
    color?: React.CSSProperties["backgroundColor"];
    /** Overlay background blur, `0` by default */
    blur?: number | string;
    /** Changes overlay to gradient. If set, `color` prop is ignored */
    gradient?: string;
    /** Overlay z-index, `200` by default */
    zIndex?: React.CSSProperties["zIndex"];
    /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Content inside overlay */
    children?: React.ReactNode;
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
declare const Overlay: (<C = "div">(props: C extends React.ElementType<any> ? OverlayProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof OverlayProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : OverlayProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(OverlayProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof OverlayProps | "component"> & {
    ref?: any;
}) | (OverlayProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
}> & {
    classes: Record<"root", string>;
} & Record<string, never>;

export { Overlay, OverlayCssVariables, OverlayFactory, OverlayProps, OverlayStylesNames };
