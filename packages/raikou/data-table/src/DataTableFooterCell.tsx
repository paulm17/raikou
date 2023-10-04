import React, { ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  CSSProperties,
  RaikouTheme,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import cx from "clsx";
import { DataTableColumn } from "./types";

export type DataTableFooterCellStylesNames = "root" | "active" | "standardIcon";

export type DataTableFooterCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

type TableColumn = Pick<
  DataTableColumn,
  "noWrap" | "ellipsis" | "textAlignment" | "width"
>;

export interface DataTableFooterCellProps
  extends BoxProps,
    StylesApiProps<DataTableFooterCellFactory>,
    TableColumn {
  style?: CSSProperties;
  visibleMediaQuery: string | ((theme: RaikouTheme) => string) | undefined;
  title: ReactNode | undefined;
}

export type DataTableFooterCellFactory = Factory<{
  props: DataTableFooterCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableFooterCellStylesNames;
  vars: DataTableFooterCellCssVariables;
}>;

const defaultProps: Partial<DataTableFooterCellProps> = {};

export const DataTableFooterCell = factory<DataTableFooterCellFactory>(
  (_props, ref) => {
    const props = useProps("DataTableFooterCell", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      visibleMediaQuery,
      title,
      noWrap,
      ellipsis,
      textAlignment,
      width,
      ...others
    } = props;

    return (
      <Box
        component="th"
        className={cx(
          {
            ["dataTableFooterCell-noWrap"]: noWrap || ellipsis,
            ["dataTableFooterCell-ellipsis"]: ellipsis,
          },
          className,
        )}
        style={[
          {
            "&&": { textAlign: textAlignment },
            width,
            minWidth: width,
            maxWidth: width,
          },
          style,
        ]}
        {...others}
      >
        {title}
      </Box>
    );
  },
);

DataTableFooterCell.displayName = "@raikou/DataTableFooterCell";
