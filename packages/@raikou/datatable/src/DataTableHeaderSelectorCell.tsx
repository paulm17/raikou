import { forwardRef } from 'react';
import clsx from 'clsx';
import { Checkbox, RaikouStyleProp, TableTh, type CheckboxProps } from '@raikou/core';
import type { DataTableSelectionTrigger } from './types';
import { POINTER_CURSOR } from './utilityClasses';
import { dataTableHeaderSelectorCellStyle } from './DataTableHeaderSelectorCell.css';

type DataTableHeaderSelectorCellProps = {
  className: string | undefined;
  style: RaikouStyleProp | undefined;
  trigger: DataTableSelectionTrigger;
  shadowVisible: boolean;
  checked: boolean;
  indeterminate: boolean;
  checkboxProps: CheckboxProps;
  onChange: (() => void) | undefined;
  rowSpan: number | undefined;
};
// eslint-disable-next-line
export const DataTableHeaderSelectorCell = forwardRef(function DataTableHeaderSelectorCell(
  {
    className,
    style,
    trigger,
    shadowVisible,
    checked,
    indeterminate,
    checkboxProps,
    onChange,
    rowSpan,
  }: DataTableHeaderSelectorCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  const enabled = !checkboxProps.disabled;

  return (
    <TableTh
      ref={ref}
      className={clsx(
        dataTableHeaderSelectorCellStyle,
        { [POINTER_CURSOR]: trigger === 'cell' && enabled },
        className
      )}
      style={style}
      rowSpan={rowSpan}
      data-shadow-visible={shadowVisible || undefined}
      onClick={trigger === 'cell' && enabled ? onChange : undefined}
    >
      <Checkbox
        classNames={enabled ? { input: POINTER_CURSOR } : undefined}
        checked={checked}
        indeterminate={indeterminate}
        onChange={onChange}
        {...checkboxProps}
        disabled={!(onChange || checkboxProps.onChange) || checkboxProps.disabled}
      />
    </TableTh>
  );
});
