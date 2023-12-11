import React, { forwardRef } from "react";
import { type RaikouStyleProp } from "@raikou/core";
import { TableThead, TableTr } from "../../components/Table/src";
import { type CheckboxProps } from "../../components/Checkbox/src";
import clsx from "clsx";
import { DataTableColumnGroupHeaderCell } from "./DataTableColumnGroupHeaderCell";
import { DataTableHeaderCell } from "./DataTableHeaderCell";
import { DataTableHeaderSelectorCell } from "./DataTableHeaderSelectorCell";
import type {
  DataTableColumn,
  DataTableColumnGroup,
  DataTableSelectionTrigger,
  DataTableSortProps,
} from "./types";
import classes from "./DataTableHeader.module.css";

type DataTableHeaderProps<T> = {
  className: string | undefined;
  style?: RaikouStyleProp;
  sortStatus: DataTableSortProps<T>["sortStatus"];
  sortIcons: DataTableSortProps<T>["sortIcons"];
  onSortStatusChange: DataTableSortProps<T>["onSortStatusChange"];
  columns: DataTableColumn<T>[];
  defaultColumnProps: Omit<DataTableColumn<T>, "accessor"> | undefined;
  groups: readonly DataTableColumnGroup<T>[] | undefined;
  selectionTrigger: DataTableSelectionTrigger;
  selectionVisible: boolean;
  selectionChecked: boolean;
  selectionIndeterminate: boolean;
  onSelectionChange: (() => void) | undefined;
  selectionCheckboxProps: CheckboxProps;
  selectorCellShadowVisible: boolean;
};

export const DataTableHeader = forwardRef(function DataTableHeader<T>(
  {
    className,
    style,
    sortStatus,
    sortIcons,
    onSortStatusChange,
    columns,
    defaultColumnProps,
    groups,
    selectionTrigger,
    selectionVisible,
    selectionChecked,
    selectionIndeterminate,
    onSelectionChange,
    selectionCheckboxProps,
    selectorCellShadowVisible,
  }: DataTableHeaderProps<T>,
  ref: React.ForwardedRef<HTMLTableSectionElement>,
) {
  const allRecordsSelectorCell = selectionVisible ? (
    <DataTableHeaderSelectorCell
      trigger={selectionTrigger}
      shadowVisible={selectorCellShadowVisible}
      checked={selectionChecked}
      indeterminate={selectionIndeterminate}
      checkboxProps={selectionCheckboxProps}
      onChange={onSelectionChange}
      rowSpan={groups ? 2 : undefined}
    />
  ) : null;

  return (
    <TableThead
      className={clsx(classes["mantine-datatable-header"], className)}
      style={style}
      ref={ref}
    >
      {groups && (
        <TableTr>
          {allRecordsSelectorCell}
          {groups.map((group) => (
            <DataTableColumnGroupHeaderCell key={group.id} group={group} />
          ))}
        </TableTr>
      )}
      <TableTr>
        {!groups && allRecordsSelectorCell}
        {columns.map(({ hidden, ...columnProps }) => {
          if (hidden) return null;

          const {
            accessor,
            visibleMediaQuery,
            textAlign,
            width,
            title,
            sortable,
            titleClassName,
            titleStyle,
            filter,
            filtering,
          } = { ...defaultColumnProps, ...columnProps };

          return (
            <DataTableHeaderCell<T>
              key={accessor as React.Key}
              accessor={accessor}
              className={titleClassName}
              style={titleStyle}
              visibleMediaQuery={visibleMediaQuery}
              textAlign={textAlign}
              width={width}
              title={title}
              sortable={sortable}
              sortStatus={sortStatus}
              sortIcons={sortIcons}
              onSortStatusChange={onSortStatusChange}
              filter={filter}
              filtering={filtering}
            />
          );
        })}
      </TableTr>
    </TableThead>
  );
}) as <T>(
  props: DataTableHeaderProps<T> & {
    ref: React.ForwardedRef<HTMLTableSectionElement>;
  },
) => JSX.Element;
