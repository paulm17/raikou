import React from "react";
import {
  polymorphicFactory,
  useProps,
  rem,
  PolymorphicFactory,
  RaikouSize,
  RaikouRadius,
  BoxProps,
  StylesApiProps,
  getSize,
  getRadius,
  createVarsResolver,
  useStyles,
} from "@raikou/core";
import { UnstyledButton } from "../../UnstyledButton/src";
import { CloseIcon } from "./CloseIcon";

export type CloseButtonVariant = "subtle" | "transparent";
export type CloseButtonStylesNames = "root";
export type CloseButtonCssVariables = {
  root: "--cb-icon-size" | "--cb-size" | "--cb-radius";
};

export interface CloseButtonProps
  extends BoxProps,
    StylesApiProps<CloseButtonFactory> {
  "data-disabled"?: boolean;

  /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: RaikouRadius;

  /** Sets `disabled` and `data-disabled` attributes on the button element */
  disabled?: boolean;

  /** `X` icon `width` and `height`, `80%` by default */
  iconSize?: number | string;

  /** Content rendered inside the button, for example `VisuallyHidden` with label for screen readers */
  children?: React.ReactNode;
}

export type CloseButtonFactory = PolymorphicFactory<{
  props: CloseButtonProps;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
  vars: CloseButtonCssVariables;
}>;

const defaultProps: Partial<CloseButtonProps> = {
  variant: "subtle",
  size: "md",
};

const varsResolver = createVarsResolver<CloseButtonFactory>(
  (_, { size, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize(size, "cb-size"),
      "--cb-radius": radius === undefined ? undefined : getRadius(radius),
      "--cb-icon-size": rem(iconSize),
    },
  }),
);

export const CloseButton = polymorphicFactory<CloseButtonFactory>(
  (_props, ref) => {
    const props = useProps("CloseButton", defaultProps, _props);
    const {
      iconSize,
      children,
      vars,
      radius,
      className,
      classNames,
      style,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      disabled,
      variant,
      ...others
    } = props;

    const getStyles = useStyles<CloseButtonFactory>({
      name: "CloseButton",
      props,
      className,
      style,
      classes: {
        root: "closeButton-root",
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver,
    });

    return (
      <UnstyledButton
        ref={ref}
        {...others}
        unstyled={unstyled}
        variant={variant}
        disabled={disabled}
        mod={{ disabled: disabled || dataDisabled }}
        {...getStyles("root", { variant, active: true })}
      >
        <CloseIcon />
        {children}
      </UnstyledButton>
    );
  },
);

CloseButton.displayName = "@raikou/core/CloseButton";
