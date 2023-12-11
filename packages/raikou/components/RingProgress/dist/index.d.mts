import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, Factory } from '@raikou/core';
import React from 'react';

interface RingProgressSection extends React.ComponentPropsWithRef<"circle"> {
    value: number;
    color: RaikouColor;
    tooltip?: React.ReactNode;
}
type RingProgressStylesNames = "root" | "svg" | "label" | "curve";
type RingProgressCssVariables = {
    root: "--rp-size" | "--rp-label-offset";
};
interface RingProgressProps extends BoxProps, StylesApiProps<RingProgressFactory>, ElementProps<"div"> {
    /** Label displayed in the center of the ring */
    label?: React.ReactNode;
    /** Ring thickness */
    thickness?: number;
    /** Width and height of the progress ring */
    size?: number;
    /** Sets whether the edges of the progress circle are rounded */
    roundCaps?: boolean;
    /** Ring sections */
    sections: RingProgressSection[];
    /** Color of the root section, key of theme.colors or CSS color value */
    rootColor?: RaikouColor;
}
type RingProgressFactory = Factory<{
    props: RingProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingProgressStylesNames;
    vars: RingProgressCssVariables;
}>;
declare const RingProgress: _raikou_core.RaikouComponent<{
    props: RingProgressProps;
    ref: HTMLDivElement;
    stylesNames: RingProgressStylesNames;
    vars: RingProgressCssVariables;
}>;

export { RingProgress, type RingProgressCssVariables, type RingProgressFactory, type RingProgressProps, type RingProgressStylesNames };
