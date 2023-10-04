import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  CSSProperties,
} from "@raikou/core";
import cx from "clsx";
import {
  DataTableColumn,
  DataTableColumnGroup,
  DataTableSortProps,
} from "./types";
import { DataTableHeaderCell } from "./DataTableHeaderCell";
import { DataTableColumnGroupHeaderCell } from "./DataTableColumnGroupHeaderCell";
import { DataTableHeaderSelectorCell } from "./DataTableHeaderSelectorCell";

export type DataTableHeaderStylesNames = "root" | "active" | "standardIcon";

export type DataTableHeaderCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableHeaderProps
  extends BoxProps,
    StylesApiProps<DataTableHeaderFactory> {
  sortStatus: DataTableSortProps["sortStatus"];
  sortIcons: DataTableSortProps["sortIcons"];
  onSortStatusChange: DataTableSortProps["onSortStatusChange"];
  columns: DataTableColumn[];
  defaultColumnProps: Omit<DataTableColumn, "accessor"> | undefined;
  groups: readonly DataTableColumnGroup[] | undefined;
  selectionVisible: boolean;
  selectionChecked: boolean;
  selectionIndeterminate: boolean;
  onSelectionChange: (() => void) | undefined;
  selectionCheckboxProps: Record<string, unknown>;
  leftShadowVisible: boolean;
}

export type DataTableHeaderFactory = Factory<{
  props: DataTableHeaderProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableHeaderStylesNames;
  vars: DataTableHeaderCssVariables;
}>;

const defaultProps: Partial<DataTableHeaderProps> = {};

export const DataTableHeader = factory<DataTableHeaderFactory>(
  (_props, ref) => {
    const props = useProps("DataTableHeader", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      sortStatus,
      sortIcons,
      onSortStatusChange,
      columns,
      defaultColumnProps,
      groups,
      selectionVisible,
      selectionChecked,
      selectionIndeterminate,
      onSelectionChange,
      selectionCheckboxProps,
      leftShadowVisible,
      ...others
    } = props;

    const allRecordsSelectorCell = selectionVisible ? (
      <DataTableHeaderSelectorCell
        shadowVisible={leftShadowVisible}
        checked={selectionChecked}
        indeterminate={selectionIndeterminate}
        checkboxProps={selectionCheckboxProps}
        onChange={onSelectionChange}
        rowSpan={groups ? 2 : undefined}
      />
    ) : null;

    return (
      <thead
        className={cx("dataTableHeader-root", className)}
        style={style as CSSProperties}
        {...others}
        // ref={ref}
      >
        {groups && (
          <tr>
            {allRecordsSelectorCell}
            {groups.map((group) => (
              <DataTableColumnGroupHeaderCell key={group.id} group={group} />
            ))}
          </tr>
        )}
        <tr>
          {!groups && allRecordsSelectorCell}
          {columns.map(({ hidden, ...columnProps }) => {
            if (hidden) return null;

            const {
              accessor,
              visibleMediaQuery,
              textAlignment,
              width,
              title,
              sortable,
              titleClassName,
              titleStyle,
              filter,
              filtering,
            } = { ...defaultColumnProps, ...columnProps };

            return (
              <DataTableHeaderCell
                key={accessor}
                accessor={accessor}
                className={titleClassName}
                style={titleStyle}
                visibleMediaQuery={visibleMediaQuery}
                textAlignment={textAlignment}
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
        </tr>
      </thead>
    );
  },
);

DataTableHeader.displayName = "@raikou/DataTableHeader";
