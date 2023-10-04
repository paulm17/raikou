import React, { ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  RaikouSize,
  RaikouTheme,
  CSSProperties,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import { Pagination } from "../../components/Pagination/src";
import { Text } from "../../components/Text/src";
import cx from "clsx";
import type { WithOptional, WithRequired } from "./types/utils";
import { _DataTablePaginationProps } from "./types";
import { DataTablePageSizeSelector } from "./DataTablePageSizeSelector";

export type DataTablePaginationStylesNames = "root" | "active" | "standardIcon";

export type DataTablePaginationCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

type PaginationProps = WithOptional<
  WithRequired<
    _DataTablePaginationProps,
    | "loadingText"
    | "paginationSize"
    | "recordsPerPageLabel"
    | "paginationWrapBreakpoint"
    | "getPaginationControlProps"
  >,
  "onRecordsPerPageChange" | "recordsPerPageOptions"
>;

export interface DataTablePaginationProps
  extends BoxProps,
    StylesApiProps<DataTablePaginationFactory>,
    PaginationProps {
  topBorderColor: string | ((theme: RaikouTheme) => string);
  fetching: boolean | undefined;
  recordsLength: number | undefined;
  noRecordsText: string;
}

export type DataTablePaginationFactory = Factory<{
  props: DataTablePaginationProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTablePaginationStylesNames;
  vars: DataTablePaginationCssVariables;
}>;

const defaultProps: Partial<DataTablePaginationProps> = {};

export const DataTablePagination = factory<DataTablePaginationFactory>(
  (_props, ref) => {
    const props = useProps("DataTablePagination", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      topBorderColor,
      fetching,
      page,
      onPageChange,
      paginationColor,
      paginationSize,
      loadingText,
      noRecordsText,
      paginationText,
      totalRecords,
      recordsPerPage,
      onRecordsPerPageChange,
      recordsPerPageLabel,
      recordsPerPageOptions,
      recordsLength,
      paginationWrapBreakpoint,
      getPaginationControlProps,
      ...others
    } = props;

    let paginationTextValue: ReactNode;
    if (fetching) {
      paginationTextValue = loadingText;
    } else if (!totalRecords) {
      paginationTextValue = noRecordsText;
    } else {
      const from = (page! - 1) * recordsPerPage! + 1;
      const to = from + recordsLength! - 1;
      paginationTextValue = paginationText!({ from, to, totalRecords });
    }

    return (
      <Box
        ref={ref}
        className={cx("dataTablePagination-root", className)}
        style={style as CSSProperties}
        {...others}
      >
        <Text className={"dataTablePagination-text"} size={paginationSize}>
          {paginationTextValue}
        </Text>
        {recordsPerPageOptions && (
          <DataTablePageSizeSelector
            size={paginationSize}
            label={recordsPerPageLabel}
            values={recordsPerPageOptions}
            color={paginationColor}
            value={recordsPerPage!}
            onChange={onRecordsPerPageChange!}
          />
        )}
        <Pagination
          color={paginationColor}
          className={cx("dataTablePagination-pagination", {
            ["dataTablePagination-paginationFetching"]:
              fetching || !recordsLength,
          })}
          value={page}
          onChange={onPageChange}
          size={paginationSize}
          total={Math.ceil(totalRecords! / recordsPerPage!)}
          getControlProps={getPaginationControlProps}
        />
      </Box>
    );
  },
);

DataTablePagination.displayName = "@raikou/DataTablePagination";
