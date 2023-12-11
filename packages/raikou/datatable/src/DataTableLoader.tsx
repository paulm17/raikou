import React from "react";
import { type RaikouColor, type RaikouSize } from "@raikou/core";
import clsx from "clsx";
import { Center } from "../../components/Center/src";
import { Loader, type RaikouLoader } from "../../components/Loader/src";
import classes from "./DataTableLoader.module.css";

type DataTableLoaderProps = {
  pt?: number;
  pb: number;
  fetching: boolean | undefined;
  customContent: React.ReactNode | undefined;
  backgroundBlur: number | undefined;
  size: RaikouSize | (string & NonNullable<unknown>) | number | undefined;
  type: RaikouLoader | undefined;
  color: RaikouColor | undefined;
};

export function DataTableLoader({
  pt,
  pb,
  fetching,
  customContent,
  backgroundBlur,
  size,
  type,
  color,
}: DataTableLoaderProps) {
  return (
    <Center
      pt={pt}
      pb={pb}
      className={clsx(classes["mantine-datatable-loader"], {
        "mantine-datatable-loader-fetching": fetching,
      })}
      style={[
        {
          backdropFilter: backgroundBlur
            ? `blur(${backgroundBlur}px)`
            : undefined,
        },
      ]}
    >
      {fetching &&
        (customContent || <Loader size={size} type={type} color={color} />)}
    </Center>
  );
}
