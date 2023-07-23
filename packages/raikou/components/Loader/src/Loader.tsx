import React from "react";
import {
  Box,
  RaikouSize,
  RaikouColor,
  BoxProps,
  useProps,
  getThemeColor,
  StylesApiProps,
  useStyles,
  factory,
  getSize,
  createVarsResolver,
  Factory,
} from "@raikou/core";
import { Bars } from "./loaders/Bars";
import { Oval } from "./loaders/Oval";
import { Dots } from "./loaders/Dots";
import type { RaikouLoader, RaikouLoadersRecord } from "./Loader.types";

export type LoaderStylesNames = "root";
export type LoaderCssVariables = {
  root: "--loader-size" | "--loader-color";
};

export interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderFactory>,
    Omit<React.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;

  /** Loader type, key of `loaders` prop, default value is `'oval'` */
  type?: RaikouLoader;

  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: RaikouLoadersRecord;
}

export type LoaderFactory = Factory<{
  props: LoaderProps;
  ref: HTMLSpanElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
  staticComponents: {
    defaultLoaders: typeof defaultLoaders;
  };
}>;

export const defaultLoaders: RaikouLoadersRecord = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const defaultProps: Partial<LoaderProps> = {
  size: "md",
  loaders: defaultLoaders,
  type: "oval",
};

const varsResolver = createVarsResolver<LoaderFactory>(
  (theme, { size, color }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": getThemeColor(color, theme),
    },
  })
);

export const Loader = factory<LoaderFactory>((_props, ref) => {
  const props = useProps("Loader", defaultProps, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    ...others
  } = props;

  const getStyles = useStyles<LoaderFactory>({
    name: "Loader",
    props,
    classes: {
      root: "loader-root",
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
      {...getStyles("root")}
      ref={ref}
      component={(loaders as any)[type!]}
      variant={variant}
      size={size}
      {...others}
    />
  );
});

Loader.displayName = "@raikou/core/Loader";
