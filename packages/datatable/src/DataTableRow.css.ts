import { css } from "@stylefusion/react";

export const dataTableRowStyle = css(({ theme }) => ({
  ...theme.applyStyles("light", {
    "--raikou-datatable-row-color": "var(--raikou-datatable-row-color-light)",
    "--raikou-datatable-row-background-color":
      "var(--raikou-datatable-row-color-dark)",
  }),
  ...theme.applyStyles("dark", {
    "--raikou-datatable-row-color":
      "var(--raikou-datatable-row-background-color-light)",
    "--raikou-datatable-row-background-color":
      "var(--raikou-datatable-row-background-color-dark))",
  }),

  color: "var(--raikou-datatable-row-color, inherit)",
  background: "var(--raikou-datatable-row-background-color, inherit)",

  "&[data-with-row-border]:not(:last-of-type) td": {
    borderBottom: "rem(1px) solid var(--raikou-datatable-row-border-color)",
  },

  "&[data-selected] td": {
    background: "var(--raikou-primary-color-light)",
  },
}));
