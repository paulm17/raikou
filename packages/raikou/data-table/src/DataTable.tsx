import React, {
  ChangeEventHandler,
  Key,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Box, factory, useProps, Factory } from "@raikou/core";
import {
  useElementOuterSize,
  useLastSelectionChangeIndex,
  useRowContextMenu,
  useRowExpansion,
} from "./hooks";
import { Table } from "../../components/Table/src";
import { DataTableProps } from "./types/DataTableProps";
import cx from "clsx";
import {
  differenceBy,
  getRecordId,
  // humanize,
  uniqBy,
  useIsomorphicLayoutEffect,
} from "./utils";
import { DataTableScrollArea } from "./DataTableScrollArea";
import { useMergedRef } from "@raikou/hooks";
import { DataTableEmptyState } from "./DataTableEmptyState";
import { DataTableLoader } from "./DataTableLoader";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableFooter } from "./DataTableFooter";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";

export type DataTableStylesNames =
  | "root"
  | "textSelectionDisabled"
  | "table"
  | "table-tr"
  | "table-td"
  | "tableWithBorder"
  | "tableWithColumnBorders"
  | "tableWithColumnBordersAndSelectableRecords"
  | "verticalAlignmentTop"
  | "verticalAlignmentBottom";

export type DataTableCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export type DataTableFactory = Factory<{
  props: DataTableProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableStylesNames;
  vars: DataTableCssVariables;
}>;

type ClassNames = Partial<Record<DataTableStylesNames, string>>;

const defaultProps: Partial<DataTableProps> = {};

