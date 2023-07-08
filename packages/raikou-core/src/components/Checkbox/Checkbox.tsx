import React from "react";
import { useId } from "@raikou/hooks";
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  RaikouColor,
  RaikouSize,
  RaikouRadius,
  extractStyleProps,
  getRadius,
  getSize,
  getThemeColor,
  createVarsResolver,
  Factory,
  Box,
} from "../../core";
import { InlineInput, InlineInputStylesNames } from "../InlineInput";
import { useCheckboxGroupContext } from "./CheckboxGroup.context";
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup";
import { CheckboxIcon } from "./CheckIcon";

export type CheckboxStylesNames =
  | "icon"
  | "inner"
  | "input"
  | InlineInputStylesNames;
export type CheckboxVariant = string;
export type CheckboxCssVariables = {
  root: "--checkbox-size" | "--checkbox-radius" | "--checkbox-color";
};

export interface CheckboxProps
  extends BoxProps,
    StylesApiProps<CheckboxFactory>,
    ElementProps<"input", "size"> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Controls size of all elements */
  size?: RaikouSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius | (string & {}) | number;

  /** Props passed down to wrapper element */
  wrapperProps?: React.ComponentPropsWithoutRef<"div">;

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
}

export type CheckboxFactory = Factory<{
  props: CheckboxProps;
  ref: HTMLInputElement;
  stylesNames: CheckboxStylesNames;
  vars: CheckboxCssVariables;
  variant: CheckboxVariant;
  staticComponents: {
    Group: typeof CheckboxGroup;
  };
}>;

const defaultProps: Partial<CheckboxProps> = {
  size: "sm",
  labelPosition: "right",
  icon: CheckboxIcon,
};

const varsResolver = createVarsResolver<CheckboxFactory>(
  (theme, { radius, color, size }) => ({
    root: {
      "--checkbox-size": getSize(size, "checkbox-size"),
      "--checkbox-radius": getRadius(radius),
      "--checkbox-color": getThemeColor(color, theme),
    },
  })
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
    ...others
  } = props;

  const ctx = useCheckboxGroupContext();
  const _size = size || ctx?.size;
  const Icon = icon!;

  const getStyles = useStyles<CheckboxFactory>({
    name: "Checkbox",
    props,
    classes: {
      root: "checkbox-root",
      inner: "checkbox-inner",
      input: "checkbox-input",
      icon: "checkbox-icon",
      body: "inlineInput-body",
      label: "inlineInput-label",
      labelWrapper: "inlineInput-labelWrapper",
      description: "inlineInput-description",
      error: "inlineInput-error",
    },
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
        onChange: ctx.onChange,
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
          {...getStyles("input", { focusable: true })}
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
