import React from "react";
import { Center } from "../../components/Center/src";
import { Text } from "../../components/Text/src";
import { IconDatabaseOff } from "@tabler/icons-react";
import type { ReactNode } from "react";
import cx from "clsx";

type DataTableEmptyStateProps = {
  icon: ReactNode | undefined;
  text: string;
  pt: number;
  pb: number;
  active: boolean;
  children: ReactNode | undefined;
};

export default function DataTableEmptyState({
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
      className={cx("dataTableEmptyState-root", {
        ["dataTableEmptyState-active"]: active,
      })}
    >
      {/* @ts-ignore */}
      {children || (
        <>
          {icon || (
            <div className={"dataTableEmptyState-standardIcon"}>
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
}
