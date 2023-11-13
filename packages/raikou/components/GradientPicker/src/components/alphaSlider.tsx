import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { SliderBaseProps } from "../../../Slider/src";
import { GradientPickerColorSlider } from "./colorSlider";
import { round } from "../utils";

export type GradientPickerAlphaSliderStylesNames = "root";

export interface GradientPickerAlphaSliderProps
  extends BoxProps,
    SliderBaseProps,
    CompoundStylesApiProps<GradientPickerAlphaSliderFactory> {
  color: string;
}

export type GradientPickerAlphaSliderFactory = Factory<{
  props: GradientPickerAlphaSliderProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerAlphaSliderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerAlphaSliderProps> = {};

export const GradientPickerAlphaSlider =
  factory<GradientPickerAlphaSliderFactory>((props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      color,
      value,
      onChange,
      onChangeEnd,
      ...others
    } = useProps("GradientPickerAlphaSlider", defaultProps, props);

    return (
      <GradientPickerColorSlider
        ref={ref}
        value={value}
        onChange={(val) => onChange(round(val, 2))}
        onChangeEnd={(val) => onChangeEnd(round(val, 2))}
        maxValue={1}
        round={false}
        // overlays={[
        //   {
        //     backgroundImage: `linear-gradient(45deg, ${_color} 25%, transparent 25%), linear-gradient(-45deg, ${_color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${_color} 75%), linear-gradient(-45deg, ${
        //       theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
        //     } 75%, ${_color} 75%)`,
        //     backgroundSize: "8px 8px",
        //     backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
        //   },
        //   {
        //     backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
        //   },
        //   {
        //     boxShadow:
        //       "rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset",
        //   },
        // ]}
        {...others}
      />
    );
  });

GradientPickerAlphaSlider.displayName =
  "@raikou/core/GradientPickerAlphaSlider";
