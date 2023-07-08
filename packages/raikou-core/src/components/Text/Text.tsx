import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  RaikouGradient,
  useStyles,
  useProps,
  getGradient,
  BoxMod,
  createVarsResolver,
  PolymorphicFactory,
  RaikouSize,
  getFontSize,
  getLineHeight,
  cn,
} from "../../core";

type TextTruncate = "end" | "start" | boolean;

function getTextTruncate(truncate: TextTruncate | undefined) {
  if (truncate === "start") {
    return "start";
  }

  if (truncate === "end" || truncate) {
    return "end";
  }

  return undefined;
}

export type TextStylesNames = "root";
export type TextVariant = "text" | "gradient";
export type TextCssVariables = {
  root: "--text-gradient" | "--text-line-clamp" | "--text-fz" | "--text-lh";
};

export interface TextProps extends BoxProps, StylesApiProps<TextFactory> {
  __staticSelector?: string;
  mod?: BoxMod;

  /** Controls `font-size` and `line-height`, `'md'` by default */
  size?: RaikouSize | (string & {});

  /** Number of lines after which Text will be truncated */
  lineClamp?: number;

  /** Side on which Text must be truncated, if `true`, text in truncated from the start */
  truncate?: TextTruncate;

  /** Sets `line-height` to 1 for centering, `false` by default */
  inline?: boolean;

  /** Determines whether font properties should be inherited from the parent, `false` by default */
  inherit?: boolean;

  /** Gradient configuration, ignored when `variant` is not `gradient`, `theme.defaultGradient` by default */
  gradient?: RaikouGradient;

  /** Shorthand for `component="span"`, `false` by default, default root element is `p` */
  span?: boolean;
}

export type TextFactory = PolymorphicFactory<{
  props: TextProps;
  defaultComponent: "div";
  defaultRef: HTMLParagraphElement;
  stylesNames: TextStylesNames;
  vars: TextCssVariables;
  variant: TextVariant;
}>;

const defaultProps: Partial<TextProps> = {
  variant: "text",
  inherit: false,
  size: "md",
};

const varsResolver = createVarsResolver<TextFactory>(
  (theme, { variant, lineClamp, gradient, size }) => ({
    root: {
      "--text-fz": getFontSize(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient":
        variant === "gradient" ? getGradient(gradient, theme) : undefined,
      "--text-line-clamp":
        typeof lineClamp === "number" ? lineClamp.toString() : undefined,
    },
  })
);

export const Text = polymorphicFactory<TextFactory>((_props, ref) => {
  const props = useProps("Text", defaultProps, _props);
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size,
    ...others
  } = props;

  const getStyles = useStyles<TextFactory>({
    name: ["Text", __staticSelector],
    props,
    classes: {
      root: "text-root",
    },
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
      {...getStyles("root", { focusable: true })}
      ref={ref}
      component={span ? "span" : "p"}
      variant={variant}
      mod={[
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit,
        },
        mod,
      ]}
      size={size}
      {...others}
    />
  );
});

// Text.classes = classes;
Text.displayName = "@raikou/core/Text";
