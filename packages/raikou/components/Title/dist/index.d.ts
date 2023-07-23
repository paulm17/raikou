import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
type TitleSize = `h${TitleOrder}` | React.CSSProperties["fontSize"];
type TitleStylesNames = "root";
type TitleCssVariables = {
    root: "--title-fw" | "--title-lh" | "--title-fz";
};
interface TitleProps extends BoxProps, StylesApiProps<TitleFactory>, ElementProps<"h1"> {
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
}>;
declare const Title: _raikou_core.RaikouComponent<{
    props: TitleProps;
    ref: HTMLHeadingElement;
    stylesNames: TitleStylesNames;
    vars: TitleCssVariables;
}>;

export { Title, TitleCssVariables, TitleFactory, TitleOrder, TitleProps, TitleSize, TitleStylesNames };
