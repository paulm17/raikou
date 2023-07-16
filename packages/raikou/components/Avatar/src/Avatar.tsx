import React, { useEffect, useState } from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  getSize,
  getRadius,
  RaikouSize,
  RaikouRadius,
  RaikouColor,
  RaikouGradient,
} from "@raikou/core";
import { AvatarGroup } from "./AvatarGroup/AvatarGroup";
import { useAvatarGroupContext } from "./AvatarGroup/AvatarGroup.context";
import { AvatarPlaceholderIcon } from "./AvatarPlaceholderIcon";

export type AvatarStylesNames = "root" | "placeholder" | "image";
export type AvatarVariant =
  | "filled"
  | "light"
  | "gradient"
  | "outline"
  | "transparent"
  | "default"
  | "white";

export type AvatarCssVariables = {
  root:
    | "--avatar-size"
    | "--avatar-radius"
    | "--avatar-bg"
    | "--avatar-color"
    | "--avatar-bd";
};

export interface AvatarProps extends BoxProps, StylesApiProps<AvatarFactory> {
  /** Width and height of the avatar, numbers are converted to rem, `'md'` by default */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `'100%'` by default */
  radius?: RaikouRadius | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;

  /** Image url, if the image cannot be loaded or `src={null}`, then placeholder is displayed instead */
  src?: string | null;

  /** Image `alt` attribute, also used as `title` attribute for placeholder */
  alt?: string;

  /** `img` tag attributes */
  imageProps?: React.ComponentPropsWithoutRef<"img">;

  /** Avatar placeholder, displayed when `src={null}` or when the image cannot be loaded */
  children?: React.ReactNode;
}

export type AvatarFactory = PolymorphicFactory<{
  props: AvatarProps;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: AvatarStylesNames;
  vars: AvatarCssVariables;
  variant: AvatarVariant;
  staticComponents: {
    Group: typeof AvatarGroup;
  };
}>;

const defaultProps: Partial<AvatarProps> = {
  size: "md",
  radius: "100%",
  color: "gray",
  variant: "light",
};

const varsResolver = createVarsResolver<AvatarFactory>(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant!,
    });

    return {
      root: {
        "--avatar-size": getSize(size, "avatar-size"),
        "--avatar-radius": getRadius(radius),
        "--avatar-bg": colors.background,
        "--avatar-color": colors.color,
        "--avatar-bd": colors.border,
      },
    };
  }
);

export const Avatar = polymorphicFactory<AvatarFactory>((_props, ref) => {
  const props = useProps("Avatar", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    src,
    alt,
    radius,
    color,
    gradient,
    imageProps,
    children,
    ...others
  } = props;
  const ctx = useAvatarGroupContext();
  const [error, setError] = useState(!src);

  const getStyles = useStyles<AvatarFactory>({
    name: "Avatar",
    props,
    classes: {
      root: "avatar-root",
      placeholder: "avatar-placeholder",
      image: "avatar-image",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  useEffect(() => setError(!src), [src]);

  return (
    <Box
      {...getStyles("root")}
      mod={{ "within-group": ctx.withinGroup }}
      ref={ref}
      {...others}
    >
      {error ? (
        <span {...getStyles("placeholder")} title={alt}>
          {children || <AvatarPlaceholderIcon />}
        </span>
      ) : (
        <img
          {...imageProps}
          {...getStyles("image")}
          src={src!}
          alt={alt}
          onError={(event) => {
            setError(true);
            imageProps?.onError?.(event);
          }}
        />
      )}
    </Box>
  );
});

// Avatar.classes = classes;
Avatar.displayName = "@raikou/core/Avatar";
Avatar.Group = AvatarGroup;
