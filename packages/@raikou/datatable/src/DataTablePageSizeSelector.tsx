import clsx from 'clsx';
import {
  Button,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  RaikouColor,
  rem,
  Text,
  type RaikouSize,
} from '@raikou/core';
import { getPaginationCssVariables } from './cssVariables';
import { IconSelector } from './icons/IconSelector';
import {
  dataTablePageSizeSelectorActiveStyle,
  dataTablePageSizeSelectorButtonIconStyle,
  dataTablePageSizeSelectorMenuArrowStyle,
} from './DataTablePageSizeSelector.css';

type DataTablePageSizeSelectorComponentProps = {
  size: RaikouSize;
  label: string;
  values: number[];
  value: number;
  activeTextColor: RaikouColor | { dark: RaikouColor; light: RaikouColor } | undefined;
  activeBackgroundColor: RaikouColor | { dark: RaikouColor; light: RaikouColor } | undefined;
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
      <Text component="div" size={size}>
        {label}
      </Text>
      <Menu
        withinPortal
        withArrow
        classNames={{
          arrow: dataTablePageSizeSelectorMenuArrowStyle,
        }}
      >
        <MenuTarget>
          <Button
            size={size}
            variant="default"
            classNames={{
              section: dataTablePageSizeSelectorButtonIconStyle,
            }}
            rightSection={<IconSelector />}
            style={[
              { fontWeight: 'normal' },
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
                  [dataTablePageSizeSelectorActiveStyle]: isCurrent,
                })}
                style={[
                  { height: HEIGHT[size] },
                  isCurrent && (activeTextColor || activeBackgroundColor)
                    ? (theme) =>
                        getPaginationCssVariables({
                          theme,
                          paginationActiveTextColor: activeTextColor,
                          paginationActiveBackgroundColor: activeBackgroundColor,
                        })
                    : undefined,
                ]}
                disabled={isCurrent}
                onClick={() => onChange(v)}
              >
                <Text component="div" size={size}>
                  {v}
                </Text>
              </MenuItem>
            );
          })}
        </MenuDropdown>
      </Menu>
    </Group>
  );
}
