import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
} from "@raikou/core";
import { ColorSwatch } from "../../../../ColorSwatch/src";
import { HsvaColor, colord } from "colord";

export type GradientPickerColorSwatchesStylesNames = "root";

export interface GradientPickerColorSwatchesProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerColorSwatchesFactory> {
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: HsvaColor) => void;
  setValue(value: HsvaColor): void;
}

export type GradientPickerColorSwatchesFactory = Factory<{
  props: GradientPickerColorSwatchesProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerColorSwatchesStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerColorSwatchesProps> = {
  swatchesPerRow: 10,
  focusable: true,
};

export const GradientPickerColorSwatches =
  factory<GradientPickerColorSwatchesFactory>((props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      data,
      swatchesPerRow,
      focusable,
      setValue,
      onChangeEnd,
      ...others
    } = useProps("GradientPickerColorSwatches", defaultProps, props);

    const colors = data.map((color, index) => (
      <ColorSwatch
        className="swatch"
        component="button"
        type="button"
        color={color}
        key={index}
        radius="sm"
        onClick={() => {
          const _color = colord(color).toHsv();

          setValue(_color);
          onChangeEnd?.(_color);
        }}
        style={{ cursor: "pointer" }}
        aria-label={color}
        tabIndex={focusable ? 0 : -1}
      />
    ));

    return (
      <Box className="swatches" {...others}>
        {colors}
      </Box>
    );
  });

GradientPickerColorSwatches.displayName =
  "@raikou/core/GradientPickerColorSwatches";
