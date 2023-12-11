import React from "react";
import { Checkbox, type CheckboxProps } from "../../components/Checkbox/src";
import { TableTd } from "../../components/Table/src";
import clsx from "clsx";
import type { DataTableSelectionTrigger } from "./types";
import { POINTER_CURSOR } from "./utilityClasses";
import classes from "./DataTableRowSelectorCell.module.css";

type DataTableRowSelectorCellProps<T> = {
  record: T;
  index: number;
  trigger: DataTableSelectionTrigger;
  withRightShadow: boolean;
  checked: boolean;
  disabled: boolean;
  onChange: React.MouseEventHandler | undefined;
  getCheckboxProps: (record: T, index: number) => CheckboxProps;
};

export function DataTableRowSelectorCell<T>({
  record,
  index,
  trigger,
  onChange,
  withRightShadow,
  getCheckboxProps,
  ...otherProps
}: DataTableRowSelectorCellProps<T>) {
  const checkboxProps = getCheckboxProps(record, index);
  const enabled = !otherProps.disabled && !checkboxProps.disabled;

  const handleClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    if (trigger === "cell" && enabled) {
      onChange?.(e);
    }
  };

  return (
    <TableTd
      className={clsx(classes["mantine-datatable-row-selector-cell"], {
        [POINTER_CURSOR]: trigger === "cell" && enabled,
      })}
      data-shadow-visible={withRightShadow || undefined}
      onClick={handleClick}
    >
      <Checkbox
        classNames={enabled ? { input: POINTER_CURSOR } : undefined}
        onChange={onChange as unknown as React.ChangeEventHandler}
        {...otherProps}
        {...checkboxProps}
      />
    </TableTd>
  );
}
