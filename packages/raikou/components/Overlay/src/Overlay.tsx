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
  rgba,
  getDefaultZIndex,
  getRadius,
  rem,
} from "@raikou/core";

export type OverlayStylesNames = "root";
export type OverlayVariant = string;
export type OverlayCssVariables = {
  root:
    | "--overlay-bg"
    | "--overlay-filter"
    | "--overlay-radius"
    | "--overlay-z-index";
};

export interface OverlayProps extends BoxProps, StylesApiProps<OverlayFactory> {
  /** Controls overlay `background-color` opacity 0–1, disregarded when `gradient` prop is set, `0.6` by default */
  backgroundOpacity?: number;

  /** Overlay `background-color`, `#000` by default */
  color?: React.CSSProperties["backgroundColor"];

  /** Overlay background blur, `0` by default */
  blur?: number | string;

  /** Changes overlay to gradient. If set, `color` prop is ignored */
  gradient?: string;

  /** Overlay z-index, `200` by default */
  zIndex?: React.CSSProperties["zIndex"];

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `0` by default */
  radius?: RaikouRadius | (string & {}) | number;

  /** Content inside overlay */
  children?: React.ReactNode;

  /** Determines whether content inside overlay should be vertically and horizontally centered, `false` by default */
  center?: boolean;

  /** Determines whether overlay should have fixed position instead of absolute, `false` by default */
  fixed?: boolean;
}

export type OverlayFactory = PolymorphicFactory<{
  props: OverlayProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: OverlayStylesNames;
  vars: OverlayCssVariables;
  variant: OverlayVariant;
}>;

const defaultProps: Partial<OverlayProps> = {
  color: "#000",
  backgroundOpacity: 0.6,
  zIndex: getDefaultZIndex("modal"),
  radius: 0,
};

const varsResolver = createVarsResolver<OverlayFactory>(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg":
        gradient || rgba(color || "#000", backgroundOpacity ?? 0.6),
      "--overlay-filter": blur ? `blur(${rem(blur)})` : undefined,
      "--overlay-radius": getRadius(radius),
      "--overlay-z-index": zIndex?.toString(),
    },
  })
);

export const Overlay = polymorphicFactory<OverlayFactory>((_props, ref) => {
  const props = useProps("Overlay", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity,
    ...others
  } = props;

  const getStyles = useStyles<OverlayFactory>({
    name: "Overlay",
    props,
    classes: {
      root: "overlay-root",
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
    <Box ref={ref} {...getStyles("root")} mod={{ center, fixed }} {...others}>
      {children}
    </Box>
  );
});

// Overlay.classes = classes;
Overlay.displayName = "@raikou/core/Overlay";
