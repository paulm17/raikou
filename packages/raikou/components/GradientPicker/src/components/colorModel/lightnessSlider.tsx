import React, { forwardRef } from "react";
import {
  ColorSlider,
  ColorSliderProps,
} from "../../../../ColorPicker/src/ColorSlider/ColorSlider";

export interface LightnessSliderProps
  extends Omit<ColorSliderProps, "maxValue" | "overlays" | "round"> {
  hsl: Number[];
}

export const LightnessSlider = forwardRef<HTMLDivElement, LightnessSliderProps>(
  (
    { value, onChange, onChangeEnd, hsl, ...others }: LightnessSliderProps,
    ref,
  ) => {
    const gradientBar = () => {
      let gradient = [] as string[];

      for (let i = 0; i <= 100; i += 10) {
        gradient.push(`hsl(${hsl[0]}, ${hsl[1]}%, ${i}%)`);
      }

      return `linear-gradient(to right, ${gradient.join(",")})`;
    };

    return (
      <ColorSlider
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

LightnessSlider.displayName = "@raikou/core/LightnessSlider";
