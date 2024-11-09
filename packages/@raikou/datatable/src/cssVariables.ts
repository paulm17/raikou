import {
  parseThemeColor,
  type RaikouColor,
  type RaikouTheme,
} from "@raikou/core";
import type { DataTableProps } from "./types";

export function getColor(
  color: RaikouColor | undefined | { light: RaikouColor; dark: RaikouColor },
  theme: RaikouTheme,
  colorScheme: "light" | "dark",
) {
  return color
    ? parseThemeColor({
        color: typeof color === "object" ? color[colorScheme] : color,
        theme,
      }).value
    : undefined;
}

export function getTableCssVariables({
  theme,
  c,
  backgroundColor,
  borderColor,
  rowBorderColor,
  stripedColor,
  highlightOnHoverColor,
}: Pick<
  DataTableProps,
  | "c"
  | "backgroundColor"
  | "borderColor"
  | "rowBorderColor"
  | "stripedColor"
  | "highlightOnHoverColor"
> & {
  theme: RaikouTheme;
}) {
  return {
    "--raikou-datatable-color-light": getColor(c, theme, "light"),
    "--raikou-datatable-color-dark": getColor(c, theme, "dark"),

    "--raikou-datatable-background-color-light": getColor(
      backgroundColor,
      theme,
      "light",
    ),
    "--raikou-datatable-background-color-dark": getColor(
      backgroundColor,
      theme,
      "dark",
    ),

    "--raikou-datatable-border-color-light": getColor(
      borderColor,
      theme,
      "light",
    ),
    "--raikou-datatable-border-color-dark": getColor(
      borderColor,
      theme,
      "dark",
    ),

    "--raikou-datatable-row-border-color-light": getColor(
      rowBorderColor,
      theme,
      "light",
    ),
    "--raikou-datatable-row-border-color-dark": getColor(
      rowBorderColor,
      theme,
      "dark",
    ),

    "--raikou-datatable-striped-color-light": getColor(
      stripedColor,
      theme,
      "light",
    ),
    "--raikou-datatable-striped-color-dark": getColor(
      stripedColor,
      theme,
      "dark",
    ),

    "--raikou-datatable-highlight-on-hover-color-light": getColor(
      highlightOnHoverColor,
      theme,
      "light",
    ),
    "--raikou-datatable-highlight-on-hover-color-dark": getColor(
      highlightOnHoverColor,
      theme,
      "dark",
    ),
  };
}

export function getPaginationCssVariables({
  theme,
  paginationActiveTextColor,
  paginationActiveBackgroundColor,
}: Pick<
  DataTableProps,
  "paginationActiveTextColor" | "paginationActiveBackgroundColor"
> & {
  theme: RaikouTheme;
}) {
  return {
    "--raikou-datatable-pagination-active-text-color-light": getColor(
      paginationActiveTextColor,
      theme,
      "light",
    ),
    "--raikou-datatable-pagination-active-text-color-dark": getColor(
      paginationActiveTextColor,
      theme,
      "dark",
    ),

    "--raikou-datatable-pagination-active-background-color-light": getColor(
      paginationActiveBackgroundColor,
      theme,
      "light",
    ),
    "--raikou-datatable-pagination-active-background-color-dark": getColor(
      paginationActiveBackgroundColor,
      theme,
      "dark",
    ),
  };
}

export function getRowCssVariables({
  theme,
  color,
  backgroundColor,
}: {
  theme: RaikouTheme;
  color: RaikouColor | undefined | { light: RaikouColor; dark: RaikouColor };
  backgroundColor:
    | RaikouColor
    | undefined
    | { light: RaikouColor; dark: RaikouColor };
}) {
  return {
    "--raikou-datatable-row-color-light": getColor(color, theme, "light"),
    "--raikou-datatable-row-color-dark": getColor(color, theme, "dark"),
    "--raikou-datatable-row-background-color-light": getColor(
      backgroundColor,
      theme,
      "light",
    ),
    "--raikou-datatable-row-background-color-dark": getColor(
      backgroundColor,
      theme,
      "dark",
    ),
  };
}
