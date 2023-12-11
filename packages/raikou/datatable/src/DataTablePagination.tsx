import React from "react";
import {
  Box,
  rem,
  type RaikouSpacing,
  type RaikouStyleProp,
} from "@raikou/core";
import { Pagination } from "../../components/Pagination/src";
import { Text } from "../../components/Text/src";
import clsx from "clsx";
import { forwardRef, type ForwardedRef } from "react";
import { DataTablePageSizeSelector } from "./DataTablePageSizeSelector";
import { getPaginationCssVariables } from "./cssVariables";
import { useMediaQueryStringOrFunction } from "./hooks";
import type { DataTablePaginationProps } from "./types";
import type { WithOptionalProperty, WithRequiredProperty } from "./types/utils";
import classes from "./DataTablePagination.module.css";

type DataTablePaginationComponentProps = WithOptionalProperty<
  WithRequiredProperty<
    DataTablePaginationProps,
    | "loadingText"
    | "paginationSize"
    | "recordsPerPageLabel"
    | "paginationWrapBreakpoint"
    | "getPaginationControlProps"
  >,
  "onRecordsPerPageChange" | "recordsPerPageOptions"
> & {
  className: string | undefined;
  style: RaikouStyleProp | undefined;
  fetching: boolean | undefined;
  recordsLength: number | undefined;
  horizontalSpacing: RaikouSpacing | undefined;
  noRecordsText: string;
};

export const DataTablePagination = forwardRef(function DataTablePagination(
  {
    className,
    style,
    fetching,
    page,
    onPageChange,
    paginationWithEdges,
    paginationActiveTextColor,
    paginationActiveBackgroundColor,
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
    paginationWrapBreakpoint,
    getPaginationControlProps,
  }: DataTablePaginationComponentProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  let paginationTextValue: React.ReactNode;
  if (fetching) {
    paginationTextValue = loadingText;
  } else if (!totalRecords) {
    paginationTextValue = noRecordsText;
  } else {
    const from = (page! - 1) * recordsPerPage! + 1;
    const to = from + recordsLength! - 1;
    paginationTextValue = paginationText!({ from, to, totalRecords });
  }

  const isAbovePaginationWrapBreakpoint = useMediaQueryStringOrFunction(
    ({ breakpoints }) =>
      `(min-width: ${
        typeof paginationWrapBreakpoint === "number"
          ? `${rem(paginationWrapBreakpoint)}rem`
          : breakpoints[paginationWrapBreakpoint] || paginationWrapBreakpoint
      })`,
  );

  return (
    <Box
      ref={ref}
      px={horizontalSpacing ?? "xs"}
      py="xs"
      className={clsx(classes["mantine-datatable-pagination"], className)}
      style={[
        { flexDirection: isAbovePaginationWrapBreakpoint ? "row" : "column" },
        style,
      ]}
    >
      <Text
        className={classes["mantine-datatable-pagination-text"]}
        size={paginationSize}
      >
        {paginationTextValue}
      </Text>
      {recordsPerPageOptions && (
        <DataTablePageSizeSelector
          activeTextColor={paginationActiveTextColor}
          activeBackgroundColor={paginationActiveBackgroundColor}
          size={paginationSize}
          label={recordsPerPageLabel}
          values={recordsPerPageOptions}
          value={recordsPerPage!}
          onChange={onRecordsPerPageChange!}
        />
      )}
      <Pagination
        classNames={{
          root: clsx(classes["mantine-datatable-pagination-pages"], {
            "mantine-datatable-pagination-pages-fetching":
              fetching || !recordsLength,
          }),
          control: classes["mantine-datatable-pagination-pages-control"],
        }}
        style={
          paginationActiveTextColor || paginationActiveBackgroundColor
            ? (theme) =>
                getPaginationCssVariables({
                  theme,
                  paginationActiveTextColor,
                  paginationActiveBackgroundColor,
                })
            : undefined
        }
        withEdges={paginationWithEdges}
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
