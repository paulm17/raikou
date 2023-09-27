import React from "react";
import { Box } from "../../components/Box/src";
import { Pagination } from "../../components/Pagination/src";
import { Text } from "../../components/Text/src";
import { RaikouSize, type RaikouTheme } from "@raikou/core";
import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type ReactNode,
} from "react";
import DataTablePageSizeSelector from "./DataTablePageSizeSelector";
import type { DataTablePaginationProps } from "./types";
import type { WithOptional, WithRequired } from "./types/utils";
import cx from "clsx";

type DataTablePaginationComponentProps = WithOptional<
  WithRequired<
    DataTablePaginationProps,
    | "loadingText"
    | "paginationSize"
    | "recordsPerPageLabel"
    | "paginationWrapBreakpoint"
    | "getPaginationControlProps"
  >,
  "onRecordsPerPageChange" | "recordsPerPageOptions"
> & {
  className?: string;
  style?: CSSProperties;
  topBorderColor: string | ((theme: RaikouTheme) => string);
  fetching: boolean | undefined;
  recordsLength: number | undefined;
  horizontalSpacing: RaikouSize | undefined;
  noRecordsText: string;
};

export default forwardRef(function DataTablePagination(
  {
    className,
    style,
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
    horizontalSpacing,
    getPaginationControlProps,
  }: DataTablePaginationComponentProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
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
      px={horizontalSpacing ?? "xs"}
      py="xs"
      className={cx("dataTablePagination-root", className)}
      style={{
        borderTop: `1px solid ${
          typeof topBorderColor === "function"
            ? topBorderColor(null)
            : topBorderColor
        }`,
        ...style,
      }}
    >
      <Text className="dataTablePagination-text" size={paginationSize}>
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
}) as (
  props: DataTablePaginationComponentProps & {
    ref: ForwardedRef<HTMLDivElement>;
  },
) => JSX.Element;
