import * as React$1 from "react";
import React__default, { CSSProperties } from "react";
import { ClassValue } from "clsx";
import { PartialDeep, SetRequired } from "type-fest";

declare function keys<T extends object, K extends keyof T>(object: T): K[];

declare function deepMerge<T extends object>(target: T, source: any): T;

declare function camelToKebabCase(value: string): string;

declare function px(value: unknown): string | number;

declare const rem: (value: unknown) => string;
declare const em: (value: unknown) => string;

type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};
declare function filterProps<T extends Record<string, any>>(
  props: T
): FilterPropsRes<T>;

declare function isNumberLike(value: unknown): boolean;

declare function isElement(value: any): value is React__default.ReactElement;

declare function createSafeContext<ContextValue>(
  errorMessage: string
): readonly [
  ({
    children,
    value,
  }: {
    value: ContextValue;
    children: React__default.ReactNode;
  }) => JSX.Element,
  () => ContextValue & ({} | undefined)
];

declare function createOptionalContext<ContextValue>(
  initialValue?: ContextValue | null
): readonly [
  ({
    children,
    value,
  }: {
    value: ContextValue;
    children: React__default.ReactNode;
  }) => JSX.Element,
  () => ContextValue | null
];

declare function getSafeId(
  uid: string,
  errorMessage: string
): (value: string) => string;

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
declare function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop,
  activateOnFocus,
  dir,
  orientation,
}: GetElementsSiblingsInput): (
  event: React.KeyboardEvent<HTMLButtonElement>
) => void;

declare function findElementAncestor(
  element: HTMLElement,
  selector: string
): HTMLElement | null;

declare const elevations: {
  readonly app: 100;
  readonly modal: 200;
  readonly popover: 300;
  readonly overlay: 400;
  readonly max: 9999;
};
declare function getDefaultZIndex(
  level: keyof typeof elevations
): 100 | 200 | 300 | 400 | 9999;

interface Options {
  active: boolean | undefined;
  onTrigger?(): void;
  onKeyDown?(event: React__default.KeyboardEvent<any>): void;
}
declare function closeOnEscape(
  callback?: (event: any) => void,
  options?: Options
): (event: React__default.KeyboardEvent<any>) => void;

declare const noop: () => void;

declare function cn(...inputs: ClassValue[]): string;

declare function getSize(
  size: unknown,
  prefix?: string,
  convertToRem?: boolean
): string;
declare function getSpacing(size: unknown): string;
declare function getRadius(size: unknown): string;
declare function getFontSize(size: unknown): string;
declare function getLineHeight(size: unknown): string;
declare function getShadow(size: unknown): string;

declare function useId(length?: number): string;

declare function getPrimaryShade(
  theme: RaikouTheme,
  colorScheme: RaikouColorScheme
): RaikouColorShade;

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
declare function parseThemeColor({
  color,
  theme,
  colorScheme,
}: ParseThemeColorOptions): ParseThemeColorResult;

declare function getThemeColor(
  color: string | undefined | null,
  theme: RaikouTheme
): string;

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
type VariantColorsResolver = (
  input: VariantColorsResolverInput
) => VariantColorResolverResult;
declare const defaultVariantColorsResolver: VariantColorsResolver;

declare function getGradient(
  gradient: RaikouGradient | undefined,
  theme: RaikouTheme
): string;

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

declare function isLightColor(
  color: string,
  luminanceThreshold?: number
): boolean;

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
type DefaultRaikouColor =
  | "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "teal"
  | (string & {});
type RaikouThemeColorsOverride = {};
type RaikouThemeColors = RaikouThemeColorsOverride extends {
  colors: Record<infer CustomColors, RaikouColorsTuple>;
}
  ? Record<CustomColors, RaikouColorsTuple>
  : Record<DefaultRaikouColor, RaikouColorsTuple>;
type RaikouColor = keyof RaikouThemeColors;

interface RaikouColorSchemeManager {
  /** Function to retrieve color scheme value from external storage, for example window.localStorage */
  get(defaultValue: RaikouColorScheme): RaikouColorScheme;
  /** Function to set color scheme value in external storage, for example window.localStorage */
  set(value: RaikouColorScheme): void;
  /** Function to subscribe to color scheme changes triggered by external events */
  subscribe(onUpdate: (colorScheme: RaikouColorScheme) => void): void;
  /** Function to unsubscribe from color scheme changes triggered by external events */
  unsubscribe(): void;
  /** Function to clear value from external storage */
  clear(): void;
}

interface LocalStorageColorSchemeManagerOptions {
  /** Local storage key used to retrieve value with `localStorage.getItem(key)`, `raikou-color-scheme` by default */
  key?: string;
}
declare function localStorageColorSchemeManager({
  key,
}?: LocalStorageColorSchemeManagerOptions): RaikouColorSchemeManager;

declare function isRaikouColorScheme(
  value: unknown
): value is RaikouColorScheme;

interface ColorSchemeScriptProps
  extends React__default.ComponentPropsWithoutRef<"script"> {
  defaultColorScheme?: RaikouColorScheme;
  localStorageKey?: string;
}
declare function ColorSchemeScript({
  defaultColorScheme,
  localStorageKey,
  ...others
}: ColorSchemeScriptProps): JSX.Element;

declare const DEFAULT_THEME: RaikouTheme;

declare function validateRaikouTheme(
  theme: RaikouTheme
): asserts theme is RaikouTheme;
declare function mergeRaikouTheme(
  currentTheme: RaikouTheme,
  themeOverride?: RaikouThemeOverride
): RaikouTheme;

type CSSVariables = Record<CssVariable, string>;

interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;
  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;
  /** CSS variables available only in light color scheme */
  light: CSSVariables;
}
declare function convertCssVariables(
  input: ConvertCSSVariablesInput,
  selector: string
): string;

type CSSVariablesResolver = (theme: RaikouTheme) => ConvertCSSVariablesInput;
declare const defaultCssVariablesResolver: CSSVariablesResolver;

interface BootstrapProps {
  /** Theme override object */
  theme?: RaikouThemeOverride;
  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: RaikouColorSchemeManager;
  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: RaikouColorScheme;
  /** CSS selector to which CSS variables should be added, `:root` by default */
  cssVariablesSelector?: string;
  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;
  /** Function to resolve root element to set `data-raikou-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?(): HTMLElement | undefined;
  /** A prefix for components static classes (for example {selector}-Text-root), `raikou` by default */
  classNamesPrefix?: string;
  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?(): string;
  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;
  /** Your application */
  children?: React__default.ReactNode;
}
declare function Bootstrap({
  theme,
  children,
  getStyleNonce,
  withCssVariables,
  cssVariablesSelector,
  classNamesPrefix,
  colorSchemeManager,
  defaultColorScheme,
  getRootElement,
  cssVariablesResolver,
}: BootstrapProps): JSX.Element;

declare function useProps<
  T extends Record<string, any>,
  U extends Partial<T> = {}
>(
  component: string,
  defaultProps: U,
  props: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
};

declare function createTheme(theme: RaikouThemeOverride): RaikouThemeOverride;

declare function mergeThemeOverrides(
  ...overrides: RaikouThemeOverride[]
): RaikouThemeOverride;

type RaikouStyle =
  | React.CSSProperties
  | ((theme: RaikouTheme) => React.CSSProperties);
type RaikouStyleProp =
  | RaikouStyle
  | RaikouStyle[]
  | RaikouStyleProp[]
  | undefined;
type CssVariable = `--${string}`;
type CssVariables<Variable extends string = CssVariable> = Partial<
  Record<Variable, string>
>;
type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: RaikouTheme) => CssVariables<Variable>)
  | CssVars<Variable>[];
type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];

type StyleProp<Value> =
  | Value
  | Partial<Record<RaikouBreakpoint | (string & {}), Value>>;
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

declare function extractStyleProps<T extends Record<string, any>>(
  others: RaikouStyleProps & T
): {
  styleProps: RaikouStyleProps;
  rest: T;
};

declare function colorResolver(color: unknown, theme: RaikouTheme): string;

declare function fontSizeResolver(value: unknown, theme: RaikouTheme): unknown;

declare function spacingResolver(value: unknown, theme: RaikouTheme): unknown;

declare function identityResolver(value: unknown): unknown;

declare function sizeResolver(value: unknown): unknown;

declare function lineHeightResolver(
  value: unknown,
  theme: RaikouTheme
): unknown;

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
declare function stylesToString({
  selector,
  styles,
  media,
}: InlineStylesInput): string;

interface InlineStylesProps
  extends InlineStylesInput,
    Omit<
      React__default.ComponentPropsWithoutRef<"style">,
      keyof InlineStylesInput
    > {}
declare function InlineStyles({
  selector,
  styles,
  media,
}: InlineStylesInput): JSX.Element;

