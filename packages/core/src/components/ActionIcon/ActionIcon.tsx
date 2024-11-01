import { useCallback } from "react";
import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  RaikouColor,
  RaikouGradient,
  RaikouRadius,
  RaikouSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
  ElementProps,
} from "../../core";
import { Loader, LoaderProps } from "../Loader";
import { Transition } from "../Transition";
import { UnstyledButton } from "../UnstyledButton";
import {
  actionIconIconStyle,
  actionIconLoaderStyle,
  actionIconRootStyle,
} from "./ActionIcon.css";
import { ActionIconGroup } from "./ActionIconGroup/ActionIconGroup";
import { Ripple, RippleProps, useRipple } from "../../../../ripple/src";

export type ActionIconVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";

export type ActionIconStylesNames = "root" | "loader" | "icon";
export type ActionIconCssVariables = {
  root:
    | "--ai-radius"
    | "--ai-size"
    | "--ai-bg"
    | "--ai-hover"
    | "--ai-hover-color"
    | "--ai-color"
    | "--ai-bd";
};

export interface ActionIconProps
  extends BoxProps,
    StylesApiProps<ActionIconFactory>,
    Pick<ElementProps<"button">, "onClick"> {
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

  /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /**
   * Whether the button should display a ripple effect on press.
   * @default false
   */
  enableRipple?: boolean;
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
  (theme, { size, radius, variant, gradient, color, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast,
    });

    return {
      root: {
        "--ai-size": getSize(size, "ai-size"),
        "--ai-radius": radius === undefined ? undefined : getRadius(radius),
        "--ai-bg": color || variant ? colors.background : undefined,
        "--ai-hover": color || variant ? colors.hover : undefined,
        "--ai-hover-color": color || variant ? colors.hoverColor : undefined,
        "--ai-color": colors.color,
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
      enableRipple,
      autoContrast,
      mod,
      onClick,
      ...others
    } = props;

    const {
      onClick: onRippleClickHandler,
      onClear: onClearRipple,
      ripples,
    } = useRipple();

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!enableRipple || disabled) return;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onRippleClickHandler(e);
      },
      [enableRipple, disabled, onRippleClickHandler],
    );

    const getRippleProps = useCallback<() => RippleProps>(
      () => ({ ripples, onClear: onClearRipple }),
      [ripples, onClearRipple],
    );

    const getStyles = useStyles<ActionIconFactory>({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: {
        root: actionIconRootStyle,
        loader: actionIconLoaderStyle,
        icon: actionIconIconStyle,
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
        onClick={(event) => {
          onClick?.(event);
          handleClick(event);
        }}
        mod={[{ loading, disabled: disabled || dataDisabled }, mod]}
      >
        <Transition mounted={!!loading} transition="slide-down" duration={150}>
          {(transitionStyles) => (
            <Box
              component="span"
              {...getStyles("loader", { style: transitionStyles })}
              aria-hidden
            >
              <Loader
                color="var(--ai-color)"
                size="calc(var(--ai-size) * 0.55)"
                {...loaderProps}
              />
            </Box>
          )}
        </Transition>

        <Box component="span" mod={{ loading }} {...getStyles("icon")}>
          {children}
        </Box>

        {enableRipple && <Ripple {...getRippleProps()} />}
      </UnstyledButton>
    );
  },
);

ActionIcon.displayName = "@raikou/core/ActionIcon";
ActionIcon.Group = ActionIconGroup;
