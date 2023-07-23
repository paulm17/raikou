import * as _raikou_core from '@raikou/core';
import { BoxProps, StylesApiProps, ElementProps, Factory, RaikouSize } from '@raikou/core';

type ColorFormat = 'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

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
    onChange?(value: string): void;
    /** Called when user stops dragging or changes value with arrow keys */
    onChangeEnd?(value: string): void;
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
    onColorSwatchClick?(color: string): void;
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

export { ColorPicker, ColorPickerCssVariables, ColorPickerFactory, ColorPickerProps, ColorPickerStylesNames };
