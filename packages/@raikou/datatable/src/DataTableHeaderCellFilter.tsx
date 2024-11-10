import { ActionIcon, Popover, PopoverDropdown, PopoverTarget } from '@raikou/core';
import { useDisclosure } from '@raikou/hooks';
import { IconFilter } from './icons/IconFilter';
import { IconFilterFilled } from './icons/IconFilterFilled';
import type { DataTableColumn } from './types';
import { dataTableHeaderCellFilterActionIconStyle } from './DataTableHeaderCellFilter.css';

type DataTableHeaderCellFilterProps<T> = {
  children: DataTableColumn<T>['filter'];
  isActive: boolean;
};

export function DataTableHeaderCellFilter<T>({
  children,
  isActive,
}: DataTableHeaderCellFilterProps<T>) {
  const [isOpen, { close, toggle }] = useDisclosure(false);
  const Icon = isActive ? IconFilterFilled : IconFilter;

  return (
    <Popover withArrow withinPortal shadow="md" opened={isOpen} onClose={close} trapFocus>
      <PopoverTarget>
        <ActionIcon
          className={dataTableHeaderCellFilterActionIconStyle}
          data-active={isActive || undefined}
          size="sm"
          variant="default"
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          <Icon />
        </ActionIcon>
      </PopoverTarget>
      <PopoverDropdown onClick={(e) => e.stopPropagation()}>
        {typeof children === 'function' ? children({ close }) : children}
      </PopoverDropdown>
    </Popover>
  );
}
