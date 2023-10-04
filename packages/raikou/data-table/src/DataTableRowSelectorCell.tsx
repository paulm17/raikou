import React, { ChangeEventHandler } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { Checkbox } from "../../components/Checkbox/src";
import cx from "clsx";

export type DataTableRowSelectorCellStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableRowSelectorCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableRowSelectorCellProps
  extends BoxProps,
    StylesApiProps<DataTableRowSelectorCellFactory> {
  record: any;
  recordIndex: number;
  withRightShadow: boolean;
  checked: boolean;
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  getCheckboxProps: (
    record: any,
    recordIndex: number,
  ) => Record<string, unknown>;
}

export type DataTableRowSelectorCellFactory = Factory<{
  props: DataTableRowSelectorCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableRowSelectorCellStylesNames;
  vars: DataTableRowSelectorCellCssVariables;
}>;

const defaultProps: Partial<DataTableRowSelectorCellProps> = {};

export const DataTableRowSelectorCell =
  factory<DataTableRowSelectorCellFactory>((_props, ref) => {
    const props = useProps("DataTableRowSelectorCell", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      record,
      recordIndex,
      withRightShadow,
      getCheckboxProps,
      ...others
    } = props;

    return (
      <td
        className={cx("dataTableRowSelectorCell-root", {
          ["dataTableRowSelectorCell-withRightShadow"]: withRightShadow,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox
          classNames={{ input: "dataTableRowSelectorCell-checkbox" }}
          {...others}
          {...getCheckboxProps(record, recordIndex)}
        />
      </td>
    );
  });

DataTableRowSelectorCell.displayName = "@raikou/DataTableRowSelectorCell";
