import React, { forwardRef } from "react";
import { GradientPickerColorSlider, SliderBaseProps } from "../colorSlider";

export interface SaturationSliderProps extends SliderBaseProps {
  hsl: Number[];
}

export const SaturationSlider = forwardRef<
  HTMLDivElement,
  SaturationSliderProps
>(
  (
    { value, onChange, onChangeEnd, hsl, ...others }: SaturationSliderProps,
    ref,
  ) => {
    const gradientBar = () => {
      let gradient = [] as string[];

      for (let i = 0; i <= 100; i += 10) {
        gradient.push(`hsl(${hsl[0]},${i}%,${hsl[2]}%)`);
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

SaturationSlider.displayName = "@raikou/core/SaturationSlider";
