import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  RaikouSpacing,
  getSpacing,
  createVarsResolver,
  Factory,
} from "@raikou/core";

export type FlexStylesNames = "root";
export type FlexVariant = string;
export type FlexCssVariables = {
  root:
    | "--flex-gap"
    | "--flex-align"
    | "--flex-justify"
    | "--flex-wrap"
    | "--flex-direction";
};

export interface FlexProps
  extends BoxProps,
    StylesApiProps<FlexFactory>,
    ElementProps<"div"> {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem, `'md'` by default */
  gap?: RaikouSpacing | (string & {}) | number;

  /** Controls `align-items` CSS property, `'stretch'` by default */
  align?: React.CSSProperties["alignItems"];

  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React.CSSProperties["justifyContent"];

  /** Controls `flex-wrap` CSS property, `'wrap'` by default */
  wrap?: React.CSSProperties["flexWrap"];

  /** Controls `direction` CSS property, `'row'` by default */
  direction?: React.CSSProperties["flexDirection"];
}

export type FlexFactory = Factory<{
  props: FlexProps;
  ref: HTMLDivElement;
  stylesNames: FlexStylesNames;
  vars: FlexCssVariables;
  variant: FlexVariant;
}>;

const defaultProps: Partial<FlexProps> = {
  gap: "md",
  align: "flex-start",
  justify: "flex-start",
  direction: "row",
  wrap: "wrap",
};

const varsResolver = createVarsResolver<FlexFactory>(
  (_, { gap, align, justify, wrap, direction }) => ({
    root: {
      "--flex-gap": getSpacing(gap),
      "--flex-align": align,
      "--flex-justify": justify,
      "--flex-wrap": wrap,
      "--flex-direction": direction,
    },
  })
);

export const Flex = factory<FlexFactory>((_props, ref) => {
  const props = useProps("Flex", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    direction,
    wrap,
    variant,
    ...others
  } = props;

  const getStyles = useStyles<FlexFactory>({
    name: "Flex",
    props,
    classes: { root: "flex-root" },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles("root")} variant={variant} {...others} />;
});

Flex.displayName = "@raikou/core/Flex";
