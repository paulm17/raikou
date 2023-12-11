import React from "react";
import classes from "./DataTableEmptyRow.module.css";

export function DataTableEmptyRow() {
  return (
    <tr className={classes["mantine-datatable-empty-row"]}>
      <td />
    </tr>
  );
}
