import React, { BaseSyntheticEvent, ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  RaikouTheme,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import { Center } from "../../components/Center/src";
import { Group } from "../../components/Group/src";
import { DataTableColumn, DataTableSortProps } from "./types";
import { humanize, useMediaQueryStringOrFunction } from "./utils";
import { IconArrowUp, IconArrowsVertical } from "@tabler/icons-react";
import cx from "clsx";
import { DataTableHeaderCellFilter } from "./DataTableHeaderCellFilter";

export type DataTableHeaderCellStylesNames = "root" | "active" | "standardIcon";

export type DataTableHeaderCellCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

type TableColumn = Pick<
  DataTableColumn,
  "accessor" | "sortable" | "textAlignment" | "width" | "filter" | "filtering"
>;

export interface DataTableHeaderCellProps
  extends BoxProps,
    StylesApiProps<DataTableHeaderCellFactory>,
    TableColumn {
  visibleMediaQuery: string | ((theme: RaikouTheme) => string) | undefined;
  title: ReactNode | undefined;
  sortStatus: DataTableSortProps["sortStatus"];
  sortIcons: DataTableSortProps["sortIcons"];
  onSortStatusChange: DataTableSortProps["onSortStatusChange"];
}

export type DataTableHeaderCellFactory = Factory<{
  props: DataTableHeaderCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableHeaderCellStylesNames;
  vars: DataTableHeaderCellCssVariables;
}>;

const defaultProps: Partial<DataTableHeaderCellProps> = {};

export const DataTableHeaderCell = factory<DataTableHeaderCellFactory>(
  (_props, ref) => {
    const props = useProps("DataTableHeaderCell", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      accessor,
      visibleMediaQuery,
      title,
      sortable,
      sortIcons,
      textAlignment,
      width,
      sortStatus,
      onSortStatusChange,
      filter,
      filtering,
      ...others
    } = props;

    if (!useMediaQueryStringOrFunction(visibleMediaQuery)) return null;
    const text = title ?? humanize(accessor);
    const tooltip = typeof text === "string" ? text : undefined;
    const sortAction =
      sortable && onSortStatusChange
        ? (e?: BaseSyntheticEvent) => {
            if (e?.defaultPrevented) return;

            onSortStatusChange({
              columnAccessor: accessor,
              direction:
                sortStatus?.columnAccessor === accessor
                  ? sortStatus.direction === "asc"
                    ? "desc"
                    : "asc"
                  : sortStatus?.direction ?? "asc",
            });
          }
        : undefined;

    return (
      <Box
        component="th"
        className={cx(
          { ["dataTable-sortableColumnHeader"]: sortable },
          className,
        )}
        style={[
          {
            "&&": { textAlign: textAlignment },
            width,
            minWidth: width,
            maxWidth: width,
          },
        ]}
        // style={style}
        role={sortable ? "button" : undefined}
        tabIndex={sortable ? 0 : undefined}
        onClick={sortAction}
        onKeyDown={(e) => e.key === "Enter" && sortAction?.()}
        {...others}
      >
        <Group
          className={cx("dataTable-sortableColumnHeaderGroup")}
          justify="space-between"
          wrap="nowrap"
        >
          <Box
            className={cx(
              "dataTable-columnHeaderText",
              "dataTable-sortableColumnHeaderText",
            )}
            title={tooltip}
          >
            {text}
          </Box>
          {sortable || sortStatus?.columnAccessor === accessor ? (
            <>
              {sortStatus?.columnAccessor === accessor ? (
                <Center
                  className={cx("dataTable-sortableColumnHeaderIcon", {
                    ["dataTable-sortableColumnHeaderIconRotated"]:
                      sortStatus.direction === "desc",
                  })}
                  role="img"
                  aria-label={`Sorted ${
                    sortStatus.direction === "desc" ? "descending" : "ascending"
                  }`}
                >
                  {sortIcons?.sorted || <IconArrowUp size={14} />}
                </Center>
              ) : (
                <Center
                  className={"dataTable-sortableColumnHeaderUnsortedIcon"}
                  role="img"
                  aria-label="Not sorted"
                >
                  {sortIcons?.unsorted || <IconArrowsVertical size={14} />}
                </Center>
              )}
            </>
          ) : null}
          {filter ? (
            <DataTableHeaderCellFilter isActive={!!filtering}>
              {filter}
            </DataTableHeaderCellFilter>
          ) : null}
        </Group>
      </Box>
    );
  },
);

DataTableHeaderCell.displayName = "@raikou/DataTableHeaderCell";
