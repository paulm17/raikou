import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouRadius, Factory } from '@raikou/core';
import React from 'react';

type BlockquoteStylesNames = "root" | "icon" | "cite";
type BlockquoteCssVariables = {
    root: "--bq-bg-light" | "--bq-bg-dark" | "--bq-bd" | "--bq-icon-size" | "--bq-radius";
};
interface BlockquoteProps extends BoxProps, StylesApiProps<BlockquoteFactory>, ElementProps<"blockquote", "cite"> {
    /** Blockquote icon, displayed on the top left */
    icon?: React.ReactNode;
    /** Controls icon `width` and `height`, numbers are converted to rem, `40` by default */
    iconSize?: number | string;
    /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
    radius?: RaikouRadius;
    /** Reference to a cited quote */
    cite?: React.ReactNode;
}
type BlockquoteFactory = Factory<{
    props: BlockquoteProps;
    ref: HTMLQuoteElement;
    stylesNames: BlockquoteStylesNames;
    vars: BlockquoteCssVariables;
}>;
declare const Blockquote: _raikou_core.RaikouComponent<{
    props: BlockquoteProps;
    ref: HTMLQuoteElement;
    stylesNames: BlockquoteStylesNames;
    vars: BlockquoteCssVariables;
}>;

export { Blockquote, type BlockquoteCssVariables, type BlockquoteFactory, type BlockquoteProps, type BlockquoteStylesNames };
