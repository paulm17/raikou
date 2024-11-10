import clsx from 'clsx';
import { Checkbox, RaikouStyleProp, TableTd, type CheckboxProps } from '@raikou/core';
import type { DataTableSelectionTrigger } from './types';
import { POINTER_CURSOR } from './utilityClasses';
import { dataTableRowSelectorCellStyle } from './DataTableRowSelectorCell.css';

type DataTableRowSelectorCellProps<T> = {
  className: string | undefined;
  style: RaikouStyleProp | undefined;
  record: T;
  index: number;
  trigger: DataTableSelectionTrigger;
  withRightShadow: boolean;
  checked: boolean;
  disabled: boolean;
  onChange: React.MouseEventHandler | undefined;
  checkboxProps: CheckboxProps | undefined;
  getCheckboxProps: (record: T, index: number) => CheckboxProps;
};

export function DataTableRowSelectorCell<T>({
  className,
  style,
  record,
  index,
  trigger,
  onChange,
  withRightShadow,
  checkboxProps,
  getCheckboxProps,
  ...otherProps
}: Readonly<DataTableRowSelectorCellProps<T>>) {
  const allCheckboxProps = {
    ...checkboxProps,
    ...getCheckboxProps(record, index),
  };
  const enabled = !otherProps.disabled && !allCheckboxProps.disabled;

  const handleClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    if (trigger === 'cell' && enabled) {
      onChange?.(e);
    }
  };

  return (
    <TableTd
      className={clsx(
        dataTableRowSelectorCellStyle,
        { [POINTER_CURSOR]: trigger === 'cell' && enabled },
        className
      )}
      style={style}
      data-shadow-visible={withRightShadow || undefined}
      onClick={handleClick}
    >
      <Checkbox
        classNames={enabled ? { input: POINTER_CURSOR } : undefined}
        onChange={onChange as unknown as React.ChangeEventHandler}
        {...otherProps}
        {...allCheckboxProps}
      />
    </TableTd>
  );
}
