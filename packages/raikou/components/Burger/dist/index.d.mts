import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouSize, RaikouColor, Factory } from '@raikou/core';

type BurgerStylesNames = "root" | "burger";
type BurgerCssVariables = {
    root: "--burger-color" | "--burger-size" | "--burger-transition-duration" | "--burger-transition-timing-function";
};
interface BurgerProps extends BoxProps, StylesApiProps<BurgerFactory>, ElementProps<"button"> {
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
}>;
declare const Burger: _raikou_core.RaikouComponent<{
    props: BurgerProps;
    ref: HTMLButtonElement;
    stylesNames: BurgerStylesNames;
    vars: BurgerCssVariables;
}>;

export { Burger, type BurgerCssVariables, type BurgerFactory, type BurgerProps, type BurgerStylesNames };
