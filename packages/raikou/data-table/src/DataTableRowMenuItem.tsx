import React from "react";
import { Box } from "../../components/Box/src";
import { Text } from "../../components/Text/src";
import { UnstyledButton } from "../../components/UnstyledButton/src";
import type { ReactNode } from "react";

type DataTableRowMenuItemProps = {
  icon?: ReactNode;
  title: ReactNode;
  color?: any;
  disabled?: boolean;
  onClick: () => void;
};

export default function DataTableRowMenuItem({
  icon,
  title,
  color,
  disabled,
  onClick,
}: DataTableRowMenuItemProps) {
  return (
    <UnstyledButton
      className="dataTableRowMenuItem-root"
      disabled={disabled}
      onClick={onClick}
      style={{ color: color }}
    >
      {icon && <Box className="dataTableRowMenuItem-icon">{icon}</Box>}
      <Text className="dataTableRowMenuItem-title" size="sm">
        {title}
      </Text>
    </UnstyledButton>
  );
}
