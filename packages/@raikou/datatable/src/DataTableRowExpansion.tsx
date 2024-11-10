import { Collapse, TableTd, TableTr } from '@raikou/core';
import { useRowExpansionStatus } from './hooks';
import type { DataTableRowExpansionCollapseProps } from './types';
import {
  dataTableRowExpansionCellContentStyle,
  dataTableRowExpansionCellStyle,
} from './DataTableRowExpansion.css';

type DataTableRowExpansionProps = {
  open: boolean;
  colSpan: number;
  content: () => React.ReactNode;
  collapseProps: DataTableRowExpansionCollapseProps | undefined;
};

export function DataTableRowExpansion({
  open,
  colSpan,
  content,
  collapseProps,
}: DataTableRowExpansionProps) {
  const { expanded, visible } = useRowExpansionStatus(open, collapseProps?.transitionDuration);

  return visible ? (
    <>
      {/* add an empty row to maintain striped rows consistency */}
      <TableTr />
      <TableTr>
        <TableTd className={dataTableRowExpansionCellStyle} colSpan={colSpan}>
          <Collapse in={expanded} {...collapseProps}>
            <div className={dataTableRowExpansionCellContentStyle}>{content()}</div>
          </Collapse>
        </TableTd>
      </TableTr>
    </>
  ) : null;
}
