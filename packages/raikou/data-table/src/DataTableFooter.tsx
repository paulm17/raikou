import React from "react";
import {
  factory,
  useProps,
  Factory,
  BoxProps,
  StylesApiProps,
  CSSProperties,
  RaikouTheme,
} from "@raikou/core";
import { Box } from "../../components/Box/src";
import cx from "clsx";
import { DataTableColumn, DataTableDefaultColumnProps } from "./types";
import { DataTableFooterCell } from "./DataTableFooterCell";
import { DataTableFooterSelectorPlaceholderCell } from "./DataTableFooterSelectorPlaceholderCell";

export type DataTableFooterStylesNames = "root" | "active" | "standardIcon";

export type DataTableFooterCssVariables = {
  root:
    | "--datatable-height"
    | "--datatable-min-height"
    | "--datatable-shadow"
    | "--datatable-border-color"
    | "--datatable-row-border-color";
};

export interface DataTableFooterProps
  extends BoxProps,
    StylesApiProps<DataTableFooterFactory> {
  borderColor: string | ((theme: RaikouTheme) => string);
  className?: string;
  style?: CSSProperties;
  columns: DataTableColumn[];
  defaultColumnProps: DataTableDefaultColumnProps | undefined;
  selectionVisible: boolean;
  leftShadowVisible: boolean;
  scrollDiff: number;
}

export type DataTableFooterFactory = Factory<{
  props: DataTableFooterProps;
  ref: HTMLDivElement;
  defaultRef: HTMLDivElement;
  defaultComponent: "div";
  stylesNames: DataTableFooterStylesNames;
  vars: DataTableFooterCssVariables;
}>;

const defaultProps: Partial<DataTableFooterProps> = {};

export const DataTableFooter = factory<DataTableFooterFactory>(
  (_props, ref) => {
    const props = useProps("DataTableFooter", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      borderColor,
      columns,
      defaultColumnProps,
      selectionVisible,
      leftShadowVisible,
      scrollDiff,
      ...others
    } = props;

    return (
      <Box
        component="tfoot"
        // ref={ref}
        className={cx("dataTableFooter-root", className)}
        style={style as CSSProperties}
        {...others}
      >
        <tr>
          {selectionVisible && (
            <DataTableFooterSelectorPlaceholderCell
              shadowVisible={leftShadowVisible}
            />
          )}
          {columns.map(({ hidden, ...columnProps }) => {
            if (hidden) return null;

            const {
              accessor,
              visibleMediaQuery,
              textAlignment,
              width,
              footer,
              footerClassName,
              footerStyle,
              noWrap,
              ellipsis,
            } = { ...defaultColumnProps, ...columnProps };

            return (
              <DataTableFooterCell
                key={accessor}
                className={footerClassName}
                style={footerStyle}
                visibleMediaQuery={visibleMediaQuery}
                textAlignment={textAlignment}
                width={width}
                title={footer}
                noWrap={noWrap}
                ellipsis={ellipsis}
              />
            );
          })}
        </tr>
      </Box>
    );
  },
);

DataTableFooter.displayName = "@raikou/DataTableFooter";
