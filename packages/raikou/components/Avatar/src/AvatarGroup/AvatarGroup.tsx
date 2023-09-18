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
  RaikouSpacing,
  getSpacing,
} from "@raikou/core";
import { AvatarGroupProvider } from "./AvatarGroup.context";

export type AvatarGroupStylesNames = "root";
export type AvatarGroupVariant = string;
export type AvatarGroupCssVariables = {
  root: "--ag-spacing";
};

export interface AvatarGroupProps
  extends BoxProps,
    StylesApiProps<AvatarGroupFactory>,
    ElementProps<"div"> {
  /** Negative space between Avatar components, `'sm'` by default */
  spacing?: RaikouSpacing;
}

export type AvatarGroupFactory = Factory<{
  props: AvatarGroupProps;
  ref: HTMLDivElement;
  stylesNames: AvatarGroupStylesNames;
  vars: AvatarGroupCssVariables;
  variant: AvatarGroupVariant;
}>;

const defaultProps: Partial<AvatarGroupProps> = {};

const varsResolver = createVarsResolver<AvatarGroupFactory>(
  (_, { spacing }) => ({
    root: {
      "--ag-spacing": getSpacing(spacing),
    },
  }),
);

export const AvatarGroup = factory<AvatarGroupFactory>((_props, ref) => {
  const props = useProps("AvatarGroup", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    spacing,
    ...others
  } = props;

  const getStyles = useStyles<AvatarGroupFactory>({
    name: "AvatarGroup",
    classes: {
      root: "avatarGroup-root",
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
    <AvatarGroupProvider value>
      <Box ref={ref} {...getStyles("root")} {...others} />
    </AvatarGroupProvider>
  );
});

AvatarGroup.displayName = "@raikou/core/AvatarGroup";
