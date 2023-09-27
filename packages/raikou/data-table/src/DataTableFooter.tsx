import React from "react";
import { Box } from "../../components/Box/src";
import { forwardRef, type ForwardedRef, CSSProperties } from "react";
import DataTableFooterCell from "./DataTableFooterCell";
import DataTableFooterSelectorPlaceholderCell from "./DataTableFooterSelectorPlaceholderCell";
import type { DataTableColumn, DataTableDefaultColumnProps } from "./types";
import { RaikouTheme, useRaikouTheme } from "@raikou/core";
import clsx from "clsx";

type DataTableFooterProps<T> = {
  borderColor: string | ((theme: RaikouTheme) => string);
  className?: string;
  style?: CSSProperties;
  columns: DataTableColumn<T>[];
  defaultColumnProps: DataTableDefaultColumnProps<T> | undefined;
  selectionVisible: boolean;
  leftShadowVisible: boolean;
  scrollDiff: number;
};

export default forwardRef(function DataTableFooter<T>(
  {
    className,
    style,
    borderColor,
    columns,
    defaultColumnProps,
    selectionVisible,
    leftShadowVisible,
    scrollDiff,
  }: DataTableFooterProps<T>,
  ref: ForwardedRef<HTMLTableSectionElement>,
) {
  // const { colors } = useRaikouTheme();
  const relative = scrollDiff < 0;
  // const borderColorValue = typeof borderColor === 'function' ? borderColor(null) : borderColor;

  return (
    <Box
      component="tfoot"
      ref={ref}
      className={clsx("dataTableFooter-root", className)}
      style={{
        position: relative ? "relative" : "sticky",
        bottom: relative ? scrollDiff : -1,
        tr: {
          th: {
            borderTopColor: undefined,
          },
        },
        ...style,
      }}
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
            <DataTableFooterCell<T>
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
}) as <T>(
  props: DataTableFooterProps<T> & {
    ref: ForwardedRef<HTMLTableSectionElement>;
  },
) => JSX.Element;
