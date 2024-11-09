import { css } from "@stylefusion/react";

export const dataTableFooterSelectorPlaceholderCellStyle = css({
  position: "sticky",
  width: 0,
  left: 0,
  "&::after": {
    content: "",
    position: "absolute",
    top: 0,
    right: "calc(-1 * var(--raikou-spacing-xs))",
    bottom: "rem(-1px)",
    borderLeft: "1px solid var(--raikou-datatable-row-border-color)",
    width: "var(--raikou-spacing-xs)",
    background: "var(--raikou-datatable-shadow-background-left)",
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 0.2s",
  },

  "&[data-shadow-visible]:after": {
    opacity: 1,
  },
});
