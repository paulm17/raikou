import React from "react";
import {
  getSortedBreakpoints,
  useRaikouTheme,
  keys,
  RaikouBreakpoint,
  filterProps,
  InlineStyles,
  getBaseValue,
} from "@raikou/core";
import type { GridColProps, ColSpan } from "./GridCol";
import { useStore } from "../store";

interface GridColVariablesProps extends GridColProps {
  selector: string;
}

const getColumnFlexBasis = (colSpan: ColSpan | undefined, columns: number) => {
  if (colSpan === "content") {
    return "auto";
  }

  if (colSpan === "auto") {
    return "0rem";
  }

  return colSpan ? `${100 / (columns / colSpan)}%` : undefined;
};

const getColumnMaxWidth = (
  colSpan: ColSpan | undefined,
  columns: number,
  grow: boolean | undefined,
) => {
  if (grow || colSpan === "auto" || colSpan === "content") {
    return "unset";
  }

  return getColumnFlexBasis(colSpan, columns);
};

const getColumnFlexGrow = (
  colSpan: ColSpan | undefined,
  grow: boolean | undefined,
) => {
  if (!colSpan) {
    return undefined;
  }

  return colSpan === "auto" || grow ? "1" : undefined;
};

const getColumnOffset = (offset: number | undefined, columns: number) =>
  offset === 0 ? "0" : offset ? `${100 / (columns / offset)}%` : undefined;

export function GridColVariables({
  span,
  order,
  offset,
  selector,
}: GridColVariablesProps) {
  const theme = useRaikouTheme();
  const ctx = useStore.getState();

  const baseSpan = getBaseValue(span);

  const baseStyles: Record<string, string | undefined> = filterProps({
    "--col-order": getBaseValue(order)?.toString(),
    "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
    "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
    "--col-width": baseSpan === "content" ? "auto" : undefined,
    "--col-max-width": getColumnMaxWidth(baseSpan, ctx.columns, ctx.grow),
    "--col-offset": getColumnOffset(getBaseValue(offset), ctx.columns),
  });

  const queries = keys(theme.breakpoints).reduce<
    Record<string, Record<string, any>>
  >((acc, breakpoint) => {
    if (!acc[breakpoint]) {
      acc[breakpoint] = {};
    }

    if (typeof order === "object" && order[breakpoint] !== undefined) {
      acc[breakpoint]["--col-order"] = order[breakpoint]?.toString();
    }

    if (typeof span === "object" && span[breakpoint] !== undefined) {
      acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(
        span[breakpoint],
        ctx.grow,
      );
      acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(
        span[breakpoint],
        ctx.columns,
      );
      acc[breakpoint]["--col-width"] =
        span[breakpoint] === "content" ? "auto" : undefined;
      acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
        span[breakpoint],
        ctx.columns,
        ctx.grow,
      );
    }

    if (typeof offset === "object" && offset[breakpoint] !== undefined) {
      acc[breakpoint]["--col-offset"] = getColumnOffset(
        offset[breakpoint],
        ctx.columns,
      );
    }

    return acc;
  }, {});

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0,
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${
      theme.breakpoints[breakpoint.value as RaikouBreakpoint]
    })`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
