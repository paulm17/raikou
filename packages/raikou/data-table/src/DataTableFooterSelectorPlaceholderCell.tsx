import React from "react";
import clsx from "clsx";

export default function DataTableFooterSelectorPlaceholderCell({
  shadowVisible,
}: {
  shadowVisible: boolean;
}) {
  return (
    <th
      className={clsx("dataTableFooterSelectorPlaceholderCell-root", {
        ["dataTableFooterSelectorPlaceholderCell-shadowVisible"]: shadowVisible,
      })}
    ></th>
  );
}
