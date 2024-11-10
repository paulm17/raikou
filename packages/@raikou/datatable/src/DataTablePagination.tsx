import { forwardRef, type ForwardedRef } from 'react';
import clsx from 'clsx';
import { Box, Pagination, rem, Text, type RaikouSpacing, type RaikouStyleProp } from '@raikou/core';
import { getPaginationCssVariables } from './cssVariables';
import { DataTablePageSizeSelector } from './DataTablePageSizeSelector';
import { useMediaQueryStringOrFunction } from './hooks';
import type { DataTablePaginationProps } from './types';
import type { WithOptionalProperty, WithRequiredProperty } from './types/utils';
import {
  dataTablePaginationPagesControlStyle,
  dataTablePaginationPagesFetchingStyle,
  dataTablePaginationPagesStyle,
  dataTablePaginationStyle,
  dataTablePaginationTextStyle,
} from './DataTablePagination.css';

type DataTablePaginationComponentProps = WithOptionalProperty<
  WithRequiredProperty<
    DataTablePaginationProps,
    | 'loadingText'
    | 'paginationSize'
    | 'recordsPerPageLabel'
    | 'paginationWrapBreakpoint'
    | 'getPaginationControlProps'
  >,
  'onRecordsPerPageChange' | 'recordsPerPageOptions'
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
    paginationWithControls,
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
  ref: ForwardedRef<HTMLDivElement>
) {
  let paginationTextValue: React.ReactNode;
  if (totalRecords) {
    const from = (page - 1) * recordsPerPage + 1;
    const to = from + (recordsLength || 0) - 1;
    paginationTextValue = paginationText!({ from, to, totalRecords });
  } else {
    paginationTextValue = fetching ? loadingText : noRecordsText;
  }

  const isAbovePaginationWrapBreakpoint = useMediaQueryStringOrFunction(
    ({ breakpoints }) =>
      `(min-width: ${
        typeof paginationWrapBreakpoint === 'number'
          ? `${rem(paginationWrapBreakpoint)}rem`
          : breakpoints[paginationWrapBreakpoint] || paginationWrapBreakpoint
      })`
  );

  return (
    <Box
      ref={ref}
      px={horizontalSpacing ?? 'xs'}
      py="xs"
      className={clsx(dataTablePaginationStyle, className)}
      style={[{ flexDirection: isAbovePaginationWrapBreakpoint ? 'row' : 'column' }, style]}
    >
      <Text component="div" className={dataTablePaginationTextStyle} size={paginationSize}>
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
          root: clsx(dataTablePaginationPagesStyle, {
            [dataTablePaginationPagesFetchingStyle]: fetching || !recordsLength,
          }),
          control: dataTablePaginationPagesControlStyle,
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
        withControls={paginationWithControls}
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
  }
) => JSX.Element;
