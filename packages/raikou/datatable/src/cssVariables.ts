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

    "--raikou-datatable-border-color-light": "#dee2e6",
    "--raikou-datatable-border-color-dark": "#373a40",

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

    "--raikou-datatable-striped-color-light": "#f8f9fa",
    "--raikou-datatable-striped-color-dark": "#25262b",

    "--raikou-datatable-highlight-on-hover-color-light": "#f1f3f5",
    "--raikou-datatable-highlight-on-hover-color-dark": "#2c2e33",
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
