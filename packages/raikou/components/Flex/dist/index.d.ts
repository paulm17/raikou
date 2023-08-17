import * as _raikou_core from '@raikou/core';
import { SystemPropData, BoxProps, StylesApiProps, ElementProps, StyleProp, RaikouSize, Factory } from '@raikou/core';
import React from 'react';

declare const FLEX_STYLE_PROPS_DATA: Record<string, SystemPropData>;

type FlexStylesNames = "root";
interface FlexProps extends BoxProps, StylesApiProps<FlexFactory>, ElementProps<"div"> {
    /** `gap` CSS property */
    gap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `row-gap` CSS property */
    rowGap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `column-gap` CSS property */
    columnGap?: StyleProp<RaikouSize | (string & {}) | number>;
    /** `align-items` CSS property */
    align?: StyleProp<React.CSSProperties["alignItems"]>;
    /** justify-content CSS property */
    justify?: StyleProp<React.CSSProperties["justifyContent"]>;
    /** flex-wrap CSS property */
    wrap?: StyleProp<React.CSSProperties["flexWrap"]>;
    /** flex-direction CSS property */
    direction?: StyleProp<React.CSSProperties["flexDirection"]>;
}
type FlexFactory = Factory<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
}>;
declare const Flex: _raikou_core.RaikouComponent<{
    props: FlexProps;
    ref: HTMLDivElement;
    stylesNames: FlexStylesNames;
}>;

export { FLEX_STYLE_PROPS_DATA, Flex, FlexFactory, FlexProps, FlexStylesNames };
