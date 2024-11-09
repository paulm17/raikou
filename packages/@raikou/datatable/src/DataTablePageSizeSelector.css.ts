import { css } from "@stylefusion/react";

export const dataTablePageSizeSelectorButtonIconStyle = css({
  margin: "0 rem(-4px) 0 rem(2px)",
});

export const dataTablePageSizeSelectorMenuArrowStyle = css({
  zIndex: -1,
});

export const dataTablePageSizeSelectorActiveStyle = css(({ theme }) => ({
  ...theme.applyStyles("light", {
    "--raikou-datatable-pagination-active-text-color":
      "var(--raikou-datatable-pagination-active-text-color-light, var(--raikou-color-white))",
    "--raikou-datatable-pagination-active-background-color":
      "var(--raikou-datatable-pagination-active-background-color-light, var(--raikou-primary-color-filled))",
  }),
  ...theme.applyStyles("dark", {
    "--raikou-datatable-pagination-active-text-color":
      "var(--raikou-datatable-pagination-active-text-color-dark, var(--raikou-color-white))",
    "--raikou-datatable-pagination-active-background-color":
      "var(--raikou-datatable-pagination-active-background-color-dark, var(--raikou-primary-color-filled))",
  }),
  opacity: 1,
  color: "var(--raikou-datatable-pagination-active-text-color)",
  background: "var(--raikou-datatable-pagination-active-background-color)",
}));
