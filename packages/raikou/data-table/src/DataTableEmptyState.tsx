import React, { ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { Center } from "../../components/Center/src";
import { Text } from "../../components/Text/src";
import cx from "clsx";
import { IconDatabaseOff } from "@tabler/icons-react";

export type DataTableEmptyStateStylesNames = "root" | "active" | "standardIcon";

export type DataTableEmptyStateCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableEmptyStateProps
  extends BoxProps,
    StylesApiProps<DataTableEmptyStateFactory> {
  icon: ReactNode | undefined;
  text: string;
  active: boolean;
  children: ReactNode;
}

export type DataTableEmptyStateFactory = Factory<{
  props: DataTableEmptyStateProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableEmptyStateStylesNames;
  vars: DataTableEmptyStateCssVariables;
}>;

const defaultProps: Partial<DataTableEmptyStateProps> = {};

export const DataTableEmptyState = factory<DataTableEmptyStateFactory>(
  (_props, ref) => {
    const props = useProps("DataTableEmptyState", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      icon,
      text,
      active,
      children,
      ...others
    } = props;

    return (
      <Center
        className={cx("dataTableEmptyState-root", {
          ["dataTableEmptyState-active"]: active,
        })}
        {...others}
      >
        {children || (
          <>
            {icon || (
              <div className="dataTableEmptyState-standardIcon">
                <IconDatabaseOff />
              </div>
            )}
            <Text size="sm" color="dimmed">
              {text}
            </Text>
          </>
        )}
      </Center>
    );
  },
);

DataTableEmptyState.displayName = "@raikou/DataTableEmptyState";
