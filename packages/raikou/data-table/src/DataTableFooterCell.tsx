import React from "react";
import { Box, RaikouTheme } from "@raikou/core";
import type { CSSProperties, ReactNode } from "react";
import type { DataTableColumn } from "./types";
import { useMediaQueryStringOrFunction } from "./utils";
import clsx from "clsx";

type DataTableFooterCellProps<T> = {
  className?: string;
  style?: CSSProperties;
  visibleMediaQuery: string | ((theme: RaikouTheme) => string) | undefined;
  title: ReactNode | undefined;
} & Pick<DataTableColumn<T>, "noWrap" | "ellipsis" | "textAlignment" | "width">;

export default function DataTableFooterCell<T>({
  className,
  style,
  visibleMediaQuery,
  title,
  noWrap,
  ellipsis,
  textAlignment,
  width,
}: DataTableFooterCellProps<T>) {
  if (!useMediaQueryStringOrFunction(visibleMediaQuery)) return null;
  return (
    <Box
      component="th"
      className={clsx(
        {
          ["dataTableFooterCell-noWrap"]: noWrap || ellipsis,
          ["dataTableFooterCell-ellipsis"]: ellipsis,
        },
        className,
      )}
      style={[
        {
          textAlign: textAlignment,
          width,
          minWidth: width,
          maxWidth: width,
        },
        style,
      ]}
    >
      {title}
    </Box>
  );
}
