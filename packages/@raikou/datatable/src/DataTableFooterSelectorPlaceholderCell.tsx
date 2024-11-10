import { TableTh } from '@raikou/core';
import { dataTableFooterSelectorPlaceholderCellStyle } from './DataTableFooterSelectorPlaceholderCell.css';

type DataTableFooterSelectorPlaceholderCellProps = {
  shadowVisible: boolean;
};

export function DataTableFooterSelectorPlaceholderCell({
  shadowVisible,
}: DataTableFooterSelectorPlaceholderCellProps) {
  return (
    <TableTh
      className={dataTableFooterSelectorPlaceholderCellStyle}
      data-shadow-visible={shadowVisible || undefined}
    />
  );
}
