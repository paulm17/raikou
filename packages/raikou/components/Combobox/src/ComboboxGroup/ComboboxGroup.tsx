import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useComboboxContext } from "../Combobox.context";

export type ComboboxGroupStylesNames = "group" | "groupLabel";

export interface ComboboxGroupProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxGroupFactory>,
    ElementProps<"div"> {
  /** Group label */
  label?: React.ReactNode;
}

export type ComboboxGroupFactory = Factory<{
  props: ComboboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxGroupProps> = {};

export const ComboboxGroup = factory<ComboboxGroupFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    children,
    label,
    ...others
  } = useProps("ComboboxGroup", defaultProps, props);

  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles("group", { className, classNames, style, styles })}
      {...others}
    >
      {label && (
        <div {...ctx.getStyles("groupLabel", { classNames, styles })}>
          {label}
        </div>
      )}
      {children}
    </Box>
  );
});

ComboboxGroup.displayName = "@raikou/core/ComboboxGroup";
