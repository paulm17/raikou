import React from "react";
import cx from "clsx";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  StyleProp,
  useRandomClassName,
} from "@raikou/core";
import { GridColVariables } from "./GridColVariables";
import { useStore } from "../store";

export type GridColStylesNames = "col";
export type ColSpan = number | "auto" | "content";

export interface GridColProps
  extends BoxProps,
    CompoundStylesApiProps<GridColFactory>,
    ElementProps<"div"> {
  /** Column span, `12` by default */
  span?: StyleProp<ColSpan>;

  /** Column order, can be used to reorder columns at different viewport sizes */
  order?: StyleProp<number>;

  /** Column offset on the left side – number of columns that should be left empty before this column */
  offset?: StyleProp<number>;
}

export type GridColFactory = Factory<{
  props: GridColProps;
  ref: HTMLDivElement;
  stylesNames: GridColStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GridColProps> = {
  span: 12,
};

export const GridCol = factory<GridColFactory>((_props, ref) => {
  const props = useProps("GridCol", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    span,
    order,
    offset,
    ...others
  } = props;
  const responsiveClassName = useRandomClassName();

  return (
    <>
      <GridColVariables
        selector={`.${responsiveClassName}`}
        span={span}
        order={order}
        offset={offset}
      />
      <Box
        ref={ref}
        {...useStore.getState().getStyles("col", {
          className: cx(className, responsiveClassName),
          style,
          classNames,
          styles,
        })}
        {...others}
      />
    </>
  );
});

GridCol.displayName = "@raikou/core/GridCol";
