import * as _raikou_core from '@raikou/core';
import { RaikouSize, BoxProps, StylesApiProps, ElementProps, Factory } from '@raikou/core';
import React from 'react';

type ColorFormat = 'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla';
interface HsvaColor {
    h: number;
    s: number;
    v: number;
    a: number;
}

type ColorPickerStylesNames = "wrapper" | "preview" | "body" | "sliders" | "slider" | "sliderOverlay" | "thumb" | "saturation" | "thumb" | "saturationOverlay" | "thumb" | "swatches" | "swatch";
type ColorPickerCssVariables = {
    wrapper: "--cp-preview-size" | "--cp-width" | "--cp-body-spacing" | "--cp-swatch-size" | "--cp-thumb-size" | "--cp-saturation-height";
};
interface __ColorPickerProps {
    /** Controlled component value */
    value?: string;
    /** Uncontrolled component default value */
    defaultValue?: string;
    /** Called when color changes */
    onChange?: (value: string) => void;
    /** Called when user stops dragging or changes value with arrow keys */
    onChangeEnd?: (value: string) => void;
    /** Color format, `'hex'` by default */
    format?: ColorFormat;
    /** Determines whether color picker should be displayed, `true` by default */
    withPicker?: boolean;
    /** Color swatches */
    swatches?: string[];
    /** Number of swatches displayed in one row, `7` by default */
    swatchesPerRow?: number;
    /** Controls size of hue, alpha and saturation sliders, `'md'` by default */
    size?: RaikouSize | (string & {});
}
interface ColorPickerProps extends BoxProps, __ColorPickerProps, StylesApiProps<ColorPickerFactory>, ElementProps<"div", "onChange" | "value" | "defaultValue"> {
    __staticSelector?: string;
    /** Determines whether component should take 100% width of its container, `false` by default */
    fullWidth?: boolean;
    /** Determines whether interactive elements should be focusable, `true` by default */
    focusable?: boolean;
    /** Saturation slider `aria-label` */
    saturationLabel?: string;
    /** Hue slider `aria-label` */
    hueLabel?: string;
    /** Alpha slider `aria-label` */
    alphaLabel?: string;
    /** Called when one of the color swatches is clicked */
    onColorSwatchClick?: (color: string) => void;
}
type ColorPickerFactory = Factory<{
    props: ColorPickerProps;
    ref: HTMLDivElement;
    stylesNames: ColorPickerStylesNames;
    vars: ColorPickerCssVariables;
}>;
declare const ColorPicker: _raikou_core.RaikouComponent<{
    props: ColorPickerProps;
    ref: HTMLDivElement;
    stylesNames: ColorPickerStylesNames;
    vars: ColorPickerCssVariables;
}>;

type ColorSliderStylesNames = "slider" | "sliderOverlay" | "thumb";
type ColorSliderVariant = string;
type ColorSliderCssVariables = {
    root: "--test";
};
interface __ColorSliderProps extends ElementProps<"div", "onChange"> {
    value: number;
    onChange?: (value: number) => void;
    onChangeEnd?: (value: number) => void;
    onScrubStart?: () => void;
    onScrubEnd?: () => void;
    size?: RaikouSize | (string & {});
    focusable?: boolean;
}
interface ColorSliderProps extends BoxProps, StylesApiProps<ColorSliderFactory>, __ColorSliderProps, ElementProps<"div", "onChange"> {
    __staticSelector?: string;
    maxValue: number;
    overlays: React.CSSProperties[];
    round: boolean;
    thumbColor?: string;
}
type ColorSliderFactory = Factory<{
    props: ColorSliderProps;
    ref: HTMLDivElement;
    stylesNames: ColorSliderStylesNames;
    vars: ColorSliderCssVariables;
    variant: ColorSliderVariant;
}>;

interface AlphaSliderProps extends Omit<ColorSliderProps, "maxValue" | "overlays" | "round"> {
    color: string;
}
declare const AlphaSlider: React.ForwardRefExoticComponent<AlphaSliderProps & React.RefAttributes<HTMLDivElement>>;

interface HueSliderProps extends Omit<ColorSliderProps, "maxValue" | "overlays" | "round"> {
}
declare const HueSlider: React.ForwardRefExoticComponent<HueSliderProps & React.RefAttributes<HTMLDivElement>>;

declare function convertHsvaTo(format: ColorFormat, color: HsvaColor): string;

declare function isColorValid(color: string): boolean;
declare function parseColor(color: string): HsvaColor;

export { AlphaSlider, ColorPicker, type ColorPickerCssVariables, type ColorPickerFactory, type ColorPickerProps, type ColorPickerStylesNames, HueSlider, type __ColorPickerProps, convertHsvaTo, isColorValid, parseColor };