interface SortMediaQueriesResult extends Omit<ParseStylePropsResult, "media"> {
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
declare function parseStyleProps({
  styleProps,
  data,
  theme,
}: ParseStylePropsOptions): SortMediaQueriesResult;

declare function useRandomClassName(length?: number): string;

declare function getStyleObject(
  style: RaikouStyleProp | undefined,
  theme: RaikouTheme
): React.CSSProperties;

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps &
  Omit<Props, keyof OverrideProps>;
type ElementType =
  | keyof JSX.IntrinsicElements
  | React__default.JSXElementConstructor<any>;
type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React__default.ComponentPropsWithoutRef<C>
>;
type ComponentProp<C> = {
  component?: C;
};
type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>;
type PolymorphicRef<C> = C extends React__default.ElementType
  ? React__default.ComponentPropsWithRef<C>["ref"]
  : never;
type PolymorphicComponentProps<
  C,
  Props = {}
> = C extends React__default.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & {
      ref?: PolymorphicRef<C>;
    }
  : Props & {
      component: React__default.ElementType;
    };
declare function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>
>(
  component: any
): (<C = ComponentDefaultType>(
  props: PolymorphicComponentProps<C, Props>
) => React__default.ReactElement) &
  Omit<
    React__default.FunctionComponent<
      | (Props &
          ComponentProp<any> &
          Omit<Omit<any, "ref">, "component" | keyof Props> & {
            ref?: any;
          })
      | (Props & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  StaticComponents;

type Mod = Record<string, any> | string;
type BoxMod = Mod | Mod[] | BoxMod[];
interface BoxProps extends RaikouStyleProps {
  /** Class added to root element, if applicable */
  className?: string;
  /** Inline style added to root component element, can subscribe to theme defined on RaikouProvider */
  style?: RaikouStyleProp;
  /** CSS variables defined on root component element */
  __vars?: CssVarsProp;
}
type ElementProps<
  ElementType extends React__default.ElementType,
  PropsToOmit extends string = never
> = Omit<
  React__default.ComponentPropsWithoutRef<ElementType>,
  "style" | PropsToOmit
>;
interface BoxComponentProps extends BoxProps {
  /** Variant passed from parent component, sets `data-variant` */
  variant?: string;
  /** Size passed from parent component, sets `data-size` if value is not number like */
  size?: string | number;
  /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
  mod?: BoxMod;
}
declare const Box: (<C = "div">(
  props: PolymorphicComponentProps<C, BoxComponentProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (BoxComponentProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof BoxComponentProps> & {
            ref?: any;
          })
      | (BoxComponentProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  Record<string, never>;

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
type ExtendComponent<Payload extends FactoryPayload> =
  Payload["compound"] extends true
    ? ExtendCompoundComponent<Payload>
    : ExtendsRootComponent<Payload>;
type StaticComponents<Input> = Input extends Record<string, any>
  ? Input
  : Record<string, never>;
interface ThemeExtend<Payload extends FactoryPayload> {
  extend: (input: ExtendComponent<Payload>) => RaikouThemeComponent;
}
type ComponentClasses<Payload extends FactoryPayload> = {
  classes: Payload["stylesNames"] extends string
    ? Record<Payload["stylesNames"], string>
    : never;
};
type RaikouComponent<Payload extends FactoryPayload> =
  React.ForwardRefExoticComponent<
    Payload["props"] & React.RefAttributes<Payload["ref"]>
  > &
    ThemeExtend<Payload> &
    ComponentClasses<Payload> &
    StaticComponents<Payload["staticComponents"]>;
declare function factory<Payload extends FactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload["ref"], Payload["props"]>
): RaikouComponent<Payload>;

interface PolymorphicFactoryPayload extends FactoryPayload {
  defaultComponent: any;
  defaultRef: any;
}
declare function polymorphicFactory<Payload extends PolymorphicFactoryPayload>(
  ui: React.ForwardRefRenderFunction<Payload["defaultRef"], Payload["props"]>
): (<C = Payload["defaultComponent"]>(
  props: PolymorphicComponentProps<C, Payload["props"]>
) => React.ReactElement) &
  Omit<
    React$1.FunctionComponent<
      | (Payload["props"] & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof Payload["props"]> & {
            ref?: any;
          })
      | (Payload["props"] & {
          component: React$1.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<Payload> &
  ComponentClasses<Payload> &
  StaticComponents<Payload["staticComponents"]>;

type Factory<Payload extends FactoryPayload> = Payload;
type PolymorphicFactory<Payload extends PolymorphicFactoryPayload> = Payload;

type TransformVars<V> = {
  [Key in keyof V]: V[Key] extends CssVariable
    ? Record<V[Key], string | undefined>
    : never;
};
type PartialTransformVars<V> = {
  [Key in keyof V]: V[Key] extends CssVariable
    ? Partial<Record<V[Key], string | undefined>>
    : never;
};
type VarsResolver<Payload extends FactoryPayload> = (
  theme: RaikouTheme,
  props: Payload["props"],
  ctx: Payload["ctx"]
) => TransformVars<Payload["vars"]>;
type PartialVarsResolver<Payload extends FactoryPayload> = (
  theme: RaikouTheme,
  props: Payload["props"],
  ctx: Payload["ctx"]
) => PartialTransformVars<Payload["vars"]>;
declare function createVarsResolver<Payload extends FactoryPayload>(
  resolver: VarsResolver<Payload>
): VarsResolver<Payload>;

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
type StylesApiRecord<
  Payload extends FactoryPayload,
  DataType
> = Payload["stylesNames"] extends string
  ?
      | StylesRecord<Payload["stylesNames"], DataType>
      | ((
          theme: RaikouTheme,
          props: Payload["props"],
          ctx: Payload["ctx"]
        ) => StylesRecord<Payload["stylesNames"], DataType>)
  : never;
type Styles<Payload extends FactoryPayload> = StylesApiRecord<
  Payload,
  CSSProperties
>;
type ClassNames<Payload extends FactoryPayload> = StylesApiRecord<
  Payload,
  string
>;
type ClassNamesArray<Payload extends FactoryPayload> = (
  | StylesApiRecord<Payload, string>
  | undefined
)[];
type StylesRecord<StylesNames extends string, Payload> = Partial<
  Record<StylesNames, Payload>
>;
interface StylesApiProps<Payload extends FactoryPayload> {
  unstyled?: boolean;
  variant?: Payload["variant"] extends string
    ? Payload["variant"] | (string & {})
    : string;
  classNames?: ClassNames<Payload>;
  styles?: Styles<Payload>;
  vars?: PartialVarsResolver<Payload>;
}

type __ClassNames =
  | undefined
  | Partial<Record<string, string>>
  | ((
      theme: RaikouTheme,
      props: Record<string, any>,
      ctx: Record<string, any> | undefined
    ) => Partial<Record<string, string>>);
type _ClassNames = __ClassNames | __ClassNames[];

interface ResolveClassNamesInput {
  theme: RaikouTheme;
  classNames: _ClassNames;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}
declare function resolveClassNames({
  theme,
  classNames,
  props,
  stylesCtx,
}: ResolveClassNamesInput): Partial<Record<string, string>>;

type _Styles =
  | undefined
  | Partial<Record<string, CSSProperties>>
  | ((
      theme: RaikouTheme,
      props: Record<string, any>,
      ctx: Record<string, any> | undefined
    ) => Partial<Record<string, CSSProperties>>);

interface ResolveStylesInput {
  theme: RaikouTheme;
  styles: _Styles | _Styles[];
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}
declare function resolveStyles({
  theme,
  styles,
  props,
  stylesCtx,
}: ResolveStylesInput): Record<string, any>;

declare const FOCUS_CLASS_NAMES: {
  readonly always: "raikou-focus-always";
  readonly auto: "raikou-focus-auto";
  readonly never: "raikou-focus-never";
};

interface UseStylesInput<Payload extends FactoryPayload> {
  name: string | (string | undefined)[];
  classes: Payload["stylesNames"] extends string
    ? Record<Payload["stylesNames"], string>
    : never;
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
type GetStylesApi<Payload extends FactoryPayload> = (
  selector: NonNullable<Payload["stylesNames"]>,
  options?: GetStylesApiOptions
) => {
  className: string;
  style: CSSProperties;
};
declare function useStyles<Payload extends FactoryPayload>({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector,
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver,
}: UseStylesInput<Payload>): GetStylesApi<Payload>;

type Direction = "ltr" | "rtl";
declare function useDirection(): {
  dir: Direction;
  toggleDirection: () => void;
  setDirection: () => void;
};

interface SvgLoaderProps extends React__default.ComponentPropsWithoutRef<any> {}
type RaikouLoaderComponent = React__default.ForwardRefExoticComponent<
  React__default.HTMLAttributes<any> & React__default.RefAttributes<any>
>;
type RaikouLoadersRecord = Partial<
  Record<"bars" | "dots" | "oval" | (string & {}), RaikouLoaderComponent>
>;
type RaikouLoader = keyof RaikouLoadersRecord;

type LoaderStylesNames = "root";
type LoaderCssVariables = {
  root: "--loader-size" | "--loader-color";
};
interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderFactory>,
    Omit<React__default.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
  /** Loader type, key of `loaders` prop, default value is `'oval'` */
  type?: RaikouLoader;
  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: RaikouLoadersRecord;
}
type LoaderFactory = Factory<{
  props: LoaderProps;
  ref: HTMLSpanElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
  staticComponents: {
    defaultLoaders: typeof defaultLoaders;
  };
}>;
declare const defaultLoaders: RaikouLoadersRecord;
declare const Loader: RaikouComponent<{
  props: LoaderProps;
  ref: HTMLSpanElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
  staticComponents: {
    defaultLoaders: typeof defaultLoaders;
  };
}>;

type ActionIconGroupStylesNames = "root";
type ActionIconGroupVariant = string;
type ActionIconGroupCssVariables = {
  root: "--ai-border-width";
};
interface ActionIconGroupProps
  extends BoxProps,
    StylesApiProps<ActionIconGroupFactory> {
  /** `ActionIcon` components only */
  children?: React__default.ReactNode;
  /** Controls group orientation, `'horizontal'` by default */
  orientation?: "horizontal" | "vertical";
  /** `border-width` of the child `ActionIcon` components. Default value in `1` */
  borderWidth?: number | string;
}
type ActionIconGroupFactory = Factory<{
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  variant: ActionIconGroupVariant;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}>;
declare const ActionIconGroup: RaikouComponent<{
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  variant: ActionIconGroupVariant;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}>;

type ActionIconVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";
type ActionIconStylesNames = "root" | "loader";
type ActionIconCssVariables = {
  root:
    | "--ai-radius"
    | "--ai-size"
    | "--ai-bg"
    | "--ai-hover"
    | "--ai-color"
    | "--ai-bd";
};
interface ActionIconProps extends BoxProps, StylesApiProps<ActionIconFactory> {
  "data-disabled"?: boolean;
  __staticSelector?: string;
  /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
  loading?: boolean;
  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;
  /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
  size?: RaikouSize | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: RaikouRadius | (string & {}) | number;
  /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;
  /** Sets `disabled` and `data-disabled` attributes on the button element */
  disabled?: boolean;
  /** Icon displayed inside the button */
  children?: React__default.ReactNode;
}
type ActionIconFactory = PolymorphicFactory<{
  props: ActionIconProps;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  staticComponents: {
    Group: typeof ActionIconGroup;
  };
}>;
declare const ActionIcon: (<C = "button">(
  props: PolymorphicComponentProps<C, ActionIconProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (ActionIconProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof ActionIconProps> & {
            ref?: any;
          })
      | (ActionIconProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: ActionIconProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
      Group: typeof ActionIconGroup;
    };
  }> &
  ComponentClasses<{
    props: ActionIconProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: ActionIconStylesNames;
    variant: ActionIconVariant;
    vars: ActionIconCssVariables;
    staticComponents: {
      Group: typeof ActionIconGroup;
    };
  }> & {
    Group: typeof ActionIconGroup;
  };

interface PortalProps extends React__default.ComponentPropsWithoutRef<"div"> {
  /** Portal children, for example, custom modal or popover */
  children: React__default.ReactNode;
  /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
  target?: HTMLElement | string;
}
declare const Portal: React__default.ForwardRefExoticComponent<
  PortalProps & React__default.RefAttributes<HTMLDivElement>
>;

interface OptionalPortalProps extends PortalProps {
  /** Determines whether children should be rendered inside `<Portal />` */
  withinPortal?: boolean;
}
declare function OptionalPortal({
  withinPortal,
  children,
  ...others
}: OptionalPortalProps): JSX.Element;
declare namespace OptionalPortal {
  var displayName: string;
}

type AffixStylesNames = "root";
type AffixVariant = string;
type AffixCssVariables = {
  root:
    | "--affix-z-index"
    | "--affix-top"
    | "--affix-left"
    | "--affix-bottom"
    | "--affix-right";
};
interface AffixProps
  extends BoxProps,
    StylesApiProps<AffixFactory>,
    ElementProps<"div"> {
  /** Root element `z-index` property, `200` by default */
  zIndex?: React__default.CSSProperties["zIndex"];
  /** Determines whether component should be rendered within portal, `true` by default */
  withinPortal?: boolean;
  /** Props to pass down to the `Portal` component when `withinPortal` is set */
  portalProps?: Omit<PortalProps, "children">;
  /** Affix position on screen, defaults value is `{ bottom: 0, right: 0 }` */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}
type AffixFactory = Factory<{
  props: AffixProps;
  ref: HTMLDivElement;
  stylesNames: AffixStylesNames;
  vars: AffixCssVariables;
  variant: AffixVariant;
}>;
declare const Affix: RaikouComponent<{
  props: AffixProps;
  ref: HTMLDivElement;
  stylesNames: AffixStylesNames;
  vars: AffixCssVariables;
  variant: AffixVariant;
}>;

type AlertStylesNames =
  | "root"
  | "body"
  | "label"
  | "title"
  | "icon"
  | "wrapper"
  | "message"
  | "closeButton";
type AlertVariant =
  | "filled"
  | "light"
  | "outline"
  | "default"
  | "transparent"
  | "white";
type AlertCssVariables = {
  root: "--alert-radius" | "--alert-bg" | "--alert-color" | "--alert-bd";
};
interface AlertProps
  extends BoxProps,
    StylesApiProps<AlertFactory>,
    ElementProps<"div", "title"> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
  /** Alert title */
  title?: React__default.ReactNode;
  /** Icon displayed next to the title */
  icon?: React__default.ReactNode;
  /** Determines whether close button should be displayed, `false` by default */
  withCloseButton?: boolean;
  /** Called when the close button is clicked */
  onClose?(): void;
  /** Close button `aria-label` */
  closeButtonLabel?: string;
}
type AlertFactory = Factory<{
  props: AlertProps;
  ref: HTMLDivElement;
  stylesNames: AlertStylesNames;
  vars: AlertCssVariables;
  variant: AlertVariant;
}>;
declare const Alert: RaikouComponent<{
  props: AlertProps;
  ref: HTMLDivElement;
  stylesNames: AlertStylesNames;
  vars: AlertCssVariables;
  variant: AlertVariant;
}>;

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
declare const Text: (<C = "div">(
  props: PolymorphicComponentProps<C, TextProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (TextProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof TextProps> & {
            ref?: any;
          })
      | (TextProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: TextProps;
    defaultComponent: "div";
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
  }> &
  ComponentClasses<{
    props: TextProps;
    defaultComponent: "div";
    defaultRef: HTMLParagraphElement;
    stylesNames: TextStylesNames;
    vars: TextCssVariables;
    variant: TextVariant;
  }> &
  Record<string, never>;

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
declare const Anchor: (<C = "a">(
  props: PolymorphicComponentProps<C, AnchorProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (AnchorProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof AnchorProps> & {
            ref?: any;
          })
      | (AnchorProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: AnchorProps;
    defaultComponent: "a";
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
  }> &
  ComponentClasses<{
    props: AnchorProps;
    defaultComponent: "a";
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
  }> &
  Record<string, never>;

type AspectRatioStylesNames = "root";
type AspectRatioVariant = string;
type AspectRatioCssVariables = {
  root: "--ar-ratio";
};
interface AspectRatioProps
  extends BoxProps,
    StylesApiProps<AspectRatioFactory>,
    ElementProps<"div"> {
  /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
  ratio?: number;
}
type AspectRatioFactory = Factory<{
  props: AspectRatioProps;
  ref: HTMLDivElement;
  stylesNames: AspectRatioStylesNames;
  vars: AspectRatioCssVariables;
  variant: AspectRatioVariant;
}>;
declare const AspectRatio: RaikouComponent<{
  props: AspectRatioProps;
  ref: HTMLDivElement;
  stylesNames: AspectRatioStylesNames;
  vars: AspectRatioCssVariables;
  variant: AspectRatioVariant;
}>;

type AvatarGroupStylesNames = "root";
type AvatarGroupVariant = string;
type AvatarGroupCssVariables = {
  root: "--ag-spacing";
};
interface AvatarGroupProps
  extends BoxProps,
    StylesApiProps<AvatarGroupFactory>,
    ElementProps<"div"> {
  /** Negative space between Avatar components, `'sm'` by default */
  spacing?: RaikouSpacing | (string & {}) | number;
}
type AvatarGroupFactory = Factory<{
  props: AvatarGroupProps;
  ref: HTMLDivElement;
  stylesNames: AvatarGroupStylesNames;
  vars: AvatarGroupCssVariables;
  variant: AvatarGroupVariant;
}>;
declare const AvatarGroup: RaikouComponent<{
  props: AvatarGroupProps;
  ref: HTMLDivElement;
  stylesNames: AvatarGroupStylesNames;
  vars: AvatarGroupCssVariables;
  variant: AvatarGroupVariant;
}>;

type AvatarStylesNames = "root" | "placeholder" | "image";
type AvatarVariant =
  | "filled"
  | "light"
  | "gradient"
  | "outline"
  | "transparent"
  | "default"
  | "white";
type AvatarCssVariables = {
  root:
    | "--avatar-size"
    | "--avatar-radius"
    | "--avatar-bg"
    | "--avatar-color"
    | "--avatar-bd";
};
interface AvatarProps extends BoxProps, StylesApiProps<AvatarFactory> {
  /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
  /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;
  /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
  src?: string | null;
  /** Image `alt` attribute, also used as `title` attribute for placeholder */
  alt?: string;
  /** `img` tag attributes */
  imageProps?: React__default.ComponentPropsWithoutRef<"img">;
  /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
  children?: React__default.ReactNode;
}
type AvatarFactory = PolymorphicFactory<{
  props: AvatarProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: AvatarStylesNames;
  vars: AvatarCssVariables;
  variant: AvatarVariant;
  staticComponents: {
    Group: typeof AvatarGroup;
  };
}>;
declare const Avatar: (<C = "div">(
  props: PolymorphicComponentProps<C, AvatarProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (AvatarProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof AvatarProps> & {
            ref?: any;
          })
      | (AvatarProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
      Group: typeof AvatarGroup;
    };
  }> &
  ComponentClasses<{
    props: AvatarProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: AvatarStylesNames;
    vars: AvatarCssVariables;
    variant: AvatarVariant;
    staticComponents: {
      Group: typeof AvatarGroup;
    };
  }> & {
    Group: typeof AvatarGroup;
  };

type BackgroundImageStylesNames = "root";
type BackgroundImageVariant = string;
type BackgroundImageCssVariables = {
  root: "--bi-radius";
};
interface BackgroundImageProps
  extends BoxProps,
    StylesApiProps<BackgroundImageFactory> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Image url */
  src: string;
}
type BackgroundImageFactory = PolymorphicFactory<{
  props: BackgroundImageProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  variant: BackgroundImageVariant;
  stylesNames: BackgroundImageStylesNames;
  vars: BackgroundImageCssVariables;
}>;
declare const BackgroundImage: (<C = "div">(
  props: PolymorphicComponentProps<C, BackgroundImageProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (BackgroundImageProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof BackgroundImageProps> & {
            ref?: any;
          })
      | (BackgroundImageProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    variant: BackgroundImageVariant;
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
  }> &
  ComponentClasses<{
    props: BackgroundImageProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    variant: BackgroundImageVariant;
    stylesNames: BackgroundImageStylesNames;
    vars: BackgroundImageCssVariables;
  }> &
  Record<string, never>;

type BadgeStylesNames = "root" | "root--dot" | "section" | "label";
type BadgeVariant =
  | "filled"
  | "light"
  | "outline"
  | "dot"
  | "transparent"
  | "white"
  | "default"
  | "gradient";
type BadgeCssVariables = {
  root:
    | "--badge-height"
    | "--badge-padding-x"
    | "--badge-fz"
    | "--badge-radius"
    | "--badge-bg"
    | "--badge-color"
    | "--badge-bd"
    | "--badge-dot-color";
};
interface BadgeProps extends BoxProps, StylesApiProps<BadgeFactory> {
  /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
  size?: RaikouSize | (string & {});
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;
  /** Content displayed on the left side of the badge label */
  leftSection?: React__default.ReactNode;
  /** Content displayed on the right side of the badge label */
  rightSection?: React__default.ReactNode;
  /** Determines whether Badge should take 100% of its parent width, `false` by default */
  fullWidth?: boolean;
  /** Main badge content */
  children?: React__default.ReactNode;
}
type BadgeFactory = PolymorphicFactory<{
  props: BadgeProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: BadgeStylesNames;
  vars: BadgeCssVariables;
  variant: BadgeVariant;
}>;
declare const Badge: (<C = "div">(
  props: PolymorphicComponentProps<C, BadgeProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (BadgeProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof BadgeProps> & {
            ref?: any;
          })
      | (BadgeProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
  }> &
  ComponentClasses<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
  }> &
  Record<string, never>;

type BlockquoteStylesNames = "root" | "icon" | "cite";
type BlockquoteVariant = string;
type BlockquoteCssVariables = {
  root:
    | "--bq-bg-light"
    | "--bq-bg-dark"
    | "--bq-bd"
    | "--bq-icon-size"
    | "--bq-radius";
};
interface BlockquoteProps
  extends BoxProps,
    StylesApiProps<BlockquoteFactory>,
    ElementProps<"blockquote", "cite"> {
  /** Blockquote icon, displayed on the top left */
  icon?: React__default.ReactNode;
  /** Controls icon `width` and `height`, numbers are converted to rem, `40` by default */
  iconSize?: number | string;
  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Reference to a cited quote */
  cite?: React__default.ReactNode;
}
type BlockquoteFactory = Factory<{
  props: BlockquoteProps;
  ref: HTMLQuoteElement;
  stylesNames: BlockquoteStylesNames;
  vars: BlockquoteCssVariables;
  variant: BlockquoteVariant;
}>;
declare const Blockquote: RaikouComponent<{
  props: BlockquoteProps;
  ref: HTMLQuoteElement;
  stylesNames: BlockquoteStylesNames;
  vars: BlockquoteCssVariables;
  variant: BlockquoteVariant;
}>;

type BreadcrumbsStylesNames = "root" | "separator" | "breadcrumb";
type BreadcrumbsVariant = string;
type BreadcrumbsCssVariables = {
  root: "--bc-separator-margin";
};
interface BreadcrumbsProps
  extends BoxProps,
    StylesApiProps<BreadcrumbsFactory>,
    ElementProps<"div"> {
  /** Separator between children, `'/'` by default */
  separator?: React__default.ReactNode;
  /** Controls spacing between separator and breadcrumb, `'xs'` by default */
  separatorMargin?: RaikouSpacing | (string & {}) | number;
  /** React nodes that should be separated with `separator` */
  children: React__default.ReactNode;
}
type BreadcrumbsFactory = Factory<{
  props: BreadcrumbsProps;
  ref: HTMLDivElement;
  stylesNames: BreadcrumbsStylesNames;
  vars: BreadcrumbsCssVariables;
  variant: BreadcrumbsVariant;
}>;
declare const Breadcrumbs: RaikouComponent<{
  props: BreadcrumbsProps;
  ref: HTMLDivElement;
  stylesNames: BreadcrumbsStylesNames;
  vars: BreadcrumbsCssVariables;
  variant: BreadcrumbsVariant;
}>;

type BurgerStylesNames = "root" | "burger";
type BurgerVariant = string;
type BurgerCssVariables = {
  root:
    | "--burger-color"
    | "--burger-size"
    | "--burger-transition-duration"
    | "--burger-transition-timing-function";
};
interface BurgerProps
  extends BoxProps,
    StylesApiProps<BurgerFactory>,
    ElementProps<"button"> {
  /** Controls burger `width` and `height`, numbers are converted to rem, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
  /** Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light */
  color?: RaikouColor;
  /** State of the burger, when `true` burger is transformed into X, `false` by default */
  opened?: boolean;
  /** `transition-duration` property value in ms, `300` by default */
  transitionDuration?: number;
  /** `transition-timing-function` property value, `'ease'` by default  */
  transitionTimingFunction?: string;
}
type BurgerFactory = Factory<{
  props: BurgerProps;
  ref: HTMLButtonElement;
  stylesNames: BurgerStylesNames;
  vars: BurgerCssVariables;
  variant: BurgerVariant;
}>;
declare const Burger: RaikouComponent<{
  props: BurgerProps;
  ref: HTMLButtonElement;
  stylesNames: BurgerStylesNames;
  vars: BurgerCssVariables;
  variant: BurgerVariant;
}>;

type ButtonGroupStylesNames = "root";
type ButtonGroupVariant = string;
type ButtonGroupCssVariables = {
  root: "--button-border-width";
};
interface ButtonGroupProps
  extends BoxProps,
    StylesApiProps<ButtonGroupFactory> {
  /** `Button` components */
  children?: React__default.ReactNode;
  /** Orientation of the group, `horizontal` by default */
  orientation?: "horizontal" | "vertical";
  /** `border-width` of the child `Button` components. Numbers are converted to rem. Default value in `1`. */
  borderWidth?: number | string;
}
type ButtonGroupFactory = Factory<{
  props: ButtonGroupProps;
  ref: HTMLDivElement;
  variant: ButtonGroupVariant;
  stylesNames: ButtonGroupStylesNames;
  vars: ButtonGroupCssVariables;
}>;
declare const ButtonGroup: RaikouComponent<{
  props: ButtonGroupProps;
  ref: HTMLDivElement;
  variant: ButtonGroupVariant;
  stylesNames: ButtonGroupStylesNames;
  vars: ButtonGroupCssVariables;
}>;

type ButtonStylesNames = "root" | "inner" | "loader" | "section" | "label";
type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";
type ButtonCssVariables = {
  root:
    | "--button-justify"
    | "--button-height"
    | "--button-padding-x"
    | "--button-fz"
    | "--button-radius"
    | "--button-bg"
    | "--button-hover"
    | "--button-color"
    | "--button-bd";
};
interface ButtonProps extends BoxProps, StylesApiProps<ButtonFactory> {
  "data-disabled"?: boolean;
  /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
  size?: RaikouSize | `compact-${RaikouSize}` | (string & {});
  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
  justify?: React__default.CSSProperties["justifyContent"];
  /** Content displayed on the left side of the button label */
  leftSection?: React__default.ReactNode;
  /** Content displayed on the right side of the button label */
  rightSection?: React__default.ReactNode;
  /** Determines whether button should take 100% width of its parent container, `false` by default */
  fullWidth?: boolean;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;
  /** Indicates disabled state */
  disabled?: boolean;
  /** Button content */
  children?: React__default.ReactNode;
  /** Determines whether the `Loader` component should be displayed over the button */
  loading?: boolean;
  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;
}
type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: "button";
  stylesNames: ButtonStylesNames;
  vars: ButtonCssVariables;
  staticComponents: {
    Group: typeof ButtonGroup;
  };
}>;
declare const Button: (<C = "button">(
  props: PolymorphicComponentProps<C, ButtonProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (ButtonProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof ButtonProps> & {
            ref?: any;
          })
      | (ButtonProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: ButtonProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: ButtonStylesNames;
    vars: ButtonCssVariables;
    staticComponents: {
      Group: typeof ButtonGroup;
    };
  }> &
  ComponentClasses<{
    props: ButtonProps;
    defaultRef: HTMLButtonElement;
    defaultComponent: "button";
    stylesNames: ButtonStylesNames;
    vars: ButtonCssVariables;
    staticComponents: {
      Group: typeof ButtonGroup;
    };
  }> & {
    Group: typeof ButtonGroup;
  };

type CenterStylesNames = "root";
type CenterVariant = string;
type CenterCssVariables = {
  root: "--center-display";
};
interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
  /** Content that should be centered vertically and horizontally */
  children?: React__default.ReactNode;
  /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
  inline?: boolean;
}
type CenterFactory = PolymorphicFactory<{
  props: CenterProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: CenterStylesNames;
  vars: CenterCssVariables;
  variant: CenterVariant;
}>;
declare const Center: (<C = "div">(
  props: PolymorphicComponentProps<C, CenterProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (CenterProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof CenterProps> & {
            ref?: any;
          })
      | (CenterProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
    variant: CenterVariant;
  }> &
  ComponentClasses<{
    props: CenterProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: CenterStylesNames;
    vars: CenterCssVariables;
    variant: CenterVariant;
  }> &
  Record<string, never>;

type InlineInputStylesNames =
  | "root"
  | "body"
  | "labelWrapper"
  | "label"
  | "description"
  | "error";
interface InlineInputProps
  extends BoxProps,
    StylesApiProps<InlineInputFactory>,
    ElementProps<"div"> {
  __staticSelector: string;
  __stylesApiProps: Record<string, any>;
  label: React__default.ReactNode;
  description: React__default.ReactNode;
  id: string;
  disabled: boolean | undefined;
  error: React__default.ReactNode;
  size: RaikouSize | (string & {}) | undefined;
  labelPosition?: "left" | "right";
}
type InlineInputFactory = Factory<{
  props: any;
  stylesNames: InlineInputStylesNames;
}>;
declare const InlineInput: React__default.ForwardRefExoticComponent<
  InlineInputProps & React__default.RefAttributes<HTMLDivElement>
>;

type InputLabelStylesNames = "label" | "required";
type InputLabelVariant = string;
type InputLabelCssVariables = {
  label: "--input-asterisk-color" | "--input-label-size";
};
interface InputLabelProps
  extends BoxProps,
    StylesApiProps<InputLabelFactory>,
    ElementProps<"label"> {
  __staticSelector?: string;
  /** Determines whether required asterisk should be displayed  */
  required?: boolean;
  /** Controls label `font-size`, `'sm'` by default */
  size?: RaikouSize | (string & {});
  /** Root element of the label, `'label'` by default */
  labelElement?: "label" | "div";
}
type InputLabelFactory = Factory<{
  props: InputLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputLabelStylesNames;
  vars: InputLabelCssVariables;
  variant: InputLabelVariant;
}>;
declare const InputLabel: RaikouComponent<{
  props: InputLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputLabelStylesNames;
  vars: InputLabelCssVariables;
  variant: InputLabelVariant;
}>;

type InputErrorStylesNames = "error";
type InputErrorVariant = string;
type InputErrorCssVariables = {
  error: "--input-error-size";
};
interface InputErrorProps
  extends BoxProps,
    StylesApiProps<InputErrorFactory>,
    ElementProps<"div"> {
  __staticSelector?: string;
  /** Controls error `font-size`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}
type InputErrorFactory = Factory<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
  variant: InputErrorVariant;
}>;
declare const InputError: RaikouComponent<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
  variant: InputErrorVariant;
}>;

type InputDescriptionStylesNames = "description";
type InputDescriptionVariant = string;
type InputDescriptionCssVariables = {
  description: "--input-description-size";
};
interface InputDescriptionProps
  extends BoxProps,
    StylesApiProps<InputDescriptionFactory>,
    ElementProps<"div"> {
  __staticSelector?: string;
  /** Controls description `font-size`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}
type InputDescriptionFactory = Factory<{
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
  variant: InputDescriptionVariant;
}>;
declare const InputDescription: RaikouComponent<{
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
  variant: InputDescriptionVariant;
}>;

type InputPlaceholderStylesNames = "placeholder";
type InputPlaceholderVariant = string;
interface InputPlaceholderProps
  extends BoxProps,
    StylesApiProps<InputPlaceholderFactory>,
    ElementProps<"span"> {
  __staticSelector?: string;
}
type InputPlaceholderFactory = Factory<{
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
  variant: InputPlaceholderVariant;
}>;
declare const InputPlaceholder: RaikouComponent<{
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
  variant: InputPlaceholderVariant;
}>;

type InputWrapperCssVariables = InputLabelCssVariables &
  InputErrorCssVariables &
  InputDescriptionCssVariables;
type InputWrapperStylesNames =
  | "root"
  | InputLabelStylesNames
  | InputDescriptionStylesNames
  | InputErrorStylesNames;
interface __InputWrapperProps {
  /** Contents of `Input.Label` component, if not set, label is not rendered. */
  label?: React__default.ReactNode;
  /** Contents of `Input.Description` component, if not set, description is not rendered. */
  description?: React__default.ReactNode;
  /** Contents of `Input.Error` component, if not set, error is not rendered. */
  error?: React__default.ReactNode;
  /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
  required?: boolean;
  /** Determines whether required asterisk should be rendered, overrides required prop, does not add required attribute to the input, `false` by default */
  withAsterisk?: boolean;
  /** Props passed down to the `Input.Label` component */
  labelProps?: Record<string, any>;
  /** Props passed down to the `Input.Description` component */
  descriptionProps?: Record<string, any>;
  /** Props passed down to the `InputError` component */
  errorProps?: Record<string, any>;
  /** Input container component, defaults to `React.Fragment` */
  inputContainer?(children: React__default.ReactNode): React__default.ReactNode;
  /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
  inputWrapperOrder?: ("label" | "input" | "description" | "error")[];
}
interface InputWrapperProps
  extends __InputWrapperProps,
    BoxProps,
    StylesApiProps<InputWrapperFactory>,
    ElementProps<"div"> {
  __staticSelector?: string;
  /** Props passed to Styles API context, replaces Input.Wrapper props */
  __stylesApiProps?: Record<string, any>;
  /** Static id used as base to generate `aria-` attributes, by default generates random id */
  id?: string;
  /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
  size?: RaikouSize | (string & {});
  /** `Input.Label` root element, `'label'` by default */
  labelElement?: "label" | "div";
}
type InputWrapperFactory = Factory<{
  props: InputWrapperProps;
  ref: HTMLDivElement;
  stylesNames: InputWrapperStylesNames;
  vars: InputWrapperCssVariables;
}>;
declare const InputWrapper: RaikouComponent<{
  props: InputWrapperProps;
  ref: HTMLDivElement;
  stylesNames: InputWrapperStylesNames;
  vars: InputWrapperCssVariables;
}>;

interface __BaseInputProps extends __InputWrapperProps, __InputProps {}
type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;
type InputStylesNames = "input" | "wrapper" | "section";
type InputVariant = "default" | "filled" | "unstyled";
type InputCssVariables = {
  wrapper:
    | "--input-height"
    | "--input-fz"
    | "--input-radius"
    | "--input-left-section-width"
    | "--input-right-section-width"
    | "--input-left-section-pointer-events"
    | "--input-right-section-pointer-events"
    | "--input-padding-y"
    | "--input-margin-top"
    | "--input-margin-bottom";
};
interface InputStylesCtx {
  offsetTop: boolean | undefined;
  offsetBottom: boolean | undefined;
}
interface __InputProps {
  /** Content section rendered on the left side of the input */
  leftSection?: React__default.ReactNode;
  /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
  leftSectionWidth?: React__default.CSSProperties["width"];
  /** Props added to the `leftSection` element */
  leftSectionProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Sets `pointer-events` styles on the `leftSection` element, `'none'` by default */
  leftSectionPointerEvents?: React__default.CSSProperties["pointerEvents"];
  /** Content section rendered on the right side of the input */
  rightSection?: React__default.ReactNode;
  /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
  rightSectionWidth?: React__default.CSSProperties["width"];
  /** Props added to the `rightSection` element */
  rightSectionProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Sets `pointer-events` styles on the `rightSection` element, `'none'` by default */
  rightSectionPointerEvents?: React__default.CSSProperties["pointerEvents"];
  /** Props added to the root element of the `Input` component */
  wrapperProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Sets `required` attribute on the `input` element */
  required?: boolean;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Sets `disabled` attribute on the `input` element */
  disabled?: boolean;
  /** Controls input `height` and horizontal `padding`, `'sm'` by default */
  size?: RaikouSize | (string & {});
  /** Determines whether the input should have `cursor: pointer` style, `false` by default */
  pointer?: boolean;
}
interface InputProps
  extends BoxProps,
    __InputProps,
    StylesApiProps<InputFactory> {
  __staticSelector?: string;
  /** Props passed to Styles API context, replaces `Input.Wrapper` props */
  __stylesApiProps?: Record<string, any>;
  /** Determines whether the input should have error styles and `aria-invalid` attribute */
  error?: React__default.ReactNode;
  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;
  /** Input element id */
  id?: string;
  /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
  withAria?: boolean;
}
type InputFactory = PolymorphicFactory<{
  props: InputProps;
  defaultRef: HTMLInputElement;
  defaultComponent: "input";
  stylesNames: InputStylesNames;
  variant: InputVariant;
  vars: InputCssVariables;
  ctx: InputStylesCtx;
  staticComponents: {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
  };
}>;
declare const Input: (<C = "input">(
  props: PolymorphicComponentProps<C, InputProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (InputProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof InputProps> & {
            ref?: any;
          })
      | (InputProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
      Label: typeof InputLabel;
      Error: typeof InputError;
      Description: typeof InputDescription;
      Placeholder: typeof InputPlaceholder;
      Wrapper: typeof InputWrapper;
    };
  }> &
  ComponentClasses<{
    props: InputProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: InputStylesNames;
    variant: InputVariant;
    vars: InputCssVariables;
    ctx: InputStylesCtx;
    staticComponents: {
      Label: typeof InputLabel;
      Error: typeof InputError;
      Description: typeof InputDescription;
      Placeholder: typeof InputPlaceholder;
      Wrapper: typeof InputWrapper;
    };
  }> & {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
  };

interface BaseProps
  extends __BaseInputProps,
    BoxProps,
    StylesApiProps<{
      props: any;
      stylesNames: string;
    }> {
  __staticSelector?: string;
  __stylesApiProps?: Record<string, any>;
  id?: string;
}
declare function useInputProps<T extends BaseProps, U extends Partial<T>>(
  component: string,
  defaultProps: U,
  _props: T
): Omit<
  T & { [Key in Extract<keyof T, never>]-?: {}[Key] | NonNullable<T[Key]> },
  | "label"
  | "style"
  | "size"
  | "variant"
  | "error"
  | "className"
  | "id"
  | "description"
  | "styles"
  | "vars"
  | "required"
  | "classNames"
  | "unstyled"
  | "__staticSelector"
  | "__stylesApiProps"
  | "withAsterisk"
  | "labelProps"
  | "descriptionProps"
  | "errorProps"
  | "inputContainer"
  | "inputWrapperOrder"
  | "wrapperProps"
> & {
  classNames:
    | Partial<Record<string, string>>
    | ((
        theme: RaikouTheme,
        props: any,
        ctx: unknown
      ) => Partial<Record<string, string>>)
    | undefined;
  styles:
    | Partial<Record<string, React$1.CSSProperties>>
    | ((
        theme: RaikouTheme,
        props: any,
        ctx: unknown
      ) => Partial<Record<string, React$1.CSSProperties>>)
    | undefined;
  unstyled: boolean | undefined;
  wrapperProps: {
    children?: React$1.ReactNode;
    slot?: string | undefined;
    style: RaikouStyleProp;
    title?: string | undefined;
    onKeyDown?: React$1.KeyboardEventHandler<HTMLDivElement> | undefined;
    dir?: string | undefined;
    color?: string | undefined;
    key?: React$1.Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React$1.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?:
      | "search"
      | "text"
      | "none"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "none" | "list" | "inline" | "both" | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?:
      | boolean
      | "time"
      | "true"
      | "false"
      | "page"
      | "step"
      | "location"
      | "date"
      | undefined;
    "aria-describedby"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?:
      | "link"
      | "none"
      | "copy"
      | "execute"
      | "move"
      | "popup"
      | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?:
      | boolean
      | "dialog"
      | "menu"
      | "true"
      | "false"
      | "grid"
      | "listbox"
      | "tree"
      | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?:
      | boolean
      | "true"
      | "false"
      | "grammar"
      | "spelling"
      | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "vertical" | "horizontal" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?:
      | "text"
      | "additions"
      | "additions removals"
      | "additions text"
      | "all"
      | "removals"
      | "removals additions"
      | "removals text"
      | "text additions"
      | "text removals"
      | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "other" | "ascending" | "descending" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?:
      | {
          __html: string | TrustedHTML;
        }
      | undefined;
    onCopy?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React$1.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionEndCapture?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStart?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStartCapture?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdate?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React$1.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onFocus?: React$1.FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: React$1.FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: React$1.FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: React$1.FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onInput?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onReset?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: React$1.FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onError?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: React$1.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: React$1.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?:
      | React$1.KeyboardEventHandler<HTMLDivElement>
      | undefined;
    onKeyUp?: React$1.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: React$1.KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?:
      | React$1.ReactEventHandler<HTMLDivElement>
      | undefined;
    onDurationChange?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?:
      | React$1.ReactEventHandler<HTMLDivElement>
      | undefined;
    onEmptied?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?:
      | React$1.ReactEventHandler<HTMLDivElement>
      | undefined;
    onLoadStart?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?:
      | React$1.ReactEventHandler<HTMLDivElement>
      | undefined;
    onWaiting?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?:
      | React$1.MouseEventHandler<HTMLDivElement>
      | undefined;
    onDoubleClick?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?:
      | React$1.MouseEventHandler<HTMLDivElement>
      | undefined;
    onDrag?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: React$1.DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: React$1.MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: React$1.ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?:
      | React$1.TouchEventHandler<HTMLDivElement>
      | undefined;
    onTouchEnd?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: React$1.TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerMove?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerUp?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerCancel?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerEnter?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerLeave?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOver?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOut?: React$1.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onGotPointerCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onGotPointerCaptureCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React$1.PointerEventHandler<HTMLDivElement>
      | undefined;
    onScroll?: React$1.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React$1.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React$1.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React$1.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?:
      | React$1.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationStartCapture?:
      | React$1.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationEnd?: React$1.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?:
      | React$1.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIteration?:
      | React$1.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIterationCapture?:
      | React$1.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onTransitionEnd?:
      | React$1.TransitionEventHandler<HTMLDivElement>
      | undefined;
    onTransitionEndCapture?:
      | React$1.TransitionEventHandler<HTMLDivElement>
      | undefined;
    label: React$1.ReactNode;
    description: React$1.ReactNode;
    error: React$1.ReactNode;
    required: boolean | undefined;
    classNames:
      | Partial<Record<string, string>>
      | ((
          theme: RaikouTheme,
          props: any,
          ctx: unknown
        ) => Partial<Record<string, string>>)
      | undefined;
    __staticSelector: string | undefined;
    __stylesApiProps: Record<string, any>;
    errorProps: Record<string, any> | undefined;
    labelProps: Record<string, any> | undefined;
    descriptionProps: Record<string, any> | undefined;
    unstyled: boolean | undefined;
    styles:
      | Partial<Record<string, React$1.CSSProperties>>
      | ((
          theme: RaikouTheme,
          props: any,
          ctx: unknown
        ) => Partial<Record<string, React$1.CSSProperties>>)
      | undefined;
    size: (string & {}) | RaikouSize | undefined;
    inputContainer:
      | ((children: React$1.ReactNode) => React$1.ReactNode)
      | undefined;
    inputWrapperOrder:
      | ("input" | "label" | "error" | "description")[]
      | undefined;
    withAsterisk: boolean | undefined;
    variant: string | undefined;
  } & BoxProps;
  inputProps: {
    required: boolean | undefined;
    classNames:
      | Partial<Record<string, string>>
      | ((
          theme: RaikouTheme,
          props: any,
          ctx: unknown
        ) => Partial<Record<string, string>>)
      | undefined;
    styles:
      | Partial<Record<string, React$1.CSSProperties>>
      | ((
          theme: RaikouTheme,
          props: any,
          ctx: unknown
        ) => Partial<Record<string, React$1.CSSProperties>>)
      | undefined;
    unstyled: boolean | undefined;
    size: (string & {}) | RaikouSize | undefined;
    __staticSelector: string | undefined;
    __stylesApiProps: Record<string, any>;
    error: React$1.ReactNode;
    variant: string | undefined;
  };
};

interface InputWrapperContextValue {
  offsetTop: boolean;
  offsetBottom: boolean;
  describedBy: string | undefined;
  inputId: string | undefined;
  getStyles: GetStylesApi<InputWrapperFactory> | null;
}
declare const useInputWrapperContext: () => InputWrapperContextValue | null;

type CheckboxGroupStylesNames = InputWrapperStylesNames;
type CheckboxGroupVariant = string;
interface CheckboxGroupProps extends Omit<InputWrapperProps, "onChange"> {
  /** `Checkbox` components */
  children: React__default.ReactNode;
  /** Controlled component value */
  value?: string[];
  /** Default value for uncontrolled component */
  defaultValue?: string[];
  /** Called when value changes */
  onChange?(value: string[]): void;
  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}
type CheckboxGroupFactory = Factory<{
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxGroupStylesNames;
}>;
declare const CheckboxGroup: RaikouComponent<{
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxGroupStylesNames;
}>;

type CheckboxStylesNames = "icon" | "inner" | "input" | InlineInputStylesNames;
type CheckboxVariant = string;
type CheckboxCssVariables = {
  root: "--checkbox-size" | "--checkbox-radius" | "--checkbox-color";
};
interface CheckboxProps
  extends BoxProps,
    StylesApiProps<CheckboxFactory>,
    ElementProps<"input", "size"> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;
  /** Checkbox label */
  label?: React__default.ReactNode;
  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Controls size of all elements */
  size?: RaikouSize | (string & {});
  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Props passed down to wrapper element */
  wrapperProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: "left" | "right";
  /** Description displayed below the label */
  description?: React__default.ReactNode;
  /** Error displayed below the label */
  error?: React__default.ReactNode;
  /** Indeterminate state of checkbox, if set, `checked` prop is ignored */
  indeterminate?: boolean;
  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React__default.FC<{
    indeterminate: boolean | undefined;
    className: string;
  }>;
}
type CheckboxFactory = Factory<{
  props: CheckboxProps;
  ref: HTMLInputElement;
  stylesNames: CheckboxStylesNames;
  vars: CheckboxCssVariables;
  variant: CheckboxVariant;
  staticComponents: {
    Group: typeof CheckboxGroup;
  };
}>;
declare const Checkbox: RaikouComponent<{
  props: CheckboxProps;
  ref: HTMLInputElement;
  stylesNames: CheckboxStylesNames;
  vars: CheckboxCssVariables;
  variant: CheckboxVariant;
  staticComponents: {
    Group: typeof CheckboxGroup;
  };
}>;

interface CheckboxIconProps
  extends React__default.ComponentPropsWithoutRef<"svg"> {
  indeterminate: boolean | undefined;
}
interface CheckIconProps
  extends React__default.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}
declare function CheckIcon({
  size,
  style,
  ...others
}: CheckIconProps): JSX.Element;

interface CloseIconProps
  extends React__default.ComponentPropsWithoutRef<"svg"> {
  /** Icon width and height, `var(--icon-size)` by default */
  size?: string;
}
declare const CloseIcon: React__default.ForwardRefExoticComponent<
  CloseIconProps & React__default.RefAttributes<SVGSVGElement>
>;

type CloseButtonVariant = ActionIconVariant;
type CloseButtonStylesNames = ActionIconStylesNames;
interface CloseButtonProps extends ActionIconProps {
  /** `X` icon `width` and `height`, `80%` by default */
  iconSize?: number | string;
}
type CloseButtonFactory = PolymorphicFactory<{
  props: CloseButtonProps;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
}>;
declare const CloseButton: (<C = "button">(
  props: PolymorphicComponentProps<C, CloseButtonProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (CloseButtonProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof CloseButtonProps> & {
            ref?: any;
          })
      | (CloseButtonProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
  }> &
  ComponentClasses<{
    props: CloseButtonProps;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
    stylesNames: CloseButtonStylesNames;
    variant: CloseButtonVariant;
  }> &
  Record<string, never>;

type CodeStylesNames = "root";
type CodeVariant = string;
type CodeCssVariables = {
  root: "--code-bg";
};
interface CodeProps
  extends BoxProps,
    StylesApiProps<CodeFactory>,
    ElementProps<"code"> {
  /** Key of `theme.colors` or any valid CSS color, controls `background-color` of the code, by default value is calculated based on color scheme */
  color?: RaikouColor;
  /** If set code will be rendered inside `pre`, `false` by default */
  block?: boolean;
}
type CodeFactory = Factory<{
  props: CodeProps;
  ref: HTMLElement;
  stylesNames: CodeStylesNames;
  vars: CodeCssVariables;
  variant: CodeVariant;
}>;
declare const Code: RaikouComponent<{
  props: CodeProps;
  ref: HTMLElement;
  stylesNames: CodeStylesNames;
  vars: CodeCssVariables;
  variant: CodeVariant;
}>;

interface CollapseProps
  extends BoxProps,
    Omit<React__default.ComponentPropsWithoutRef<"div">, keyof BoxProps> {
  /** Opened state */
  in: boolean;
  /** Called each time transition ends */
  onTransitionEnd?(): void;
  /** Transition duration in ms, `200` by default */
  transitionDuration?: number;
  /** Transition timing function, default value is `ease` */
  transitionTimingFunction?: string;
  /** Determines whether opacity should be animated, `true` by default */
  animateOpacity?: boolean;
}
declare const Collapse: React__default.ForwardRefExoticComponent<
  CollapseProps & React__default.RefAttributes<HTMLDivElement>
>;

type ColorFormat = "hex" | "hexa" | "rgba" | "rgb" | "hsl" | "hsla";

type ColorPickerStylesNames =
  | "wrapper"
  | "preview"
  | "body"
  | "sliders"
  | "slider"
  | "sliderOverlay"
  | "thumb"
  | "saturation"
  | "thumb"
  | "saturationOverlay"
  | "thumb"
  | "swatches"
  | "swatch";
type ColorPickerVariant = string;
type ColorPickerCssVariables = {
  wrapper:
    | "--cp-preview-size"
    | "--cp-width"
    | "--cp-body-spacing"
    | "--cp-swatch-size"
    | "--cp-thumb-size"
    | "--cp-saturation-height";
};
interface __ColorPickerProps {
  /** Controlled component value */
  value?: string;
  /** Uncontrolled component default value */
  defaultValue?: string;
  /** Called when color changes */
  onChange?(value: string): void;
  /** Called when user stops dragging or changes value with arrow keys */
  onChangeEnd?(value: string): void;
  /** Color format, `'hex'` by default */
  format?: ColorFormat;
  /** Determines whether color picker should be displayed, `true` by default */
  withPicker?: boolean;
  /** Color swatches */
  swatches?: string[];
  /** Number of swatches displayed in one row, `7` by default */
  swatchesPerRow?: number;
  /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
  size?: RaikouSize | (string & {});
}
interface ColorPickerProps
  extends BoxProps,
    __ColorPickerProps,
    StylesApiProps<ColorPickerFactory>,
    ElementProps<"div", "onChange" | "value" | "defaultValue"> {
  __staticSelector?: string;
  /** Determines whether component should take 100% width of its container, `false` by default */
  fullWidth?: boolean;
  /** Determines whether interactive elements should be focusable, `true` by default */
  focusable?: boolean;
  /** Saturation slider `aria-label` */
  saturationLabel?: string;
  /** Hue slider `aria-label` */
  hueLabel?: string;
  /** Alpha slider `aria-label` */
  alphaLabel?: string;
  /** Called when one of the color swatches is clicked */
  onColorSwatchClick?(color: string): void;
}
type ColorPickerFactory = Factory<{
  props: ColorPickerProps;
  ref: HTMLDivElement;
  stylesNames: ColorPickerStylesNames;
  vars: ColorPickerCssVariables;
  variant: ColorPickerVariant;
}>;
declare const ColorPicker: RaikouComponent<{
  props: ColorPickerProps;
  ref: HTMLDivElement;
  stylesNames: ColorPickerStylesNames;
  vars: ColorPickerCssVariables;
  variant: ColorPickerVariant;
}>;

type ColorSwatchStylesNames =
  | "root"
  | "alphaOverlay"
  | "shadowOverlay"
  | "colorOverlay"
  | "childrenOverlay";
type ColorSwatchVariant = string;
type ColorSwatchCssVariables = {
  root: "--cs-radius" | "--cs-size";
};
interface ColorSwatchProps
  extends BoxProps,
    StylesApiProps<ColorSwatchFactory> {
  /** Color to display, not related to `theme.colors` – supports only CSS color values */
  color: string;
  /** Controls `width` and `height` of the swatch, any valid CSS value, numbers are converted to rem */
  size?: React__default.CSSProperties["width"];
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem */
  radius?: RaikouRadius | (string & {}) | number;
  /** Determines whether the swatch should have inner `box-shadow`, `true` by default */
  withShadow?: boolean;
  /** Content rendered inside the swatch */
  children?: React__default.ReactNode;
}
type ColorSwatchFactory = PolymorphicFactory<{
  props: ColorSwatchProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: ColorSwatchStylesNames;
  vars: ColorSwatchCssVariables;
  variant: ColorSwatchVariant;
}>;
declare const ColorSwatch: (<C = "div">(
  props: PolymorphicComponentProps<C, ColorSwatchProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (ColorSwatchProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof ColorSwatchProps> & {
            ref?: any;
          })
      | (ColorSwatchProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
    variant: ColorSwatchVariant;
  }> &
  ComponentClasses<{
    props: ColorSwatchProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: ColorSwatchStylesNames;
    vars: ColorSwatchCssVariables;
    variant: ColorSwatchVariant;
  }> &
  Record<string, never>;

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

declare function getParsedComboboxData(
  data: ComboboxData | undefined
): ComboboxParsedItem[];

declare function getOptionsLockup(
  options: ComboboxParsedItem[]
): Record<string, ComboboxItem>;
declare function getLabelsLockup(
  options: ComboboxParsedItem[]
): Record<string, string>;

type ComboboxChevronStylesNames = "root";
type ComboboxChevronCSSVariables = {
  root: "--combobox-chevron-size";
};
interface ComboboxChevronProps
  extends BoxProps,
    StylesApiProps<ComboboxChevronFactory>,
    ElementProps<"svg", "opacity" | "display"> {
  size?: RaikouSize | (string & {});
  error?: React__default.ReactNode;
}
type ComboboxChevronFactory = Factory<{
  props: ComboboxChevronProps;
  ref: SVGSVGElement;
  stylesNames: ComboboxChevronStylesNames;
  vars: ComboboxChevronCSSVariables;
}>;
declare const ComboboxChevron: RaikouComponent<{
  props: ComboboxChevronProps;
  ref: SVGSVGElement;
  stylesNames: ComboboxChevronStylesNames;
  vars: ComboboxChevronCSSVariables;
}>;

type ComboboxGroupStylesNames = "group" | "groupLabel";
interface ComboboxGroupProps
  extends BoxProps,
    StylesApiProps<ComboboxGroupFactory>,
    ElementProps<"div"> {
  /** Group label */
  label?: React__default.ReactNode;
}
type ComboboxGroupFactory = Factory<{
  props: ComboboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxGroupStylesNames;
  compound: true;
}>;
declare const ComboboxGroup: RaikouComponent<{
  props: ComboboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxGroupStylesNames;
  compound: true;
}>;

interface ComboboxDropdownTargetProps {
  /** Target element */
  children: React__default.ReactNode;
  /** Key of the prop that should be used to access element ref */
  refProp?: string;
}
declare const ComboboxDropdownTarget: RaikouComponent<{
  props: ComboboxDropdownTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

interface ComboboxEventsTargetProps {
  /** Target element */
  children: React__default.ReactNode;
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
declare const ComboboxEventsTarget: RaikouComponent<{
  props: ComboboxEventsTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

type ComboboxHeaderStylesNames = "header";
interface ComboboxHeaderProps
  extends BoxProps,
    StylesApiProps<ComboboxHeaderFactory>,
    ElementProps<"div"> {}
type ComboboxHeaderFactory = Factory<{
  props: ComboboxHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxHeaderStylesNames;
  compound: true;
}>;
declare const ComboboxHeader: RaikouComponent<{
  props: ComboboxHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxHeaderStylesNames;
  compound: true;
}>;

type ComboboxFooterStylesNames = "footer";
interface ComboboxFooterProps
  extends BoxProps,
    StylesApiProps<ComboboxFooterFactory>,
    ElementProps<"div"> {}
type ComboboxFooterFactory = Factory<{
  props: ComboboxFooterProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxFooterStylesNames;
  compound: true;
}>;
declare const ComboboxFooter: RaikouComponent<{
  props: ComboboxFooterProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxFooterStylesNames;
  compound: true;
}>;

type ComboboxEmptyStylesNames = "empty";
interface ComboboxEmptyProps
  extends BoxProps,
    StylesApiProps<ComboboxEmptyFactory>,
    ElementProps<"div"> {}
type ComboboxEmptyFactory = Factory<{
  props: ComboboxEmptyProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxEmptyStylesNames;
  compound: true;
}>;
declare const ComboboxEmpty: RaikouComponent<{
  props: ComboboxEmptyProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxEmptyStylesNames;
  compound: true;
}>;

type ComboboxSearchStylesNames = InputStylesNames;
interface ComboboxSearchProps
  extends InputProps,
    ElementProps<"input", "size"> {
  /** Determines whether the search input should have `aria-` attribute, `true` by default */
  withAriaAttributes?: boolean;
  /** Determines whether the search input should handle keyboard navigation, `true` by default */
  withKeyboardNavigation?: boolean;
}
declare const ComboboxSearch: RaikouComponent<{
  props: ComboboxSearchProps;
  ref: HTMLInputElement;
  stylesNames: ComboboxSearchStylesNames;
}>;

type ComboboxOptionsStylesNames = "options";
interface ComboboxOptionsProps
  extends BoxProps,
    StylesApiProps<ComboboxOptionsFactory>,
    ElementProps<"div"> {}
type ComboboxOptionsFactory = Factory<{
  props: ComboboxOptionsProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionsStylesNames;
  compound: true;
}>;
declare const ComboboxOptions: RaikouComponent<{
  props: ComboboxOptionsProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionsStylesNames;
  compound: true;
}>;

interface PopoverDropdownProps
  extends BoxProps,
    StylesApiProps<PopoverDropdownFactory>,
    ElementProps<"div"> {}
type PopoverDropdownFactory = Factory<{
  props: PopoverDropdownProps;
  ref: HTMLDivElement;
  stylesNames: PopoverStylesNames;
  compound: true;
}>;
declare const PopoverDropdown: RaikouComponent<{
  props: PopoverDropdownProps;
  ref: HTMLDivElement;
  stylesNames: PopoverStylesNames;
  compound: true;
}>;

interface PopoverTargetProps {
  /** Target element */
  children: React__default.ReactNode;
  /** Key of the prop that should be used to access element ref */
  refProp?: string;
  /** Popup accessible type, `'dialog'` by default */
  popupType?: string;
}
declare const PopoverTarget: RaikouComponent<{
  props: PopoverTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

interface RaikouTransitionStyles {
  common?: React__default.CSSProperties;
  in: React__default.CSSProperties;
  out: React__default.CSSProperties;
  transitionProperty: React__default.CSSProperties["transitionProperty"];
}
type RaikouTransitionName =
  | "fade"
  | "skew-up"
  | "skew-down"
  | "rotate-right"
  | "rotate-left"
  | "slide-down"
  | "slide-up"
  | "slide-right"
  | "slide-left"
  | "scale-y"
  | "scale-x"
  | "scale"
  | "pop"
  | "pop-top-left"
  | "pop-top-right"
  | "pop-bottom-left"
  | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;
declare const transitions: Record<RaikouTransitionName, RaikouTransitionStyles>;

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
  children(styles: React__default.CSSProperties): JSX.Element;
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
declare function Transition({
  keepMounted,
  transition,
  duration,
  exitDuration,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited,
}: TransitionProps): JSX.Element | null;
declare namespace Transition {
  var displayName: string;
}

type MinimalTransitionOverride = SetRequired<
  TransitionOverride,
  "duration" | "transition"
>;
declare function getTransitionProps(
  transitionProps: TransitionOverride | undefined,
  componentTransition: TransitionOverride | undefined
): MinimalTransitionOverride;

interface UseDelayedHoverInput {
  open(): void;
  close(): void;
  openDelay: number;
  closeDelay: number;
}
declare function useDelayedHover({
  open,
  close,
  openDelay,
  closeDelay,
}: UseDelayedHoverInput): {
  openDropdown: () => void;
  closeDropdown: () => void;
};

type FloatingPlacement = "end" | "start";
type FloatingSide = "top" | "right" | "bottom" | "left";
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
type ArrowPosition = "center" | "side";
interface FloatingAxesOffsets {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}

interface Payload {
  opened: boolean | undefined;
  floating: {
    update(): void;
    refs: {
      floating: React.MutableRefObject<any>;
      reference: React.MutableRefObject<any>;
    };
  };
  positionDependencies: any[];
  position: FloatingPosition;
}
declare function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies,
}: Payload): void;

declare function getFloatingPosition(
  dir: "rtl" | "ltr",
  position: FloatingPosition
): FloatingPosition;

interface FloatingArrowProps
  extends React__default.ComponentPropsWithoutRef<"div"> {
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number;
  arrowY: number;
  visible: boolean | undefined;
}
declare const FloatingArrow: React__default.ForwardRefExoticComponent<
  FloatingArrowProps & React__default.RefAttributes<HTMLDivElement>
>;

type PopoverWidth = "target" | React.CSSProperties["width"];
interface PopoverMiddlewares {
  shift: boolean;
  flip: boolean;
  inline?: boolean;
}

type PopoverStylesNames = "dropdown" | "arrow";
type PopoverCssVariables = {
  dropdown: "--popover-radius" | "--popover-shadow";
};
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
  zIndex?: React__default.CSSProperties["zIndex"];
  /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Key of `theme.shadows` or any other valid CSS `box-shadow` value */
  shadow?: RaikouShadow | (string & {});
  /** If set, popover dropdown will not be rendered */
  disabled?: boolean;
  /** Determines whether focus should be automatically returned to control when dropdown closes, `false` by default */
  returnFocus?: boolean;
}
interface PopoverProps extends __PopoverProps, StylesApiProps<PopoverFactory> {
  __staticSelector?: string;
  /** `Popover.Target` and `Popover.Dropdown` components */
  children: React__default.ReactNode;
  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean;
  /** Controlled dropdown opened state */
  opened?: boolean;
  /** Called with current state when dropdown opens or closes */
  onChange?(opened: boolean): void;
  /** Determines whether dropdown should be closed on outside clicks, `true` by default */
  closeOnClickOutside?: boolean;
  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];
  /** Determines whether focus should be trapped within dropdown, `false` by default */
  trapFocus?: boolean;
  /** Determines whether dropdown should be closed when `Escape` key is pressed, `true` by default */
  closeOnEscape?: boolean;
  /** id base to create accessibility connections */
  id?: string;
  /** Determines whether dropdown and target elements should have accessible roles, `true` by default */
  withRoles?: boolean;
}
type PopoverFactory = Factory<{
  props: PopoverProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;
declare function Popover(_props: PopoverProps): JSX.Element;
declare namespace Popover {
  var Target: RaikouComponent<{
    props: PopoverTargetProps;
    ref: HTMLElement;
    compound: true;
  }>;
  var Dropdown: RaikouComponent<{
    props: PopoverDropdownProps;
    ref: HTMLDivElement;
    stylesNames: PopoverStylesNames;
    compound: true;
  }>;
  var displayName: string;
  var extend: (
    input: ExtendsRootComponent<{
      props: PopoverProps;
      stylesNames: PopoverStylesNames;
      vars: PopoverCssVariables;
    }>
  ) => ExtendsRootComponent<{
    props: PopoverProps;
    stylesNames: PopoverStylesNames;
    vars: PopoverCssVariables;
  }>;
}

type ComboboxDropdownStylesNames = "dropdown";
interface ComboboxDropdownProps extends PopoverDropdownProps {
  /** Determines whether the dropdown should be hidden, for example, when there are no options to display */
  hidden?: boolean;
}
declare const ComboboxDropdown: RaikouComponent<{
  props: ComboboxDropdownProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxDropdownStylesNames;
  compound: true;
}>;

interface ComboboxTargetProps {
  /** Target element */
  children: React__default.ReactNode;
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
declare const ComboboxTarget: RaikouComponent<{
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
declare function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop,
  scrollBehavior,
}?: UseComboboxOptions$1): ComboboxStore;

type ComboboxOptionStylesNames = "option";
interface ComboboxOptionProps
  extends BoxProps,
    StylesApiProps<ComboboxOptionFactory>,
    ElementProps<"div"> {
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
declare const ComboboxOption: RaikouComponent<{
  props: ComboboxOptionProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionStylesNames;
  compound: true;
}>;

type ComboboxStylesNames =
  | "options"
  | "dropdown"
  | "option"
  | "search"
  | "empty"
  | "footer"
  | "header"
  | "group"
  | "groupLabel";
type ComboboxCSSVariables = {
  options: "--combobox-option-fz" | "--combobox-option-padding";
  dropdown:
    | "--combobox-padding"
    | "--combobox-option-fz"
    | "--combobox-option-padding";
};
interface ComboboxProps
  extends __PopoverProps,
    StylesApiProps<ComboboxFactory> {
  /** Combobox content */
  children: React__default.ReactNode;
  /** Combobox store, can be used to control combobox state */
  store?: ComboboxStore;
  /** Called when item is selected with `Enter` key or by clicking it */
  onOptionSubmit?(value: string, optionProps: ComboboxOptionProps): void;
  /** Controls items `font-size` and `padding`, `'sm'` by default */
  size?: RaikouSize | (string & {});
  /** Controls `padding` of the dropdown, `4` by default */
  dropdownPadding?: React__default.CSSProperties["padding"];
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
  var Target: RaikouComponent<{
    props: ComboboxTargetProps;
    ref: HTMLElement;
    compound: true;
  }>;
  var Dropdown: RaikouComponent<{
    props: ComboboxDropdownProps;
    ref: HTMLDivElement;
    stylesNames: "dropdown";
    compound: true;
  }>;
  var Options: RaikouComponent<{
    props: ComboboxOptionsProps;
    ref: HTMLDivElement;
    stylesNames: "options";
    compound: true;
  }>;
  var Option: RaikouComponent<{
    props: ComboboxOptionProps;
    ref: HTMLDivElement;
    stylesNames: "option";
    compound: true;
  }>;
  var Search: RaikouComponent<{
    props: ComboboxSearchProps;
    ref: HTMLInputElement;
    stylesNames: InputStylesNames;
  }>;
  var Empty: RaikouComponent<{
    props: ComboboxEmptyProps;
    ref: HTMLDivElement;
    stylesNames: "empty";
    compound: true;
  }>;
  var Chevron: RaikouComponent<{
    props: ComboboxChevronProps;
    ref: SVGSVGElement;
    stylesNames: "root";
    vars: ComboboxChevronCSSVariables;
  }>;
  var Footer: RaikouComponent<{
    props: ComboboxFooterProps;
    ref: HTMLDivElement;
    stylesNames: "footer";
    compound: true;
  }>;
  var Header: RaikouComponent<{
    props: ComboboxHeaderProps;
    ref: HTMLDivElement;
    stylesNames: "header";
    compound: true;
  }>;
  var EventsTarget: RaikouComponent<{
    props: ComboboxEventsTargetProps;
    ref: HTMLElement;
    compound: true;
  }>;
  var DropdownTarget: RaikouComponent<{
    props: ComboboxDropdownTargetProps;
    ref: HTMLElement;
    compound: true;
  }>;
  var Group: RaikouComponent<{
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
declare function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea,
}: OptionsDropdownProps): JSX.Element;

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
declare function useVirtualizedCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop,
  totalOptionsCount,
  isOptionDisabled,
  getOptionId,
  selectedOptionIndex,
  setSelectedOptionIndex,
  activeOptionIndex,
  onSelectedOptionSubmit,
}?: UseComboboxOptions): ComboboxStore;

interface UseComboboxTargetPropsInput {
  targetType: "input" | "button" | undefined;
  withAriaAttributes: boolean | undefined;
  withKeyboardNavigation: boolean | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}
declare function useComboboxTargetProps({
  onKeyDown,
  withKeyboardNavigation,
  withAriaAttributes,
  targetType,
}: UseComboboxTargetPropsInput):
  | {
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
      "aria-haspopup": string;
      "aria-expanded": boolean | undefined;
      "aria-controls": string | null;
      "aria-activedescendant": string | undefined;
      autoComplete: string;
      "data-expanded": boolean | undefined;
    }
  | {
      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
      "aria-haspopup"?: undefined;
      "aria-expanded"?: undefined;
      "aria-controls"?: undefined;
      "aria-activedescendant"?: undefined;
      autoComplete?: undefined;
      "data-expanded"?: undefined;
    };

type ContainerStylesNames = "root";
type ContainerVariant = string;
type ContainerCssVariables = {
  root: "--container-size";
};
interface ContainerProps
  extends BoxProps,
    StylesApiProps<ContainerFactory>,
    ElementProps<"div"> {
  /** Sets `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
  /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. `false` by default. */
  fluid?: boolean;
}
type ContainerFactory = Factory<{
  props: ContainerProps;
  ref: HTMLDivElement;
  stylesNames: ContainerStylesNames;
  vars: ContainerCssVariables;
  variant: ContainerVariant;
}>;
declare const Container: RaikouComponent<{
  props: ContainerProps;
  ref: HTMLDivElement;
  stylesNames: ContainerStylesNames;
  vars: ContainerCssVariables;
  variant: ContainerVariant;
}>;

interface CopyButtonProps {
  /** Children callback, provides current status and copy function as an argument */
  children(payload: {
    copied: boolean;
    copy(): void;
  }): React__default.ReactNode;
  /** Value that will be copied to the clipboard when the button is clicked */
  value: string;
  /** Copied status timeout in ms, `1000` by default */
  timeout?: number;
}
declare function CopyButton(props: CopyButtonProps): JSX.Element;
declare namespace CopyButton {
  var displayName: string;
}

type DividerStylesNames = "root" | "label";
type DividerVariant = "solid" | "dashed" | "dotted";
type DividerCssVariables = {
  root: "--divider-color" | "--divider-border-style" | "--divider-size";
};
interface DividerProps
  extends BoxProps,
    StylesApiProps<DividerFactory>,
    ElementProps<"div"> {
  /** Key of `theme.colors` or any valid CSS color value, by default value depends on color scheme */
  color?: RaikouColor;
  /** Controls width/height (depends on orientation), `'xs'` by default */
  size?: RaikouSize | number | (string & {});
  /** Divider label, visible only when `orientation` is `horizontal` */
  label?: React__default.ReactNode;
  /** Controls label position, `'left'` by default */
  labelPosition?: "left" | "center" | "right";
  /** Controls orientation, `'horizontal'` by default */
  orientation?: "horizontal" | "vertical";
}
type DividerFactory = Factory<{
  props: DividerProps;
  ref: HTMLDivElement;
  stylesNames: DividerStylesNames;
  vars: DividerCssVariables;
  variant: DividerVariant;
}>;
declare const Divider: RaikouComponent<{
  props: DividerProps;
  ref: HTMLDivElement;
  stylesNames: DividerStylesNames;
  vars: DividerCssVariables;
  variant: DividerVariant;
}>;

interface ModalBaseProps extends BoxProps, ElementProps<"div", "title"> {
  /** If set modal/drawer will not be unmounted from the DOM when it is hidden, `display: none` styles will be added instead, `false` by default */
  keepMounted?: boolean;
  /** Determines whether modal/drawer is opened */
  opened: boolean;
  /** Called when modal/drawer is closed */
  onClose(): void;
  /** Id used to connect modal/drawer with body and title */
  id?: string;
  /** Determines whether scroll should be locked when `opened={true}`, `true` by default */
  lockScroll?: boolean;
  /** Determines whether focus should be trapped, `true` by default */
  trapFocus?: boolean;
  /** Determines whether the component should be rendered inside `Portal`, `true` by default */
  withinPortal?: boolean;
  /** Props passed down to the Portal component when `withinPortal` is set */
  portalProps?: Omit<PortalProps, "children">;
  /** Modal/drawer content */
  children?: React__default.ReactNode;
  /** Determines whether the modal/drawer should be closed when user clicks on the overlay, `true` by default */
  closeOnClickOutside?: boolean;
  /** Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'pop' }` by default */
  transitionProps?: TransitionOverride;
  /** Determines whether `onClose` should be called when user presses the escape key, `true` by default */
  closeOnEscape?: boolean;
  /** Determines whether focus should be returned to the last active element when `onClose` is called, `true` by default */
  returnFocus?: boolean;
  /** `z-index` CSS property of the root element, `200` by default */
  zIndex?: React__default.CSSProperties["zIndex"];
  /** Key of `theme.shadows` or any valid CSS box-shadow value, 'xl' by default */
  shadow?: RaikouShadow | (string & {});
  /** Key of `theme.spacing` or any valid CSS value to set content, header and footer padding, `'md'` by default */
  padding?: RaikouSpacing | (string & {}) | number;
  /** Controls width of the content area, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
}
declare const ModalBase: React__default.ForwardRefExoticComponent<
  ModalBaseProps & React__default.RefAttributes<HTMLDivElement>
>;

interface ModalBaseBodyProps extends BoxProps, ElementProps<"div"> {}
declare const ModalBaseBody: React__default.ForwardRefExoticComponent<
  ModalBaseBodyProps & React__default.RefAttributes<HTMLDivElement>
>;

interface ModalBaseCloseButtonProps extends BoxProps, ElementProps<"button"> {}
declare const ModalBaseCloseButton: React__default.ForwardRefExoticComponent<
  ModalBaseCloseButtonProps & React__default.RefAttributes<HTMLButtonElement>
>;

interface ModalBaseContentProps extends BoxProps, ElementProps<"div"> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;
}
interface _ModalBaseContentProps extends ModalBaseContentProps {
  innerProps: React__default.ComponentPropsWithoutRef<"div">;
}
declare const ModalBaseContent: React__default.ForwardRefExoticComponent<
  _ModalBaseContentProps & React__default.RefAttributes<HTMLDivElement>
>;

interface ModalBaseHeaderProps extends BoxProps, ElementProps<"div"> {}
declare const ModalBaseHeader: React__default.ForwardRefExoticComponent<
  ModalBaseHeaderProps & React__default.RefAttributes<HTMLDivElement>
>;

type OverlayStylesNames = "root";
type OverlayVariant = string;
type OverlayCssVariables = {
  root:
    | "--overlay-bg"
    | "--overlay-filter"
    | "--overlay-radius"
    | "--overlay-z-index";
};
interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
  /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
  backgroundOpacity?: number;
  /** Overlay `background-color`, `#000` by default */
  color?: React__default.CSSProperties["backgroundColor"];
  /** Overlay background blur, `0` by default */
  blur?: number | string;
  /** Changes overlay to gradient. If set, `color` prop is ignored */
  gradient?: string;
  /** Overlay z-index, `200` by default */
  zIndex?: React__default.CSSProperties["zIndex"];
  /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Content inside overlay */
  children?: React__default.ReactNode;
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
  variant: OverlayVariant;
}>;
declare const Overlay: (<C = "div">(
  props: PolymorphicComponentProps<C, OverlayProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (OverlayProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof OverlayProps> & {
            ref?: any;
          })
      | (OverlayProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
    variant: OverlayVariant;
  }> &
  ComponentClasses<{
    props: OverlayProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: OverlayStylesNames;
    vars: OverlayCssVariables;
    variant: OverlayVariant;
  }> &
  Record<string, never>;

interface ModalBaseOverlayProps
  extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">,
    ElementProps<"div", "color"> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;
}
declare const ModalBaseOverlay: React__default.ForwardRefExoticComponent<
  ModalBaseOverlayProps & React__default.RefAttributes<HTMLDivElement>
>;

interface ModalBaseTitleProps extends BoxProps, ElementProps<"h2"> {}
declare const ModalBaseTitle: React__default.ForwardRefExoticComponent<
  ModalBaseTitleProps & React__default.RefAttributes<HTMLHeadingElement>
>;

interface NativeScrollAreaProps {
  children: React__default.ReactNode;
}
declare function NativeScrollArea({
  children,
}: NativeScrollAreaProps): JSX.Element;

type ModalBaseStylesNames =
  | "body"
  | "header"
  | "title"
  | "overlay"
  | "root"
  | "content"
  | "close"
  | "inner";

type ScrollAreaComponent$1 = React.FC<any>;

type DrawerPosition = "bottom" | "left" | "right" | "top";
type DrawerRootStylesNames = ModalBaseStylesNames;
type DrawerRootVariant = string;
type DrawerRootCssVariables = {
  root:
    | "--drawer-size"
    | "--drawer-flex"
    | "--drawer-height"
    | "--drawer-align"
    | "--drawer-justify";
};
interface DrawerRootProps
  extends StylesApiProps<DrawerRootFactory>,
    ModalBaseProps {
  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent$1;
  /** Side of the screen on which drawer will be opened, `'left'` by default */
  position?: DrawerPosition;
}
type DrawerRootFactory = Factory<{
  props: DrawerRootProps;
  ref: HTMLDivElement;
  stylesNames: DrawerRootStylesNames;
  vars: DrawerRootCssVariables;
  variant: DrawerRootVariant;
  compound: true;
}>;
declare const DrawerRoot: RaikouComponent<{
  props: DrawerRootProps;
  ref: HTMLDivElement;
  stylesNames: DrawerRootStylesNames;
  vars: DrawerRootCssVariables;
  variant: DrawerRootVariant;
  compound: true;
}>;

type DrawerBodyStylesNames = "body";
interface DrawerBodyProps
  extends ModalBaseBodyProps,
    StylesApiProps<DrawerBodyFactory> {}
type DrawerBodyFactory = Factory<{
  props: DrawerBodyProps;
  ref: HTMLDivElement;
  stylesNames: DrawerBodyStylesNames;
  compound: true;
}>;
declare const DrawerBody: RaikouComponent<{
  props: DrawerBodyProps;
  ref: HTMLDivElement;
  stylesNames: DrawerBodyStylesNames;
  compound: true;
}>;

type DrawerCloseButtonStylesNames = "close";
interface DrawerCloseButtonProps
  extends ModalBaseCloseButtonProps,
    StylesApiProps<DrawerCloseButtonFactory> {}
type DrawerCloseButtonFactory = Factory<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;
declare const DrawerCloseButton: RaikouComponent<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;

type DrawerOverlayStylesNames = "overlay";
interface DrawerOverlayProps
  extends ModalBaseOverlayProps,
    StylesApiProps<DrawerOverlayFactory> {}
type DrawerOverlayFactory = Factory<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;
declare const DrawerOverlay: RaikouComponent<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;

type DrawerContentStylesNames = "content" | "inner";
interface DrawerContentProps
  extends ModalBaseContentProps,
    StylesApiProps<DrawerContentFactory> {}
type DrawerContentFactory = Factory<{
  props: DrawerContentProps;
  ref: HTMLDivElement;
  stylesNames: DrawerContentStylesNames;
  compound: true;
}>;
declare const DrawerContent: RaikouComponent<{
  props: DrawerContentProps;
  ref: HTMLDivElement;
  stylesNames: DrawerContentStylesNames;
  compound: true;
}>;

type DrawerTitleStylesNames = "title";
interface DrawerTitleProps
  extends ModalBaseTitleProps,
    StylesApiProps<DrawerTitleFactory> {}
type DrawerTitleFactory = Factory<{
  props: DrawerTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: DrawerTitleStylesNames;
  compound: true;
}>;
declare const DrawerTitle: RaikouComponent<{
  props: DrawerTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: DrawerTitleStylesNames;
  compound: true;
}>;

type DrawerHeaderStylesNames = "header";
interface DrawerHeaderProps
  extends ModalBaseHeaderProps,
    StylesApiProps<DrawerHeaderFactory> {}
type DrawerHeaderFactory = Factory<{
  props: DrawerHeaderProps;
  ref: HTMLDivElement;
  stylesNames: DrawerHeaderStylesNames;
  compound: true;
}>;
declare const DrawerHeader: RaikouComponent<{
  props: DrawerHeaderProps;
  ref: HTMLDivElement;
  stylesNames: DrawerHeaderStylesNames;
  compound: true;
}>;

type DrawerStylesNames = DrawerRootStylesNames;
type DrawerVariant = string;
type DrawerCssVariables = DrawerRootCssVariables;
interface DrawerProps extends DrawerRootProps {
  /** Drawer title */
  title?: React__default.ReactNode;
  /** Determines whether the overlay should be rendered, `true` by default */
  withOverlay?: boolean;
  /** Props passed down to the `Overlay` component, can be used to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;
  /** Drawer content */
  children?: React__default.ReactNode;
  /** Determines whether the close button should be rendered, `true` by default */
  withCloseButton?: boolean;
  /** Props passed down to the close button */
  closeButtonProps?: ModalBaseCloseButtonProps;
}
type DrawerFactory = Factory<{
  props: DrawerProps;
  ref: HTMLDivElement;
  stylesNames: DrawerStylesNames;
  vars: DrawerCssVariables;
  variant: DrawerVariant;
  staticComponents: {
    Root: typeof DrawerRoot;
    Overlay: typeof DrawerOverlay;
    Content: typeof DrawerContent;
    Body: typeof DrawerBody;
    Header: typeof DrawerHeader;
    Title: typeof DrawerTitle;
    CloseButton: typeof DrawerCloseButton;
  };
}>;
declare const Drawer: RaikouComponent<{
  props: DrawerProps;
  ref: HTMLDivElement;
  stylesNames: DrawerStylesNames;
  vars: DrawerCssVariables;
  variant: DrawerVariant;
  staticComponents: {
    Root: typeof DrawerRoot;
    Overlay: typeof DrawerOverlay;
    Content: typeof DrawerContent;
    Body: typeof DrawerBody;
    Header: typeof DrawerHeader;
    Title: typeof DrawerTitle;
    CloseButton: typeof DrawerCloseButton;
  };
}>;

type FieldsetStylesNames = "root" | "legend";
type FieldsetVariant = "default" | "filled" | "unstyled";
type FieldsetCSSVariables = {
  root: "--fieldset-radius";
};
interface FieldsetProps
  extends BoxProps,
    StylesApiProps<FieldsetFactory>,
    ElementProps<"fieldset"> {
  /** Fieldset legend */
  legend?: React__default.ReactNode;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
}
type FieldsetFactory = Factory<{
  props: FieldsetProps;
  ref: HTMLFieldSetElement;
  stylesNames: FieldsetStylesNames;
  vars: FieldsetCSSVariables;
  variant: FieldsetVariant;
}>;
declare const Fieldset: RaikouComponent<{
  props: FieldsetProps;
  ref: HTMLFieldSetElement;
  stylesNames: FieldsetStylesNames;
  vars: FieldsetCSSVariables;
  variant: FieldsetVariant;
}>;

interface FileButtonProps<Multiple extends boolean = false> {
  /** Called when files are picked */
  onChange(payload: Multiple extends true ? File[] : File | null): void;
  /** Function that receives button props and returns react node that should be rendered */
  children(props: { onClick(): void }): React__default.ReactNode;
  /** Determines whether user can pick more than one file */
  multiple?: Multiple;
  /** File input accept attribute, for example, `"image/png,image/jpeg"` */
  accept?: string;
  /** Input name attribute */
  name?: string;
  /** Input form attribute */
  form?: string;
  /** Reference of the function that should be called when value changes to null or empty array */
  resetRef?: React__default.ForwardedRef<() => void>;
  /** Disables file picker */
  disabled?: boolean;
  /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
  capture?: boolean | "user" | "environment";
  /** Passes down props to the input element used to capture files */
  inputProps?: React__default.ComponentPropsWithoutRef<"input">;
}
type FileButtonComponent = (<Multiple extends boolean = false>(
  props: FileButtonProps<Multiple>
) => React__default.ReactElement) & {
  displayName?: string;
};
declare const FileButton: FileButtonComponent;

type FlexStylesNames = "root";
type FlexVariant = string;
type FlexCssVariables = {
  root:
    | "--flex-gap"
    | "--flex-align"
    | "--flex-justify"
    | "--flex-wrap"
    | "--flex-direction";
};
interface FlexProps
  extends BoxProps,
    StylesApiProps<FlexFactory>,
    ElementProps<"div"> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
  gap?: RaikouSpacing | (string & {}) | number;
  /** Controls `align-items` CSS property, `'stretch'` by default */
  align?: React__default.CSSProperties["alignItems"];
  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React__default.CSSProperties["justifyContent"];
  /** Controls `flex-wrap` CSS property, `'wrap'` by default */
  wrap?: React__default.CSSProperties["flexWrap"];
  /** Controls `direction` CSS property, `'row'` by default */
  direction?: React__default.CSSProperties["flexDirection"];
}
type FlexFactory = Factory<{
  props: FlexProps;
  ref: HTMLDivElement;
  stylesNames: FlexStylesNames;
  vars: FlexCssVariables;
  variant: FlexVariant;
}>;
declare const Flex: RaikouComponent<{
  props: FlexProps;
  ref: HTMLDivElement;
  stylesNames: FlexStylesNames;
  vars: FlexCssVariables;
  variant: FlexVariant;
}>;

interface FocusTrapProps {
  /** Element at which focus should be trapped, should support ref prop */
  children: any;
  /** Determines whether focus should be trapped within child element */
  active?: boolean;
  /** Prop that should be used to access component ref */
  refProp?: string;
}
declare function FocusTrap({
  children,
  active,
  refProp,
}: FocusTrapProps): React__default.ReactElement;
declare namespace FocusTrap {
  var displayName: string;
}

type GroupStylesNames = "root";
type GroupVariant = string;
type GroupCssVariables = {
  root:
    | "--group-gap"
    | "--group-align"
    | "--group-justify"
    | "--group-wrap"
    | "--group-child-width";
};
interface GroupStylesCtx {
  childWidth: string;
}
interface GroupProps
  extends BoxProps,
    StylesApiProps<GroupFactory>,
    ElementProps<"div"> {
  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React__default.CSSProperties["justifyContent"];
  /** Controls `align-items` CSS property, `'center'` by default */
  align?: React__default.CSSProperties["alignItems"];
  /** Controls `flex-wrap` CSS property, `'wrap'` by default */
  wrap?: React__default.CSSProperties["flexWrap"];
  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem, `'md'` by default */
  gap?: RaikouSpacing | (string & {}) | number;
  /** Determines whether each child element should have `flex-grow: 1` style, `false` by default */
  grow?: boolean;
  /** Determines whether children should take only dedicated amount of space (`max-width` style is set based on the number of children), `true` by default */
  preventGrowOverflow?: boolean;
}
type GroupFactory = Factory<{
  props: GroupProps;
  ref: HTMLDivElement;
  stylesNames: GroupStylesNames;
  vars: GroupCssVariables;
  ctx: GroupStylesCtx;
  variant: GroupVariant;
}>;
declare const Group: RaikouComponent<{
  props: GroupProps;
  ref: HTMLDivElement;
  stylesNames: GroupStylesNames;
  vars: GroupCssVariables;
  ctx: GroupStylesCtx;
  variant: GroupVariant;
}>;

interface HighlightProps extends TextProps {
  /** Substring or an array of substrings to highlight in `children` */
  highlight: string | string[];
  /** Key of `theme.colors` or any valid CSS color, passed to `Mark` component `color` prop, `yellow` by default */
  color?: RaikouColor | string;
  /** Styles applied to `mark` elements */
  highlightStyles?:
    | React__default.CSSProperties
    | ((theme: RaikouTheme) => React__default.CSSProperties);
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
declare const Highlight: (<C = "div">(
  props: PolymorphicComponentProps<C, HighlightProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (HighlightProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof HighlightProps> & {
            ref?: any;
          })
      | (HighlightProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: TextStylesNames;
    variant: TextVariant;
  }> &
  ComponentClasses<{
    props: HighlightProps;
    defaultRef: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: TextStylesNames;
    variant: TextVariant;
  }> &
  Record<string, never>;

interface InputBaseProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<InputBaseFactory> {
  __staticSelector?: string;
  /** Props passed to the root element (`Input.Wrapper` component) */
  wrapperProps?: Record<string, any>;
  /** Determines whether the input can have multiple lines, for example when `component="textarea"`, `false` by default */
  multiline?: boolean;
  /** Determines whether `aria-` and other accessibility attributes should be added to the input, `true` by default */
  withAria?: boolean;
}
type InputBaseFactory = PolymorphicFactory<{
  props: InputBaseProps;
  defaultRef: HTMLInputElement;
  defaultComponent: "input";
  stylesNames: __InputStylesNames;
  variant: InputVariant;
}>;
declare const InputBase: (<C = "input">(
  props: PolymorphicComponentProps<C, InputBaseProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (InputBaseProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof InputBaseProps> & {
            ref?: any;
          })
      | (InputBaseProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: InputBaseProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: __InputStylesNames;
    variant: InputVariant;
  }> &
  ComponentClasses<{
    props: InputBaseProps;
    defaultRef: HTMLInputElement;
    defaultComponent: "input";
    stylesNames: __InputStylesNames;
    variant: InputVariant;
  }> &
  Record<string, never>;

type KbdStylesNames = "root";
type KbdVariant = string;
type KbdCssVariables = {
  root: "--kbd-padding" | "--kbd-fz";
};
interface KbdProps
  extends BoxProps,
    StylesApiProps<KbdFactory>,
    ElementProps<"kbd"> {
  /** Controls font-size and padding, `'sm'` by default */
  size?: RaikouSize | (string & {});
}
type KbdFactory = Factory<{
  props: KbdProps;
  ref: HTMLElement;
  stylesNames: KbdStylesNames;
  vars: KbdCssVariables;
  variant: KbdVariant;
}>;
declare const Kbd: RaikouComponent<{
  props: KbdProps;
  ref: HTMLElement;
  stylesNames: KbdStylesNames;
  vars: KbdCssVariables;
  variant: KbdVariant;
}>;

type MarkStylesNames = "root";
type MarkCssVariables = {
  root: "--mark-bg-dark" | "--mark-bg-light";
};
interface MarkProps
  extends BoxProps,
    StylesApiProps<MarkFactory>,
    ElementProps<"mark"> {
  /** Key of `theme.colors` or any valid CSS color, `yellow` by default */
  color?: RaikouColor;
}
type MarkFactory = Factory<{
  props: MarkProps;
  ref: HTMLElement;
  stylesNames: MarkStylesNames;
  vars: MarkCssVariables;
}>;
declare const Mark: RaikouComponent<{
  props: MarkProps;
  ref: HTMLElement;
  stylesNames: MarkStylesNames;
  vars: MarkCssVariables;
}>;

type ScrollAreaComponent = React.FC<any>;

type ModalRootStylesNames = ModalBaseStylesNames;
type ModalRootVariant = string;
type ModalRootCssVariables = {
  root:
    | "--modal-radius"
    | "--modal-size"
    | "--modal-y-offset"
    | "--modal-x-offset";
};
interface ModalRootProps
  extends StylesApiProps<ModalRootFactory>,
    ModalBaseProps {
  __staticSelector?: string;
  /** Top/bottom modal offset, `5vh` by default */
  yOffset?: React__default.CSSProperties["marginTop"];
  /** Left/right modal offset, `5vw` by default */
  xOffset?: React__default.CSSProperties["marginLeft"];
  /** Scroll area component, native `div` element by default */
  scrollAreaComponent?: ScrollAreaComponent;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Determines whether the modal should be centered vertically, `false` by default */
  centered?: boolean;
  /** Determines whether the modal should take the entire screen, `false` by default */
  fullScreen?: boolean;
}
type ModalRootFactory = Factory<{
  props: ModalRootProps;
  ref: HTMLDivElement;
  stylesNames: ModalRootStylesNames;
  vars: ModalRootCssVariables;
  variant: ModalRootVariant;
  compound: true;
}>;
declare const ModalRoot: RaikouComponent<{
  props: ModalRootProps;
  ref: HTMLDivElement;
  stylesNames: ModalRootStylesNames;
  vars: ModalRootCssVariables;
  variant: ModalRootVariant;
  compound: true;
}>;

type ModalBodyStylesNames = "body";
interface ModalBodyProps
  extends ModalBaseBodyProps,
    StylesApiProps<ModalBodyFactory> {}
type ModalBodyFactory = Factory<{
  props: ModalBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBodyStylesNames;
  compound: true;
}>;
declare const ModalBody: RaikouComponent<{
  props: ModalBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBodyStylesNames;
  compound: true;
}>;

type ModalCloseButtonStylesNames = "close";
interface ModalCloseButtonProps
  extends ModalBaseCloseButtonProps,
    StylesApiProps<ModalCloseButtonFactory> {}
type ModalCloseButtonFactory = Factory<{
  props: ModalCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalCloseButtonStylesNames;
  compound: true;
}>;
declare const ModalCloseButton: RaikouComponent<{
  props: ModalCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalCloseButtonStylesNames;
  compound: true;
}>;

type ModalOverlayStylesNames = "overlay";
interface ModalOverlayProps
  extends ModalBaseOverlayProps,
    StylesApiProps<ModalOverlayFactory> {}
type ModalOverlayFactory = Factory<{
  props: ModalOverlayProps;
  ref: HTMLDivElement;
  stylesNames: ModalOverlayStylesNames;
  compound: true;
}>;
declare const ModalOverlay: RaikouComponent<{
  props: ModalOverlayProps;
  ref: HTMLDivElement;
  stylesNames: ModalOverlayStylesNames;
  compound: true;
}>;

type ModalContentStylesNames = "content" | "inner";
interface ModalContentProps
  extends ModalBaseContentProps,
    StylesApiProps<ModalContentFactory> {}
type ModalContentFactory = Factory<{
  props: ModalContentProps;
  ref: HTMLDivElement;
  stylesNames: ModalContentStylesNames;
  compound: true;
}>;
declare const ModalContent: RaikouComponent<{
  props: ModalContentProps;
  ref: HTMLDivElement;
  stylesNames: ModalContentStylesNames;
  compound: true;
}>;

type ModalTitleStylesNames = "title";
interface ModalTitleProps
  extends ModalBaseTitleProps,
    StylesApiProps<ModalTitleFactory> {}
type ModalTitleFactory = Factory<{
  props: ModalTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: ModalTitleStylesNames;
  compound: true;
}>;
declare const ModalTitle: RaikouComponent<{
  props: ModalTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: ModalTitleStylesNames;
  compound: true;
}>;

type ModalHeaderStylesNames = "header";
interface ModalHeaderProps
  extends ModalBaseHeaderProps,
    StylesApiProps<ModalHeaderFactory> {}
type ModalHeaderFactory = Factory<{
  props: ModalHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ModalHeaderStylesNames;
  compound: true;
}>;
declare const ModalHeader: RaikouComponent<{
  props: ModalHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ModalHeaderStylesNames;
  compound: true;
}>;

type ModalStylesNames = ModalRootStylesNames;
type ModalVariant = string;
type ModalCssVariables = ModalRootCssVariables;
interface ModalProps extends ModalRootProps {
  __staticSelector?: string;
  /** Modal title */
  title?: React__default.ReactNode;
  /** Determines whether the overlay should be rendered, `true` by default */
  withOverlay?: boolean;
  /** Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties */
  overlayProps?: ModalBaseOverlayProps;
  /** Modal content */
  children?: React__default.ReactNode;
  /** Determines whether the close button should be rendered, `true` by default */
  withCloseButton?: boolean;
  /** Props passed down to the close button */
  closeButtonProps?: ModalBaseCloseButtonProps;
}
type ModalFactory = Factory<{
  props: ModalProps;
  ref: HTMLDivElement;
  stylesNames: ModalStylesNames;
  vars: ModalCssVariables;
  variant: ModalVariant;
  staticComponents: {
    Root: typeof ModalRoot;
    Overlay: typeof ModalOverlay;
    Content: typeof ModalContent;
    Body: typeof ModalBody;
    Header: typeof ModalHeader;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
  };
}>;
declare const Modal: RaikouComponent<{
  props: ModalProps;
  ref: HTMLDivElement;
  stylesNames: ModalStylesNames;
  vars: ModalCssVariables;
  variant: ModalVariant;
  staticComponents: {
    Root: typeof ModalRoot;
    Overlay: typeof ModalOverlay;
    Content: typeof ModalContent;
    Body: typeof ModalBody;
    Header: typeof ModalHeader;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
  };
}>;

interface NativeSelectProps
  extends InputBaseProps,
    ElementProps<"select", "size"> {
  /** Data used to render options, can be replaced with `children` */
  data?: ComboboxData;
}
type NativeSelectFactory = Factory<{
  props: NativeSelectProps;
  ref: HTMLSelectElement;
  stylesNames: __InputStylesNames;
}>;
declare const NativeSelect: RaikouComponent<{
  props: NativeSelectProps;
  ref: HTMLSelectElement;
  stylesNames: __InputStylesNames;
}>;

type NotificationStylesNames =
  | "root"
  | "icon"
  | "loader"
  | "body"
  | "title"
  | "description"
  | "closeButton";
type NotificationVariant = string;
type NotificationCssVariables = {
  root: "--notification-radius" | "--notification-color";
};
interface NotificationProps
  extends BoxProps,
    StylesApiProps<NotificationFactory>,
    ElementProps<"div", "title"> {
  variant?: string;
  /** Called when close button is clicked */
  onClose?(): void;
  /** Controls notification line or icon color, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Notification icon, replaces color line */
  icon?: React__default.ReactNode;
  /** Notification title, displayed before body */
  title?: React__default.ReactNode;
  /** Notification body, place main text here */
  children?: React__default.ReactNode;
  /** Replaces colored line or icon with Loader component */
  loading?: boolean;
  /** Determines whether notification should have a border, `false` by default */
  withBorder?: boolean;
  /** Determines whether close button should be visible, `true` by default */
  withCloseButton?: boolean;
  /** Props passed down to the close button */
  closeButtonProps?: Record<string, any>;
}
type NotificationFactory = Factory<{
  props: NotificationProps;
  ref: HTMLDivElement;
  stylesNames: NotificationStylesNames;
  vars: NotificationCssVariables;
  variant: NotificationVariant;
}>;
declare const Notification: RaikouComponent<{
  props: NotificationProps;
  ref: HTMLDivElement;
  stylesNames: NotificationStylesNames;
  vars: NotificationCssVariables;
  variant: NotificationVariant;
}>;

type PaperStylesNames = "root";
type PaperVariant = string;
type PaperCssVariables = {
  root: "--paper-radius" | "--paper-shadow";
};
interface PaperProps extends BoxProps, StylesApiProps<PaperFactory> {
  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
  shadow?: RaikouShadow | (string & {});
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius | number | (string & {});
  /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
  withBorder?: boolean;
}
type PaperFactory = PolymorphicFactory<{
  props: PaperProps;
  defaultComponent: "div";
  defaultRef: HTMLDivElement;
  stylesNames: PaperStylesNames;
  vars: PaperCssVariables;
}>;
declare const Paper: (<C = "div">(
  props: PolymorphicComponentProps<C, PaperProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (PaperProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof PaperProps> & {
            ref?: any;
          })
      | (PaperProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: PaperProps;
    defaultComponent: "div";
    defaultRef: HTMLDivElement;
    stylesNames: PaperStylesNames;
    vars: PaperCssVariables;
  }> &
  ComponentClasses<{
    props: PaperProps;
    defaultComponent: "div";
    defaultRef: HTMLDivElement;
    stylesNames: PaperStylesNames;
    vars: PaperCssVariables;
  }> &
  Record<string, never>;

type ScrollAreaStylesNames =
  | "root"
  | "viewport"
  | "viewportInner"
  | "scrollbar"
  | "thumb"
  | "corner";
type ScrollAreaVariant = string;
type ScrollAreaCssVariables = {
  root: "--scrollarea-scrollbar-size";
};
interface ScrollAreaProps
  extends BoxProps,
    StylesApiProps<ScrollAreaFactory>,
    ElementProps<"div"> {
  /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
  scrollbarSize?: number | string;
  /**
   * Defines scrollbars behavior, `hover` by default
   * - `hover` – scrollbars are visible when mouse is over the scroll area
   * - `scroll` – scrollbars are visible when the scroll area is scrolled
   * - `always` – scrollbars are always visible
   * - `never` – scrollbars are always hidden
   * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
   * */
  type?: "auto" | "always" | "scroll" | "hover" | "never";
  /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
  scrollHideDelay?: number;
  /** Determines whether scrollbars should be offset with padding, `false` by default */
  offsetScrollbars?: boolean;
  /** Assigns viewport element (scrollable container) ref */
  viewportRef?: React__default.ForwardedRef<HTMLDivElement>;
  /** Props passed down to the viewport element */
  viewportProps?: React__default.ComponentPropsWithRef<"div">;
  /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
  onScrollPositionChange?(position: { x: number; y: number }): void;
}
interface ScrollAreaAutosizeProps extends ScrollAreaProps {}
type ScrollAreaFactory = Factory<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;
declare const ScrollArea: RaikouComponent<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;
declare const ScrollAreaAutosize: RaikouComponent<{
  props: ScrollAreaProps;
  ref: HTMLDivElement;
  stylesNames: ScrollAreaStylesNames;
  vars: ScrollAreaCssVariables;
  staticComponents: {
    Autosize: typeof ScrollAreaAutosize;
  };
}>;

type SegmentedControlStylesNames =
  | "root"
  | "input"
  | "label"
  | "control"
  | "indicator";
type SegmentedControlVariant = string;
type SegmentedControlCssVariables = {
  root:
    | "--sc-radius"
    | "--sc-color"
    | "--sc-font-size"
    | "--sc-padding"
    | "--sc-shadow"
    | "--sc-transition-duration"
    | "--sc-transition-timing-function";
};
interface SegmentedControlItem {
  value: string;
  label: React__default.ReactNode;
  disabled?: boolean;
}
interface SegmentedControlProps
  extends BoxProps,
    StylesApiProps<SegmentedControlFactory>,
    ElementProps<"div", "onChange"> {
  /** Data based on which controls are rendered */
  data: (string | SegmentedControlItem)[];
  /** Controlled component value */
  value?: string;
  /** Uncontrolled component default value */
  defaultValue?: string;
  /** Called when value changes */
  onChange?(value: string): void;
  /** Determines whether the component is disabled */
  disabled?: boolean;
  /** Name of the radio group, by default random name is generated */
  name?: string;
  /** Determines whether the component should take 100% width of its parent, `false` by default */
  fullWidth?: boolean;
  /** Key of `theme.colors` or any valid CSS color, changes color of indicator, by default color is based on current color scheme */
  color?: RaikouColor;
  /** Controls `font-size`, `padding` and `height` properties, `'sm'` by default */
  size?: RaikouSize | (string & {});
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Indicator `transition-duration` in ms, set `0` to turn off transitions, `200` by default */
  transitionDuration?: number;
  /** Indicator `transition-timing-function` property, `ease` by default */
  transitionTimingFunction?: string;
  /** Determines in which orientation component id displayed, `'horizontal'` by default */
  orientation?: "vertical" | "horizontal";
  /** Determines whether the value can be changed */
  readOnly?: boolean;
}
type SegmentedControlFactory = Factory<{
  props: SegmentedControlProps;
  ref: HTMLDivElement;
  stylesNames: SegmentedControlStylesNames;
  vars: SegmentedControlCssVariables;
}>;
declare const SegmentedControl: RaikouComponent<{
  props: SegmentedControlProps;
  ref: HTMLDivElement;
  stylesNames: SegmentedControlStylesNames;
  vars: SegmentedControlCssVariables;
}>;

type SliderStylesNames =
  | "root"
  | "label"
  | "thumb"
  | "trackContainer"
  | "track"
  | "bar"
  | "markWrapper"
  | "mark"
  | "markLabel";
type SliderCssVariables = {
  root:
    | "--slider-size"
    | "--slider-color"
    | "--slider-thumb-size"
    | "--slider-radius";
};
type SliderVariant = string;

interface SliderProps
  extends BoxProps,
    StylesApiProps<SliderFactory>,
    ElementProps<"div", "onChange"> {
  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Controls size of the track, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
  /** Minimal possible value, `0` by default */
  min?: number;
  /** Maximum possible value, `100` by default */
  max?: number;
  /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
  step?: number;
  /** Number of significant digits after the decimal point */
  precision?: number;
  /** Controlled component value */
  value?: number;
  /** Uncontrolled component default value */
  defaultValue?: number;
  /** Called when value changes */
  onChange?(value: number): void;
  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: number): void;
  /** Hidden input name, use with uncontrolled component */
  name?: string;
  /** Marks displayed on the track */
  marks?: {
    value: number;
    label?: React__default.ReactNode;
  }[];
  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?:
    | React__default.ReactNode
    | ((value: number) => React__default.ReactNode);
  /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
  labelTransitionProps?: TransitionOverride;
  /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
  labelAlwaysOn?: boolean;
  /** Thumb `aria-label` */
  thumbLabel?: string;
  /** Determines whether thumb label should be displayed when the slider is hovered, `true` by default */
  showLabelOnHover?: boolean;
  /** Content rendered inside thumb */
  thumbChildren?: React__default.ReactNode;
  /** Disables slider */
  disabled?: boolean;
  /** Thumb `width` and `height`, by default value is computed based on `size` prop */
  thumbSize?: number | string;
  /** A transformation function to change the scale of the slider */
  scale?(value: number): number;
  /** Determines whether track value representation should be inverted, `false` by default */
  inverted?: boolean;
}
type SliderFactory = Factory<{
  props: SliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  variant: SliderVariant;
}>;
declare const Slider: RaikouComponent<{
  props: SliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  variant: SliderVariant;
}>;

type RangeSliderValue = [number, number];
interface RangeSliderProps
  extends BoxProps,
    StylesApiProps<RangeSliderFactory>,
    ElementProps<"div", "onChange" | "value" | "defaultValue"> {
  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Controls size of the track, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;
  /** Minimal possible value, `0` by default */
  min?: number;
  /** Maximum possible value, `100` by default */
  max?: number;
  /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
  step?: number;
  /** Number of significant digits after the decimal point */
  precision?: number;
  /** Controlled component value */
  value?: RangeSliderValue;
  /** Uncontrolled component default value */
  defaultValue?: RangeSliderValue;
  /** Called when value changes */
  onChange?(value: RangeSliderValue): void;
  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: RangeSliderValue): void;
  /** Hidden input name, use with uncontrolled component */
  name?: string;
  /** Marks displayed on the track */
  marks?: {
    value: number;
    label?: React__default.ReactNode;
  }[];
  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?:
    | React__default.ReactNode
    | ((value: number) => React__default.ReactNode);
  /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
  labelTransitionProps?: TransitionOverride;
  /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
  labelAlwaysOn?: boolean;
  /** Determines whether thumb label should be displayed when the slider is hovered, `true` by default */
  showLabelOnHover?: boolean;
  /** Content rendered inside thumb */
  thumbChildren?: React__default.ReactNode;
  /** Disables slider */
  disabled?: boolean;
  /** Thumb `width` and `height`, by default value is computed based on `size` prop */
  thumbSize?: number | string;
  /** A transformation function to change the scale of the slider */
  scale?(value: number): number;
  /** Determines whether track values representation should be inverted, `false` by default */
  inverted?: boolean;
  /** Minimal range interval, `10` by default */
  minRange?: number;
  /** Maximum range interval, `Infinity` by default */
  maxRange?: number;
  /** First thumb `aria-label` */
  thumbFromLabel?: string;
  /** Second thumb `aria-label` */
  thumbToLabel?: string;
}
type RangeSliderFactory = Factory<{
  props: RangeSliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  variant: SliderVariant;
}>;
declare const RangeSlider: RaikouComponent<{
  props: RangeSliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  variant: SliderVariant;
}>;

type StackStylesNames = "root";
type StackVariant = string;
type StackCssVariables = {
  root: "--stack-gap" | "--stack-align" | "--stack-justify";
};
interface StackProps
  extends BoxProps,
    StylesApiProps<StackFactory>,
    ElementProps<"div"> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
  gap?: RaikouSpacing | (string & {}) | number;
  /** Controls `align-items` CSS property, `'stretch'` by default */
  align?: React__default.CSSProperties["alignItems"];
  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React__default.CSSProperties["justifyContent"];
}
type StackFactory = Factory<{
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
  variant: StackVariant;
}>;
declare const Stack: RaikouComponent<{
  props: StackProps;
  ref: HTMLDivElement;
  stylesNames: StackStylesNames;
  vars: StackCssVariables;
  variant: StackVariant;
}>;

type SwitchGroupStylesNames = InputWrapperStylesNames;
type SwitchGroupVariant = string;
interface SwitchGroupProps extends Omit<InputWrapperProps, "onChange"> {
  /** `Switch` components */
  children: React__default.ReactNode;
  /** Controlled component value */
  value?: string[];
  /** Default value for uncontrolled component */
  defaultValue?: string[];
  /** Called when value changes */
  onChange?(value: string[]): void;
  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Controls size of the `Input.Wrapper`, `'sm'` by default */
  size?: RaikouSize | (string & {});
}
type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
}>;
declare const SwitchGroup: RaikouComponent<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
}>;

type SwitchStylesNames =
  | "root"
  | "track"
  | "trackLabel"
  | "thumb"
  | "input"
  | InlineInputStylesNames;
type SwitchVariant = string;
type SwitchCssVariables = {
  root:
    | "--switch-radius"
    | "--switch-height"
    | "--switch-width"
    | "--switch-thumb-size"
    | "--switch-label-font-size"
    | "--switch-track-label-padding"
    | "--switch-color";
};
interface SwitchProps
  extends BoxProps,
    StylesApiProps<SwitchFactory>,
    ElementProps<"input", "size"> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;
  /** Switch label */
  label?: React__default.ReactNode;
  /** Inner label when Switch is in unchecked state */
  offLabel?: React__default.ReactNode;
  /** Inner label when Switch is in checked state */
  onLabel?: React__default.ReactNode;
  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;
  /** Controls size of all elements */
  size?: RaikouSize | (string & {});
  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Props passed down to the wrapper element */
  wrapperProps?: React__default.ComponentPropsWithoutRef<"div">;
  /** Icon inside the thumb of switch */
  thumbIcon?: React__default.ReactNode;
  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: "left" | "right";
  /** Description displayed below the label */
  description?: React__default.ReactNode;
  /** Error displayed below the label */
  error?: React__default.ReactNode;
}
type SwitchFactory = Factory<{
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  variant: SwitchVariant;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}>;
declare const Switch: RaikouComponent<{
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  variant: SwitchVariant;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}>;

interface TableElementProps<Selector extends string>
  extends BoxProps,
    StylesApiProps<
      Omit<TableFactory, "stylesNames"> & {
        stylesNames: Selector;
      }
    > {}
interface TableThProps extends TableElementProps<"th">, ElementProps<"th"> {}
interface TableTdProps extends TableElementProps<"td">, ElementProps<"td"> {}
interface TableTrProps extends TableElementProps<"tr">, ElementProps<"tr"> {}
interface TableTheadProps
  extends TableElementProps<"thead">,
    ElementProps<"thead"> {}
interface TableTbodyProps
  extends TableElementProps<"tbody">,
    ElementProps<"tbody"> {}
interface TableTfootProps
  extends TableElementProps<"tfoot">,
    ElementProps<"tfoot"> {}
interface TableCaptionProps
  extends TableElementProps<"caption">,
    ElementProps<"caption"> {}
declare const TableTh: RaikouComponent<{
  props: TableThProps;
  ref: HTMLTableCellElement;
  stylesNames: "th";
  compound: true;
}>;
declare const TableTd: RaikouComponent<{
  props: TableTdProps;
  ref: HTMLTableCellElement;
  stylesNames: "td";
  compound: true;
}>;
declare const TableTr: RaikouComponent<{
  props: TableTrProps;
  ref: HTMLTableRowElement;
  stylesNames: "tr";
  compound: true;
}>;
declare const TableThead: RaikouComponent<{
  props: TableTheadProps;
  ref: HTMLTableSectionElement;
  stylesNames: "thead";
  compound: true;
}>;
declare const TableTbody: RaikouComponent<{
  props: TableTbodyProps;
  ref: HTMLTableSectionElement;
  stylesNames: "tbody";
  compound: true;
}>;
declare const TableTfoot: RaikouComponent<{
  props: TableTfootProps;
  ref: HTMLTableSectionElement;
  stylesNames: "tfoot";
  compound: true;
}>;
declare const TableCaption: RaikouComponent<{
  props: TableCaptionProps;
  ref: HTMLTableCaptionElement;
  stylesNames: "caption";
  compound: true;
}>;

type TableStylesNames =
  | "table"
  | "thead"
  | "tbody"
  | "tfoot"
  | "tr"
  | "th"
  | "td"
  | "caption";
type TableVariant = string;
type TableCssVariables = {
  table:
    | "--table-layout"
    | "--table-border-color"
    | "--table-caption-side"
    | "--table-horizontal-spacing"
    | "--table-vertical-spacing"
    | "--table-striped-color"
    | "--table-highlight-on-hover-color";
};
interface TableProps
  extends BoxProps,
    StylesApiProps<TableFactory>,
    ElementProps<"table"> {
  /** Value of `table-layout` style, `auto` by default */
  layout?: React__default.CSSProperties["tableLayout"];
  /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
  captionSide?: "top" | "bottom";
  /** Color of table borders, key of `theme.colors` or any valid CSS color */
  borderColor?: RaikouColor;
  /** Determines whether the table should have outer border, `false` by default */
  withTableBorder?: boolean;
  /** Determines whether the table should have borders between columns, `false` by default */
  withColumnBorders?: boolean;
  /** Determines whether the table should have borders between rows, `true` by default */
  withRowBorders?: boolean;
  /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
  horizontalSpacing?: RaikouSpacing | number | (string & {});
  /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem, default value is `xs` */
  verticalSpacing?: RaikouSpacing | number | (string & {});
  /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
  striped?: boolean | "odd" | "even";
  /** Background color of striped rows, key of `theme.colors` or any valid CSS color */
  stripedColor?: RaikouColor;
  /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
  highlightOnHover?: boolean;
  /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color */
  highlightOnHoverColor?: RaikouColor;
}
type TableFactory = Factory<{
  props: TableProps;
  ref: HTMLTableElement;
  stylesNames: TableStylesNames;
  vars: TableCssVariables;
  staticComponents: {
    Thead: typeof TableThead;
    Tbody: typeof TableTbody;
    Tfoot: typeof TableTfoot;
    Td: typeof TableTd;
    Th: typeof TableTh;
    Tr: typeof TableTr;
    Caption: typeof TableCaption;
  };
}>;
declare const Table: RaikouComponent<{
  props: TableProps;
  ref: HTMLTableElement;
  stylesNames: TableStylesNames;
  vars: TableCssVariables;
  staticComponents: {
    Thead: typeof TableThead;
    Tbody: typeof TableTbody;
    Tfoot: typeof TableTfoot;
    Td: typeof TableTd;
    Th: typeof TableTh;
    Tr: typeof TableTr;
    Caption: typeof TableCaption;
  };
}>;

type TabsListStylesNames = "list";
interface TabsListProps
  extends BoxProps,
    StylesApiProps<TabsListFactory>,
    ElementProps<"div"> {
  /** `Tabs.Tab` components */
  children: React__default.ReactNode;
  /** Determines whether tabs should take all available space, `false` by default */
  grow?: boolean;
  /** Tabs alignment, `flex-start` by default */
  justify?: React__default.CSSProperties["justifyContent"];
}
type TabsListFactory = Factory<{
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
  compound: true;
}>;
declare const TabsList: RaikouComponent<{
  props: TabsListProps;
  ref: HTMLDivElement;
  stylesNames: TabsListStylesNames;
  compound: true;
}>;

type TabsPanelStylesNames = "panel";
interface TabsPanelProps
  extends BoxProps,
    StylesApiProps<TabsPanelFactory>,
    ElementProps<"div"> {
  /** Panel content */
  children: React__default.ReactNode;
  /** Value of associated control */
  value: string;
}
type TabsPanelFactory = Factory<{
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
  compound: true;
}>;
declare const TabsPanel: RaikouComponent<{
  props: TabsPanelProps;
  ref: HTMLDivElement;
  stylesNames: TabsPanelStylesNames;
  compound: true;
}>;

type UnstyledButtonStylesNames = "root";
interface UnstyledButtonProps
  extends Omit<BoxComponentProps, "vars" | "variant">,
    StylesApiProps<UnstyledButtonFactory> {
  __staticSelector?: string;
}
type UnstyledButtonFactory = PolymorphicFactory<{
  props: UnstyledButtonProps;
  stylesNames: UnstyledButtonStylesNames;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
}>;
declare const UnstyledButton: (<C = "button">(
  props: PolymorphicComponentProps<C, UnstyledButtonProps>
) => React__default.ReactElement<
  any,
  string | React__default.JSXElementConstructor<any>
>) &
  Omit<
    React__default.FunctionComponent<
      | (UnstyledButtonProps & {
          component?: any;
        } & Omit<Omit<any, "ref">, "component" | keyof UnstyledButtonProps> & {
            ref?: any;
          })
      | (UnstyledButtonProps & {
          component: React__default.ElementType<any>;
        })
    >,
    never
  > &
  ThemeExtend<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
  }> &
  ComponentClasses<{
    props: UnstyledButtonProps;
    stylesNames: UnstyledButtonStylesNames;
    defaultComponent: "button";
    defaultRef: HTMLButtonElement;
  }> &
  Record<string, never>;

type TabsTabStylesNames = "tab" | "tabSection" | "tabLabel";
interface TabsTabProps
  extends Omit<UnstyledButtonProps, "classNames" | "styles" | "vars">,
    StylesApiProps<TabsTabFactory>,
    ElementProps<"button"> {
  /** Value of associated panel */
  value: string;
  /** Tab label */
  children?: React__default.ReactNode;
  /** Content displayed on the right side of the label, for example, icon */
  rightSection?: React__default.ReactNode;
  /** Content displayed on the left side of the label, for example, icon */
  leftSection?: React__default.ReactNode;
  /** Key of `theme.colors` or any valid CSS color, controls control color based on `variant` */
  color?: RaikouColor;
}
type TabsTabFactory = Factory<{
  props: TabsTabProps;
  ref: HTMLButtonElement;
  stylesNames: TabsTabStylesNames;
  compound: true;
}>;
declare const TabsTab: RaikouComponent<{
  props: TabsTabProps;
  ref: HTMLButtonElement;
  stylesNames: TabsTabStylesNames;
  compound: true;
}>;

type TabsStylesNames =
  | "root"
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabsTabStylesNames;
type TabsVariant = "default" | "outline" | "pills";
type TabsCssVariables = {
  root: "--tabs-color" | "--tabs-radius";
};
interface TabsProps
  extends BoxProps,
    StylesApiProps<TabsFactory>,
    ElementProps<"div", "defaultValue" | "value" | "onChange"> {
  /** Default value for uncontrolled component */
  defaultValue?: string | null;
  /** Value for controlled component */
  value?: string | null;
  /** Called when value changes */
  onChange?(value: string | null): void;
  /** Tabs orientation, `'horizontal'` by default */
  orientation?: "vertical" | "horizontal";
  /** `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"`, `'left'` by default */
  placement?: "left" | "right";
  /** Base id, used to generate ids to connect labels with controls, generated randomly by default */
  id?: string;
  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;
  /** Determines whether tab should be activated with arrow key press, `true` by default */
  activateTabWithKeyboard?: boolean;
  /** Determines whether tab can be deactivated, `false` by default */
  allowTabDeactivation?: boolean;
  /** Tabs content */
  children: React__default.ReactNode;
  /** Changes colors of `Tabs.Tab` components when variant is `pills` or `default`, does nothing for other variants */
  color?: RaikouColor;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius | number | (string & {});
  /** Determines whether tabs should have inverted styles, `false` by default */
  inverted?: boolean;
  /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active, `true` by default */
  keepMounted?: boolean;
}
type TabsFactory = Factory<{
  props: TabsProps;
  ref: HTMLDivElement;
  variant: TabsVariant;
  stylesNames: TabsStylesNames;
  vars: TabsCssVariables;
  staticComponents: {
    Tab: typeof TabsTab;
    Panel: typeof TabsPanel;
    List: typeof TabsList;
  };
}>;
declare const Tabs: RaikouComponent<{
  props: TabsProps;
  ref: HTMLDivElement;
  variant: TabsVariant;
  stylesNames: TabsStylesNames;
  vars: TabsCssVariables;
  staticComponents: {
    Tab: typeof TabsTab;
    Panel: typeof TabsPanel;
    List: typeof TabsList;
  };
}>;

interface TextInputProps
  extends InputBaseProps,
    ElementProps<"input", "size"> {}
type TextInputFactory = Factory<{
  props: TextInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;
declare const TextInput: RaikouComponent<{
  props: TextInputProps;
  ref: HTMLInputElement;
  stylesNames: __InputStylesNames;
}>;

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
type TitleSize = `h${TitleOrder}` | React__default.CSSProperties["fontSize"];
type TitleStylesNames = "root";
type TitleVariant = string;
type TitleCssVariables = {
  root: "--title-fw" | "--title-lh" | "--title-fz";
};
interface TitleProps
  extends BoxProps,
    StylesApiProps<TitleFactory>,
    ElementProps<"h1"> {
  /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
  order?: TitleOrder;
  /** Changes title size, if not set, then size is controlled by `order` prop */
  size?: TitleSize;
}
type TitleFactory = Factory<{
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
  variant: TitleVariant;
}>;
declare const Title: RaikouComponent<{
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
  variant: TitleVariant;
}>;

type TooltipStylesNames = "tooltip" | "arrow";
type TooltipVariant = string;
type TooltipCssVariables = {
  tooltip: "--tooltip-radius" | "--tooltip-bg";
};
interface TooltipBaseProps
  extends BoxProps,
    StylesApiProps<TooltipFactory>,
    ElementProps<"div"> {
  /** Target element, must support `ref` prop and `...others` */
  children: React.ReactNode;
  /** Tooltip position relative to target element (`Tooltip` component) or mouse (`Tooltip.Floating` component) */
  position?: FloatingPosition;
  /** Key of the prop that can be used to access element ref, `ref` by default */
  refProp?: string;
  /** Tooltip content */
  label: React.ReactNode;
  /** Determines whether tooltip should be rendered within `Portal`, `true` by default */
  withinPortal?: boolean;
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius | (string & {}) | number;
  /** Key of `theme.colors` or any valid CSS color, controls tooltip background, by default set based on current color scheme */
  color?: RaikouColor;
  /** Determines whether content should be wrapped on to the next line, `false` by default */
  multiline?: boolean;
  /** Tooltip z-index, `300` by default */
  zIndex?: React.CSSProperties["zIndex"];
  /** If set, tooltip element will not be rendered */
  disabled?: boolean;
  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, "children" | "withinPortal">;
}

interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px, `10` by default */
  offset?: number;
}
declare const TooltipFloating: RaikouComponent<{
  props: TooltipFloatingProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
}>;

interface TooltipGroupProps {
  /** <Tooltip /> components */
  children: React__default.ReactNode;
  /** Open delay in ms */
  openDelay?: number;
  /** Close delay in ms */
  closeDelay?: number;
}
declare function TooltipGroup(props: TooltipGroupProps): JSX.Element;
declare namespace TooltipGroup {
  var displayName: string;
}

interface TooltipProps extends TooltipBaseProps {
  /** Called when tooltip position changes */
  onPositionChange?(position: FloatingPosition): void;
  /** Open delay in ms */
  openDelay?: number;
  /** Close delay in ms, `0` by default */
  closeDelay?: number;
  /** Controlled opened state */
  opened?: boolean;
  /** Space between target element and tooltip in px, `5` by default */
  offset?: number | FloatingAxesOffsets;
  /** Determines whether the tooltip should have an arrow, `false` by default */
  withArrow?: boolean;
  /** Arrow size in px, `4` by default */
  arrowSize?: number;
  /** Arrow offset in px, `5` by default */
  arrowOffset?: number;
  /** Arrow `border-radius` in px, `0` by default */
  arrowRadius?: number;
  /** Arrow position relative to the tooltip, `side` by default */
  arrowPosition?: ArrowPosition;
  /** Props passed down to the `Transition` component that used to animate tooltip presence, use to configure duration and animation type, `{ duration: 100, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;
  /** Determines which events will be used to show tooltip, `{ hover: true, focus: false, touch: false }` by default */
  events?: {
    hover: boolean;
    focus: boolean;
    touch: boolean;
  };
  /** `useEffect` dependencies to force update tooltip position */
  positionDependencies?: any[];
  /** Must be set if the tooltip target is an inline element */
  inline?: boolean;
  /** If set, the tooltip will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
  keepMounted?: boolean;
}
type TooltipFactory = Factory<{
  props: TooltipProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
  staticComponents: {
    Floating: typeof TooltipFloating;
    Group: typeof TooltipGroup;
  };
}>;
declare const Tooltip: RaikouComponent<{
  props: TooltipProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
  staticComponents: {
    Floating: typeof TooltipFloating;
    Group: typeof TooltipGroup;
  };
}>;

type TypographyStylesProviderStylesNames = "root";
type TypographyStylesProviderVariant = string;
interface TypographyStylesProviderProps
  extends BoxProps,
    StylesApiProps<TypographyStylesProviderFactory>,
    ElementProps<"div"> {}
type TypographyStylesProviderFactory = Factory<{
  props: TypographyStylesProviderProps;
  ref: HTMLDivElement;
  stylesNames: TypographyStylesProviderStylesNames;
  variant: TypographyStylesProviderVariant;
}>;
declare const TypographyStylesProvider: RaikouComponent<{
  props: TypographyStylesProviderProps;
  ref: HTMLDivElement;
  stylesNames: TypographyStylesProviderStylesNames;
  variant: TypographyStylesProviderVariant;
}>;

interface VisuallyHiddenProps
  extends React__default.ComponentPropsWithoutRef<"span"> {}
declare function VisuallyHidden({
  className,
  ...others
}: VisuallyHiddenProps): JSX.Element;
declare namespace VisuallyHidden {
  var displayName: string;
}

export {
  ActionIcon,
  ActionIconCssVariables,
  ActionIconFactory,
  ActionIconGroup,
  ActionIconGroupCssVariables,
  ActionIconGroupFactory,
  ActionIconGroupProps,
  ActionIconGroupStylesNames,
  ActionIconProps,
  ActionIconStylesNames,
  ActionIconVariant,
  Affix,
  AffixCssVariables,
  AffixFactory,
  AffixProps,
  AffixStylesNames,
  AffixVariant,
  Alert,
  AlertCssVariables,
  AlertFactory,
  AlertProps,
  AlertStylesNames,
  AlertVariant,
  Anchor,
  AnchorCssVariables,
  AnchorFactory,
  AnchorProps,
  AnchorStylesNames,
  AnchorVariant,
  ArrowPosition,
  AspectRatio,
  AspectRatioCssVariables,
  AspectRatioFactory,
  AspectRatioProps,
  AspectRatioStylesNames,
  AspectRatioVariant,
  Avatar,
  AvatarCssVariables,
  AvatarFactory,
  AvatarGroup,
  AvatarGroupCssVariables,
  AvatarGroupFactory,
  AvatarGroupProps,
  AvatarGroupStylesNames,
  AvatarGroupVariant,
  AvatarProps,
  AvatarStylesNames,
  AvatarVariant,
  BackgroundImage,
  BackgroundImageCssVariables,
  BackgroundImageFactory,
  BackgroundImageProps,
  BackgroundImageStylesNames,
  BackgroundImageVariant,
  Badge,
  BadgeFactory,
  BadgeProps,
  BadgeStylesNames,
  BadgeVariant,
  Blockquote,
  BlockquoteCssVariables,
  BlockquoteFactory,
  BlockquoteProps,
  BlockquoteStylesNames,
  BlockquoteVariant,
  Bootstrap,
  Box,
  BoxComponentProps,
  BoxMod,
  BoxProps,
  Breadcrumbs,
  BreadcrumbsCssVariables,
  BreadcrumbsFactory,
  BreadcrumbsProps,
  BreadcrumbsStylesNames,
  BreadcrumbsVariant,
  Burger,
  BurgerCssVariables,
  BurgerFactory,
  BurgerProps,
  BurgerStylesNames,
  BurgerVariant,
  Button,
  ButtonCssVariables,
  ButtonFactory,
  ButtonGroup,
  ButtonGroupCssVariables,
  ButtonGroupFactory,
  ButtonGroupProps,
  ButtonGroupStylesNames,
  ButtonProps,
  ButtonStylesNames,
  ButtonVariant,
  CSSVariablesResolver,
  Center,
  CenterCssVariables,
  CenterFactory,
  CenterProps,
  CenterStylesNames,
  CenterVariant,
  CheckIcon,
  CheckIconProps,
  Checkbox,
  CheckboxCssVariables,
  CheckboxFactory,
  CheckboxGroup,
  CheckboxGroupFactory,
  CheckboxGroupProps,
  CheckboxGroupStylesNames,
  CheckboxGroupVariant,
  CheckboxIconProps,
  CheckboxProps,
  CheckboxStylesNames,
  CheckboxVariant,
  ClassNames,
  ClassNamesArray,
  CloseButton,
  CloseButtonFactory,
  CloseButtonProps,
  CloseButtonStylesNames,
  CloseButtonVariant,
  CloseIcon,
  CloseIconProps,
  Code,
  CodeCssVariables,
  CodeFactory,
  CodeProps,
  CodeStylesNames,
  CodeVariant,
  Collapse,
  CollapseProps,
  ColorPicker,
  ColorPickerCssVariables,
  ColorPickerFactory,
  ColorPickerProps,
  ColorPickerStylesNames,
  ColorPickerVariant,
  ColorSchemeScript,
  ColorSchemeScriptProps,
  ColorSwatch,
  ColorSwatchCssVariables,
  ColorSwatchFactory,
  ColorSwatchProps,
  ColorSwatchStylesNames,
  ColorSwatchVariant,
  Combobox,
  ComboboxChevron,
  ComboboxChevronProps,
  ComboboxData,
  ComboboxDropdown,
  ComboboxDropdownEventSource,
  ComboboxDropdownProps,
  ComboboxDropdownTarget,
  ComboboxDropdownTargetProps,
  ComboboxEmpty,
  ComboboxEmptyProps,
  ComboboxEventsTarget,
  ComboboxEventsTargetProps,
  ComboboxFactory,
  ComboboxFooter,
  ComboboxFooterProps,
  ComboboxGroup,
  ComboboxGroupProps,
  ComboboxHeader,
  ComboboxHeaderProps,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxOption,
  ComboboxOptionProps,
  ComboboxOptions,
  ComboboxOptionsProps,
  ComboboxParsedItem,
  ComboboxParsedItemGroup,
  ComboboxProps,
  ComboboxSearch,
  ComboboxSearchProps,
  ComboboxStore,
  ComboboxStylesNames,
  ComboboxTarget,
  ComboboxTargetProps,
  Container,
  ContainerCssVariables,
  ContainerFactory,
  ContainerProps,
  ContainerStylesNames,
  ContainerVariant,
  ConvertCSSVariablesInput,
  CopyButton,
  CopyButtonProps,
  CssVariable,
  CssVariables,
  CssVars,
  CssVarsProp,
  DEFAULT_THEME,
  DefaultRaikouColor,
  Direction,
  Divider,
  DividerCssVariables,
  DividerFactory,
  DividerProps,
  DividerStylesNames,
  DividerVariant,
  Drawer,
  DrawerBody,
  DrawerBodyProps,
  DrawerCloseButton,
  DrawerCloseButtonProps,
  DrawerContent,
  DrawerContentProps,
  DrawerCssVariables,
  DrawerFactory,
  DrawerHeader,
  DrawerHeaderProps,
  DrawerOverlay,
  DrawerOverlayProps,
  DrawerProps,
  DrawerRoot,
  DrawerRootProps,
  DrawerStylesNames,
  DrawerTitle,
  DrawerTitleProps,
  DrawerVariant,
  ElementProps,
  ExtendComponent,
  FOCUS_CLASS_NAMES,
  Factory,
  FactoryPayload,
  Fieldset,
  FieldsetFactory,
  FieldsetProps,
  FieldsetStylesNames,
  FieldsetVariant,
  FileButton,
  FileButtonProps,
  Flex,
  FlexCssVariables,
  FlexFactory,
  FlexProps,
  FlexStylesNames,
  FlexVariant,
  FloatingArrow,
  FloatingAxesOffsets,
  FloatingPlacement,
  FloatingPosition,
  FloatingSide,
  FocusTrap,
  FocusTrapProps,
  GetStylesApi,
  GetStylesApiOptions,
  Group,
  GroupCssVariables,
  GroupFactory,
  GroupProps,
  GroupStylesCtx,
  GroupStylesNames,
  GroupVariant,
  HeadingStyle,
  Highlight,
  HighlightFactory,
  HighlightProps,
  InlineInput,
  InlineInputStylesNames,
  InlineStyles,
  InlineStylesInput,
  InlineStylesMediaQuery,
  InlineStylesProps,
  Input,
  InputBase,
  InputBaseFactory,
  InputBaseProps,
  InputCssVariables,
  InputDescription,
  InputDescriptionCssVariables,
  InputDescriptionFactory,
  InputDescriptionProps,
  InputDescriptionStylesNames,
  InputDescriptionVariant,
  InputError,
  InputErrorCssVariables,
  InputErrorFactory,
  InputErrorProps,
  InputErrorStylesNames,
  InputErrorVariant,
  InputFactory,
  InputLabel,
  InputLabelCssVariables,
  InputLabelFactory,
  InputLabelProps,
  InputLabelStylesNames,
  InputLabelVariant,
  InputPlaceholder,
  InputPlaceholderFactory,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
  InputPlaceholderVariant,
  InputProps,
  InputStylesNames,
  InputVariant,
  InputWrapper,
  InputWrapperFactory,
  InputWrapperProps,
  InputWrapperStylesNames,
  Kbd,
  KbdCssVariables,
  KbdFactory,
  KbdProps,
  KbdStylesNames,
  KbdVariant,
  Loader,
  LoaderCssVariables,
  LoaderFactory,
  LoaderProps,
  LoaderStylesNames,
  LocalStorageColorSchemeManagerOptions,
  transitions as MANTINE_TRANSITIONS,
  Mark,
  MarkCssVariables,
  MarkFactory,
  MarkProps,
  MarkStylesNames,
  Modal,
  ModalBase,
  ModalBaseBody,
  ModalBaseBodyProps,
  ModalBaseCloseButton,
  ModalBaseCloseButtonProps,
  ModalBaseContent,
  ModalBaseContentProps,
  ModalBaseHeader,
  ModalBaseHeaderProps,
  ModalBaseOverlay,
  ModalBaseOverlayProps,
  ModalBaseProps,
  ModalBaseStylesNames,
  ModalBaseTitle,
  ModalBaseTitleProps,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalCloseButtonProps,
  ModalContent,
  ModalContentProps,
  ModalCssVariables,
  ModalFactory,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
  ModalRoot,
  ModalRootProps,
  ModalStylesNames,
  ModalTitle,
  ModalTitleProps,
  ModalVariant,
  NativeScrollArea,
  NativeSelect,
  NativeSelectFactory,
  NativeSelectProps,
  Notification,
  NotificationCssVariables,
  NotificationFactory,
  NotificationProps,
  NotificationStylesNames,
  NotificationVariant,
  OptionalPortal,
  OptionalPortalProps,
  OptionsData,
  OptionsDropdown,
  OptionsDropdownProps,
  OptionsFilter,
  Overlay,
  OverlayCssVariables,
  OverlayFactory,
  OverlayProps,
  OverlayStylesNames,
  OverlayVariant,
  Paper,
  PaperCssVariables,
  PaperFactory,
  PaperProps,
  PaperStylesNames,
  PaperVariant,
  PartialTransformVars,
  PartialVarsResolver,
  PolymorphicFactory,
  Popover,
  PopoverDropdown,
  PopoverDropdownProps,
  PopoverFactory,
  PopoverProps,
  PopoverStylesNames,
  PopoverTarget,
  PopoverTargetProps,
  PopoverWidth,
  Portal,
  PortalProps,
  RGBA,
  RaikouBreakpoint,
  RaikouBreakpointsValues,
  RaikouColor,
  RaikouColorScheme,
  RaikouColorSchemeManager,
  RaikouColorShade,
  RaikouColorsTuple,
  RaikouComponent,
  RaikouFontSize,
  RaikouFontSizesValues,
  RaikouGradient,
  RaikouLineHeight,
  RaikouLineHeightValues,
  RaikouLoader,
  RaikouLoaderComponent,
  RaikouLoadersRecord,
  RaikouPrimaryShade,
  RaikouRadius,
  RaikouRadiusValues,
  RaikouShadow,
  RaikouShadowsValues,
  RaikouSize,
  RaikouSpacing,
  RaikouSpacingValues,
  RaikouStyleProp,
  RaikouStyleProps,
  RaikouStylesRecord,
  RaikouTheme,
  RaikouThemeColors,
  RaikouThemeColorsOverride,
  RaikouThemeComponent,
  RaikouThemeComponents,
  RaikouThemeOther,
  RaikouThemeOverride,
  RaikouTransition,
  RangeSlider,
  RangeSliderFactory,
  RangeSliderProps,
  RangeSliderValue,
  STYlE_PROPS_DATA,
  ScrollArea,
  ScrollAreaAutosize,
  ScrollAreaAutosizeProps,
  ScrollAreaCssVariables,
  ScrollAreaFactory,
  ScrollAreaProps,
  ScrollAreaStylesNames,
  ScrollAreaVariant,
  SegmentedControl,
  SegmentedControlCssVariables,
  SegmentedControlFactory,
  SegmentedControlItem,
  SegmentedControlProps,
  SegmentedControlStylesNames,
  SegmentedControlVariant,
  Slider,
  SliderCssVariables,
  SliderFactory,
  SliderProps,
  SliderStylesNames,
  SliderVariant,
  Stack,
  StackCssVariables,
  StackFactory,
  StackProps,
  StackStylesNames,
  StackVariant,
  StyleProp,
  StylePropSpacingValue,
  Styles,
  StylesApiProps,
  StylesApiRecord,
  StylesRecord,
  SvgLoaderProps,
  Switch,
  SwitchCssVariables,
  SwitchFactory,
  SwitchGroup,
  SwitchGroupFactory,
  SwitchGroupProps,
  SwitchGroupStylesNames,
  SwitchGroupVariant,
  SwitchProps,
  SwitchStylesNames,
  SwitchVariant,
  Table,
  TableCaption,
  TableCaptionProps,
  TableCssVariables,
  TableFactory,
  TableProps,
  TableStylesNames,
  TableTbody,
  TableTbodyProps,
  TableTd,
  TableTdProps,
  TableTfoot,
  TableTfootProps,
  TableTh,
  TableThProps,
  TableThead,
  TableTheadProps,
  TableTr,
  TableTrProps,
  TableVariant,
  Tabs,
  TabsCssVariables,
  TabsFactory,
  TabsList,
  TabsListProps,
  TabsListStylesNames,
  TabsPanel,
  TabsPanelProps,
  TabsPanelStylesNames,
  TabsProps,
  TabsStylesNames,
  TabsTab,
  TabsTabProps,
  TabsTabStylesNames,
  TabsVariant,
  Text,
  TextCssVariables,
  TextFactory,
  TextInput,
  TextInputFactory,
  TextInputProps,
  TextProps,
  TextStylesNames,
  TextVariant,
  Title,
  TitleCssVariables,
  TitleFactory,
  TitleOrder,
  TitleProps,
  TitleSize,
  TitleStylesNames,
  TitleVariant,
  Tooltip,
  TooltipCssVariables,
  TooltipFactory,
  TooltipFloating,
  TooltipFloatingProps,
  TooltipGroup,
  TooltipGroupProps,
  TooltipProps,
  TooltipStylesNames,
  TooltipVariant,
  TransformVars,
  Transition,
  TransitionOverride,
  TransitionProps,
  TypographyStylesProvider,
  TypographyStylesProviderFactory,
  TypographyStylesProviderProps,
  TypographyStylesProviderStylesNames,
  TypographyStylesProviderVariant,
  UnstyledButton,
  UnstyledButtonFactory,
  UnstyledButtonProps,
  UnstyledButtonStylesNames,
  UseComboboxOptions$1 as UseComboboxOptions,
  UseStylesInput,
  VariantColorResolverResult,
  VariantColorsResolver,
  VariantColorsResolverInput,
  VarsResolver,
  VisuallyHidden,
  VisuallyHiddenProps,
  __BaseInputProps,
  __InputProps,
  __InputStylesNames,
  __InputWrapperProps,
  __PopoverProps,
  camelToKebabCase,
  closeOnEscape,
  cn,
  convertCssVariables,
  createOptionalContext,
  createPolymorphicComponent,
  createSafeContext,
  createScopedKeydownHandler,
  createTheme,
  createVarsResolver,
  darken,
  deepMerge,
  defaultCssVariablesResolver,
  defaultLoaders,
  defaultVariantColorsResolver,
  em,
  extractStyleProps,
  factory,
  filterProps,
  findElementAncestor,
  getDefaultZIndex,
  getFloatingPosition,
  getFontSize,
  getGradient,
  getLabelsLockup,
  getLineHeight,
  getOptionsLockup,
  getParsedComboboxData,
  getPrimaryShade,
  getRadius,
  getSafeId,
  getShadow,
  getSize,
  getSpacing,
  getStyleObject,
  getThemeColor,
  getTransitionProps,
  isElement,
  isLightColor,
  isNumberLike,
  isRaikouColorScheme,
  keys,
  lighten,
  localStorageColorSchemeManager,
  mergeRaikouTheme,
  mergeThemeOverrides,
  noop,
  parseStyleProps,
  parseThemeColor,
  polymorphicFactory,
  px,
  rem,
  resolveClassNames,
  resolveStyles,
  rgba,
  stylesToString,
  toRgba,
  useCombobox,
  useComboboxTargetProps,
  useDelayedHover,
  useDirection,
  useFloatingAutoUpdate,
  useId,
  useInputProps,
  useInputWrapperContext,
  useProps,
  useRandomClassName,
  useStyles,
  useVirtualizedCombobox,
  validateRaikouTheme,
};
