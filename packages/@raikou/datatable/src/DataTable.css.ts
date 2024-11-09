import { css } from "@stylefusion/react";

export const dataTableRootStyle = css(({ theme }) => ({
  ...theme.applyStyles("light", {
    "--raikou-datatable-color":
      "var(--raikou-datatable-color-light, var(--raikou-color-text))",
    "--raikou-datatable-background-color":
      "var(--raikou-datatable-background-color-light, var(--raikou-color-body))",
    "--raikou-datatable-border-color":
      "var(--raikou-datatable-border-color-light, var(--raikou-color-gray-3))",
    "--raikou-datatable-row-border-color":
      "var(--raikou-datatable-row-border-color-light, var(--raikou-datatable-border-color))",
    "--raikou-datatable-striped-color":
      "var(--raikou-datatable-striped-color-light, var(--raikou-color-gray-0))",
    "--raikou-datatable-highlight-on-hover-color":
      "var(--raikou-datatable-highlight-on-hover-color-light, var(--raikou-color-gray-1))",
    "--raikou-datatable-shadow-background-top":
      "linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.05 30%, rgba(0, 0, 0, 0)))",
    "--raikou-datatable-shadow-background-right":
      "linear-gradient(to left, rgba(0, 0, 0, 0.05, rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 0, 0, 0.05, rgba(0, 0, 0, 0) 30%)))",
    "--raikou-datatable-shadow-background-bottom":
      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05)), linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.05))",
    "--raikou-datatable-shadow-background-left":
      "linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0)), linear-gradient(to right, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0) 30%)",
  }),
  ...theme.applyStyles("dark", {
    "--raikou-datatable-color":
      "var(--raikou-datatable-color-dark, var(--raikou-color-text))",
    "--raikou-datatable-background-color":
      "var(--raikou-datatable-background-color-dark, var(--raikou-color-body))",
    "--raikou-datatable-border-color":
      "var(--raikou-datatable-border-color-dark, var(--raikou-color-dark-4))",
    "--raikou-datatable-row-border-color":
      "var(--raikou-datatable-row-border-color-dark, var(--raikou-datatable-border-color))",
    "--raikou-datatable-striped-color":
      "var(--raikou-datatable-striped-color-dark, var(--raikou-color-dark-6))",
    "--raikou-datatable-highlight-on-hover-color":
      "var(--raikou-datatable-highlight-on-hover-color-dark, var(--raikou-color-dark-5))",
    "--raikou-datatable-shadow-background-top":
      "linear-gradient(rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.25 30%, rgba(0, 0, 0, 0)))",
    "--raikou-datatable-shadow-background-right":
      "linear-gradient(to left, rgba(0, 0, 0,  0.25, rgba(0, 0, 0, 0), linear-gradient(to left, rgba(0, 0, 0,  0.25), rgba(0, 0, 0, 0) 30%)))",
    "--raikou-datatable-shadow-background-bottom":
      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0,  0.25)), linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0,  0.25))",
    "--raikou-datatable-shadow-background-left":
      "linear-gradient(to right, rgba(0, 0, 0,  0.25), rgba(0, 0, 0, 0)), linear-gradient(to right, rgba(0, 0, 0,  0.25), rgba(0, 0, 0, 0) 30%)",
  }),
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  color: "var(--raikou-datatable-color)",
  background: "var(--raikou-datatable-background-color)",
}));

export const dataTableWithBorderStyle = css({
  border: "rem(1px) solid var(--raikou-datatable-border-color)",
});

export const dataTableTableStyle = css(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: 0,
  color: "inherit",
  background: "var(--raikou-datatable-background-color)",

  "th, td": {
    borderColor: "var(--raikou-datatable-row-border-color)",
  },

  "thead, tbody, tfoot, thead tr, tfoot tr, th, td": {
    background: "inherit",
  },

  "&[data-striped] tbody tr:nth-of-type(odd)": {
    background: "var(--raikou-datatable-striped-color)",
  },

  ...theme.applyMixin("hover", {
    "&[data-highlight-on-hover] tbody tr:hover": {
      background: "var(--raikou-datatable-highlight-on-hover-color)",
    },
  }),

  "tbody tr:last-of-type": {
    borderBbottom: 0,
  },
}));

export const dataTableVerticalAlignTopStyle = css({
  td: {
    verticalAlign: "top",
  },
});

export const dataTableVerticalAlignBottomStyle = css({
  td: {
    verticalAlign: "bottom",
  },
});

export const dataTableLastRowBorderBottomVisibleStyle = css({
  [`tr:last-of-type:not(.raikou-datatable-empty-row) td`]: {
    borderBottom: "rem(1px) solid var(--raikou-datatable-row-border-color)",
  },
});

