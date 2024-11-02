import { css } from "@stylefusion/react";

export const dataTableLoaderStyle = css({
  zindex: 3,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  background: "alpha(var(--raikou-datatable-background-color), 0.75)",
  opacity: 0,
  transition: "opacity 0.2s",
});

export const dataTableLoaderFetchingStyle = css({
  pointerEvents: "all",
  opacity: 1,
});
