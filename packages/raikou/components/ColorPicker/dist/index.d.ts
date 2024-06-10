import * as _raikou_core from '@raikou/core';
import { RaikouSize, BoxProps, StylesApiProps, ElementProps, Factory, CompoundStylesApiProps } from '@raikou/core';
import React from 'react';

type ColorFormat = 'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla';
interface HsvaColor {
    h: number;
    s: number;
    v: number;
    a: number;
}

type ColorPickerStylesNames = "wrapper" | "preview" | "body" | "sliders" | "slider" | "sliderOverlay" | "thumb" | "saturation" | "saturationOverlay" | "swatches" | "swatch";
type ColorPickerCssVariables = {
    wrapper: "--cp-preview-size" | "--cp-width" | "--cp-body-spacing";
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
}>;

interface AlphaSliderProps extends Omit<ColorSliderProps, "maxValue" | "overlays" | "round"> {
    color: string;
}
declare const AlphaSlider: React.ForwardRefExoticComponent<AlphaSliderProps & React.RefAttributes<HTMLDivElement>>;

interface HueSliderProps extends Omit<ColorSliderProps, "maxValue" | "overlays" | "round"> {
}
declare const HueSlider: React.ForwardRefExoticComponent<HueSliderProps & React.RefAttributes<HTMLDivElement>>;

type SaturationStylesNames = "saturation" | "saturationOverlay" | "thumb";
interface SaturationProps extends BoxProps, CompoundStylesApiProps<SaturationFactory>, ElementProps<"div", "onChange"> {
    value: HsvaColor;
    onChange: (color: Partial<HsvaColor>) => void;
    onChangeEnd: (color: Partial<HsvaColor>) => void;
    onScrubStart?: () => void;
    onScrubEnd?: () => void;
    saturationLabel?: string;
    size: RaikouSize | (string & {});
    focusable?: boolean;
}
type SaturationFactory = Factory<{
    props: SaturationProps;
    ref: HTMLDivElement;
    stylesNames: SaturationStylesNames;
    compound: true;
}>;
declare const Saturation: _raikou_core.RaikouComponent<{
    props: SaturationProps;
    ref: HTMLDivElement;
    stylesNames: SaturationStylesNames;
    compound: true;
}>;

declare function convertHsvaTo(format: ColorFormat, color: HsvaColor): string;

declare function isColorValid(color: string): boolean;
declare function parseColor(color: string): HsvaColor;

export { AlphaSlider, ColorPicker, type ColorPickerCssVariables, type ColorPickerFactory, type ColorPickerProps, type ColorPickerStylesNames, type HsvaColor, HueSlider, Saturation, type __ColorPickerProps, convertHsvaTo, isColorValid, parseColor };
