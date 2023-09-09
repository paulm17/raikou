import React from "react";
import {
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
  RaikouSize,
  RaikouColor,
  RaikouRadius,
  RaikouGradient,
  Box,
  getRadius,
  getSize,
  getFontSize,
} from "@raikou/core";
import { UnstyledButton } from "../../UnstyledButton/src";
import { Loader, LoaderProps } from "../../Loader/src";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";

export type ButtonStylesNames =
  | "root"
  | "inner"
  | "loader"
  | "section"
  | "label";
export type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";

export type ButtonCssVariables = {
  root:
    | "--button-justify"
    | "--button-height"
    | "--button-padding-x"
    | "--button-fz"
    | "--button-radius"
    | "--button-bg"
    | "--button-hover"
    | "--button-color"
    | "--button-bd";
};

export interface ButtonProps extends BoxProps, StylesApiProps<ButtonFactory> {
  "data-disabled"?: boolean;

  /** Controls button `height`, `font-size` and horizontal `padding`, `'sm'` by default */
  size?: RaikouSize | `compact-${RaikouSize}` | (string & {});

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Sets `justify-content` of `inner` element, can be used to change distribution of sections and label, `'center'` by default */
  justify?: React.CSSProperties["justifyContent"];

  /** Content displayed on the left side of the button label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the button label */
  rightSection?: React.ReactNode;

  /** Determines whether button should take 100% width of its parent container, `false` by default */
  fullWidth?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;

  /** Indicates disabled state */
  disabled?: boolean;

  /** Button content */
  children?: React.ReactNode;

  /** Determines whether the `Loader` component should be displayed over the button */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: "left" | "right" | "center";
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: "button";
  stylesNames: ButtonStylesNames;
  vars: ButtonCssVariables;
  staticComponents: {
    Group: typeof ButtonGroup;
  };
  variant: ButtonVariant;
}>;

const defaultProps: Partial<ButtonProps> = {
  size: "sm",
  variant: "filled",
  loaderPosition: "left",
};

const varsResolver = createVarsResolver<ButtonFactory>(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant!,
    });

    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size, "button-height"),
        "--button-padding-x": getSize(size, "button-padding-x"),
        "--button-fz": size?.includes("compact")
          ? getFontSize(size.replace("compact-", ""))
          : getFontSize(size),
        "--button-radius": getRadius(radius),
        "--button-bg": colors.background,
        "--button-hover": colors.hover,
        "--button-color": colors.color,
        "--button-bd": colors.border,
      },
    };
  },
);

export const Button = polymorphicFactory<ButtonFactory>((_props, ref) => {
  const props = useProps("Button", defaultProps, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderPosition,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    ...others
  } = props;

  const getStyles = useStyles<ButtonFactory>({
    name: "Button",
    props,
    classes: {
      root: "button-root",
      inner: "button-inner",
      loader: "button-loader",
      section: "button-section",
      label: "button-label",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;

  return (
    <UnstyledButton
      ref={ref}
      {...getStyles("root", { active: !disabled && !loading && !dataDisabled })}
      unstyled={unstyled}
      variant={variant}
      disabled={disabled || loading}
      mod={[
        "button",
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection,
        },
      ]}
      {...others}
    >
      <span {...getStyles("inner")}>
        {leftSection && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "left" }}
          >
            {leftSection}
          </Box>
        )}

        {loading && loaderPosition === "left" && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "left" }}
          >
            {!loading && leftSection}
            {loading && (
              <Loader
                type="progress"
                color="var(--button-color)"
                size="calc(var(--button-height) / 2.4)"
                {...loaderProps}
              />
            )}
          </Box>
        )}

        {loading && loaderPosition === "center" && (
          <Box component="span" {...getStyles("loader")}>
            <Loader
              color="var(--button-color)"
              size="calc(var(--button-height) / 1.8)"
              {...loaderProps}
            />
          </Box>
        )}

        <Box component="span" mod={{ loading }} {...getStyles("label")}>
          {children}
        </Box>

        {rightSection && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "right" }}
          >
            {rightSection}
          </Box>
        )}
      </span>
    </UnstyledButton>
  );
});

Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;
