import React from "react";

import { type RaikouSpacing, type StyleProp } from "@raikou/core";
import { Center } from "../../components/Center/src";
import { Text } from "../../components/Text/src";
import { IconDatabaseOff } from "./icons/IconDatabaseOff";
import classes from "./DataTableEmptyState.module.css";

type DataTableEmptyStateProps = React.PropsWithChildren<{
  icon: React.ReactNode | undefined;
  text: string;
  pt: StyleProp<RaikouSpacing>;
  pb: StyleProp<RaikouSpacing>;
  active: boolean;
}>;

export function DataTableEmptyState({
  icon,
  text,
  pt,
  pb,
  active,
  children,
}: DataTableEmptyStateProps) {
  return (
    <Center
      pt={pt}
      pb={pb}
      className={classes["mantine-datatable-empty-state"]}
      data-active={active || undefined}
    >
      {children || (
        <>
          {icon || (
            <div className={classes["mantine-datatable-empty-state-icon"]}>
              <IconDatabaseOff />
            </div>
          )}
          <Text size="sm" c="dimmed">
            {text}
          </Text>
        </>
      )}
    </Center>
  );
}
