import React, { forwardRef } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { GradientPickerColorSlider, SliderBaseProps } from "../colorSlider";

export interface BrightnessSliderProps extends SliderBaseProps {
  hsl: Number[];
}

export const BrightnessSlider = forwardRef<
  HTMLDivElement,
  BrightnessSliderProps
>(
  (
    { value, onChange, onChangeEnd, hsl, ...others }: BrightnessSliderProps,
    ref,
  ) => {
    const gradientBar = () => {
      let gradient = [] as string[];

      for (let i = 0; i <= 100; i += 10) {
        let color = new TinyColor({
          h: hsl[0] as number,
          s: hsl[1] as number,
          v: i,
        });
        gradient.push(`${color.toHslString()}`);
      }

      return `linear-gradient(to right, ${gradient.join(",")})`;
    };

    return (
      <GradientPickerColorSlider
        {...others}
        ref={ref}
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        maxValue={100}
        // thumbColor={"transparent"}
        round
        overlays={[
          {
            backgroundImage: gradientBar(),
          },
          {
            boxShadow:
              "rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset",
          },
        ]}
      />
    );
  },
);

BrightnessSlider.displayName = "@raikou/core/BrightnessSlider";
