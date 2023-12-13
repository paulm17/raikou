import React, { forwardRef } from "react";
import { Box } from "@raikou/core";

export interface ThumbProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: string;
  position: { x: number; y: number };
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  ({ className, style, position, ...others }, ref) => {
    return (
      <Box
        ref={ref}
        __vars={{
          "--_thumb-y-offset": `${position.y * 100}%`,
          "--_thumb-x-offset": `${position.x * 100}%`,
        }}
        {...others}
      />
    );
  },
);

Thumb.displayName = "@raikou/core/ColorPickerThumb";
