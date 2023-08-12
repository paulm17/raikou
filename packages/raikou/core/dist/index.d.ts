import * as React$1 from 'react';
import React__default, { CSSProperties } from 'react';
import { PartialDeep } from 'type-fest';

declare function keys<T extends object, K extends keyof T>(object: T): K[];

declare function deepMerge<T extends object>(target: T, source: any): T;

declare function camelToKebabCase(value: string): string;

declare function px(value: unknown): string | number;

declare const rem: (value: unknown) => string;
declare const em: (value: unknown) => string;

type FilterPropsRes<T extends Record<string, any>> = {
    [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};
declare function filterProps<T extends Record<string, any>>(props: T): FilterPropsRes<T>;

declare function isNumberLike(value: unknown): boolean;

declare function isElement(value: any): value is React__default.ReactElement;

declare function getSafeId(uid: string, errorMessage: string): (value: string) => string;

interface GetElementsSiblingsInput {
    /** Selector used to find parent node, e.g. '[role="tablist"]', '.raikou-Text-root' */
    parentSelector: string;
    /** Selector used to find element siblings, e.g. '[data-tab]' */
    siblingSelector: string;
    /** Determines whether next/previous indices should loop */
    loop?: boolean;
    /** Determines which arrow keys will be used */
    orientation: "vertical" | "horizontal";
    /** Text direction */
    dir?: "rtl" | "ltr";
    /** Determines whether element should be clicked when focused with keyboard event */
    activateOnFocus?: boolean;
    /** External keydown event */
    onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
}
declare function createScopedKeydownHandler({ parentSelector, siblingSelector, onKeyDown, loop, activateOnFocus, dir, orientation, }: GetElementsSiblingsInput): (event: React.KeyboardEvent<HTMLButtonElement>) => void;

declare function findElementAncestor(element: HTMLElement, selector: string): HTMLElement | null;

declare const elevations: {
    readonly app: 100;
    readonly modal: 200;
    readonly popover: 300;
    readonly overlay: 400;
    readonly max: 9999;
};
declare function getDefaultZIndex(level: keyof typeof elevations): 100 | 200 | 300 | 400 | 9999;

interface Options {
    active: boolean | undefined;
    onTrigger?(): void;
    onKeyDown?(event: React__default.KeyboardEvent<any>): void;
}
declare function closeOnEscape(callback?: (event: any) => void, options?: Options): (event: React__default.KeyboardEvent<any>) => void;

declare const noop: () => void;

declare function getSize(size: unknown, prefix?: string, convertToRem?: boolean): string;
declare function getSpacing(size: unknown): string;
declare function getRadius(size: unknown): string;
declare function getFontSize(size: unknown): string;
declare function getLineHeight(size: unknown): string;
declare function getShadow(size: unknown): string;

type EventHandler<Event> = ((event?: Event) => void) | undefined;
declare function createEventHandler<Event>(parentEventHandler: EventHandler<Event>, eventHandler: EventHandler<Event>): (event?: Event) => void;

declare function getPrimaryShade(theme: RaikouTheme, colorScheme: RaikouColorScheme): RaikouColorShade;

type RaikouStyle = React.CSSProperties | ((theme: RaikouTheme) => React.CSSProperties);
type RaikouStyleProp = RaikouStyle | RaikouStyle[] | RaikouStyleProp[] | undefined;
type CssVariable = `--${string}`;
type CssVariables<Variable extends string = CssVariable> = Partial<Record<Variable, string>>;
type CssVars<Variable extends string = CssVariable> = CssVariables<Variable> | ((theme: RaikouTheme) => CssVariables<Variable>) | CssVars<Variable>[];
type CssVarsProp<Variable extends string = CssVariable> = CssVars<Variable> | CssVars<Variable>[];

type StyleProp<Value> = Value | Partial<Record<RaikouBreakpoint | (string & {}), Value>>;
type StylePropSpacingValue = RaikouSpacing | number | (string & {});
interface RaikouStyleProps {
    m?: StyleProp<StylePropSpacingValue>;
    my?: StyleProp<StylePropSpacingValue>;
    mx?: StyleProp<StylePropSpacingValue>;
    mt?: StyleProp<StylePropSpacingValue>;
    mb?: StyleProp<StylePropSpacingValue>;
    ml?: StyleProp<StylePropSpacingValue>;
    mr?: StyleProp<StylePropSpacingValue>;
    p?: StyleProp<StylePropSpacingValue>;
    py?: StyleProp<StylePropSpacingValue>;
    px?: StyleProp<StylePropSpacingValue>;
    pt?: StyleProp<StylePropSpacingValue>;
    pb?: StyleProp<StylePropSpacingValue>;
    pl?: StyleProp<StylePropSpacingValue>;
    pr?: StyleProp<StylePropSpacingValue>;
    bg?: StyleProp<RaikouColor>;
    c?: StyleProp<RaikouColor>;
    opacity?: StyleProp<React.CSSProperties["opacity"]>;
    ff?: StyleProp<React.CSSProperties["fontFamily"]>;
    fz?: StyleProp<RaikouFontSize | number | (string & {})>;
    fw?: StyleProp<React.CSSProperties["fontWeight"]>;
    lts?: StyleProp<React.CSSProperties["letterSpacing"]>;
    ta?: StyleProp<React.CSSProperties["textAlign"]>;
    lh?: StyleProp<RaikouLineHeight | number | (string & {})>;
    fs?: StyleProp<React.CSSProperties["fontStyle"]>;
    tt?: StyleProp<React.CSSProperties["textTransform"]>;
    td?: StyleProp<React.CSSProperties["textDecoration"]>;
    w?: StyleProp<React.CSSProperties["width"]>;
    miw?: StyleProp<React.CSSProperties["minWidth"]>;
    maw?: StyleProp<React.CSSProperties["maxWidth"]>;
    h?: StyleProp<React.CSSProperties["height"]>;
    mih?: StyleProp<React.CSSProperties["minHeight"]>;
    mah?: StyleProp<React.CSSProperties["maxHeight"]>;
    bgsz?: StyleProp<React.CSSProperties["backgroundSize"]>;
    bgp?: StyleProp<React.CSSProperties["backgroundPosition"]>;
    bgr?: StyleProp<React.CSSProperties["backgroundRepeat"]>;
    bga?: StyleProp<React.CSSProperties["backgroundAttachment"]>;
    pos?: StyleProp<React.CSSProperties["position"]>;
    top?: StyleProp<React.CSSProperties["top"]>;
    left?: StyleProp<React.CSSProperties["left"]>;
    bottom?: StyleProp<React.CSSProperties["bottom"]>;
    right?: StyleProp<React.CSSProperties["right"]>;
    inset?: StyleProp<React.CSSProperties["inset"]>;
    display?: StyleProp<React.CSSProperties["display"]>;
}

declare function extractStyleProps<T extends Record<string, any>>(others: RaikouStyleProps & T): {
    styleProps: RaikouStyleProps;
    rest: T;
};

declare function colorResolver(color: unknown, theme: RaikouTheme): string;

declare function fontSizeResolver(value: unknown, theme: RaikouTheme): unknown;

declare function spacingResolver(value: unknown, theme: RaikouTheme): unknown;

declare function identityResolver(value: unknown): unknown;

declare function sizeResolver(value: unknown): unknown;

declare function lineHeightResolver(value: unknown, theme: RaikouTheme): unknown;

declare const resolvers: {
    color: typeof colorResolver;
    fontSize: typeof fontSizeResolver;
    spacing: typeof spacingResolver;
    identity: typeof identityResolver;
    size: typeof sizeResolver;
    lineHeight: typeof lineHeightResolver;
};
type StylePropType = keyof typeof resolvers;

interface SystemPropData {
    type: StylePropType;
    property: string | string[];
}
declare const STYlE_PROPS_DATA: Record<keyof RaikouStyleProps, SystemPropData>;

interface InlineStylesMediaQuery {
    query: string;
    styles: React.CSSProperties;
}
interface InlineStylesInput {
    selector: string;
    styles?: React.CSSProperties;
    media?: InlineStylesMediaQuery[];
}
declare function stylesToString({ selector, styles, media }: InlineStylesInput): string;

interface InlineStylesProps extends InlineStylesInput, Omit<React__default.ComponentPropsWithoutRef<"style">, keyof InlineStylesInput> {
}
declare function InlineStyles({ selector, styles, media }: InlineStylesInput): JSX.Element;

interface SortMediaQueriesResult extends Omit<ParseStylePropsResult, 'media'> {
    media: InlineStylesMediaQuery[];
}

interface ParseStylePropsOptions {
    styleProps: RaikouStyleProps;
    theme: RaikouTheme;
    data: Record<string, SystemPropData>;
}
interface ParseStylePropsResult {
    hasResponsiveStyles: boolean;
    inlineStyles: React.CSSProperties;
    styles: React.CSSProperties;
    media: Record<string, React.CSSProperties>;
}
declare function parseStyleProps({ styleProps, data, theme, }: ParseStylePropsOptions): SortMediaQueriesResult;

declare function useRandomClassName(): string;

declare function getStyleObject(style: RaikouStyleProp | undefined, theme: RaikouTheme): React.CSSProperties;

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps & Omit<Props, keyof OverrideProps>;
type ElementType = keyof JSX.IntrinsicElements | React__default.JSXElementConstructor<any>;
type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<C, React__default.ComponentPropsWithoutRef<C>>;
type ComponentProp<C> = {
    component?: C;
};
type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<PropsOf<C>, Props>;
type PolymorphicRef<C> = C extends React__default.ElementType ? React__default.ComponentPropsWithRef<C>['ref'] : never;
type PolymorphicComponentProps<C, Props = {}> = C extends React__default.ElementType ? InheritedProps<C, Props & ComponentProp<C>> & {
    ref?: PolymorphicRef<C>;
} : Props & {
    component: React__default.ElementType;
};
declare function createPolymorphicComponent<ComponentDefaultType, Props, StaticComponents = Record<string, never>>(component: any): (<C = ComponentDefaultType>(props: PolymorphicComponentProps<C, Props>) => React__default.ReactElement) & Omit<React__default.FunctionComponent<(Props & ComponentProp<any> & Omit<Omit<any, "ref">, "component" | keyof Props> & {
    ref?: any;
}) | (Props & {
    component: React__default.ElementType<any>;
})>, never> & StaticComponents;

type Mod = Record<string, any> | string;
type BoxMod = Mod | Mod[] | BoxMod[];
interface BoxProps extends RaikouStyleProps {
    /** Class added to root element, if applicable */
    className?: string;
    /** Inline style added to root component element, can subscribe to theme defined on RaikouProvider */
    style?: RaikouStyleProp;
    /** CSS variables defined on root component element */
    __vars?: CssVarsProp;
    /** Breakpoint above which the component is hidden with `display: none` */
    hiddenFrom?: RaikouBreakpoint;
    /** Breakpoint below which the component is hidden with `display: none` */
    visibleFrom?: RaikouBreakpoint;
}
type ElementProps<ElementType extends React__default.ElementType, PropsToOmit extends string = never> = Omit<React__default.ComponentPropsWithoutRef<ElementType>, "style" | PropsToOmit>;
interface BoxComponentProps extends BoxProps {
    /** Variant passed from parent component, sets `data-variant` */
    variant?: string;
    /** Size passed from parent component, sets `data-size` if value is not number like */
    size?: string | number;
    /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
    mod?: BoxMod;
}
declare const Box: (<C = "div">(props: PolymorphicComponentProps<C, BoxComponentProps>) => React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>>) & Omit<React__default.FunctionComponent<(BoxComponentProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BoxComponentProps> & {
    ref?: any;
}) | (BoxComponentProps & {
    component: React__default.ElementType<any>;
})>, never> & Record<string, never>;

interface ParseThemeColorOptions {
    color: unknown;
    theme: RaikouTheme;
    colorScheme?: RaikouColorScheme;
}
interface ParseThemeColorResult {
    color: string;
    value: string;
    shade: RaikouColorShade | undefined;
    variable: CssVariable | undefined;
    isThemeColor: boolean;
}
declare function parseThemeColor({ color, theme, colorScheme, }: ParseThemeColorOptions): ParseThemeColorResult;

declare function getThemeColor(color: string | undefined | null, theme: RaikouTheme): string;

interface VariantColorsResolverInput {
    color: RaikouColor | undefined;
    theme: RaikouTheme;
    variant: string;
    gradient?: RaikouGradient;
}
interface VariantColorResolverResult {
    background: string;
    hover: string;
    color: string;
    border: string;
}
type VariantColorsResolver = (input: VariantColorsResolverInput) => VariantColorResolverResult;
declare const defaultVariantColorsResolver: VariantColorsResolver;

declare function getGradient(gradient: RaikouGradient | undefined, theme: RaikouTheme): string;

interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
declare function toRgba(color: string): RGBA;

declare function rgba(color: string, alpha: number): string;

declare function darken(color: string, alpha: number): string;

declare function lighten(color: string, alpha: number): string;

declare function isLightColor(color: string, luminanceThreshold?: number): boolean;

interface RaikouTheme {
    /** Controls focus ring styles. Supports the following options:
     *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
     *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
     *  - `never` – focus ring is always hidden (not recommended)
     */
    focusRing: "auto" | "always" | "never";
    /** rem units scale, change if you customize font-size of `<html />` element
     *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
     */
    scale: number;
    /** Determines whether `font-smoothing` property should be set on the body, `true` by default */
    fontSmoothing: boolean;
    /** White color */
    white: string;
    /** Black color */
    black: string;
    /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */
    colors: RaikouThemeColors;
    /** Index of theme.colors[color].
     *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
     *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
     *  Default value `{ light: 6, dark: 8 }`
     *
     *  For example,
     *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
     *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
     * */
    primaryShade: RaikouColorShade | RaikouPrimaryShade;
    /** Key of `theme.colors`, hex/rgb/hsl values are not supported.
     *  Determines which color will be used in all components by default.
     *  Default value – `blue`.
     * */
    primaryColor: string;
    /** Function to resolve colors based on variant.
     *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
     *  and other components that use colors from theme.
     * */
    variantColorResolver: VariantColorsResolver;
    /** font-family used in all components, system fonts by default */
    fontFamily: string;
    /** Monospace font-family, used in code and other similar components, system fonts by default  */
    fontFamilyMonospace: string;
    /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
    headings: {
        fontFamily: string;
        fontWeight: string;
        sizes: {
            h1: HeadingStyle;
            h2: HeadingStyle;
            h3: HeadingStyle;
            h4: HeadingStyle;
            h5: HeadingStyle;
            h6: HeadingStyle;
        };
    };
    /** Object of values that are used to set `border-radius` in all components that support it */
    radius: RaikouRadiusValues;
    /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
    defaultRadius: RaikouRadius | number | (string & {});
    /** Object of values that are used to set various CSS properties that control spacing between elements */
    spacing: RaikouSpacingValues;
    /** Object of values that are used to control `font-size` property in all components */
    fontSizes: RaikouFontSizesValues;
    /** Object of values that are used to control `line-height` property in `Text` component */
    lineHeights: RaikouLineHeightValues;
    /** Object of values that are used to control breakpoints in all components,
     *  values are expected to be defined in em
     * */
    breakpoints: RaikouBreakpointsValues;
    /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
    shadows: RaikouShadowsValues;
    /** Determines whether user OS settings to reduce motion should be respected, `false` by default */
    respectReducedMotion: boolean;
    /** Determines which cursor type will be used for interactive elements
     * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
     * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
     */
    cursorType: "default" | "pointer";
    /** Default gradient configuration for components that support `variant="gradient"` */
    defaultGradient: RaikouGradient;
    /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
    activeClassName: string;
    /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
     *  Overrides `theme.focusRing` property.
     */
    focusClassName: string;
    /** Allows adding `classNames`, `styles` and `defaultProps` to any component */
    components: RaikouThemeComponents;
    /** Any other properties that you want to access with the theme objects */
    other: RaikouThemeOther;
}
type RaikouColorScheme = "light" | "dark" | "auto";
type RaikouThemeOverride = PartialDeep<RaikouTheme>;
type RaikouStylesRecord = Record<string, React.CSSProperties>;
interface RaikouThemeComponent {
    classNames?: any;
    styles?: any;
    vars?: any;
    defaultProps?: any;
}
type RaikouThemeComponents = Record<string, RaikouThemeComponent>;
interface HeadingStyle {
    fontSize: string;
    fontWeight?: string;
    lineHeight: string;
}
type RaikouSize = "xs" | "sm" | "md" | "lg" | "xl";
type RaikouBreakpointsValues = Record<RaikouSize, string>;
type RaikouFontSizesValues = Record<RaikouSize, string>;
type RaikouRadiusValues = Record<RaikouSize, string>;
type RaikouSpacingValues = Record<RaikouSize, string>;
type RaikouShadowsValues = Record<RaikouSize, string>;
type RaikouLineHeightValues = Record<RaikouSize, string>;
type RaikouBreakpoint = keyof RaikouBreakpointsValues;
type RaikouFontSize = keyof RaikouFontSizesValues;
type RaikouRadius = keyof RaikouRadiusValues;
type RaikouSpacing = keyof RaikouSpacingValues;
type RaikouShadow = keyof RaikouShadowsValues;
type RaikouLineHeight = keyof RaikouLineHeightValues;
type RaikouThemeOther = Record<string, any>;
interface RaikouGradient {
    from: string;
    to: string;
    deg?: number;
}
type RaikouColorsTuple = readonly [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    ...string[]
];
type RaikouColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
interface RaikouPrimaryShade {
    light: RaikouColorShade;
    dark: RaikouColorShade;
}
type DefaultRaikouColor = "dark" | "gray" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "green" | "lime" | "yellow" | "orange" | "teal" | (string & {});
type RaikouThemeColorsOverride = {};
type RaikouThemeColors = RaikouThemeColorsOverride extends {
    colors: Record<infer CustomColors, RaikouColorsTuple>;
} ? Record<CustomColors, RaikouColorsTuple> : Record<DefaultRaikouColor, RaikouColorsTuple>;
type RaikouColor = keyof RaikouThemeColors;

declare const DEFAULT_THEME: RaikouTheme;

declare function useRaikouTheme(): RaikouTheme;

declare function validateRaikouTheme(theme: RaikouTheme): asserts theme is RaikouTheme;
declare function mergeRaikouTheme(currentTheme: RaikouTheme, themeOverride?: RaikouThemeOverride): RaikouTheme;

declare function useProps<T extends Record<string, any>, U extends Partial<T> = {}>(component: string, defaultProps: U, props: T): T & {
    [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
};

declare function getBreakpointValue(breakpoint: number | string, theme: RaikouTheme): number;

declare function getSortedBreakpoints(breakpoints: string[], theme: RaikouTheme): {
    value: string;
    px: number;
}[];

declare function getBaseValue<Value = any>(value: StyleProp<Value>): Value | undefined;

type DataAttributes = Record<`data-${string}`, any>;
interface FactoryPayload {
    props: Record<string, any>;
    ctx?: any;
    ref?: any;
    stylesNames?: string;
    vars?: any;
    variant?: string;
    staticComponents?: Record<string, any>;
    compound?: boolean;
}
interface ExtendCompoundComponent<Payload extends FactoryPayload> {
    defaultProps?: Partial<Payload["props"]> & DataAttributes;
}
interface ExtendsRootComponent<Payload extends FactoryPayload> {
    defaultProps?: Partial<Payload["props"]> & DataAttributes;
    classNames?: ClassNames<Payload>;
    styles?: Styles<Payload>;
    vars?: PartialVarsResolver<Payload>;
}
type ExtendComponent<Payload extends FactoryPayload> = Payload["compound"] extends true ? ExtendCompoundComponent<Payload> : ExtendsRootComponent<Payload>;
type StaticComponents<Input> = Input extends Record<string, any> ? Input : Record<string, never>;
interface ThemeExtend<Payload extends FactoryPayload> {
    extend: (input: ExtendComponent<Payload>) => RaikouThemeComponent;
}
type ComponentClasses<Payload extends FactoryPayload> = {
    classes: Payload["stylesNames"] extends string ? Record<string, string> : never;
};
type RaikouComponent<Payload extends FactoryPayload> = React.ForwardRefExoticComponent<Payload["props"] & React.RefAttributes<Payload["ref"]>> & ThemeExtend<Payload> & ComponentClasses<Payload> & StaticComponents<Payload["staticComponents"]>;
declare function factory<Payload extends FactoryPayload>(ui: React.ForwardRefRenderFunction<Payload["ref"], Payload["props"]>): RaikouComponent<Payload>;

interface PolymorphicFactoryPayload extends FactoryPayload {
    defaultComponent: any;
    defaultRef: any;
}
declare function polymorphicFactory<Payload extends PolymorphicFactoryPayload>(ui: React.ForwardRefRenderFunction<Payload['defaultRef'], Payload['props']>): (<C = Payload["defaultComponent"]>(props: PolymorphicComponentProps<C, Payload["props"]>) => React.ReactElement) & Omit<React$1.FunctionComponent<(Payload["props"] & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof Payload["props"]> & {
    ref?: any;
}) | (Payload["props"] & {
    component: React$1.ElementType<any>;
})>, never> & ThemeExtend<Payload> & ComponentClasses<Payload> & StaticComponents<Payload["staticComponents"]>;

type Factory<Payload extends FactoryPayload> = Payload;
type PolymorphicFactory<Payload extends PolymorphicFactoryPayload> = Payload;

type TransformVars<V> = {
    [Key in keyof V]: V[Key] extends CssVariable ? Record<V[Key], string | undefined> : never;
};
type PartialTransformVars<V> = {
    [Key in keyof V]: V[Key] extends CssVariable ? Partial<Record<V[Key], string | undefined>> : never;
};
type VarsResolver<Payload extends FactoryPayload> = (theme: RaikouTheme, props: Payload["props"], ctx: Payload["ctx"]) => TransformVars<Payload["vars"]>;
type PartialVarsResolver<Payload extends FactoryPayload> = (theme: RaikouTheme, props: Payload["props"], ctx: Payload["ctx"]) => PartialTransformVars<Payload["vars"]>;
declare function createVarsResolver<Payload extends FactoryPayload>(resolver: VarsResolver<Payload>): VarsResolver<Payload>;

interface GetStylesApiOptions {
    className?: string;
    style?: RaikouStyleProp;
    focusable?: boolean;
    active?: boolean;
    classNames?: ClassNames<{
        props: any;
        stylesNames: string;
    }>;
    styles?: Styles<{
        props: any;
        stylesNames: string;
    }>;
    variant?: string;
    props?: Record<string, any>;
}
type StylesApiRecord<Payload extends FactoryPayload, DataType> = Payload["stylesNames"] extends string ? StylesRecord<Payload["stylesNames"], DataType> | ((theme: RaikouTheme, props: Payload["props"], ctx: Payload["ctx"]) => StylesRecord<Payload["stylesNames"], DataType>) : never;
type Styles<Payload extends FactoryPayload> = StylesApiRecord<Payload, CSSProperties>;
type ClassNames<Payload extends FactoryPayload> = StylesApiRecord<Payload, string>;
type ClassNamesArray<Payload extends FactoryPayload> = (StylesApiRecord<Payload, string> | undefined)[];
type StylesRecord<StylesNames extends string, Payload> = Partial<Record<StylesNames, Payload>>;
interface StylesApiProps<Payload extends FactoryPayload> {
    unstyled?: boolean;
    variant?: Payload["variant"] extends string ? Payload["variant"] | (string & {}) : string;
    classNames?: ClassNames<Payload>;
    styles?: Styles<Payload>;
    vars?: PartialVarsResolver<Payload>;
}

type __ClassNames = undefined | Partial<Record<string, string>> | ((theme: RaikouTheme, props: Record<string, any>, ctx: Record<string, any> | undefined) => Partial<Record<string, string>>);
type _ClassNames = __ClassNames | __ClassNames[];

interface ResolveClassNamesInput {
    theme: RaikouTheme;
    classNames: _ClassNames;
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
}
declare function resolveClassNames({ theme, classNames, props, stylesCtx, }: ResolveClassNamesInput): Partial<Record<string, string>>;

type _Styles = undefined | Partial<Record<string, CSSProperties>> | ((theme: RaikouTheme, props: Record<string, any>, ctx: Record<string, any> | undefined) => Partial<Record<string, CSSProperties>>);

interface ResolveStylesInput {
    theme: RaikouTheme;
    styles: _Styles | _Styles[];
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
}
declare function resolveStyles({ theme, styles, props, stylesCtx, }: ResolveStylesInput): Record<string, any>;

interface UseResolvedStylesApiInput<Payload extends FactoryPayload> {
    classNames: ClassNames<Payload> | undefined;
    styles: Styles<Payload> | undefined;
    props: Record<string, any>;
    stylesCtx?: Record<string, any>;
}
declare function useResolvedStylesApi<Payload extends FactoryPayload>({ classNames, styles, props, stylesCtx, }: UseResolvedStylesApiInput<Payload>): {
    resolvedClassNames: Partial<Record<string, string>>;
    resolvedStyles: Record<string, any>;
};

declare const FOCUS_CLASS_NAMES: {
    readonly always: "raikou-focus-always";
    readonly auto: "raikou-focus-auto";
    readonly never: "raikou-focus-never";
};

interface UseStylesInput<Payload extends FactoryPayload> {
    name: string | (string | undefined)[];
    classes: Payload["stylesNames"] extends string ? Record<string, string> : never;
    props: Payload["props"];
    stylesCtx?: Payload["ctx"];
    className?: string;
    style?: RaikouStyleProp;
    rootSelector?: Payload["stylesNames"];
    unstyled?: boolean;
    classNames?: ClassNames<Payload> | ClassNamesArray<Payload>;
    styles?: Styles<Payload>;
    vars?: PartialVarsResolver<Payload>;
    varsResolver?: VarsResolver<Payload>;
}
type GetStylesApi<Payload extends FactoryPayload> = (selector: NonNullable<Payload["stylesNames"]>, options?: GetStylesApiOptions) => {
    className: string;
    style: CSSProperties;
};
declare function useStyles<Payload extends FactoryPayload>({ name, classes, props, stylesCtx, className, style, rootSelector, unstyled, classNames, styles, vars, varsResolver, }: UseStylesInput<Payload>): GetStylesApi<Payload>;

type Direction = "ltr" | "rtl";
declare function useDirection(): {
    dir: Direction;
    toggleDirection: () => void;
    setDirection: () => void;
};

export { Box, BoxComponentProps, BoxMod, BoxProps, ClassNames, ClassNamesArray, CssVariable, CssVariables, CssVars, CssVarsProp, DEFAULT_THEME, DefaultRaikouColor, Direction, ElementProps, ExtendComponent, ExtendsRootComponent, FOCUS_CLASS_NAMES, Factory, FactoryPayload, GetStylesApi, GetStylesApiOptions, HeadingStyle, InlineStyles, InlineStylesInput, InlineStylesMediaQuery, InlineStylesProps, PartialTransformVars, PartialVarsResolver, PolymorphicFactory, RGBA, RaikouBreakpoint, RaikouBreakpointsValues, RaikouColor, RaikouColorScheme, RaikouColorShade, RaikouColorsTuple, RaikouComponent, RaikouFontSize, RaikouFontSizesValues, RaikouGradient, RaikouLineHeight, RaikouLineHeightValues, RaikouPrimaryShade, RaikouRadius, RaikouRadiusValues, RaikouShadow, RaikouShadowsValues, RaikouSize, RaikouSpacing, RaikouSpacingValues, RaikouStyleProp, RaikouStyleProps, RaikouStylesRecord, RaikouTheme, RaikouThemeColors, RaikouThemeColorsOverride, RaikouThemeComponent, RaikouThemeComponents, RaikouThemeOther, RaikouThemeOverride, STYlE_PROPS_DATA, StyleProp, StylePropSpacingValue, Styles, StylesApiProps, StylesApiRecord, StylesRecord, ThemeExtend, TransformVars, UseStylesInput, VariantColorResolverResult, VariantColorsResolver, VariantColorsResolverInput, VarsResolver, camelToKebabCase, closeOnEscape, createEventHandler, createPolymorphicComponent, createScopedKeydownHandler, createVarsResolver, darken, deepMerge, defaultVariantColorsResolver, em, extractStyleProps, factory, filterProps, findElementAncestor, getBaseValue, getBreakpointValue, getDefaultZIndex, getFontSize, getGradient, getLineHeight, getPrimaryShade, getRadius, getSafeId, getShadow, getSize, getSortedBreakpoints, getSpacing, getStyleObject, getThemeColor, isElement, isLightColor, isNumberLike, keys, lighten, mergeRaikouTheme, noop, parseStyleProps, parseThemeColor, polymorphicFactory, px, rem, resolveClassNames, resolveStyles, rgba, stylesToString, toRgba, useDirection, useProps, useRaikouTheme, useRandomClassName, useResolvedStylesApi, useStyles, validateRaikouTheme };
