import * as _raikou_core from '@raikou/core';
import { SystemPropData, BoxProps, StylesApiProps, ElementProps, StyleProp, RaikouSize, PolymorphicFactory } from '@raikou/core';
import React from 'react';

declare const FLEX_STYLE_PROPS_DATA: Record<string, SystemPropData>;

type FlexStylesNames = "root";
interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<"div"> {
    /** `gap` CSS property */
    gap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `row-gap` CSS property */
    rowGap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `column-gap` CSS property */
    columnGap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `align-items` CSS property */
    align?: StyleProp<React.CSSProperties["alignItems"]>;
    /** `justify-content` CSS property */
    justify?: StyleProp<React.CSSProperties["justifyContent"]>;
    /** `flex-wrap` CSS property */
    wrap?: StyleProp<React.CSSProperties["flexWrap"]>;
    /** `flex-direction` CSS property */
    direction?: StyleProp<React.CSSProperties["flexDirection"]>;
}
type FlexFactory = PolymorphicFactory<{
    props: FlexProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: FlexStylesNames;
}>;
declare const Flex: (<C = "div">(props: C extends React.ElementType<any> ? FlexProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, keyof FlexProps | "component"> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
    renderRoot?(props: any): any;
} : FlexProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(FlexProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof FlexProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (FlexProps & {
    component: React.ElementType<any>;
    renderRoot?(props: any): any;
})>, never> & _raikou_core.ThemeExtend<{
    props: FlexProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: FlexStylesNames;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { FLEX_STYLE_PROPS_DATA, Flex, type FlexFactory, type FlexProps, type FlexStylesNames };
