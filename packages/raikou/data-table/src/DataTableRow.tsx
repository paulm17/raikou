import React, { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  useStyles,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import { DataTableRowCell } from "./DataTableRowCell";
import { DataTableRowExpansion } from "./DataTableRowExpansion";
import { DataTableRowSelectorCell } from "./DataTableRowSelectorCell";
import { useRowExpansion } from "./hooks";
import type {
  DataTableCellClickHandler,
  DataTableColumn,
  DataTableDefaultColumnProps,
} from "./types";
import cx from "clsx";

export type DataTableRowStylesNames = "root" | "td";

export interface DataTableRowProps
  extends BoxProps,
    StylesApiProps<DataTableRowFactory> {
  record: any;
  recordIndex: number;
  columns: DataTableColumn[];
  defaultColumnProps: DataTableDefaultColumnProps | undefined;
  defaultColumnRender:
    | ((record: any, index: number, accessor: string) => ReactNode)
    | undefined;
  selectionVisible: boolean;
  selectionChecked: boolean;
  onSelectionChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isRecordSelectable: ((record: any, index: number) => boolean) | undefined;
  getSelectionCheckboxProps: (
    record: any,
    recordIndex: number,
  ) => Record<string, unknown>;
  onClick: MouseEventHandler<HTMLTableRowElement> | undefined;
  onCellClick: DataTableCellClickHandler | undefined;
  onContextMenu: MouseEventHandler<HTMLTableRowElement> | undefined;
  expansion: ReturnType<typeof useRowExpansion<any>>;
  customAttributes?: (
    record: any,
    recordIndex: number,
  ) => Record<string, unknown>;
  contextMenuVisible: boolean;
  leftShadowVisible: boolean;
}

export type DataTableRowFactory = Factory<{
  props: DataTableRowProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableRowStylesNames;
}>;

type ClassNames = Partial<Record<DataTableRowStylesNames, string>>;

const defaultProps: Partial<DataTableRowProps> = {};

export const DataTableRow = factory<DataTableRowFactory>((_props) => {
  const props = useProps("DataTableRow", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    record,
    recordIndex,
    columns,
    defaultColumnProps,
    defaultColumnRender,
    selectionVisible,
    selectionChecked,
    onSelectionChange,
    isRecordSelectable,
    getSelectionCheckboxProps,
    onClick,
    onCellClick,
    onContextMenu,
    expansion,
    customAttributes,
    contextMenuVisible,
    leftShadowVisible,
    ...others
  } = props;

  const getStyles = useStyles<DataTableRowFactory>({
    name: "DataTableRow",
    props,
    classes: {
      root: "",
      td: "",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: undefined,
  });

  return (
    <>
      <Box
        component="tr"
        {...getStyles("root", {
          className: cx({
            ["dataTableRow-withPointerCursor"]:
              onClick || expansion?.expandOnClick,
            ["dataTableRow-selected"]: selectionChecked,
            ["dataTableRow-contextMenuVisible"]: contextMenuVisible,
          }),
        })}
        onClick={(e) => {
          if (expansion) {
            const { isRowExpanded, expandOnClick, expandRow, collapseRow } =
              expansion;
            if (expandOnClick) {
              if (isRowExpanded(record)) {
                collapseRow(record);
              } else {
                expandRow(record);
              }
            }
          }
          onClick?.(e);
        }}
        {...customAttributes?.(record, recordIndex)}
        onContextMenu={onContextMenu}
        {...others}
      >
        {selectionVisible && (
          <DataTableRowSelectorCell
            record={record}
            recordIndex={recordIndex}
            withRightShadow={leftShadowVisible}
            checked={selectionChecked}
            disabled={
              !onSelectionChange ||
              (isRecordSelectable
                ? !isRecordSelectable(record, recordIndex)
                : false)
            }
            onChange={onSelectionChange}
            getCheckboxProps={getSelectionCheckboxProps}
          />
        )}
        {columns.map(({ hidden, ...columnProps }, columnIndex) => {
          if (hidden) return null;

          const {
            accessor,
            visibleMediaQuery,
            textAlignment,
            noWrap,
            ellipsis,
            width,
            render,
            customCellAttributes,
          } = { ...defaultColumnProps, ...columnProps };

          let handleCellClick:
            | MouseEventHandler<HTMLTableCellElement>
            | undefined;
          if (onCellClick) {
            handleCellClick = (event) =>
              onCellClick({
                event,
                record,
                recordIndex,
                column: columnProps,
                columnIndex,
              });
          }

          return (
            <DataTableRowCell
              key={accessor}
              classNames={{
                root: (classNames as ClassNames)["td"],
              }}
              visibleMediaQuery={visibleMediaQuery}
              record={record}
              recordIndex={recordIndex}
              onClick={handleCellClick}
              accessor={accessor}
              textAlignment={textAlignment}
              noWrap={noWrap}
              ellipsis={ellipsis}
              width={width}
              render={render}
              defaultRender={defaultColumnRender}
              customCellAttributes={customCellAttributes}
            />
          );
        })}
      </Box>
      {expansion && (
        <DataTableRowExpansion
          colSpan={
            columns.filter(({ hidden }) => !hidden).length +
            (selectionVisible ? 1 : 0)
          }
          open={expansion.isRowExpanded(record)}
          content={expansion.content(record, recordIndex)}
          collapseProps={expansion.collapseProps}
        />
      )}
    </>
  );
});

DataTableRow.displayName = "@raikou/DataTableRow";
