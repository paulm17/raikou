import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  RaikouSize,
} from "@raikou/core";
import { useGradientPickerContext } from "../../GradientPicker.context";
import { Stack } from "../../../../Stack/src";
import { SaturationSlider } from "./saturationSlider";
import { LightnessSlider } from "./lightnessSlider";
import { BrightnessSlider } from "./brightnessSlider";
import { Text } from "../../../../Text/src";
import { TinyColor } from "@ctrl/tinycolor";
import { HsvaColor, colord } from "colord";

export type ColorModelStylesNames = "root";

export interface ColorModelProps
  extends BoxProps,
    CompoundStylesApiProps<ColorModelFactory> {
  value: HsvaColor;
  size?: RaikouSize;
  saturationSliderLabel?: string;
  lightnessSliderLabel?: string;
  brightnessSliderLabel?: string;
  focusable?: boolean;
  onChange(color: HsvaColor): void;
}

export type ColorModelFactory = Factory<{
  props: ColorModelProps;
  ref: HTMLDivElement;
  stylesNames: ColorModelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ColorModelProps> = {};

export const ColorModel = factory<ColorModelFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    size,
    saturationSliderLabel,
    lightnessSliderLabel,
    brightnessSliderLabel,
    focusable,
    onChange,
    ...others
  } = useProps("ColorModel", defaultProps, props);

  const ctx = useGradientPickerContext();
  const colorHSL = colord(value).toHsl();

  const saturationChange = (value) => {
    const rgba = new TinyColor({
      h: colorHSL.h,
      s: value,
      l: colorHSL.l,
    }).toRgbString();

    onChange(colord(rgba).toHsv());
  };

  const lightnessChange = (value) => {
    const rgba = new TinyColor({
      h: colorHSL.h,
      s: colorHSL.s,
      l: value,
    }).toRgbString();

    onChange(colord(rgba).toHsv());
  };

  const brightnessChange = (value) => {
    const rgba = new TinyColor({
      h: colorHSL.h,
      s: ctx.color.s,
      v: value,
    }).toRgbString();

    onChange(colord(rgba).toHsv());
  };

  return (
    <Stack gap={0} {...others}>
      <Stack gap={0}>
        <Text className="text-[12px] text-center">Saturation</Text>
        <SaturationSlider
          value={colorHSL.s}
          hsl={[colorHSL.h, colorHSL.s, colorHSL.l, colorHSL.a]}
          onChange={(s) => saturationChange(s)}
          onChangeEnd={(s) => saturationChange(s)}
          size={size}
          focusable={focusable}
          aria-label={saturationSliderLabel}
        />
      </Stack>
      <Stack gap={0}>
        <Text className="text-[12px] text-center">Lightness</Text>
        <LightnessSlider
          value={colorHSL.l}
          hsl={[colorHSL.h, colorHSL.s, colorHSL.l, colorHSL.a]}
          onChange={(l) => lightnessChange(l)}
          onChangeEnd={(l) => lightnessChange(l)}
          size={size}
          focusable={focusable}
          aria-label={lightnessSliderLabel}
        />
      </Stack>
      <Stack gap={0}>
        <Text className="text-[12px] text-center">Brightness</Text>
        <BrightnessSlider
          value={ctx.color!.v}
          hsl={[colorHSL.h, colorHSL.s, colorHSL.l, colorHSL.a]}
          onChange={(v) => brightnessChange(v)}
          onChangeEnd={(v) => brightnessChange(v)}
          size={size}
          focusable={focusable}
          aria-label={brightnessSliderLabel}
        />
      </Stack>
    </Stack>
  );
});

ColorModel.displayName = "@raikou/core/ColorModel";
