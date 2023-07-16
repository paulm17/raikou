import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, BoxMod, RaikouSize, RaikouGradient, PolymorphicFactory, RaikouColor, RaikouTheme } from '@raikou/core';
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

interface HighlightProps extends TextProps {
    /** Substring or an array of substrings to highlight in `children` */
    highlight: string | string[];
    /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
    color?: RaikouColor | string;
    /** Styles applied to `mark` elements */
    highlightStyles?: React.CSSProperties | ((theme: RaikouTheme) => React.CSSProperties);
    /** String parts of which must be highlighted */
    children: string;
}
type HighlightFactory = PolymorphicFactory<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: TextStylesNames;
    variant: TextVariant;
}>;
declare const Highlight: (<C = "div">(props: C extends React.ElementType<any> ? HighlightProps & {
    component?: C | undefined;
} & Omit<JSX.LibraryManagedAttributes<C, React.PropsWithoutRef<React.ComponentProps<C>>>, "component" | keyof HighlightProps> & {
    ref?: (C extends infer T ? T extends C ? T extends React.ElementType<any> ? React.ComponentPropsWithRef<T>["ref"] : never : never : never) | undefined;
} : HighlightProps & {
    component: React.ElementType<any>;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(HighlightProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof HighlightProps> & {
    ref?: any;
}) | (HighlightProps & {
    component: React.ElementType<any>;
})>, never> & _raikou_core.ThemeExtend<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: TextStylesNames;
    variant: TextVariant;
}> & {
    classes: Record<"root", string>;
} & Record<string, never>;

export { Highlight, HighlightFactory, HighlightProps };
