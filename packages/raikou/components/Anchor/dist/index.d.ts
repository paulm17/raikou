import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, BoxMod, RaikouSize, RaikouGradient, PolymorphicFactory } from '@raikou/core';
import React from 'react';

type TextTruncate = "end" | "start" | boolean;
type TextStylesNames = "root";
type TextVariant = "text" | "gradient";
type TextCssVariables = {
    root: "--text-gradient" | "--text-line-clamp" | "--text-fz" | "--text-lh";
};
interface TextProps extends BoxProps, StylesApiProps<TextFactory> {
    __staticSelector?: string;
    mod?: BoxMod;
    /** Controls `font-size` and `line-height`, `'md'` by default */
    size?: RaikouSize | (string & {});
    /** Number of lines after which Text will be truncated */
    lineClamp?: number;
    /** Side on which Text must be truncated, if `true`, text in truncated from the start */
    truncate?: TextTruncate;
    /** Sets `line-height` to 1 for centering, `false` by default */
    inline?: boolean;
    /** Determines whether font properties should be inherited from the parent, `false` by default */
    inherit?: boolean;
    /** Gradient configuration, ignored when `variant` is not `gradient`, `theme.defaultGradient` by default */
    gradient?: RaikouGradient;
    /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
    span?: boolean;
}
type TextFactory = PolymorphicFactory<{
    props: TextProps;
    defaultComponent: "div";
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
}>;

type AnchorStylesNames = TextStylesNames;
type AnchorVariant = TextVariant;
type AnchorCssVariables = TextCssVariables;
interface AnchorProps extends Omit<TextProps, "span"> {
    /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
    underline?: "always" | "hover" | "never";
}
type AnchorFactory = PolymorphicFactory<{
    props: AnchorProps;
    defaultComponent: "a";
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
}>;
declare const Anchor: (<C = "a">(props: C extends React.ElementType<any> ? AnchorProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof AnchorProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : AnchorProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(AnchorProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AnchorProps> & {
    ref?: any;
}) | (AnchorProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: AnchorProps;
    defaultComponent: "a";
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
}> & {
    classes: Record<string, string>;
} & Record<string, never>;

export { Anchor, AnchorCssVariables, AnchorFactory, AnchorProps, AnchorStylesNames, AnchorVariant };
