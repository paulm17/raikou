import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, PolymorphicFactory, RaikouShadow, RaikouRadius, RaikouSpacing } from '@raikou/core';
import React from 'react';

type CardSectionStylesNames = "section";
interface CardSectionProps extends BoxProps, StylesApiProps<CardSectionFactory> {
    /** Determines whether the section should have a border, `false` by default */
    withBorder?: boolean;
    /** Determines whether the section should inherit padding from the parent `Card`, `false` by default */
    inheritPadding?: boolean;
}
type CardSectionFactory = PolymorphicFactory<{
    props: CardSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CardSectionStylesNames;
    compound: true;
}>;
declare const CardSection: (<C = "div">(props: C extends React.ElementType<any> ? CardSectionProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof CardSectionProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : CardSectionProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CardSectionProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CardSectionProps> & {
    ref?: any;
}) | (CardSectionProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: CardSectionProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CardSectionStylesNames;
    compound: true;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

type CardStylesNames = "root" | "section";
type CardCssVariables = {
    root: "--card-padding";
};
interface CardProps extends BoxProps, StylesApiProps<CardFactory> {
    /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
    shadow?: RaikouShadow | (string & {});
    /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
    radius?: RaikouRadius | number | (string & {});
    /** Determines whether the card should have border, border color depends on color scheme, `false` by default */
    withBorder?: boolean;
    /** Controls `padding`, key of `theme.spacing` or any valid CSS value, `'md'` by default */
    padding?: RaikouSpacing | (string & {}) | number;
    /** Card content */
    children?: React.ReactNode;
}
type CardFactory = PolymorphicFactory<{
    props: CardProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CardStylesNames;
    vars: CardCssVariables;
    staticComponents: {
        Section: typeof CardSection;
    };
}>;
declare const Card: (<C = "div">(props: C extends React.ElementType<any> ? CardProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof CardProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : CardProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CardProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CardProps> & {
    ref?: any;
}) | (CardProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: CardProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CardStylesNames;
    vars: CardCssVariables;
    staticComponents: {
        Section: typeof CardSection;
    };
}> & {
    classes: Record<string, string>;
} & {
    Section: typeof CardSection;
};

export { Card, CardCssVariables, CardFactory, CardProps, CardSection, CardSectionProps, CardStylesNames };
