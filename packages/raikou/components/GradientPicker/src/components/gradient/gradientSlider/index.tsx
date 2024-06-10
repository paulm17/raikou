import React, { forwardRef } from "react";
import { rem, useProps } from "@raikou/core";
import { ColorSlider, ColorSliderProps } from "../gradientSlider/colorSlider";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { buildGradientStrip } from "../../utils";

export interface GradientSliderProps
  extends Omit<
    ColorSliderProps,
    "maxValue" | "overlays" | "round" | "onChange" | "value"
  > {
  activeStopIndex?: number;
}

export const GradientSlider = forwardRef<HTMLDivElement, GradientSliderProps>(
  (props, ref) => {
    const { ...others } = useProps("GradientSlider", {}, props);
    const ctx = useGradientPickerContext();

    // Needs fixing, look at https://ant.design/components/slider for inspiration

    return (
      <ColorSlider
        {...others}
        ref={ref}
        maxValue={100}
        round
        data-gradientslider
        overlays={[
          {
            backgroundImage: buildGradientStrip(
              ctx.gradient?.colors,
              ctx.gradient?.hints,
              0,
              0,
            ),
          },
          {
            boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(
              1,
            )} inset, rgb(0, 0, 0, .15) 0 0 ${rem(4)} inset`,
          },
        ]}
      />
    );
  },
);

GradientSlider.displayName = "@raikou/core/GradientSlider";
