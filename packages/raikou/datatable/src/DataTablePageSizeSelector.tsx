import React from "react";
import { RaikouColor, rem, type RaikouSize } from "@raikou/core";
import { Button } from "../../components/Button/src";
import { Group } from "../../components/Group/src";
import {
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from "../../components/Menu/src";
import { Text } from "../../components/Text/src";
import clsx from "clsx";
import { getPaginationCssVariables } from "./cssVariables";
import { IconSelector } from "./icons/IconSelector";
import classes from "./DataTablePageSizeSelector.module.css";

type DataTablePageSizeSelectorComponentProps = {
  size: RaikouSize;
  label: string;
  values: number[];
  value: number;
  activeTextColor:
    | RaikouColor
    | { dark: RaikouColor; light: RaikouColor }
    | undefined;
  activeBackgroundColor:
    | RaikouColor
    | { dark: RaikouColor; light: RaikouColor }
    | undefined;
  onChange: (value: number) => void;
};

const HEIGHT: Record<RaikouSize, string> = {
  xs: rem(22),
  sm: rem(26),
  md: rem(32),
  lg: rem(38),
  xl: rem(44),
};

export function DataTablePageSizeSelector({
  size,
  label,
  values,
  value,
  activeTextColor,
  activeBackgroundColor,
  onChange,
}: DataTablePageSizeSelectorComponentProps) {
  return (
    <Group gap="xs">
      <Text size={size}>{label}</Text>
      <Menu withinPortal withArrow>
        <MenuTarget>
          <Button
            size={size}
            variant="default"
            classNames={{
              section:
                classes["mantine-datatable-page-size-selector-button-icon"],
            }}
            rightSection={<IconSelector />}
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
        </MenuTarget>
        <MenuDropdown>
          {values.map((v) => {
            const isCurrent = v === value;
            return (
              <MenuItem
                key={v}
                className={clsx({
                  "mantine-datatable-page-size-selector-active": isCurrent,
                })}
                style={[
                  { height: HEIGHT[size] },
                  isCurrent && (activeTextColor || activeBackgroundColor)
                    ? (theme) =>
                        getPaginationCssVariables({
                          theme,
                          paginationActiveTextColor: activeTextColor,
                          paginationActiveBackgroundColor:
                            activeBackgroundColor,
                        })
                    : undefined,
                ]}
                disabled={isCurrent}
                onClick={() => onChange(v)}
              >
                <Text size={size}>{v}</Text>
              </MenuItem>
            );
          })}
        </MenuDropdown>
      </Menu>
    </Group>
  );
}
