import React from "react";
import { Box, rem } from "@raikou/core";
import {
  ScrollArea,
  type ScrollAreaProps,
} from "../../components/ScrollArea/src";
import clsx from "clsx";
import classes from "./DataTableScrollArea.module.css";

type DataTableScrollAreaProps = React.PropsWithChildren<{
  topShadowVisible: boolean;
  leftShadowVisible: boolean;
  leftShadowBehind: boolean;
  rightShadowVisible: boolean;
  rightShadowBehind: boolean | undefined;
  bottomShadowVisible: boolean;
  headerHeight: number;
  footerHeight: number;
  onScrollPositionChange: ScrollAreaProps["onScrollPositionChange"];
  viewportRef: React.Ref<HTMLDivElement>;
  scrollAreaProps:
    | Omit<ScrollAreaProps, "classNames" | "styles" | "onScrollPositionChange">
    | undefined;
}>;

export function DataTableScrollArea({
  topShadowVisible,
  leftShadowVisible,
  leftShadowBehind,
  rightShadowVisible,
  rightShadowBehind,
  bottomShadowVisible,
  headerHeight,
  footerHeight,
  onScrollPositionChange,
  children,
  viewportRef,
  scrollAreaProps,
}: DataTableScrollAreaProps) {
  return (
    <ScrollArea
      {...scrollAreaProps}
      viewportRef={viewportRef}
      classNames={{
        root: classes["mantine-datatable-scroll-area"],
        scrollbar: classes["mantine-datatable-scroll-area-scrollbar"],
        thumb: classes["mantine-datatable-scroll-area-thumb"],
        corner: classes["mantine-datatable-scroll-area-corner"],
      }}
      onScrollPositionChange={onScrollPositionChange}
    >
      {children}
      <Box
        className={clsx(
          classes["mantine-datatable-scroll-area-shadow"],
          classes["mantine-datatable-scroll-area-top-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": topShadowVisible,
          },
        )}
        style={{ top: headerHeight ? rem(headerHeight) : 0 }}
      />
      <div
        className={clsx(
          classes["mantine-datatable-scroll-area-shadow"],
          classes["mantine-datatable-scroll-area-left-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": leftShadowVisible,
            "mantine-datatable-scroll-area-shadow-behind": leftShadowBehind,
          },
        )}
      />
      <div
        className={clsx(
          classes["mantine-datatable-scroll-area-shadow"],
          classes["mantine-datatable-scroll-area-right-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": rightShadowVisible,
            "mantine-datatable-scroll-area-shadow-behind": rightShadowBehind,
          },
        )}
      />
      <Box
        className={clsx(
          classes["mantine-datatable-scroll-area-shadow"],
          classes["mantine-datatable-scroll-area-bottom-shadow"],
          {
            "mantine-datatable-scroll-area-shadow-visible": bottomShadowVisible,
          },
        )}
        style={{ bottom: footerHeight ? rem(footerHeight + 1) : 0 }}
      />
    </ScrollArea>
  );
}
