import * as zustand from 'zustand';
import * as types from 'types';
import { PartialDeep } from 'type-fest';

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
type RaikouThemeOverride = PartialDeep<RaikouTheme>;
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
type RaikouBreakpointsValues = Record<RaikouSize | (string & {}), string>;
type RaikouFontSizesValues = Record<RaikouSize | (string & {}), string>;
type RaikouRadiusValues = Record<RaikouSize | (string & {}), string>;
type RaikouSpacingValues = Record<RaikouSize | (string & {}), string>;
type RaikouShadowsValues = Record<RaikouSize | (string & {}), string>;
type RaikouLineHeightValues = Record<RaikouSize | (string & {}), string>;
type RaikouRadius = keyof RaikouRadiusValues | (string & {}) | number;
interface RaikouThemeOther {
    [key: string]: any;
}
interface RaikouGradient {
    from: string;
    to: string;
    deg?: string;
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
type DefaultRaikouColor = "blue" | (string & {});
interface RaikouThemeColorsOverride {
}
type RaikouThemeColors = RaikouThemeColorsOverride extends {
    colors: Record<infer CustomColors, RaikouColorsTuple>;
} ? Record<CustomColors, RaikouColorsTuple> : Record<DefaultRaikouColor, RaikouColorsTuple>;
type RaikouColor = keyof RaikouThemeColors;

declare function px(value: unknown): string | number;

declare const rem: (value: unknown) => string;
declare const em: (value: unknown) => string;

declare const useStore: zustand.UseBoundStore<zustand.StoreApi<types.PartialObjectDeep<RaikouTheme, {}>>>;
declare const getState: () => types.PartialObjectDeep<RaikouTheme, {}>;
declare const setState: (partial: types.PartialObjectDeep<RaikouTheme, {}> | Partial<types.PartialObjectDeep<RaikouTheme, {}>> | ((state: types.PartialObjectDeep<RaikouTheme, {}>) => types.PartialObjectDeep<RaikouTheme, {}> | Partial<types.PartialObjectDeep<RaikouTheme, {}>>), replace?: boolean | undefined) => void;

declare function createTheme(theme: RaikouThemeOverride): RaikouThemeOverride;

export { createTheme, useStore as default, em, getState, px, rem, setState };
