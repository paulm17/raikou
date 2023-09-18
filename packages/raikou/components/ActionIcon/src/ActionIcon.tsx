import React from "react";
import {
  BoxProps,
  useProps,
  StylesApiProps,
  useStyles,
  RaikouSize,
  RaikouColor,
  RaikouGradient,
  getRadius,
  polymorphicFactory,
  getSize,
  createVarsResolver,
  RaikouRadius,
  PolymorphicFactory,
} from "@raikou/core";
import { UnstyledButton } from "../../UnstyledButton/src";
import { LoaderProps, Loader } from "../../Loader/src";
import { ActionIconGroup } from "./ActionIconGroup/ActionIconGroup";

export type ActionIconVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";

export type ActionIconStylesNames = "root" | "loader";
export type ActionIconCssVariables = {
  root:
    | "--ai-radius"
    | "--ai-size"
    | "--ai-bg"
    | "--ai-hover"
    | "--ai-color"
    | "--ai-bd";
};

export interface ActionIconProps
  extends BoxProps,
    StylesApiProps<ActionIconFactory> {
  "data-disabled"?: boolean;
  __staticSelector?: string;

  /** Determines whether `Loader` component should be displayed instead of the `children`, `false` by default */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Controls width and height of the button. Numbers are converted to rem. `'md'` by default. */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color. Default value is `theme.primaryColor`.  */
  color?: RaikouColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: RaikouRadius;

  /** Gradient data used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;

  /** Sets `disabled` and `data-disabled` attributes on the button element */
  disabled?: boolean;

  /** Icon displayed inside the button */
  children?: React.ReactNode;
}

export type ActionIconFactory = PolymorphicFactory<{
  props: ActionIconProps;
  defaultComponent: "button";
  defaultRef: HTMLButtonElement;
  stylesNames: ActionIconStylesNames;
  variant: ActionIconVariant;
  vars: ActionIconCssVariables;
  staticComponents: {
    Group: typeof ActionIconGroup;
  };
}>;

const defaultProps: Partial<ActionIconProps> = {};

const varsResolver = createVarsResolver<ActionIconFactory>(
  (theme, { size, radius, variant, gradient, color }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
    });

    return {
      root: {
        "--ai-size": getSize(size, "ai-size"),
        "--ai-radius": radius === undefined ? undefined : getRadius(radius),
        "--ai-bg": color || variant ? colors.background : undefined,
        "--ai-hover": color || variant ? colors.hover : undefined,
        "--ai-color": color || variant ? colors.color : undefined,
        "--ai-bd": color || variant ? colors.border : undefined,
      },
    };
  },
);

export const ActionIcon = polymorphicFactory<ActionIconFactory>(
  (_props, ref) => {
    const props = useProps("ActionIcon", defaultProps, _props);
    const {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled,
      ...others
    } = props;

    const getStyles = useStyles<ActionIconFactory>({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: "actionIcon-root",
        loader: "actionIcon-loader",
      },
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver,
    });

    return (
      <UnstyledButton
        {...getStyles("root", {
          active: !disabled && !loading && !dataDisabled,
        })}
        {...others}
        unstyled={unstyled}
        variant={variant}
        size={size}
        disabled={disabled || loading}
        ref={ref}
        mod={{ loading, disabled: disabled || dataDisabled }}
      >
        {loading ? (
          <Loader
            {...getStyles("loader")}
            color="var(--ai-color)"
            size="calc(var(--ai-size) * 0.55)"
            {...loaderProps}
          />
        ) : (
          children
        )}
      </UnstyledButton>
    );
  },
);

ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;
