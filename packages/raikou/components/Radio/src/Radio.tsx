import React from "react";
import { useId } from "@raikou/hooks";
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
  getSize,
  getRadius,
  getThemeColor,
  RaikouColor,
  RaikouSize,
  RaikouRadius,
  extractStyleProps,
} from "@raikou/core";
import { InlineInput, InlineInputStylesNames } from "../../InlineInput/src";
import { RadioIcon, RadioIconProps } from "./RadioIcon";
import { RadioGroup } from "./RadioGroup/RadioGroup";
import { useRadioGroupContext } from "./RadioGroup.context";

export type RadioStylesNames =
  | InlineInputStylesNames
  | "inner"
  | "radio"
  | "icon";
export type RadioCssVariables = {
  root: "--radio-size" | "--radio-radius" | "--radio-color";
};

export interface RadioProps
  extends BoxProps,
    StylesApiProps<RadioFactory>,
    ElementProps<"input", "size"> {
  /** Radio label */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Controls size of all elements, `'sm'` by default */
  size?: RaikouSize;

  /** Custom checked icon component, by default a circle is displayed in checked state */
  icon?: React.FC<RadioIconProps>;

  /** Props passed down to the root element */
  wrapperProps?: Record<string, any>;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: "left" | "right";

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error displayed below the label */
  error?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius;

  /** Assigns ref of the root element, can be used with `Tooltip` and other similar components */
  rootRef?: React.ForwardedRef<HTMLDivElement>;
}

export type RadioFactory = Factory<{
  props: RadioProps;
  ref: HTMLInputElement;
  stylesNames: RadioStylesNames;
  vars: RadioCssVariables;
  staticComponents: {
    Group: typeof RadioGroup;
  };
}>;

const defaultProps: Partial<RadioProps> = {
  size: "sm",
  labelPosition: "right",
  radius: "xl",
};

const varsResolver = createVarsResolver<RadioFactory>(
  (theme, { size, radius, color }) => ({
    root: {
      "--radio-size": getSize(size, "radio-size"),
      "--radio-radius": radius === undefined ? undefined : getRadius(radius),
      "--radio-color": color ? getThemeColor(color, theme) : undefined,
      "--radio-icon-size": getSize(size, "radio-icon-size"),
    },
  }),
);

export const Radio = factory<RadioFactory>((_props, ref) => {
  const props = useProps("Radio", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    id,
    size,
    label,
    labelPosition,
    description,
    error,
    radius,
    color,
    variant,
    disabled,
    wrapperProps,
    icon: Icon = RadioIcon,
    rootRef,
    ...others
  } = props;

  const getStyles = useStyles<RadioFactory>({
    name: "Radio",
    classes: {
      root: "radio-root",
      inner: "radio-inner",
      icon: "radio-icon",
      radio: "radio-radio",
      body: "inputWrapper-body",
      label: "inputWrapper-label",
      labelWrapper: "inputWrapper-labelWrapper",
      description: "inputWrapper-description",
      error: "inputWrapper-error",
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

  const ctx = useRadioGroupContext();

  const contextSize = ctx?.size ?? size;
  const componentSize = props.size ? size : contextSize;

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value === rest.value,
        name: rest.name ?? ctx.name,
        onChange: ctx.onChange,
      }
    : {};

  return (
    <InlineInput
      {...getStyles("root")}
      __staticSelector="Radio"
      __stylesApiProps={props}
      id={uuid}
      size={componentSize}
      labelPosition={labelPosition}
      // @ts-ignore
      label={label}
      // @ts-ignore
      description={description}
      // @ts-ignore
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
      <Box {...getStyles("inner")} mod={{ "label-position": labelPosition }}>
        <Box
          {...getStyles("radio", { focusable: true })}
          {...rest}
          {...contextProps}
          component="input"
          mod={{ error: !!error }}
          ref={ref}
          id={uuid}
          disabled={disabled}
          type="radio"
        />
        <Icon {...getStyles("icon")} aria-hidden />
      </Box>
    </InlineInput>
  );
});

Radio.displayName = "@raikou/core/Radio";
Radio.Group = RadioGroup;