export const DataTable = factory<DataTableFactory>((_props, ref) => {
  const props = useProps("DataTable", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    striped,
    noHeader: withoutHeader,
    onCellClick,
    onRowClick,
    withColumnBorders,
    textSelectionDisabled,
    verticalAlignment = "center",
    defaultColumnProps,
    fetching,
    onPageChange,
    rowExpansion,
    rowClassName,
    rowStyle,
    rowContextMenu,
    customRowAttributes,
    records,
    groups,
    columns,
    selectedRecords,
    emptyState,
    loaderBackgroundBlur,
    customLoader,
    loaderSize,
    loaderVariant,
    loaderColor,
    noRecordsText = "No records",
    noRecordsIcon,
    isRecordSelectable,
    onSelectedRecordsChange,
    defaultColumnRender,
    idAccessor = "id",
    onScrollToTop,
    onScrollToLeft,
    onScrollToBottom,
    onScrollToRight,
    scrollViewportRef: scrollViewportRefProp,
    scrollAreaProps,
    page,
    bodyRef,
    totalRecords,
    recordsPerPage,
    getRecordSelectionCheckboxProps = (_, index) => ({
      "aria-label": `Select record ${index + 1}`,
    }),
    allRecordsSelectionCheckboxProps = { "aria-label": "Select all records" },
    sortStatus,
    sortIcons,
    onSortStatusChange,
    onRecordsPerPageChange,
    recordsPerPageOptions,
    recordsPerPageLabel = "Records per page",
    horizontalSpacing,
    paginationColor,
    paginationSize = "sm",
    paginationText = ({ from, to, totalRecords }) =>
      `${from} - ${to} / ${totalRecords}`,
    paginationWrapBreakpoint = "sm",
    loadingText = "...",
    getPaginationControlProps = (control) => {
      if (control === "previous") {
        return { "aria-label": "Previous page" };
      } else if (control === "next") {
        return { "aria-label": "Next page" };
      }
      return {};
    },
    ...others
  } = props;

  const {
    ref: scrollViewportRef,
    width: scrollViewportWidth,
    height: scrollViewportHeight,
  } = useElementOuterSize<HTMLDivElement>();

  const effectiveColumns = useMemo(() => {
    return groups?.flatMap((group) => group.columns) ?? columns!;
  }, [columns, groups]);

  const { ref: headerRef, height: headerHeight } =
    useElementOuterSize<HTMLTableSectionElement>();

  const {
    ref: tableRef,
    width: tableWidth,
    height: tableHeight,
  } = useElementOuterSize<HTMLTableElement>();

  const { ref: footerRef, height: footerHeight } =
    useElementOuterSize<HTMLTableSectionElement>();

  const { ref: paginationRef, height: paginationHeight } =
    useElementOuterSize<HTMLDivElement>();

  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrolledToBottom, setScrolledToBottom] = useState(true);
  const [scrolledToLeft, setScrolledToLeft] = useState(true);
  const [scrolledToRight, setScrolledToRight] = useState(true);

  const { rowContextMenuInfo, setRowContextMenuInfo } =
    useRowContextMenu(fetching);
  const rowExpansionInfo = useRowExpansion({
    rowExpansion,
    records,
    idAccessor,
  });

  const handleScrollPositionChange = useCallback(() => {
    if (!fetching && rowContextMenu) {
      setRowContextMenuInfo(null);
    }

    if (fetching || tableHeight <= scrollViewportHeight) {
      setScrolledToTop(true);
      setScrolledToBottom(true);
    } else {
      const scrollTop = scrollViewportRef.current?.scrollTop || 0;
      const newScrolledToTop = scrollTop === 0;
      const newScrolledToBottom =
        tableHeight - scrollTop - scrollViewportHeight < 1;
      setScrolledToTop(newScrolledToTop);
      setScrolledToBottom(newScrolledToBottom);
      if (newScrolledToTop && newScrolledToTop !== scrolledToTop)
        onScrollToTop?.();
      if (newScrolledToBottom && newScrolledToBottom !== scrolledToBottom)
        onScrollToBottom?.();
    }

    if (fetching || tableWidth === scrollViewportWidth) {
      setScrolledToLeft(true);
      setScrolledToRight(true);
    } else {
      const scrollLeft = scrollViewportRef.current?.scrollLeft || 0;
      const newScrolledToLeft = scrollLeft === 0;
      const newScrolledToRight =
        tableWidth - scrollLeft - scrollViewportWidth < 1;
      setScrolledToLeft(newScrolledToLeft);
      setScrolledToRight(newScrolledToRight);
      if (newScrolledToLeft && newScrolledToLeft !== scrolledToLeft)
        onScrollToLeft?.();
      if (newScrolledToRight && newScrolledToRight !== scrolledToRight)
        onScrollToRight?.();
    }
  }, [
    fetching,
    onScrollToBottom,
    onScrollToLeft,
    onScrollToRight,
    onScrollToTop,
    rowContextMenu,
    scrollViewportHeight,
    scrollViewportRef,
    scrollViewportWidth,
    scrolledToBottom,
    scrolledToLeft,
    scrolledToRight,
    scrolledToTop,
    setRowContextMenuInfo,
    tableHeight,
    tableWidth,
  ]);

  useIsomorphicLayoutEffect(handleScrollPositionChange, [
    handleScrollPositionChange,
  ]);

  const handlePageChange = useCallback(
    (page: number) => {
      scrollViewportRef.current?.scrollTo({ top: 0, left: 0 });
      onPageChange!(page);
    },
    [onPageChange, scrollViewportRef],
  );

  const recordsLength = records?.length;
  const recordIds = records?.map((record) => getRecordId(record, idAccessor));
  const selectionColumnVisible = !!selectedRecords;
  const selectedRecordIds = selectedRecords?.map((record) =>
    getRecordId(record, idAccessor),
  );
  const hasRecordsAndSelectedRecords =
    recordIds !== undefined &&
    selectedRecordIds !== undefined &&
    selectedRecordIds.length > 0;

  const selectableRecords = isRecordSelectable
    ? records?.filter(isRecordSelectable)
    : records;
  const selectableRecordIds = selectableRecords?.map((record) =>
    getRecordId(record, idAccessor),
  );

  const allSelectableRecordsSelected =
    hasRecordsAndSelectedRecords &&
    selectableRecordIds!.every((id) => selectedRecordIds.includes(id));
  const someRecordsSelected =
    hasRecordsAndSelectedRecords &&
    selectableRecordIds!.some((id) => selectedRecordIds.includes(id));

  const handleHeaderSelectionChange = useCallback(() => {
    if (selectedRecords && onSelectedRecordsChange) {
      onSelectedRecordsChange(
        allSelectableRecordsSelected
          ? selectedRecords.filter(
              (record) =>
                !selectableRecordIds!.includes(getRecordId(record, idAccessor)),
            )
          : uniqBy([...selectedRecords, ...selectableRecords!], (record) =>
              getRecordId(record, idAccessor),
            ),
      );
    }
  }, [
    allSelectableRecordsSelected,
    idAccessor,
    onSelectedRecordsChange,
    selectableRecordIds,
    selectableRecords,
    selectedRecords,
  ]);

  const { lastSelectionChangeIndex, setLastSelectionChangeIndex } =
    useLastSelectionChangeIndex(recordIds);
  const selectionVisibleAndNotScrolledToLeft =
    selectionColumnVisible && !scrolledToLeft;

  // // const marginProperties = { m, my, mx, mt, mb, ml, mr };
  // const theme = useRaikouTheme();
  // // const styleProperties =
  // //   typeof styles === "function"
  // //     ? styles(theme, EMPTY_OBJECT, EMPTY_OBJECT)
  // //     : styles;

  return (
    <Box
      className={cx("dataTable-root", {
        ["dataTable-root-tableWithBorder"]: withBorder,
      })}
      {...others}
      ref={ref}
    >
      <DataTableScrollArea
        viewportRef={useMergedRef(
          scrollViewportRef,
          scrollViewportRefProp || null,
        )}
        topShadowVisible={!scrolledToTop}
        leftShadowVisible={!(selectedRecords || scrolledToLeft)}
        rightShadowVisible={!scrolledToRight}
        bottomShadowVisible={!scrolledToBottom}
        headerHeight={headerHeight}
        footerHeight={footerHeight}
        onScrollPositionChange={handleScrollPositionChange}
        scrollAreaProps={scrollAreaProps}
      >
        {/* @ts-ignore */}
        <Table
          ref={tableRef}
          horizontalSpacing={horizontalSpacing}
          className={cx("dataTable-table", {
            ["dataTable-tableWithBorder"]: withColumnBorders,
            ["lastRowBorderBottomVisible"]: tableHeight < scrollViewportHeight,
            ["dataTable-textSelectionDisabled"]: textSelectionDisabled,
            ["dataTable-verticalAlignmentTop"]: verticalAlignment === "top",
            ["dataTable-verticalAlignmentBottom"]:
              verticalAlignment === "bottom",
            ["dataTable-tableWithColumnBordersAndSelectableRecords"]:
              selectionColumnVisible && withColumnBorders,
          })}
          striped={recordsLength ? striped : false}
          {...others}
        >
          {withoutHeader ? null : (
            <DataTableHeader
              ref={headerRef}
              // className={classNames?.header}
              // style={styleProperties?.header}
              columns={effectiveColumns}
              defaultColumnProps={defaultColumnProps}
              groups={groups}
              sortStatus={sortStatus}
              sortIcons={sortIcons}
              onSortStatusChange={onSortStatusChange}
              selectionVisible={selectionColumnVisible}
              selectionChecked={allSelectableRecordsSelected}
              selectionIndeterminate={
                someRecordsSelected && !allSelectableRecordsSelected
              }
              onSelectionChange={handleHeaderSelectionChange}
              selectionCheckboxProps={allRecordsSelectionCheckboxProps}
              leftShadowVisible={selectionVisibleAndNotScrolledToLeft}
            />
          )}
          <tbody ref={bodyRef}>
            {recordsLength ? (
              records.map((record, recordIndex) => {
                const recordId = getRecordId(record, idAccessor);
                const isSelected =
                  selectedRecordIds?.includes(recordId) || false;

                let showContextMenuOnClick = false;
                let showContextMenuOnRightClick = false;
                if (rowContextMenu) {
                  const { hidden } = rowContextMenu;
                  if (
                    !hidden ||
                    !(typeof hidden === "function"
                      ? hidden(record, recordIndex)
                      : hidden)
                  ) {
                    if (rowContextMenu.trigger === "click") {
                      showContextMenuOnClick = true;
                    } else {
                      showContextMenuOnRightClick = true;
                    }
                  }
                }

                let handleSelectionChange:
                  | ChangeEventHandler<HTMLInputElement>
                  | undefined;
                if (onSelectedRecordsChange && selectedRecords) {
                  handleSelectionChange = (e) => {
                    if (
                      (e.nativeEvent as PointerEvent).shiftKey &&
                      lastSelectionChangeIndex !== null
                    ) {
                      const targetRecords = records.filter(
                        recordIndex > lastSelectionChangeIndex
                          ? (r, index) =>
                              index >= lastSelectionChangeIndex &&
                              index <= recordIndex &&
                              (isRecordSelectable
                                ? isRecordSelectable(r, index)
                                : true)
                          : (r, index) =>
                              index >= recordIndex &&
                              index <= lastSelectionChangeIndex &&
                              (isRecordSelectable
                                ? isRecordSelectable(r, index)
                                : true),
                      );
                      onSelectedRecordsChange(
                        isSelected
                          ? differenceBy(selectedRecords, targetRecords, (r) =>
                              getRecordId(r, idAccessor),
                            )
                          : uniqBy(
                              [...selectedRecords, ...targetRecords],
                              (r) => getRecordId(r, idAccessor),
                            ),
                      );
                    } else {
                      onSelectedRecordsChange(
                        isSelected
                          ? selectedRecords.filter(
                              (record) =>
                                getRecordId(record, idAccessor) !== recordId,
                            )
                          : uniqBy([...selectedRecords, record], (record) =>
                              getRecordId(record, idAccessor),
                            ),
                      );
                    }
                    setLastSelectionChangeIndex(recordIndex);
                  };
                }

                let handleClick:
                  | MouseEventHandler<HTMLTableRowElement>
                  | undefined;
                if (showContextMenuOnClick) {
                  handleClick = (e) => {
                    setRowContextMenuInfo({
                      y: e.clientY,
                      x: e.clientX,
                      record,
                      recordIndex,
                    });
                    onRowClick?.(record, recordIndex, e);
                  };
                } else if (onRowClick) {
                  handleClick = (e) => {
                    onRowClick(record, recordIndex, e);
                  };
                }

                let handleContextMenu:
                  | MouseEventHandler<HTMLTableRowElement>
                  | undefined;
                if (showContextMenuOnRightClick) {
                  handleContextMenu = (e) => {
                    e.preventDefault();
                    setRowContextMenuInfo({
                      y: e.clientY,
                      x: e.clientX,
                      record,
                      recordIndex,
                    });
                  };
                }

                return (
                  <DataTableRow
                    classNames={{
                      root:
                        classNames && (classNames as ClassNames)["table-tr"],
                      td: classNames && (classNames as ClassNames)["table-td"],
                    }}
                    key={recordId as Key}
                    record={record}
                    recordIndex={recordIndex}
                    columns={effectiveColumns}
                    defaultColumnProps={defaultColumnProps}
                    defaultColumnRender={defaultColumnRender}
                    selectionVisible={selectionColumnVisible}
                    selectionChecked={isSelected}
                    onSelectionChange={handleSelectionChange}
                    isRecordSelectable={isRecordSelectable}
                    getSelectionCheckboxProps={getRecordSelectionCheckboxProps}
                    onClick={handleClick}
                    onCellClick={onCellClick}
                    onContextMenu={handleContextMenu}
                    contextMenuVisible={
                      rowContextMenuInfo
                        ? getRecordId(rowContextMenuInfo.record, idAccessor) ===
                          recordId
                        : false
                    }
                    expansion={rowExpansionInfo}
                    style={rowStyle}
                    customAttributes={customRowAttributes}
                    leftShadowVisible={selectionVisibleAndNotScrolledToLeft}
                  />
                );
              })
            ) : (
              <tr className="dataTableEmptyRow-root">
                <td />
              </tr>
            )}
          </tbody>
          {effectiveColumns.some(({ footer }) => footer) && (
            <DataTableFooter
              ref={footerRef}
              // className={classNames?.footer}
              // style={styleProperties?.footer}
              borderColor={""}
              columns={effectiveColumns}
              defaultColumnProps={defaultColumnProps}
              selectionVisible={selectionColumnVisible}
              leftShadowVisible={selectionVisibleAndNotScrolledToLeft}
              scrollDiff={tableHeight - scrollViewportHeight}
            />
          )}
        </Table>
      </DataTableScrollArea>
      {page && (
        <DataTablePagination
          ref={paginationRef}
          // className={classNames?.pagination}
          // style={styleProperties?.pagination}
          px={horizontalSpacing ?? "xs"}
          topBorderColor={""}
          fetching={fetching}
          page={page}
          onPageChange={handlePageChange}
          totalRecords={totalRecords}
          recordsPerPage={recordsPerPage}
          onRecordsPerPageChange={onRecordsPerPageChange}
          recordsPerPageOptions={recordsPerPageOptions}
          recordsPerPageLabel={recordsPerPageLabel}
          paginationColor={paginationColor}
          paginationSize={paginationSize}
          paginationText={paginationText}
          paginationWrapBreakpoint={paginationWrapBreakpoint}
          getPaginationControlProps={getPaginationControlProps}
          noRecordsText={noRecordsText}
          loadingText={loadingText}
          recordsLength={recordsLength}
        />
      )}
      <DataTableLoader
        pt={headerHeight}
        pb={paginationHeight}
        fetching={fetching}
        backgroundBlur={loaderBackgroundBlur}
        customContent={customLoader}
        size={loaderSize}
        variant={loaderVariant}
        color={loaderColor}
      />
      <DataTableEmptyState
        pt={headerHeight}
        pb={paginationHeight}
        icon={noRecordsIcon}
        text={noRecordsText}
        active={!fetching && !recordsLength}
      >
        {emptyState}
      </DataTableEmptyState>
    </Box>
  );
});

DataTable.displayName = "@raikou/DataTable";
