import React from "react";
import { Checkbox } from "../../components/Checkbox/src";
import type { ChangeEventHandler } from "react";
import cx from "clsx";

type DataTableRowSelectorCellProps<T> = {
  record: T;
  recordIndex: number;
  withRightShadow: boolean;
  checked: boolean;
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  getCheckboxProps: (record: T, recordIndex: number) => Record<string, unknown>;
};

export default function DataTableRowSelectorCell<T>({
  record,
  recordIndex,
  withRightShadow,
  getCheckboxProps,
  ...otherProps
}: DataTableRowSelectorCellProps<T>) {
  return (
    <td
      className={cx("dataTableRowSelectorCell-root", {
        ["dataTableRowSelectorCell-withRightShadow"]: withRightShadow,
      })}
      onClick={(e) => e.stopPropagation()}
    >
      <Checkbox
        classNames={{ input: "dataTableRowSelectorCell-checkbox" }}
        {...otherProps}
        {...getCheckboxProps(record, recordIndex)}
      />
    </td>
  );
}
