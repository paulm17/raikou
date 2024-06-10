import React from "react";
import { useId } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getSize,
  getThemeColor,
  RaikouColor,
  RaikouRadius,
  RaikouSize,
  parseThemeColor,
  StylesApiProps,
  useProps,
  useStyles,
} from "@raikou/core";
import { InlineInput, InlineInputStylesNames } from "../../InlineInput/src";
import { useCheckboxGroupContext } from "./CheckboxGroup.context";
import { CheckboxCard } from "./CheckboxCard/CheckboxCard";
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup";
import { CheckboxIndicator } from "./CheckboxIndicator/CheckboxIndicator";
import { CheckboxIcon } from "./CheckIcon";
import classes from "./Checkbox.module.css";

export type CheckboxVariant = "filled" | "outline";
export type CheckboxStylesNames =
  | "icon"
  | "inner"
  | "input"
  | InlineInputStylesNames;

export type CheckboxCssVariables = {
  root:
    | "--checkbox-size"
    | "--checkbox-radius"
    | "--checkbox-color"
    | "--checkbox-icon-color";
};

export interface CheckboxProps
  extends BoxProps,
    StylesApiProps<CheckboxFactory>,
    ElementProps<"input", "size"> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input background color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Controls size of all elements */
  size?: RaikouSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius;

  /** Props passed down to the root element */
  wrapperProps?: Record<string, any>;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: "left" | "right";

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error displayed below the label */
  error?: React.ReactNode;

  /** Indeterminate state of checkbox, if set, `checked` prop is ignored */
  indeterminate?: boolean;

  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean | undefined; className: string }>;

  /** Assigns ref of the root element, can be used with `Tooltip` and other similar components */
  rootRef?: React.ForwardedRef<HTMLDivElement>;

  /** Key of `theme.colors` or any valid CSS color to set icon color, `theme.white` by default */
  iconColor?: RaikouColor;

  /** Determines whether icon color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type CheckboxFactory = Factory<{
  props: CheckboxProps;
  ref: HTMLInputElement;
  stylesNames: CheckboxStylesNames;
  vars: CheckboxCssVariables;
  variant: CheckboxVariant;
  staticComponents: {
    Group: typeof CheckboxGroup;
    Indicator: typeof CheckboxIndicator;
    Card: typeof CheckboxCard;
  };
}>;

const defaultProps: Partial<CheckboxProps> = {
  labelPosition: "right",
  icon: CheckboxIcon,
};

const varsResolver = createVarsResolver<CheckboxFactory>(
  (theme, { radius, color, size, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({
      color: color || theme.primaryColor,
      theme,
    });
    const outlineColor =
      parsedColor.isThemeColor && parsedColor.shade === undefined
        ? `var(--raikou-color-${parsedColor.color}-outline)`
        : parsedColor.color;

    return {
      root: {
        "--checkbox-size": getSize(size, "checkbox-size"),
        "--checkbox-radius":
          radius === undefined ? undefined : getRadius(radius),
        "--checkbox-color":
          variant === "outline" ? outlineColor : getThemeColor(color, theme),
        "--checkbox-icon-color": iconColor
          ? getThemeColor(iconColor, theme)
          : getAutoContrastValue(autoContrast, theme)
          ? getContrastColor({ color, theme, autoContrast })
          : undefined,
      },
    };
  },
);

export const Checkbox = factory<CheckboxFactory>((_props, ref) => {
  const props = useProps("Checkbox", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size,
    radius,
    wrapperProps,
    children,
    checked,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    indeterminate,
    icon,
    rootRef,
    iconColor,
    onChange,
    autoContrast,
    mod,
    ...others
  } = props;

  const ctx = useCheckboxGroupContext();
  const _size = size || ctx?.size;
  const Icon = icon!;

  const getStyles = useStyles<CheckboxFactory>({
    name: "Checkbox",
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value.includes(rest.value as string),
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          ctx.onChange(event);
          onChange?.(event);
        },
      }
    : {};

  return (
    <InlineInput
      {...getStyles("root")}
      __staticSelector="Checkbox"
      __stylesApiProps={props}
      id={uuid}
      size={_size}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || undefined}
      variant={variant}
      ref={rootRef}
      {...styleProps}
      {...wrapperProps}
    >
      <Box
        {...getStyles("inner")}
        mod={{ "data-label-position": labelPosition }}
      >
        <Box
          component="input"
          id={uuid}
          ref={ref}
          checked={checked}
          disabled={disabled}
          mod={{ error: !!error, indeterminate }}
          {...getStyles("input", { focusable: true, variant })}
          onChange={onChange}
          {...rest}
          {...contextProps}
          type="checkbox"
        />

        <Icon indeterminate={indeterminate} {...getStyles("icon")} />
      </Box>
    </InlineInput>
  );
});

Checkbox.displayName = "@raikou/core/Checkbox";
Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.Card = CheckboxCard;
