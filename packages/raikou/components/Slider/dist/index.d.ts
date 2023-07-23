import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, RaikouColor, RaikouRadius, RaikouSize, Factory } from '@raikou/core';
import React from 'react';

interface RaikouTransitionStyles {
    common?: React.CSSProperties;
    in: React.CSSProperties;
    out: React.CSSProperties;
    transitionProperty: React.CSSProperties["transitionProperty"];
}
type RaikouTransitionName = "fade" | "skew-up" | "skew-down" | "rotate-right" | "rotate-left" | "slide-down" | "slide-up" | "slide-right" | "slide-left" | "scale-y" | "scale-x" | "scale" | "pop" | "pop-top-left" | "pop-top-right" | "pop-bottom-left" | "pop-bottom-right";
type RaikouTransition = RaikouTransitionName | RaikouTransitionStyles;

interface TransitionProps {
    /** If set element will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
    keepMounted?: boolean;
    /** Transition name or object */
    transition: RaikouTransition;
    /** Transition duration in ms, `250` by default */
    duration?: number;
    /** Exit transition duration in ms, `250` by default */
    exitDuration?: number;
    /** Transition timing function, `theme.transitionTimingFunction` by default */
    timingFunction?: string;
    /** Determines whether component should be mounted to the DOM */
    mounted: boolean;
    /** Render function with transition styles argument */
    children(styles: React.CSSProperties): JSX.Element;
    /** Called when exit transition ends */
    onExited?: () => void;
    /** Called when exit transition starts */
    onExit?: () => void;
    /** Called when enter transition starts */
    onEnter?: () => void;
    /** Called when enter transition ends */
    onEntered?: () => void;
}
type TransitionOverride = Partial<Omit<TransitionProps, "mounted">>;

type SliderStylesNames = "root" | "label" | "thumb" | "trackContainer" | "track" | "bar" | "markWrapper" | "mark" | "markLabel";
type SliderCssVariables = {
    root: "--slider-size" | "--slider-color" | "--slider-thumb-size" | "--slider-radius";
};

interface SliderProps extends BoxProps, StylesApiProps<SliderFactory>, ElementProps<"div", "onChange"> {
    /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Controls size of the track, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Minimal possible value, `0` by default */
    min?: number;
    /** Maximum possible value, `100` by default */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
    step?: number;
    /** Number of significant digits after the decimal point */
    precision?: number;
    /** Controlled component value */
    value?: number;
    /** Uncontrolled component default value */
    defaultValue?: number;
    /** Called when value changes */
    onChange?(value: number): void;
    /** Called when user stops dragging slider or changes value with arrows */
    onChangeEnd?(value: number): void;
    /** Hidden input name, use with uncontrolled component */
    name?: string;
    /** Marks displayed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Function to generate label or any react node to render instead, set to null to disable label */
    label?: React.ReactNode | ((value: number) => React.ReactNode);
    /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
    labelTransitionProps?: TransitionOverride;
    /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
    labelAlwaysOn?: boolean;
    /** Thumb `aria-label` */
    thumbLabel?: string;
    /** Determines whether thumb label should be displayed when the slider is hovered, `true` by default */
    showLabelOnHover?: boolean;
    /** Content rendered inside thumb */
    thumbChildren?: React.ReactNode;
    /** Disables slider */
    disabled?: boolean;
    /** Thumb `width` and `height`, by default value is computed based on `size` prop */
    thumbSize?: number | string;
    /** A transformation function to change the scale of the slider */
    scale?(value: number): number;
    /** Determines whether track value representation should be inverted, `false` by default */
    inverted?: boolean;
}
type SliderFactory = Factory<{
    props: SliderProps;
    ref: HTMLDivElement;
    stylesNames: SliderStylesNames;
    vars: SliderCssVariables;
}>;
declare const Slider: _raikou_core.RaikouComponent<{
    props: SliderProps;
    ref: HTMLDivElement;
    stylesNames: SliderStylesNames;
    vars: SliderCssVariables;
}>;

type RangeSliderValue = [number, number];
interface RangeSliderProps extends BoxProps, StylesApiProps<RangeSliderFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
    /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
    color?: RaikouColor;
    /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
    radius?: RaikouRadius | (string & {}) | number;
    /** Controls size of the track, `'md'` by default */
    size?: RaikouSize | (string & {}) | number;
    /** Minimal possible value, `0` by default */
    min?: number;
    /** Maximum possible value, `100` by default */
    max?: number;
    /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
    step?: number;
    /** Number of significant digits after the decimal point */
    precision?: number;
    /** Controlled component value */
    value?: RangeSliderValue;
    /** Uncontrolled component default value */
    defaultValue?: RangeSliderValue;
    /** Called when value changes */
    onChange?(value: RangeSliderValue): void;
    /** Called when user stops dragging slider or changes value with arrows */
    onChangeEnd?(value: RangeSliderValue): void;
    /** Hidden input name, use with uncontrolled component */
    name?: string;
    /** Marks displayed on the track */
    marks?: {
        value: number;
        label?: React.ReactNode;
    }[];
    /** Function to generate label or any react node to render instead, set to null to disable label */
    label?: React.ReactNode | ((value: number) => React.ReactNode);
    /** Props passed down to the `Transition` component, `{ transition: 'fade', duration: 0 }` by default */
    labelTransitionProps?: TransitionOverride;
    /** Determines whether the label should be visible when the slider is not being dragged or hovered, `false` by default */
    labelAlwaysOn?: boolean;
    /** Determines whether thumb label should be displayed when the slider is hovered, `true` by default */
    showLabelOnHover?: boolean;
    /** Content rendered inside thumb */
    thumbChildren?: React.ReactNode;
    /** Disables slider */
    disabled?: boolean;
    /** Thumb `width` and `height`, by default value is computed based on `size` prop */
    thumbSize?: number | string;
    /** A transformation function to change the scale of the slider */
    scale?(value: number): number;
    /** Determines whether track values representation should be inverted, `false` by default */
    inverted?: boolean;
    /** Minimal range interval, `10` by default */
    minRange?: number;
    /** Maximum range interval, `Infinity` by default */
    maxRange?: number;
    /** First thumb `aria-label` */
    thumbFromLabel?: string;
    /** Second thumb `aria-label` */
    thumbToLabel?: string;
}
type RangeSliderFactory = Factory<{
    props: RangeSliderProps;
    ref: HTMLDivElement;
    stylesNames: SliderStylesNames;
    vars: SliderCssVariables;
}>;
declare const RangeSlider: _raikou_core.RaikouComponent<{
    props: RangeSliderProps;
    ref: HTMLDivElement;
    stylesNames: SliderStylesNames;
    vars: SliderCssVariables;
}>;

export { RangeSlider, RangeSliderFactory, RangeSliderProps, RangeSliderValue, Slider, SliderCssVariables, SliderFactory, SliderProps, SliderStylesNames };
