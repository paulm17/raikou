import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, CompoundStylesApiProps, RaikouSize, RaikouShadow, RaikouThemeComponent } from '@raikou/core';
import { HsvaColor } from 'colord';
import React from 'react';

type GradientPickerColorSwatchesStylesNames = "root" | "swatch" | "swatches";
interface GradientPickerColorSwatchesProps extends BoxProps, StylesApiProps<GradientPickerColorSwatchesFactory>, ElementProps<"div"> {
    data: string[];
    swatchesPerRow?: number;
    focusable?: boolean;
    onChangeEnd?: (color: HsvaColor) => void;
    setValue(value: HsvaColor): void;
}
type GradientPickerColorSwatchesFactory = Factory<{
    props: GradientPickerColorSwatchesProps;
    ref: HTMLDivElement;
    defaultComponent: "div";
    stylesNames: GradientPickerColorSwatchesStylesNames;
}>;

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
    transition?: RaikouTransition;
    /** Transition duration in ms, `250` by default */
    duration?: number;
    /** Exit transition duration in ms, `250` by default */
    exitDuration?: number;
    /** Transition timing function, `theme.transitionTimingFunction` by default */
    timingFunction?: string;
    /** Determines whether component should be mounted to the DOM */
    mounted: boolean;
    /** Render function with transition styles argument */
    children: (styles: React.CSSProperties) => JSX.Element;
    /** Called when exit transition ends */
    onExited?: () => void;
    /** Called when exit transition starts */
    onExit?: () => void;
    /** Called when enter transition starts */
    onEnter?: () => void;
    /** Called when enter transition ends */
    onEntered?: () => void;
}

type FloatingPlacement = "end" | "start";
type FloatingSide = "top" | "right" | "bottom" | "left";
type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;

type ColorFormat = "hex" | "rgba" | "hsva" | "hsla" | "cmyk";

type GradientPickerCompactStylesNames = "content" | "dropdown";
interface GradientPickerCompactProps extends BoxProps, CompoundStylesApiProps<GradientPickerCompactFactory> {
    picker: "input" | "dropdown";
    swatchSize: number;
    /** Color format */
    format?: ColorFormat | undefined;
    /** Predefined component size */
    size?: RaikouSize;
    /** Component disabled or not */
    disabled?: boolean;
    /** Predefined dropper size */
    dropperSize?: RaikouSize | number;
    /** Dropdown element z-index */
    dropdownZIndex?: number;
    /** Dropdown position */
    dropdownPosition?: FloatingPosition;
    /** Props passed down to the Transition component that used to animate
     dropdown presence use to configure duration and animation type,
     { duration: 150, transition: 'fade' } by default
    */
    transitionProps?: Partial<Omit<TransitionProps, "mounted">>;
    /** Should interactive elements be focusable */
    focusable?: boolean;
    /** Saturation container aria-label */
    saturationLabel?: string;
    /** Hue slider aria-label */
    hueLabel?: string;
    /** Alpha slider aria-label */
    alphaLabel?: string;
    /** Saturation slide aria-label */
    saturationSliderLabel?: string;
    /** Lightness slide aria-label */
    lightnessSliderLabel?: string;
    /** Brightness slide aria-label */
    brightnessSliderLabel?: string;
    /** Whether to render the dropdown in a Portal */
    withinPortal?: boolean;
    /** Size of the Dropdown */
    width?: number;
    /** Dropdown box-shadow, key of theme.shadows */
    shadow?: RaikouShadow;
    /** Predefined colors */
    swatches?: string[];
    /** Number of swatches displayed in one row */
    swatchesPerRow?: number;
    /** Open Event - run when popup opens */
    onOpen?: () => void;
    /** Close Event - run when popup closes */
    onClose?: () => void;
}
type GradientPickerCompactFactory = Factory<{
    props: GradientPickerCompactProps;
    ref: HTMLDivElement;
    stylesNames: GradientPickerCompactStylesNames;
    compound: true;
}>;

type GradientPickerStylesNames = "root";
interface GradientPickerProps extends BoxProps, StylesApiProps<GradientPickerFactory>, ElementProps<"div", "value" | "defaultValue" | "onChange"> {
    /** Value for controlled component */
    value: string;
    /** Called when value changes */
    onChange(value: string): void;
}
type GradientPickerFactory = Factory<{
    props: GradientPickerProps;
    ref: HTMLDivElement;
    stylesNames: GradientPickerStylesNames;
}>;
declare function GradientPicker(_props: GradientPickerProps): React.JSX.Element;
declare namespace GradientPicker {
    var extend: (c: _raikou_core.ExtendsRootComponent<{
        props: GradientPickerProps;
        ref: HTMLDivElement;
        stylesNames: "root";
    }>) => RaikouThemeComponent;
    var displayName: string;
    var Compact: _raikou_core.RaikouComponent<{
        props: GradientPickerCompactProps;
        ref: HTMLDivElement;
        stylesNames: GradientPickerCompactStylesNames;
        compound: true;
    }>;
    var Swatches: _raikou_core.RaikouComponent<{
        props: GradientPickerColorSwatchesProps;
        ref: HTMLDivElement;
        defaultComponent: "div";
        stylesNames: GradientPickerColorSwatchesStylesNames;
    }>;
}

export { GradientPicker, type GradientPickerFactory, type GradientPickerProps, type GradientPickerStylesNames };
