import React from "react";
import { Collapse } from "../../components/Collapse/src";
import { TableTd, TableTr } from "../../components/Table/src";
import { useRowExpansionStatus } from "./hooks";
import type { DataTableRowExpansionCollapseProps } from "./types";
import classes from "./DataTableRowExpansion.module.css";

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
  const { expanded, visible } = useRowExpansionStatus(
    open,
    collapseProps?.transitionDuration,
  );

  return visible ? (
    <>
      {/* add an empty row to maintain striped rows consistency */}
      <TableTr />
      <TableTr>
        <TableTd
          className={classes["mantine-datatable-row-expansion-cell"]}
          colSpan={colSpan}
        >
          <Collapse in={expanded} {...collapseProps}>
            <div
              className={
                classes["mantine-datatable-row-expansion-cell-content"]
              }
            >
              {content()}
            </div>
          </Collapse>
        </TableTd>
      </TableTr>
    </>
  ) : null;
}
