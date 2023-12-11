import React from "react";
import { TableTh } from "../../components/Table/src";
import classes from "./DataTableFooterSelectorPlaceholderCell.module.css";

type DataTableFooterSelectorPlaceholderCellProps = {
  shadowVisible: boolean;
};

export function DataTableFooterSelectorPlaceholderCell({
  shadowVisible,
}: DataTableFooterSelectorPlaceholderCellProps) {
  return (
    <TableTh
      className={classes["mantine-datatable-footer-selector-placeholder-cell"]}
      data-shadow-visible={shadowVisible || undefined}
    />
  );
}