export const dataTablePinLastColumnStyle = css({
  [`th:last-of-type, td:not(.raikou-datatable-row-expansion-cell):last-of-type`]:
    {
      position: "sticky",
      zIndex: 1,

      /* This is to fix a minor visual glitch in webkit browsers */
      right: "rem(-0.4px)",
      "@-moz-document url-prefix()": {
        right: 0,
      },

      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "calc(-1 * var(--raikou-spacing-xs))",
        borderRight: "1px solid var(--raikou-datatable-row-border-color)",
        width: "var(--raikou-spacing-xs)",
        background: "var(--raikou-datatable-shadow-background-right)",
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.2s",
      },
    },

  "th:last-of-type, tr[data-with-row-border]:not(:last-of-type) td:not(.raikou-datatable-row-expansion-cell):last-of-type":
    {
      "&::after": {
        top: "rem(-1px)",
        bottom: "rem(-1px)",
      },
    },

  "tfoot th:last-of-type::after": {
    top: "rem(-1px)",
  },

  [`tr[data-selected] td:not(.raikou-datatable-row-expansion-cell):last-of-type`]:
    {
      background: "inherit",
      "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--raikou-primary-color-light)",
      },
    },
});

export const dataTablePinLastColumnScrolledStyle = css({
  "th:last-of-type, td:not(.raikou-datatable-row-expansion-cell):last-of-type":
    {
      "&::after": {
        opacity: 1,
      },
    },
});

export const dataTableSelectionColumnVisibleStyle = css({});

export const dataTablePinFirstColumnStyle = css({
  [`
    &:not(.${dataTableSelectionColumnVisibleStyle}) th:first-of-type, 
    &:not(.${dataTableSelectionColumnVisibleStyle}) td:not(.raikou-datatable-row-expansion-cell):first-of-type,
    &.${dataTableSelectionColumnVisibleStyle} th:first-of-type,
    &.${dataTableSelectionColumnVisibleStyle} th.raikou-datatable-column-group-header-cell:nth-of-type(2),
    &.${dataTableSelectionColumnVisibleStyle} td:not(.raikou-datatable-row-expansion-cell):nth-of-type(2)
  `]: {
    position: "sticky",
    left: "var(--raikou-datatable-selection-column-width)",
    zIndex: 1,

    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: "calc(-1 * var(--raikou-spacing-xs))",
      borderLeft: "1px solid var(--raikou-datatable-row-border-color)",
      width: "var(--raikou-spacing-xs)",
      background: "var(--raikou-datatable-shadow-background-left)",
      pointerEvents: "none",
      opacity: 0,
      transition: "opacity 0.2s",
    },
  },

  [`&.${dataTableSelectionColumnVisibleStyle} th.raikou-datatable-header-selector-cell`]:
    {
      left: 0,
    },

  [`
    &:not(.${dataTableSelectionColumnVisibleStyle}) th:first-of-type,
    &:not(.${dataTableSelectionColumnVisibleStyle}) tr[data-with-row-border]:not(:last-of-type) td:not(.raikou-datatable-row-expansion-cell):first-of-type,
    &.${dataTableSelectionColumnVisibleStyle} th.raikou-datatable-column-group-header-cell:nth-of-type(2),
    &.${dataTableSelectionColumnVisibleStyle} tr[data-with-row-border]:not(:last-of-type) td:not(.raikou-datatable-row-expansion-cell):nth-of-type(2) { 
    &::after
  `]: {
    top: "rem(-1px)",
    bottom: "rem(-1px)",
  },

  [`
    &:not(.${dataTableSelectionColumnVisibleStyle}) tr[data-selected] td:not(.raikou-datatable-row-expansion-cell):first-of-type, 
    background: inherit, 
    &::before
  `]: {
    content: "",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "var(--raikou-primary-color-light)",
  },
});

export const dataTablePinFirstColumnScrolledStyle = css({
  [`
    &-scrolled:not(.${dataTableSelectionColumnVisibleStyle}) th:first-of-type,
    &-scrolled:not(.${dataTableSelectionColumnVisibleStyle}) td:not(.raikou-datatable-row-expansion-cell):first-of-type,
    &-scrolled.${dataTableSelectionColumnVisibleStyle} th:first-of-type,
    &-scrolled.${dataTableSelectionColumnVisibleStyle} th.raikou-datatable-column-group-header-cell:nth-of-type(2),
    &-scrolled.${dataTableSelectionColumnVisibleStyle} td:not(.raikou-datatable-row-expansion-cell):nth-of-type(2)  
    `]: {
    "&::after": {
      opacity: 1,
    },
  },
});
