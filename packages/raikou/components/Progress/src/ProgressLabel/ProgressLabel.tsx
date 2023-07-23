import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useProgressContext } from "../Progress.context";

export type ProgressLabelStylesNames = "label";

export interface ProgressLabelProps
  extends BoxProps,
    StylesApiProps<ProgressLabelFactory>,
    ElementProps<"div"> {}

export type ProgressLabelFactory = Factory<{
  props: ProgressLabelProps;
  ref: HTMLDivElement;
  stylesNames: ProgressLabelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ProgressLabelProps> = {};

export const ProgressLabel = factory<ProgressLabelFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } =
    useProps("ProgressLabel", defaultProps, props);

  const ctx = useProgressContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles("label", { className, style, classNames, styles })}
      {...others}
    />
  );
});

ProgressLabel.displayName = "@raikou/core/ProgressLabel";
