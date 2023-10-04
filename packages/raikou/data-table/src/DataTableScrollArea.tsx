import React, { ReactNode, Ref } from "react";
import {
  Box,
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
} from "@raikou/core";
import { ScrollArea, ScrollAreaProps } from "../../components/ScrollArea/src";
import cx from "clsx";

export type DataTableScrollAreaStylesNames =
  | "root"
  | "scrollbar"
  | "corner"
  | "thumb"
  | "shadow"
  | "topShadow"
  | "leftShadow"
  | "rightShadow"
  | "bottomShadow"
  | "shadowVisible";

export type DataTableScrollAreaCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableScrollAreaProps
  extends BoxProps,
    StylesApiProps<DataTableScrollAreaFactory> {
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
}

export type DataTableScrollAreaFactory = Factory<{
  props: DataTableScrollAreaProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableScrollAreaStylesNames;
  vars: DataTableScrollAreaCssVariables;
}>;

const defaultProps: Partial<DataTableScrollAreaProps> = {};

export const DataTableScrollArea = factory<DataTableScrollAreaFactory>(
  (_props, ref) => {
    const props = useProps("DataTableScrollArea", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      topShadowVisible,
      leftShadowVisible,
      rightShadowVisible,
      bottomShadowVisible,
      headerHeight,
      footerHeight,
      onScrollPositionChange,
      viewportRef,
      scrollAreaProps,
      children,
      ...others
    } = props;

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
        styles={{
          scrollbar: { marginTop: headerHeight, marginBottom: bottom },
        }}
        onScrollPositionChange={onScrollPositionChange}
        {...others}
      >
        {children}
        <Box
          className={cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-topShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: topShadowVisible,
            },
          )}
          style={{ top: headerHeight }}
        />
        <div
          className={cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-leftShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: leftShadowVisible,
            },
          )}
        />
        <div
          className={cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-rightShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: rightShadowVisible,
            },
          )}
        />
        <Box
          className={cx(
            "dataTableScrollArea-shadow",
            "dataTableScrollArea-bottomShadow",
            {
              ["dataTableScrollArea-shadowVisible"]: bottomShadowVisible,
            },
          )}
          style={{ bottom }}
        />
      </ScrollArea>
    );
  },
);

DataTableScrollArea.displayName = "@raikou/DataTableScrollArea";
