import React, { useMemo } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import { DataTableColumnGroup } from "./types";
import { humanize, useMediaQueriesStringOrFunction } from "./utils";

export type DataTableColumnGroupHeaderCellStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableColumnGroupHeaderCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableColumnGroupHeaderCellProps
  extends BoxProps,
    StylesApiProps<DataTableColumnGroupHeaderCellFactory> {
  group: DataTableColumnGroup;
}

export type DataTableColumnGroupHeaderCellFactory = Factory<{
  props: DataTableColumnGroupHeaderCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableColumnGroupHeaderCellStylesNames;
  vars: DataTableColumnGroupHeaderCellCssVariables;
}>;

const defaultProps: Partial<DataTableColumnGroupHeaderCellProps> = {};

export const DataTableColumnGroupHeaderCell =
  factory<DataTableColumnGroupHeaderCellFactory>((_props, ref) => {
    const props = useProps(
      "DataTableColumnGroupHeaderCell",
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
      group: { id, columns, title },
      ...others
    } = props;

    const queries = useMemo(
      () => columns.map(({ visibleMediaQuery }) => visibleMediaQuery),
      [columns],
    );
    // const visibles = useMediaQueriesStringOrFunction(queries);
    const visibles = undefined;
    const colSpan = useMemo(
      () => columns.filter(({ hidden }, i) => !hidden && visibles?.[i]).length,
      [columns, visibles],
    );

    return colSpan > 0 ? (
      <Box component="th" colSpan={colSpan} className={className} {...others}>
        {title ?? humanize(id)}
      </Box>
    ) : null;
  });

DataTableColumnGroupHeaderCell.displayName =
  "@raikou/DataTableColumnGroupHeaderCell";
