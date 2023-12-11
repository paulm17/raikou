import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

type SkeletonStylesNames = "root";
type SkeletonCssVariables = {
    root: "--skeleton-width" | "--skeleton-height" | "--skeleton-radius";
};
interface SkeletonProps extends BoxProps, StylesApiProps<SkeletonFactory>, ElementProps<"div"> {
    /** Determines whether Skeleton overlay should be displayed, `true` by default */
    visible?: boolean;
    /** Skeleton `height`, numbers are converted to rem, `auto` by default */
    height?: React.CSSProperties["height"];
    /** Skeleton `width`, numbers are converted to rem, `100%` by default, ignored when `circle` prop is set */
    width?: React.CSSProperties["width"];
    /** If set, Skeleton `width` and `border-radius` are equal to its `height`, `false` by default */
    circle?: boolean;
    /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
    radius?: React.CSSProperties["borderRadius"];
    /** Determines whether Skeleton should be animated, `true` by default */
    animate?: boolean;
}
type SkeletonFactory = Factory<{
    props: SkeletonProps;
    ref: HTMLDivElement;
    stylesNames: SkeletonStylesNames;
    vars: SkeletonCssVariables;
}>;
declare const Skeleton: _raikou_core.RaikouComponent<{
    props: SkeletonProps;
    ref: HTMLDivElement;
    stylesNames: SkeletonStylesNames;
    vars: SkeletonCssVariables;
}>;

export { Skeleton, type SkeletonCssVariables, type SkeletonFactory, type SkeletonProps, type SkeletonStylesNames };
