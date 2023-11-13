import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { GradientPickerColorSlider } from "./colorSlider";
import { SliderBaseProps } from "../../../Slider/src";

export type GradientPickerHueSliderStylesNames = "root";

export interface GradientPickerHueSliderProps
  extends BoxProps,
    SliderBaseProps,
    CompoundStylesApiProps<GradientPickerHueSliderFactory> {}

export type GradientPickerHueSliderFactory = Factory<{
  props: GradientPickerHueSliderProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerHueSliderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerHueSliderProps> = {};

export const GradientPickerHueSlider = factory<GradientPickerHueSliderFactory>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      value,
      onChange,
      onChangeEnd,
      ...others
    } = useProps("GradientPickerHueSlider", defaultProps, props);

    return (
      <GradientPickerColorSlider
        ref={ref}
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        maxValue={360}
        // thumbColor={`hsl(${value}, 100%, 50%)`}
        round
        // overlays={[
        //   {
        //     backgroundImage:
        //       "linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))",
        //   },
        //   {
        //     boxShadow:
        //       "rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset",
        //   },
        // ]}
        {...others}
      />
    );
  },
);

GradientPickerHueSlider.displayName = "@raikou/core/GradientPickerHueSlider";
