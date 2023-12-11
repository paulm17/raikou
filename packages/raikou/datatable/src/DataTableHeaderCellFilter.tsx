import React from "react";
import { ActionIcon } from "../../components/ActionIcon/src";
import { Popover, PopoverTarget } from "../../components/Popover/src";
import { useDisclosure } from "@raikou/hooks";
import { IconFilter } from "./icons/IconFilter";
import { IconFilterFilled } from "./icons/IconFilterFilled";
import type { DataTableColumn } from "./types";
import classes from "./DataTableHeaderCellFilter.module.css";

type DataTableHeaderCellFilterProps<T> = {
  children: DataTableColumn<T>["filter"];
  isActive: boolean;
};

export function DataTableHeaderCellFilter<T>({
  children,
  isActive,
}: DataTableHeaderCellFilterProps<T>) {
  const [isOpen, { close, toggle }] = useDisclosure(false);
  const Icon = isActive ? IconFilterFilled : IconFilter;

  return (
    <Popover
      withArrow
      withinPortal
      shadow="md"
      opened={isOpen}
      onClose={close}
      trapFocus
    >
      <PopoverTarget>
        <ActionIcon
          className={
            classes["mantine-datatable-header-cell-filter-action-icon"]
          }
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
      <Popover.Dropdown onClick={(e) => e.preventDefault()}>
        {typeof children === "function" ? children({ close }) : children}
      </Popover.Dropdown>
    </Popover>
  );
}
