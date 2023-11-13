import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  RaikouSize,
} from "@raikou/core";
import cx from "clsx";
import { THUMB_SIZES } from "./style";

export type GradientPickerThumbStylesNames = "root";

interface Position {
  x: number;
  y: number;
}

export interface GradientPickerThumbProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerThumbFactory> {
  position: Position;
  size: RaikouSize;
}

export type GradientPickerThumbFactory = Factory<{
  props: GradientPickerThumbProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerThumbStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerThumbProps> = {};

export const GradientPickerThumb = factory<GradientPickerThumbFactory>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      position,
      size,
      ...others
    } = useProps("GradientPickerThumb", defaultProps, props);

    return (
      <Box
        className={cx("gradientPicker-thumb", className)}
        style={{
          left: `calc(${position.x * 100}% - ${THUMB_SIZES[size] / 2}px)`,
          top: `calc(${position.y * 100}% - ${THUMB_SIZES[size] / 2}px)`,
          ...style,
        }}
        {...others}
      />
    );
  },
);

GradientPickerThumb.displayName = "@raikou/core/GradientPickerThumb";
