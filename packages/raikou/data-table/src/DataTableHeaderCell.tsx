import React from "react";
import { Box } from "../../components/Box/src";
import { Center } from "../../components/Center/src";
import { Group } from "../../components/Group/src";
import { RaikouTheme } from "@raikou/core";
import { IconArrowUp, IconArrowsVertical } from "@tabler/icons-react";
import type { BaseSyntheticEvent, CSSProperties, ReactNode } from "react";
import DataTableHeaderCellFilter from "./DataTableHeaderCellFilter";
import type { DataTableColumn, DataTableSortProps } from "./types";
import { humanize, useMediaQueryStringOrFunction } from "./utils";
import cx from "clsx";

type DataTableHeaderCellProps<T> = {
  className?: string;
  style?: CSSProperties;
  visibleMediaQuery: string | ((theme: RaikouTheme) => string) | undefined;
  title: ReactNode | undefined;
  sortStatus: DataTableSortProps["sortStatus"];
  sortIcons: DataTableSortProps["sortIcons"];
  onSortStatusChange: DataTableSortProps["onSortStatusChange"];
} & Pick<
  DataTableColumn<T>,
  "accessor" | "sortable" | "textAlignment" | "width" | "filter" | "filtering"
>;

export default function DataTableHeaderCell<T>({
  className,
  style,
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
}: DataTableHeaderCellProps<T>) {
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
          textAlign: textAlignment,
          width,
          minWidth: width,
          maxWidth: width,
        },
        style,
      ]}
      role={sortable ? "button" : undefined}
      tabIndex={sortable ? 0 : undefined}
      onClick={sortAction}
      onKeyDown={(e) => e.key === "Enter" && sortAction?.()}
    >
      <Group
        className={"dataTable-sortableColumnHeaderGroup"}
        justify="space-between"
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
}
