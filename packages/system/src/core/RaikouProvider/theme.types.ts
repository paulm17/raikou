import type { PartialDeep } from 'type-fest';
import type { VariantColorsResolver } from './color-functions';

export interface RaikouTheme {
  /** Controls focus ring styles. Supports the following options:
   *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
   *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
   *  - `never` – focus ring is always hidden (not recommended)
   */
  focusRing: 'auto' | 'always' | 'never';

  /** Rem units scale, change if you customize font-size of `<html />` element
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

  /** Determines whether text color must be changed based on the given `color` prop in filled variant
   *  For example, if you pass `color="blue.1"` to Button component, text color will be changed to `var(--raikou-color-black)`
   *  Default value – `false`
   * */
  autoContrast: boolean;

  /** Determines which luminance value is used to determine if text color should be light or dark.
   *  Used only if `theme.autoContrast` is set to `true`.
   *  Default value is `0.3`
   * */
  luminanceThreshold: number;

  /** Font-family used in all components, system fonts by default */
  fontFamily: string;

  /** Monospace font-family, used in code and other similar components, system fonts by default  */
  fontFamilyMonospace: string;

  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */
  headings: {
    fontFamily: string;
    fontWeight: string;
    textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
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
  defaultRadius: RaikouRadius;

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
  cursorType: 'default' | 'pointer';

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

export type RaikouColorScheme = 'light' | 'dark' | 'auto';

export type RaikouThemeOverride = PartialDeep<RaikouTheme>;

export type RaikouStylesRecord = Record<string, React.CSSProperties>;

export interface RaikouThemeComponent {
  classNames?: any;
  styles?: any;
  vars?: any;
  defaultProps?: any;
}

export type RaikouThemeComponents = Record<string, RaikouThemeComponent>;

export interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

export type RaikouSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RaikouBreakpointsValues = Record<RaikouSize | (string & {}), string>;
export type RaikouFontSizesValues = Record<RaikouSize | (string & {}), string>;
export type RaikouRadiusValues = Record<RaikouSize | (string & {}), string>;
export type RaikouSpacingValues = Record<RaikouSize | (string & {}), string>;
export type RaikouShadowsValues = Record<RaikouSize | (string & {}), string>;
export type RaikouLineHeightValues = Record<RaikouSize | (string & {}), string>;

export type RaikouBreakpoint = keyof RaikouBreakpointsValues;
export type RaikouFontSize = keyof RaikouFontSizesValues;
export type RaikouRadius = keyof RaikouRadiusValues | (string & {}) | number;
export type RaikouSpacing = keyof RaikouSpacingValues | (string & {}) | number;
export type RaikouShadow = keyof RaikouShadowsValues | (string & {});
export type RaikouLineHeight = keyof RaikouLineHeightValues;

export interface RaikouThemeOther {
  [key: string]: any;
}

export interface RaikouGradient {
  from: string;
  to: string;
  deg?: number;
}

export type RaikouColorsTuple = readonly [
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
  ...string[],
];

export type RaikouColorShade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface RaikouPrimaryShade {
  light: RaikouColorShade;
  dark: RaikouColorShade;
}

export type DefaultRaikouColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export interface RaikouThemeColorsOverride {}

export type RaikouThemeColors = RaikouThemeColorsOverride extends {
  colors: Record<infer CustomColors, RaikouColorsTuple>;
}
  ? Record<CustomColors, RaikouColorsTuple>
  : Record<DefaultRaikouColor, RaikouColorsTuple>;

export type RaikouColor = keyof RaikouThemeColors;
