import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from "../../core";

export type TypographyStylesProviderStylesNames = "root";
export type TypographyStylesProviderVariant = string;

export interface TypographyStylesProviderProps
  extends BoxProps,
    StylesApiProps<TypographyStylesProviderFactory>,
    ElementProps<"div"> {}

export type TypographyStylesProviderFactory = Factory<{
  props: TypographyStylesProviderProps;
  ref: HTMLDivElement;
  stylesNames: TypographyStylesProviderStylesNames;
  variant: TypographyStylesProviderVariant;
}>;

const defaultProps: Partial<TypographyStylesProviderProps> = {};

export const TypographyStylesProvider =
  factory<TypographyStylesProviderFactory>((_props, ref) => {
    const props = useProps("TypographyStylesProvider", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, ...others } = props;

    const getStyles = useStyles<TypographyStylesProviderFactory>({
      name: "TypographyStylesProvider",
      classes: {
        root: "typographyStylesProvider-root",
      },
      props,
      className,
      style,
      classNames,
      styles,
      unstyled,
    });

    return <Box ref={ref} {...getStyles("root")} {...others} />;
  });

// TypographyStylesProvider.classes = classes;
TypographyStylesProvider.displayName = "@raikou/core/TypographyStylesProvider";
