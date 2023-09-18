import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  PolymorphicFactory,
} from "@raikou/core";

export type CenterStylesNames = "root";

export interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
  /** Content that should be centered vertically and horizontally */
  children?: React.ReactNode;

  /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
  inline?: boolean;
}

export type CenterFactory = PolymorphicFactory<{
  props: CenterProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: CenterStylesNames;
}>;

const defaultProps: Partial<CenterProps> = {};

export const Center = polymorphicFactory<CenterFactory>((_props, ref) => {
  const props = useProps("Center", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    inline,
    ...others
  } = props;

  const getStyles = useStyles<CenterFactory>({
    name: "Center",
    props,
    classes: {
      root: "center-root",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  return <Box ref={ref} mod={{ inline }} {...getStyles("root")} {...others} />;
});

Center.displayName = "@raikou/core/Center";
