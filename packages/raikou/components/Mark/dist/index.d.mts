import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, Factory } from '@raikou/core';

type MarkStylesNames = "root";
type MarkCssVariables = {
    root: "--mark-bg-dark" | "--mark-bg-light";
};
interface MarkProps extends BoxProps, StylesApiProps<MarkFactory>, ElementProps<"mark"> {
    /** Key of `theme.colors` or any valid CSS color, `yellow` by default */
    color?: RaikouColor;
}
type MarkFactory = Factory<{
    props: MarkProps;
    ref: HTMLElement;
    stylesNames: MarkStylesNames;
    vars: MarkCssVariables;
}>;
declare const Mark: _raikou_core.RaikouComponent<{
    props: MarkProps;
    ref: HTMLElement;
    stylesNames: MarkStylesNames;
    vars: MarkCssVariables;
}>;

export { Mark, MarkCssVariables, MarkFactory, MarkProps, MarkStylesNames };
