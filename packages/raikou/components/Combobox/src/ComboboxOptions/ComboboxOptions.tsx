import React, { useEffect } from "react";
import { useId } from "@raikou/hooks";
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

export type ComboboxOptionsStylesNames = "options";

export interface ComboboxOptionsProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxOptionsFactory>,
    ElementProps<"div"> {
  /** Id of the element that should label the options list */
  labelledBy?: string;
}

export type ComboboxOptionsFactory = Factory<{
  props: ComboboxOptionsProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxOptionsStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxOptionsProps> = {};

export const ComboboxOptions = factory<ComboboxOptionsFactory>(
  (_props, ref) => {
    const props = useProps("ComboboxOptions", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      id,
      labelledBy,
      onMouseDown,
      ...others
    } = props;
    const ctx = useComboboxContext();
    const _id = useId(id);

    useEffect(() => {
      ctx.store.setListId(_id);
    }, [_id]);

    return (
      <Box
        ref={ref}
        {...ctx.getStyles("options", { className, style, classNames, styles })}
        {...others}
        id={_id}
        role="listbox"
        aria-labelledby={labelledBy}
        onMouseDown={(event) => {
          event.preventDefault();
          onMouseDown?.(event);
        }}
      />
    );
  },
);

ComboboxOptions.displayName = "@raikou/core/ComboboxOptions";
