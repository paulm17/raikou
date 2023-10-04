import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import cx from "clsx";

export type DataTableFooterSelectorPlaceholderCellStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableFooterSelectorPlaceholderCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableFooterSelectorPlaceholderCellProps
  extends BoxProps,
    StylesApiProps<DataTableFooterSelectorPlaceholderCellFactory> {
  shadowVisible: boolean;
}

export type DataTableFooterSelectorPlaceholderCellFactory = Factory<{
  props: DataTableFooterSelectorPlaceholderCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableFooterSelectorPlaceholderCellStylesNames;
  vars: DataTableFooterSelectorPlaceholderCellCssVariables;
}>;

const defaultProps: Partial<DataTableFooterSelectorPlaceholderCellProps> = {};

export const DataTableFooterSelectorPlaceholderCell =
  factory<DataTableFooterSelectorPlaceholderCellFactory>((_props, ref) => {
    const props = useProps(
      "DataTableFooterSelectorPlaceholderCell",
      defaultProps,
      _props,
    );
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      shadowVisible,
      ...others
    } = props;

    return (
      <th
        className={cx("dataTableFooterSelectorPlaceholderCell-root", {
          ["dataTableFooterSelectorPlaceholderCell-shadowVisible"]:
            shadowVisible,
        })}
        {...others}
      />
    );
  });

DataTableFooterSelectorPlaceholderCell.displayName =
  "@raikou/DataTableFooterSelectorPlaceholderCell";
