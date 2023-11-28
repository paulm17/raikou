import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  RaikouRadius,
  getRadius,
} from "@raikou/core";
import { useStore } from "./store";
import classes from "./Image.module.css";

export type ImageStylesNames = "root";
export type ImageCssVariables = {
  root: "--image-radius" | "--image-object-fit";
};

export interface ImageProps extends BoxProps, StylesApiProps<ImageFactory> {
  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `0` by default */
  radius?: RaikouRadius;

  /** Controls `object-fit` style, `'cover'` by default */
  fit?: React.CSSProperties["objectFit"];

  /** Image url that will be used as a fallback in case `src` prop is not set or image cannot be loaded */
  fallbackSrc?: string;

  /** Image url */
  src?: any;

  /** Called when image fails to load */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export type ImageFactory = PolymorphicFactory<{
  props: ImageProps;
  defaultRef: HTMLImageElement;
  defaultComponent: "img";
  stylesNames: ImageStylesNames;
  vars: ImageCssVariables;
}>;

const defaultProps: Partial<ImageProps> = {};

const varsResolver = createVarsResolver<ImageFactory>((_, { radius, fit }) => ({
  root: {
    "--image-radius": radius === undefined ? undefined : getRadius(radius),
    "--image-object-fit": fit,
  },
}));

export const Image = polymorphicFactory<ImageFactory>((_props, ref) => {
  const props = useProps("Image", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc,
    ...others
  } = props;

  const getStyles = useStyles<ImageFactory>({
    name: "Image",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  if (typeof window === "undefined") {
    var request = require("request").defaults({ encoding: null });

    request.get(src, function (error: any, response: any) {
      if (response === undefined) {
        useStore.getState().error = true;
      } else if (response.statusCode !== 200) {
        useStore.getState().error = true;
      }
    });
  }

  return (
    <Box
      component="img"
      ref={ref}
      {...getStyles("root")}
      src={useStore.getState().error ? fallbackSrc : src}
      {...others}
    />
  );
});

Image.classes = classes;
Image.displayName = "@raikou/core/Image";
