import React, { ReactNode, Ref } from "react";
import { Box } from "../../components/Box/src";
import { ScrollArea, ScrollAreaProps } from "../../components/ScrollArea/src";
import cx from "clsx";

type DataTableScrollAreaProps = {
  topShadowVisible: boolean;
  leftShadowVisible: boolean;
  rightShadowVisible: boolean;
  bottomShadowVisible: boolean;
  headerHeight: number;
  footerHeight: number;
  onScrollPositionChange: () => void;
  viewportRef: Ref<HTMLDivElement>;
  scrollAreaProps?: Omit<
    ScrollAreaProps,
    "classNames" | "styles" | "onScrollPositionChange"
  >;
  children: ReactNode;
};

export default function DataTableScrollArea({
  topShadowVisible,
  leftShadowVisible,
  rightShadowVisible,
  bottomShadowVisible,
  headerHeight,
  footerHeight,
  onScrollPositionChange,
  children,
  viewportRef,
  scrollAreaProps,
}: DataTableScrollAreaProps) {
  const bottom = footerHeight ? footerHeight - 1 : 0;
  return (
    <ScrollArea
      {...scrollAreaProps}
      viewportRef={viewportRef}
      classNames={{
        root: "dataTableScrollArea-root",
        scrollbar: "dataTableScrollArea-scrollbar",
        thumb: "dataTableScrollArea-thumb",
        corner: "dataTableScrollArea-corner",
      }}
      styles={{ scrollbar: { marginTop: headerHeight, marginBottom: bottom } }}
      onScrollPositionChange={onScrollPositionChange}
    >
      {children}
      <Box
        className={cx(
          "dataTableScrollArea-shadow",
          "dataTableScrollArea-topShadow",
          { ["dataTableScrollArea-shadowVisible"]: topShadowVisible },
        )}
        style={{ top: headerHeight }}
      />
      <div
        className={cx(
          "dataTableScrollArea-shadow",
          "dataTableScrollArea-leftShadow",
          { ["dataTableScrollArea-shadowVisible"]: leftShadowVisible },
        )}
      />
      <div
        className={cx(
          "dataTableScrollArea-shadow",
          "dataTableScrollArea-rightShadow",
          { ["dataTableScrollArea-shadowVisible"]: rightShadowVisible },
        )}
      />
      <Box
        className={cx(
          "dataTableScrollArea-shadow",
          "dataTableScrollArea-bottomShadow",
          { ["dataTableScrollArea-shadowVisible"]: bottomShadowVisible },
        )}
        style={{ bottom }}
      />
    </ScrollArea>
  );
}
