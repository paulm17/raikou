import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from "@raikou/core";

export type AspectRatioStylesNames = "root";
export type AspectRatioVariant = string;
export type AspectRatioCssVariables = {
  root: "--ar-ratio";
};

export interface AspectRatioProps
  extends BoxProps,
    StylesApiProps<AspectRatioFactory>,
    ElementProps<"div"> {
  /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
  ratio?: number;
}

export type AspectRatioFactory = Factory<{
  props: AspectRatioProps;
  ref: HTMLDivElement;
  stylesNames: AspectRatioStylesNames;
  vars: AspectRatioCssVariables;
  variant: AspectRatioVariant;
}>;

const defaultProps: Partial<AspectRatioProps> = {};

const varsResolver = createVarsResolver<AspectRatioFactory>((_, { ratio }) => ({
  root: {
    "--ar-ratio": ratio?.toString(),
  },
}));

export const AspectRatio = factory<AspectRatioFactory>((_props, ref) => {
  const props = useProps("AspectRatio", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    ratio,
    ...others
  } = props;

  const getStyles = useStyles<AspectRatioFactory>({
    name: "AspectRatio",
    classes: {
      root: "aspectRatio-root",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles("root")} {...others} />;
});

AspectRatio.displayName = "@raikou/core/AspectRatio";
