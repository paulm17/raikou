import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { useDisclosure } from "@raikou/hooks";
import { ActionIcon } from "../../components/ActionIcon/src";
import { Popover } from "../../components/Popover/src";
import { IconFilter } from "@tabler/icons-react";
import { DataTableColumn } from "./types";

export type DataTableHeaderCellFilterStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTableHeaderCellFilterCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableHeaderCellFilterProps
  extends BoxProps,
    StylesApiProps<DataTableHeaderCellFilterFactory> {
  children: DataTableColumn["filter"];
  isActive: boolean;
}

export type DataTableHeaderCellFilterFactory = Factory<{
  props: DataTableHeaderCellFilterProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableHeaderCellFilterStylesNames;
  vars: DataTableHeaderCellFilterCssVariables;
}>;

const defaultProps: Partial<DataTableHeaderCellFilterProps> = {};

export const DataTableHeaderCellFilter =
  factory<DataTableHeaderCellFilterFactory>((_props, ref) => {
    const [isOpen, { close, toggle }] = useDisclosure(false);
    const props = useProps("DataTableHeaderCellFilter", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      isActive,
      children,
      ...others
    } = props;

    return (
      <Popover
        withArrow
        withinPortal
        shadow="md"
        opened={isOpen}
        onClose={close}
        trapFocus
        {...others}
      >
        <Popover.Target>
          <ActionIcon
            onClick={(e) => {
              e.preventDefault();
              toggle();
            }}
            variant={isActive ? "default" : "subtle"}
          >
            <IconFilter size={14} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown onClick={(e) => e.preventDefault()}>
          {typeof children === "function" ? children({ close }) : children}
        </Popover.Dropdown>
      </Popover>
    );
  });

DataTableHeaderCellFilter.displayName = "@raikou/DataTableHeaderCellFilter";
