import { Theme } from '@stylefusion/react';
import type { PartialDeep } from 'type-fest';
import type { VariantColorsResolver } from './color-functions';

export interface RaikouTheme extends Theme {
  /** Function to resolve colors based on variant.
   *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
   *  and other components that use colors from theme.
   * */
  variantColorResolver: VariantColorsResolver;
}

export type RaikouColorScheme = 'light' | 'dark' | 'auto';

export type RaikouThemeOverride = PartialDeep<RaikouTheme>;

export type RaikouStylesRecord = Record<string, React.CSSProperties>;

export interface RaikouThemeComponent {
  // classNames?: any;
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
