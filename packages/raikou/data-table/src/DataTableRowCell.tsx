import React, { MouseEventHandler, ReactNode } from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  useStyles,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import { getValueAtPath, useMediaQueryStringOrFunction } from "./utils";
import type { DataTableColumn } from "./types";
import cx from "clsx";

export type DataTableRowCellStylesNames = "root";

type Tablecolumn = Pick<
  DataTableColumn,
  | "accessor"
  | "visibleMediaQuery"
  | "textAlignment"
  | "width"
  | "noWrap"
  | "ellipsis"
  | "render"
  | "customCellAttributes"
>;

export interface DataTableRowCellProps
  extends BoxProps,
    StylesApiProps<DataTableRowCellFactory>,
    Tablecolumn {
  record: any;
  recordIndex: number;
  defaultRender:
    | ((record: any, index: number, accessor: string) => ReactNode)
    | undefined;
  onClick?: MouseEventHandler<HTMLTableCellElement>;
}

export type DataTableRowCellFactory = Factory<{
  props: DataTableRowCellProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableRowCellStylesNames;
}>;

const defaultProps: Partial<DataTableRowCellProps> = {};

export const DataTableRowCell = factory<DataTableRowCellFactory>((_props) => {
  const props = useProps("DataTableRowCell", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    visibleMediaQuery,
    record,
    recordIndex,
    onClick,
    noWrap,
    ellipsis,
    textAlignment,
    width,
    accessor,
    render,
    defaultRender,
    customCellAttributes,
    ...others
  } = props;

  const getStyles = useStyles<DataTableRowCellFactory>({
    name: "DataTableRowCell",
    props,
    classes: {
      root: "",
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: undefined,
  });

  if (!useMediaQueryStringOrFunction(visibleMediaQuery)) return null;
  return (
    <Box
      component="td"
      {...getStyles("root", {
        className: cx({
          ["dataTableRowCell-noWrap"]: noWrap || ellipsis,
          ["dataTableRowCell-ellipsis"]: ellipsis,
          ["dataTableRowCell-withPointerCursor"]: onClick,
        }),
      })}
      style={[
        {
          ...style,
          width,
          minWidth: width,
          maxWidth: width,
          textAlign: textAlignment,
        },
      ]}
      onClick={onClick}
      {...customCellAttributes?.(record, recordIndex)}
      {...others}
    >
      {render
        ? render(record, recordIndex)
        : defaultRender
        ? defaultRender(record, recordIndex, accessor)
        : (getValueAtPath(record, accessor) as ReactNode)}
    </Box>
  );
});

DataTableRowCell.displayName = "@raikou/DataTableRowCell";
