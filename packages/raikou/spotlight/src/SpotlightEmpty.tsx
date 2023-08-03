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
import { useSpotlightContext } from "./Spotlight.context";

export type SpotlightEmptyStylesNames = "empty";

export interface SpotlightEmptyProps
  extends BoxProps,
    StylesApiProps<SpotlightEmptyFactory>,
    ElementProps<"div"> {}

export type SpotlightEmptyFactory = Factory<{
  props: SpotlightEmptyProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightEmptyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightEmptyProps> = {};

export const SpotlightEmpty = factory<SpotlightEmptyFactory>((props, ref) => {
  const { className, style, classNames, styles, ...others } = useProps(
    "SpotlightEmpty",
    defaultProps,
    props,
  );

  const ctx = useSpotlightContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles("empty", { classNames, styles, className, style })}
      {...others}
    />
  );
});

SpotlightEmpty.displayName = "@raikou/spotlight/SpotlightEmpty";