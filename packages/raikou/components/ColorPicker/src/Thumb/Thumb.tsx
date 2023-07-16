import React, { forwardRef } from "react";
import { Box, RaikouSize } from "@raikou/core";
import { useColorPickerContext } from "../ColorPicker.context";

export interface ThumbProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: string;
  position: { x: number; y: number };
  size: RaikouSize | (string & {});
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  ({ className, style, size, position, ...others }, ref) => {
    const { getStyles } = useColorPickerContext();
    return (
      <Box
        ref={ref}
        {...getStyles("thumb", { style })}
        __vars={{
          "--_thumb-y-offset": `${position.y * 100}%`,
          "--_thumb-x-offset": `${position.x * 100}%`,
        }}
        {...others}
      />
    );
  }
);

Thumb.displayName = "@raikou/core/ColorPickerThumb";
