import React from "react";
import { useId, useUncontrolled } from "@raikou/hooks";
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
  Box,
  getSize,
  getThemeColor,
  createVarsResolver,
  Factory,
} from "@raikou/core";
import { InlineInput, InlineInputStylesNames } from "../../InlineInput/src";
import { useSwitchGroupContext } from "./SwitchGroup.context";
import { SwitchGroup } from "./SwitchGroup/SwitchGroup";

export type SwitchStylesNames =
  | "root"
  | "track"
  | "trackLabel"
  | "thumb"
  | "input"
  | InlineInputStylesNames;
export type SwitchCssVariables = {
  root:
    | "--switch-radius"
    | "--switch-height"
    | "--switch-width"
    | "--switch-thumb-size"
    | "--switch-label-font-size"
    | "--switch-track-label-padding"
    | "--switch-color";
};

export interface SwitchProps
  extends BoxProps,
    StylesApiProps<SwitchFactory>,
    ElementProps<"input", "size"> {
  /** Id used to bind input and label, if not passed, unique id will be generated instead */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: React.ReactNode;

  /** Inner label when Switch is in checked state */
  onLabel?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input color in checked state, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Controls size of all elements */
  size?: RaikouSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius,` "xl" by default */
  radius?: RaikouRadius;

  /** Props passed down to the wrapper element */
  wrapperProps?: Record<string, any>;

  /** Icon inside the thumb of switch */
  thumbIcon?: React.ReactNode;

  /** Position of the label relative to the input, `'right'` by default */
  labelPosition?: "left" | "right";

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error displayed below the label */
  error?: React.ReactNode;

  /** Assigns ref of the root element, can be used with `Tooltip` and other similar components */
  rootRef?: React.ForwardedRef<HTMLDivElement>;
}

export type SwitchFactory = Factory<{
  props: SwitchProps;
  ref: HTMLInputElement;
  stylesNames: SwitchStylesNames;
  vars: SwitchCssVariables;
  staticComponents: {
    Group: typeof SwitchGroup;
  };
}>;

const defaultProps: Partial<SwitchProps> = {
  labelPosition: "right",
};

const varsResolver = createVarsResolver<SwitchFactory>(
  (theme, { radius, color, size }) => ({
    root: {
      "--switch-radius": radius === undefined ? undefined : getRadius(radius),
      "--switch-height": getSize(size, "switch-height"),
      "--switch-width": getSize(size, "switch-width"),
      "--switch-thumb-size": getSize(size, "switch-thumb-size"),
      "--switch-label-font-size": getSize(size, "switch-label-font-size"),
      "--switch-track-label-padding": getSize(
        size,
        "switch-track-label-padding",
      ),
      "--switch-color": color ? getThemeColor(color, theme) : undefined,
    },
  }),
);

export const Switch = factory<SwitchFactory>((_props, ref) => {
  const props = useProps("Switch", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    offLabel,
    onLabel,
    id,
    size,
    radius,
    wrapperProps,
    children,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    rootRef,
    ...others
  } = props;

  const ctx = useSwitchGroupContext();
  const _size = size || ctx?.size;

  const getStyles = useStyles<SwitchFactory>({
    name: "Switch",
    props,
    classes: {
      root: "switch-root",
      input: "switch-input",
      track: "switch-track",
      thumb: "switch-thumb",
      trackLabel: "switch-trackLabel",
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

  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false,
  });

  return (
    <InlineInput
      {...getStyles("root")}
      __staticSelector="Switch"
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
      <input
        {...rest}
        disabled={disabled}
        checked={_checked}
        onChange={(event) => {
          // eslint-disable-next-line
          ctx ? contextProps.onChange?.(event) : onChange?.(event);
          handleChange(event.currentTarget.checked);
        }}
        id={uuid}
        ref={ref}
        type="checkbox"
        {...getStyles("input")}
      />

      <Box
        component="label"
        htmlFor={uuid}
        mod={{ error, "label-position": labelPosition }}
        {...getStyles("track")}
      >
        <Box component="span" mod="reduce-motion" {...getStyles("thumb")}>
          {thumbIcon}
        </Box>
        <span {...getStyles("trackLabel")}>
          {_checked ? onLabel : offLabel}
        </span>
      </Box>
    </InlineInput>
  );
});

Switch.displayName = "@raikou/core/Switch";
Switch.Group = SwitchGroup;
