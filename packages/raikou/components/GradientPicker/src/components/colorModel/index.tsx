import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  rem,
  RaikouSize,
} from "@raikou/core";
import { useGradientPickerContext } from "../../GradientPicker.context";
import cx from "clsx";
import { Stack } from "../../../../Stack/src";
import { SaturationSlider } from "./saturationSlider";
import { LightnessSlider } from "./lightnessSlider";
import { BrightnessSlider } from "./brightnessSlider";
import { Text } from "../../../../Text/src";
import { TinyColor } from "@ctrl/tinycolor";
import { HsvaColor, colord } from "colord";

export type GradientPickerColorModelStylesNames = "root";

export interface GradientPickerColorModelProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerColorModelFactory> {
  value: HsvaColor;
  size?: RaikouSize;
  saturationSliderLabel?: string;
  lightnessSliderLabel?: string;
  brightnessSliderLabel?: string;
  focusable?: boolean;
  onChange(color: HsvaColor): void;
}

export type GradientPickerColorModelFactory = Factory<{
  props: GradientPickerColorModelProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerColorModelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerColorModelProps> = {};

export const GradientPickerColorModel =
  factory<GradientPickerColorModelFactory>((props, ref) => {
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
    } = useProps("GradientPickerColorModel", defaultProps, props);

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
          <Text size={rem(12)} className="text-center">
            Saturation
          </Text>
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
          <Text size={12} align="center">
            Lightness
          </Text>
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
          <Text size={rem(12)} className="text-center">
            Brightness
          </Text>
          <BrightnessSlider
            value={ctx.color.v}
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

GradientPickerColorModel.displayName = "@raikou/core/GradientPickerColorModel";
