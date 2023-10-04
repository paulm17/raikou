import React, { ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { Collapse } from "../../components/Collapse/src";
import { DataTableRowExpansionCollapseProps } from "./types";
import { useRowExpansionStatus } from "./hooks";
import cx from "clsx";

export type DataTableRowExpansionStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableRowExpansionCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableRowExpansionProps
  extends BoxProps,
    StylesApiProps<DataTableRowExpansionFactory> {
  open: boolean;
  colSpan: number;
  content: () => ReactNode;
  collapseProps?: DataTableRowExpansionCollapseProps;
}

export type DataTableRowExpansionFactory = Factory<{
  props: DataTableRowExpansionProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableRowExpansionStylesNames;
  vars: DataTableRowExpansionCssVariables;
}>;

const defaultProps: Partial<DataTableRowExpansionProps> = {};

export const DataTableRowExpansion = factory<DataTableRowExpansionFactory>(
  (_props, ref) => {
    const props = useProps("DataTableRowExpansion", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      open,
      colSpan,
      content,
      collapseProps,
      ...others
    } = props;

    const { expanded, visible } = useRowExpansionStatus(
      open,
      collapseProps?.transitionDuration,
    );

    return visible ? (
      <>
        {/* add an empty row to maintain striped rows consistency */}
        <tr />
        <tr>
          <td
            className={cx("dataTableRowExpansion-cell", {
              ["dataTableRowCell-expandedCell"]: expanded,
            })}
            colSpan={colSpan}
            {...others}
          >
            <Collapse in={expanded} {...collapseProps}>
              {content()}
            </Collapse>
          </td>
        </tr>
      </>
    ) : null;
  },
);

DataTableRowExpansion.displayName = "@raikou/DataTableRowExpansion";
