import React from "react";
import {
  Box,
  BoxProps,
  RaikouRadius,
  StylesApiProps,
  getRadius,
  polymorphicFactory,
  rem,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  cn,
} from "../../core";

export type ColorSwatchStylesNames =
  | "root"
  | "alphaOverlay"
  | "shadowOverlay"
  | "colorOverlay"
  | "childrenOverlay";
export type ColorSwatchVariant = string;
export type ColorSwatchCssVariables = {
  root: "--cs-radius" | "--cs-size";
};

export interface ColorSwatchProps
  extends BoxProps,
    StylesApiProps<ColorSwatchFactory> {
  /** Color to display, not related to `theme.colors` – supports only CSS color values */
  color: string;

  /** Controls `width` and `height` of the swatch, any valid CSS value, numbers are converted to rem */
  size?: React.CSSProperties["width"];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem */
  radius?: RaikouRadius | (string & {}) | number;

  /** Determines whether the swatch should have inner `box-shadow`, `true` by default */
  withShadow?: boolean;

  /** Content rendered inside the swatch */
  children?: React.ReactNode;
}

export type ColorSwatchFactory = PolymorphicFactory<{
  props: ColorSwatchProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: ColorSwatchStylesNames;
  vars: ColorSwatchCssVariables;
  variant: ColorSwatchVariant;
}>;

const defaultProps: Partial<ColorSwatchProps> = {
  size: rem(28),
  radius: rem(28),
  withShadow: true,
};

const varsResolver = createVarsResolver<ColorSwatchFactory>(
  (_, { radius, size }) => ({
    root: {
      "--cs-radius": getRadius(radius),
      "--cs-size": rem(size),
    },
  })
);

export const ColorSwatch = polymorphicFactory<ColorSwatchFactory>(
  (_props, ref) => {
    const props = useProps("ColorSwatch", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      color,
      size,
      radius,
      withShadow,
      children,
      variant,
      ...others
    } = useProps("ColorSwatch", defaultProps, props);

    const getStyles = useStyles<ColorSwatchFactory>({
      name: "ColorSwatch",
      props,
      classes: {
        root: "colorswatch-root",
        alphaOverlay: "colorswatch-alphaOverlay",
        shadowOverlay: "colorswatch-shadowOverlay",
        colorOverlay: "colorswatch-colorOverlay",
        childrenOverlay: "colorswatch-childrenOverlay",
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
        ref={ref}
        variant={variant}
        size={size}
        {...getStyles("root", { focusable: true })}
        {...others}
      >
        <span {...getStyles("alphaOverlay")} />
        {withShadow && <span {...getStyles("shadowOverlay")} />}
        <span
          {...getStyles("colorOverlay", { style: { backgroundColor: color } })}
        />
        <span {...getStyles("childrenOverlay")}>{children}</span>
      </Box>
    );
  }
);

// ColorSwatch.classes = classes;
ColorSwatch.displayName = "@raikou/core/ColorSwatch";
