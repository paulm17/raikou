import React from "react";
import { Button } from "../../components/Button/src";
import { Group } from "../../components/Group/src";
import { Menu } from "../../components/Menu/src";
import { Text } from "../../components/Text/src";
import { RaikouSize, useRaikouTheme } from "@raikou/core";

type DataTablePageSizeSelectorComponentProps = {
  size: RaikouSize;
  label: string;
  values: number[];
  value: number;
  onChange: (value: number) => void;
  color?: any;
};

const HEIGHT: Record<RaikouSize, number> = {
  xs: 22,
  sm: 26,
  md: 32,
  lg: 38,
  xl: 44,
};

export default function DataTablePageSizeSelector({
  size,
  label,
  values,
  value,
  onChange,
  color,
}: DataTablePageSizeSelectorComponentProps) {
  const theme = useRaikouTheme();
  return (
    <Group gap="xs">
      <Text size={size}>{label}</Text>
      <Menu withinPortal withArrow>
        <Menu.Target>
          <Button
            size={size}
            variant="default"
            style={[
              { fontWeight: "normal" },
              {
                height: HEIGHT[size],
                paddingLeft: theme.spacing[size],
                paddingRight: theme.spacing[size],
              },
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
                  {
                    color: isCurrent ? theme.white : undefined,
                    background: isCurrent
                      ? theme.colors[color || theme.primaryColor][6]
                      : undefined,
                  },
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
}
