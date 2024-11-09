import { useCallback } from "react";
import {
  Box,
  BoxProps,
  createVarsResolver,
  getFontSize,
  getRadius,
  getSize,
  RaikouColor,
  RaikouGradient,
  RaikouRadius,
  RaikouSize,
  polymorphicFactory,
  PolymorphicFactory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
  ElementProps,
} from "../../core";
import { Loader, LoaderProps } from "../Loader";
import { RaikouTransition, Transition } from "../Transition";
import { UnstyledButton } from "../UnstyledButton";
import {
  ButtonInnerStyle,
  ButtonLabelStyle,
  ButtonLoaderStyle,
  ButtonRootStyle,
  ButtonSectionStyle,
} from "./Button.css";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import { Ripple, RippleProps, useRipple } from "@raikou/ripple";

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
    | "--button-hover-color"
    | "--button-color"
    | "--button-bd";
};

export interface ButtonProps
  extends BoxProps,
    StylesApiProps<ButtonFactory>,
    Pick<ElementProps<"button">, "onClick"> {
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

  /** Indicate loading state */
  loading?: boolean;

  /** Props added to the `Loader` component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: "left" | "right" | "center";

  /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;

  /**
   * Whether the button should display a ripple effect on press.
   * @default false
   */
  enableRipple?: boolean;
}

export type ButtonFactory = PolymorphicFactory<{
  props: ButtonProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: "button";
  stylesNames: ButtonStylesNames;
  vars: ButtonCssVariables;
  variant: ButtonVariant;
  staticComponents: {
    Group: typeof ButtonGroup;
  };
}>;

const loaderTransition: RaikouTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity",
};

const defaultProps: Partial<ButtonProps> = {
  enableRipple: false,
  loaderPosition: "center",
};

const varsResolver = createVarsResolver<ButtonFactory>(
  (
    theme,
    { radius, color, gradient, variant, size, justify, autoContrast },
  ) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast,
    });

    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size, "button-height"),
        "--button-padding-x": getSize(size, "button-padding-x"),
        "--button-fz": size?.includes("compact")
          ? getFontSize(size.replace("compact-", ""))
          : getFontSize(size),
        "--button-radius": radius === undefined ? undefined : getRadius(radius),
        "--button-bg": color || variant ? colors.background : undefined,
        "--button-hover": color || variant ? colors.hover : undefined,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : undefined,
        "--button-hover-color":
          color || variant ? colors.hoverColor : undefined,
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
    enableRipple,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    loaderPosition,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
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

  const getStyles = useStyles<ButtonFactory>({
    name: "Button",
    props,
    classes: {
      root: ButtonRootStyle,
      inner: ButtonInnerStyle,
      loader: ButtonLoaderStyle,
      section: ButtonSectionStyle,
      label: ButtonLabelStyle,
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
      onClick={(event) => {
        onClick?.(event);
        handleClick(event);
      }}
      mod={[
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection,
          "data-loader-position": loaderPosition,
        },
        mod,
      ]}
      {...others}
    >
      {loaderPosition === "center" && (
        <Transition
          mounted={!!loading}
          transition={loaderTransition}
          duration={150}
        >
          {(transitionStyles) => (
            <Box
              component="span"
              {...getStyles("loader", { style: transitionStyles })}
              aria-hidden
            >
              <Loader
                color="var(--button-color)"
                size="calc(var(--button-height) / 1.8)"
                {...loaderProps}
              />
            </Box>
          )}
        </Transition>
      )}

      <span {...getStyles("inner")}>
        {!loading && leftSection && (
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
            {loading && (
              <Loader
                type="progress"
                color="white"
                size="calc(var(--button-height) / 2.4)"
                {...loaderProps}
              />
            )}
          </Box>
        )}

        <Box component="span" mod={{ loading }} {...getStyles("label")}>
          {children}
        </Box>

        {!loading && rightSection && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "right" }}
          >
            {rightSection}
          </Box>
        )}

        {loading && loaderPosition === "right" && (
          <Box
            component="span"
            {...getStyles("section")}
            mod={{ position: "right" }}
          >
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
      </span>

      {enableRipple && <Ripple {...getRippleProps()} />}
    </UnstyledButton>
  );
});

Button.displayName = "@raikou/core/Button";
Button.Group = ButtonGroup;
