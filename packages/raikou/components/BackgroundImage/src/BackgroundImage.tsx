import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  RaikouRadius,
  getRadius,
  createVarsResolver,
  PolymorphicFactory,
} from "@raikou/core";

export type BackgroundImageStylesNames = "root";
export type BackgroundImageVariant = string;
export type BackgroundImageCssVariables = {
  root: "--bi-radius";
};

export interface BackgroundImageProps
  extends BoxProps,
    StylesApiProps<BackgroundImageFactory> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `0` by default */
  radius?: RaikouRadius;

  /** Image url */
  src: string;
}

export type BackgroundImageFactory = PolymorphicFactory<{
  props: BackgroundImageProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: BackgroundImageStylesNames;
  vars: BackgroundImageCssVariables;
}>;

const defaultProps: Partial<BackgroundImageProps> = {
  radius: 0,
};

const varsResolver = createVarsResolver<BackgroundImageFactory>(
  (_, { radius }) => ({
    root: { "--bi-radius": getRadius(radius) },
  }),
);

export const BackgroundImage = polymorphicFactory<BackgroundImageFactory>(
  (_props, ref) => {
    const props = useProps("BackgroundImage", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      radius,
      src,
      variant,
      ...others
    } = props;

    const getStyles = useStyles<BackgroundImageFactory>({
      name: "BackgroundImage",
      props,
      classes: {
        root: "backgroundImage-root",
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
        {...getStyles("root", { style: { backgroundImage: `url(${src})` } })}
        {...others}
      />
    );
  },
);

BackgroundImage.displayName = "@raikou/core/BackgroundImage";
