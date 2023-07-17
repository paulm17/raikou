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
  rem,
  getRadius,
} from "@raikou/core";

export type SkeletonStylesNames = "root";
export type SkeletonCssVariables = {
  root: "--skeleton-width" | "--skeleton-height" | "--skeleton-radius";
};

export interface SkeletonProps
  extends BoxProps,
    StylesApiProps<SkeletonFactory>,
    ElementProps<"div"> {
  /** Determines whether Skeleton overlay should be displayed, `true` by default */
  visible?: boolean;

  /** Skeleton `height`, numbers are converted to rem, `auto` by default */
  height?: React.CSSProperties["height"];

  /** Skeleton `width`, numbers are converted to rem, `100%` by default, ignored when `circle` prop is set */
  width?: React.CSSProperties["width"];

  /** If set, Skeleton `width` and `border-radius` are equal to its `height`, `false` by default */
  circle?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: React.CSSProperties["borderRadius"];

  /** Determines whether Skeleton should be animated, `true` by default */
  animate?: boolean;
}

export type SkeletonFactory = Factory<{
  props: SkeletonProps;
  ref: HTMLDivElement;
  stylesNames: SkeletonStylesNames;
  vars: SkeletonCssVariables;
}>;

const defaultProps: Partial<SkeletonProps> = {
  width: "100%",
  height: "auto",
  visible: true,
  animate: true,
};

const varsResolver = createVarsResolver<SkeletonFactory>(
  (_, { width, height, radius, circle }) => ({
    root: {
      "--skeleton-height": rem(height),
      "--skeleton-width": circle ? rem(height) : rem(width),
      "--skeleton-radius": circle ? "1000000px" : getRadius(radius),
    },
  })
);

export const Skeleton = factory<SkeletonFactory>((_props, ref) => {
  const props = useProps("Skeleton", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    width,
    height,
    circle,
    visible,
    radius,
    animate,
    ...others
  } = props;

  const getStyles = useStyles<SkeletonFactory>({
    name: "Skeleton",
    classes: {
      root: "skeleton-root",
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

  return (
    <Box
      ref={ref}
      {...getStyles("root")}
      mod={{ visible, animate }}
      {...others}
    />
  );
});

Skeleton.displayName = "@raikou/core/Skeleton";
