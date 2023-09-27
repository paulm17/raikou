import React from "react";
import { RaikouSize } from "@raikou/core";
import { Center } from "../../components/Center/src";
import { Loader } from "../../components/Loader/src";
import cx from "clsx";
import type { ReactNode } from "react";

type DataTableLoaderProps = {
  pt: number;
  pb: number;
  fetching: boolean | undefined;
  customContent: ReactNode | undefined;
  backgroundBlur: number | undefined;
  size: RaikouSize | undefined;
  variant: any | undefined;
  color: any | undefined;
};

export default function DataTableLoader({
  pt,
  pb,
  fetching,
  customContent,
  backgroundBlur,
  size,
  variant,
  color,
}: DataTableLoaderProps) {
  return (
    <Center
      pt={pt}
      pb={pb}
      className={cx("dataTableLoader-root", {
        ["dataTableLoader-fetching"]: fetching,
      })}
      style={
        backgroundBlur
          ? { backdropFilter: `blur(${backgroundBlur}px)` }
          : undefined
      }
    >
      {fetching &&
        (customContent || <Loader size={size} type={variant} color={color} />)}
    </Center>
  );
}
