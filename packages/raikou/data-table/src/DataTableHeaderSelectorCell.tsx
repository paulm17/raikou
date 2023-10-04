import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { Checkbox } from "../../components/Checkbox/src";
import cx from "clsx";

export type DataTableHeaderSelectorCellStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableHeaderSelectorCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableHeaderSelectorCellProps
  extends BoxProps,
    StylesApiProps<DataTableHeaderSelectorCellFactory> {
  shadowVisible: boolean;
  checked: boolean;
  indeterminate: boolean;
  checkboxProps: Record<string, unknown>;
  onChange: (() => void) | undefined;
  rowSpan: number | undefined;
}

export type DataTableHeaderSelectorCellFactory = Factory<{
  props: DataTableHeaderSelectorCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableHeaderSelectorCellStylesNames;
  vars: DataTableHeaderSelectorCellCssVariables;
}>;

const defaultProps: Partial<DataTableHeaderSelectorCellProps> = {};

export const DataTableHeaderSelectorCell =
  factory<DataTableHeaderSelectorCellFactory>((_props, ref) => {
    const props = useProps("DataTableHeaderSelectorCell", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      shadowVisible,
      checked,
      indeterminate,
      checkboxProps,
      onChange,
      rowSpan,
      ...others
    } = props;

    return (
      <th
        className={cx("dtHeaderSelectorCell-root", {
          ["dtHeaderSelectorCell-shadowVisible"]: shadowVisible,
        })}
        rowSpan={rowSpan}
        {...others}
      >
        <Checkbox
          classNames={{ input: "dtHeaderSelectorCell-checkboxInput" }}
          checked={checked}
          indeterminate={indeterminate}
          disabled={!onChange}
          onChange={onChange}
          {...checkboxProps}
        />
      </th>
    );
  });

DataTableHeaderSelectorCell.displayName = "@raikou/DataTableHeaderSelectorCell";
