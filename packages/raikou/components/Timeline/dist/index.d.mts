import * as _raikou_core from '@raikou/core';
import { BoxProps, CompoundStylesApiProps, ElementProps, RaikouRadius, RaikouColor, Factory, StylesApiProps } from '@raikou/core';
import React from 'react';

type TimelineItemStylesNames = "itemBody" | "itemContent" | "itemBullet" | "item" | "itemTitle";
interface TimelineItemProps extends BoxProps, CompoundStylesApiProps<TimelineItemFactory>, ElementProps<"div", "title"> {
    /** Determines whether the item should be highlighted, controlled by the parent `Timeline` component  */
    __active?: boolean;
    /** Determines whether the line of the item should be highlighted, controlled by the parent Timeline component */
    __lineActive?: boolean;
    /** Line and bullet position relative to item content, controlled by the parent Timeline component */
    __align?: "right" | "left";
    /** Item title, displayed next to the bullet */
    title?: React.ReactNode;
    /** Content displayed below the title */
    children?: React.ReactNode;
    /** React node that should be rendered inside the bullet – icon, image, avatar, etc. By default, large white dot is displayed. */
    bullet?: React.ReactNode;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: RaikouRadius;
    /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Controls line border style, `'solid'` by default */
    lineVariant?: "solid" | "dashed" | "dotted";
}
type TimelineItemFactory = Factory<{
    props: TimelineItemProps;
    ref: HTMLDivElement;
    stylesNames: TimelineItemStylesNames;
    compound: true;
}>;
declare const TimelineItem: _raikou_core.RaikouComponent<{
    props: TimelineItemProps;
    ref: HTMLDivElement;
    stylesNames: TimelineItemStylesNames;
    compound: true;
}>;

type TimelineStylesNames = "root" | TimelineItemStylesNames;
type TimelineCssVariables = {
    root: "--tl-line-width" | "--tl-bullet-size" | "--tl-color" | "--tl-radius";
};
interface TimelineProps extends BoxProps, StylesApiProps<TimelineFactory>, ElementProps<"div"> {
    /** `Timeline.Item` components */
    children?: React.ReactNode;
    /** Index of active element */
    active?: number;
    /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: RaikouRadius;
    /** Controls size of the bullet, `20` by default */
    bulletSize?: number | string;
    /** Controls how the content is positioned relative to the bullet, `'left'` by default */
    align?: "right" | "left";
    /** Control width of the line */
    lineWidth?: number | string;
    /** Determines whether the active items direction should be reversed without reversing items order, `false` by default */
    reverseActive?: boolean;
    /** Determines whether icon color should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
    autoContrast?: boolean;
}
type TimelineFactory = Factory<{
    props: TimelineProps;
    ref: HTMLDivElement;
    stylesNames: TimelineStylesNames;
    vars: TimelineCssVariables;
    staticComponents: {
        Item: typeof TimelineItem;
    };
}>;
declare const Timeline: _raikou_core.RaikouComponent<{
    props: TimelineProps;
    ref: HTMLDivElement;
    stylesNames: TimelineStylesNames;
    vars: TimelineCssVariables;
    staticComponents: {
        Item: typeof TimelineItem;
    };
}>;

export { Timeline, type TimelineCssVariables, type TimelineFactory, TimelineItem, type TimelineItemFactory, type TimelineItemProps, type TimelineItemStylesNames, type TimelineProps, type TimelineStylesNames };
