import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, Factory } from '@raikou/core';

type CodeStylesNames = "root";
type CodeVariant = string;
type CodeCssVariables = {
    root: "--code-bg";
};
interface CodeProps extends BoxProps, StylesApiProps<CodeFactory>, ElementProps<"code"> {
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
declare const Code: _raikou_core.RaikouComponent<{
    props: CodeProps;
    ref: HTMLElement;
    stylesNames: CodeStylesNames;
    vars: CodeCssVariables;
    variant: CodeVariant;
}>;

export { Code, CodeCssVariables, CodeFactory, CodeProps, CodeStylesNames, CodeVariant };
