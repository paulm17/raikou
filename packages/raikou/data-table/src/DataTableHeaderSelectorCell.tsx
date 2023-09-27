import React from "react";
import cx from "clsx";
import { Checkbox } from "../../components/Checkbox/src";

type DataTableHeaderSelectorCellProps = {
  shadowVisible: boolean;
  checked: boolean;
  indeterminate: boolean;
  checkboxProps: Record<string, unknown>;
  onChange: (() => void) | undefined;
  rowSpan: number | undefined;
};

export default function DataTableHeaderSelectorCell({
  shadowVisible,
  checked,
  indeterminate,
  checkboxProps,
  onChange,
  rowSpan,
}: DataTableHeaderSelectorCellProps) {
  return (
    <th
      className={cx("dataTableHeaderSelectorCell-root", {
        ["dataTableHeaderSelectorCell-shadowVisible"]: shadowVisible,
      })}
      rowSpan={rowSpan}
    >
      <Checkbox
        classNames={{ input: "dataTableHeaderSelectorCell-checkboxInput" }}
        checked={checked}
        indeterminate={indeterminate}
        disabled={!onChange}
        onChange={onChange}
        {...checkboxProps}
      />
    </th>
  );
}
