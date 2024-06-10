import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  Factory,
  createVarsResolver,
  factory,
  useProps,
  useStyles,
} from "@raikou/core";
import classes from "../ColorPicker.module.css";
import { ColorSwatch } from "../../../ColorSwatch/src";

export type SwatchesStylesNames = "swatch" | "swatches";

export type SwatchesCssVariables = {
  swatches: "--cp-swatch-size";
};

export interface SwatchesProps
  extends BoxProps,
    CompoundStylesApiProps<SwatchesFactory>,
    ElementProps<"div", "onChange"> {
  size?: string | number;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  setValue: (value: string) => void;
}

export type SwatchesFactory = Factory<{
  props: SwatchesProps;
  ref: HTMLDivElement;
  stylesNames: SwatchesStylesNames;
  vars: SwatchesCssVariables;
}>;

const defaultProps: Partial<SwatchesProps> = {
  swatchesPerRow: 10,
  focusable: true,
};

const varsResolver = createVarsResolver<SwatchesFactory>(
  (_, { swatchesPerRow }) => ({
    swatches: {
      "--cp-swatch-size": `${100 / swatchesPerRow!}%`,
    },
  }),
);

export const Swatches = factory<SwatchesFactory>((props, ref) => {
  const {
    className,
    datatype,
    style,
    classNames,
    styles,
    setValue,
    onChangeEnd,
    size,
    focusable,
    data,
    swatchesPerRow,
    vars,
    ...others
  } = useProps("Swatches", defaultProps, props);

  const getStyles = useStyles<SwatchesFactory>({
    name: "ColorPicker",
    classes,
    props: { ...props, ...defaultProps },
    className,
    style,
    classNames,
    styles,
    vars,
    varsResolver,
  });

  const colors = data.map((color, index) => (
    <ColorSwatch
      {...getStyles("swatch")}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => {
        setValue(color);
        onChangeEnd?.(color);
      }}
      aria-label={color}
      tabIndex={focusable ? 0 : -1}
      data-swatch
    />
  ));

  return (
    <Box {...getStyles("swatches")} ref={ref} {...others}>
      {colors}
    </Box>
  );
});

Swatches.displayName = "@raikou/core/Swatches";
