import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

type ScrollAreaStylesNames = "root" | "viewport" | "viewportInner" | "scrollbar" | "thumb" | "corner";
type ScrollAreaCssVariables = {
    root: "--scrollarea-scrollbar-size";
};
interface ScrollAreaProps extends BoxProps, StylesApiProps<ScrollAreaFactory>, ElementProps<"div"> {
    /** Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem */
    scrollbarSize?: number | string;
    /**
     * Defines scrollbars behavior, `hover` by default
     * - `hover` – scrollbars are visible when mouse is over the scroll area
     * - `scroll` – scrollbars are visible when the scroll area is scrolled
     * - `always` – scrollbars are always visible
     * - `never` – scrollbars are always hidden
     * - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
     * */
    type?: "auto" | "always" | "scroll" | "hover" | "never";
    /** Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll`, `1000` by default */
    scrollHideDelay?: number;
    /** Axis at which scrollbars must be rendered, `'xy'` by default */
    scrollbars?: "x" | "y" | "xy" | false;
    /** Determines whether scrollbars should be offset with padding, `false` by default */
    offsetScrollbars?: boolean | "x" | "y";
    /** Assigns viewport element (scrollable container) ref */
    viewportRef?: React.ForwardedRef<HTMLDivElement>;
    /** Props passed down to the viewport element */
    viewportProps?: React.ComponentPropsWithRef<"div">;
    /** Called with current position (`x` and `y` coordinates) when viewport is scrolled */
    onScrollPositionChange?: (position: {
        x: number;
        y: number;
    }) => void;
}
interface ScrollAreaAutosizeProps extends ScrollAreaProps {
}
type ScrollAreaFactory = Factory<{
    props: ScrollAreaProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaStylesNames;
    vars: ScrollAreaCssVariables;
    staticComponents: {
        Autosize: typeof ScrollAreaAutosize;
    };
}>;
declare const ScrollArea: _raikou_core.RaikouComponent<{
    props: ScrollAreaProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaStylesNames;
    vars: ScrollAreaCssVariables;
    staticComponents: {
        Autosize: typeof ScrollAreaAutosize;
    };
}>;
declare const ScrollAreaAutosize: _raikou_core.RaikouComponent<{
    props: ScrollAreaProps;
    ref: HTMLDivElement;
    stylesNames: ScrollAreaStylesNames;
    vars: ScrollAreaCssVariables;
    staticComponents: {
        Autosize: typeof ScrollAreaAutosize;
    };
}>;

export { ScrollArea, ScrollAreaAutosize, type ScrollAreaAutosizeProps, type ScrollAreaCssVariables, type ScrollAreaFactory, type ScrollAreaProps, type ScrollAreaStylesNames };
