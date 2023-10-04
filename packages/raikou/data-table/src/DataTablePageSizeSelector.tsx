import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  RaikouSize,
} from "@raikou/core";
import { Button } from "../../components/Button/src";
import { Group } from "../../components/Group/src";
import { Menu } from "../../components/Menu/src";
import { Text } from "../../components/Text/src";

export type DataTablePageSizeSelectorStylesNames =
  | "root"
  | "active"
  | "standardIcon";

export type DataTablePageSizeSelectorCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTablePageSizeSelectorProps
  extends BoxProps,
    StylesApiProps<DataTablePageSizeSelectorFactory> {
  size: RaikouSize;
  label: string;
  values: number[];
  value: number;
  onChange: (value: number) => void;
  color?: any;
}

export type DataTablePageSizeSelectorFactory = Factory<{
  props: DataTablePageSizeSelectorProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTablePageSizeSelectorStylesNames;
  vars: DataTablePageSizeSelectorCssVariables;
}>;

const defaultProps: Partial<DataTablePageSizeSelectorProps> = {};

const HEIGHT: Record<RaikouSize, number> = {
  xs: 22,
  sm: 26,
  md: 32,
  lg: 38,
  xl: 44,
};

export const DataTablePageSizeSelector =
  factory<DataTablePageSizeSelectorFactory>((_props, ref) => {
    const props = useProps("DataTablePageSizeSelector", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size,
      label,
      values,
      value,
      onChange,
      color,
      ...others
    } = props;

    return (
      <Group gap="xs" {...others}>
        <Text size={size}>{label}</Text>
        <Menu withinPortal withArrow>
          <Menu.Target>
            <Button
              size={size}
              variant="default"
              style={[
                { fontWeight: "normal" },
                (theme) => ({
                  height: HEIGHT[size],
                  paddingLeft: theme.spacing[size],
                  paddingRight: theme.spacing[size],
                }),
              ]}
            >
              {value}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {values.map((v) => {
              const isCurrent = v === value;
              return (
                <Menu.Item
                  key={v}
                  style={[
                    { height: HEIGHT[size] },
                    (theme) => ({
                      "&&": {
                        color: isCurrent ? theme.white : undefined,
                      },
                      background: isCurrent
                        ? theme.colors[color || theme.primaryColor][6]
                        : undefined,
                    }),
                  ]}
                  disabled={isCurrent}
                  onClick={() => onChange(v)}
                >
                  <Text size={size}>{v}</Text>
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </Group>
    );
  });

DataTablePageSizeSelector.displayName = "@raikou/DataTablePageSizeSelector";
