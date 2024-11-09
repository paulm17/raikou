import { css } from "@stylefusion/react";

export const dataTableScrollAreaStyle = css({
  flex: "1 1 100%",
});

export const dataTableScrollAreaCornerStyle = css({
  background: "transparent",
});

export const dataTableScrollAreaThumbStyle = css({
  zIndex: 3,
});

export const dataTableScrollAreaScrollbarStyle = css({
  "&[data-state='visible']": {
    background: "transparent",
  },
  "div::before": {
    pointerEvents: "none",
  },
});

export const dataTableScrollAreaShadowStyle = css({
  position: "absolute",
  pointerEvents: "none",
  opacity: 0,
  transition: "opacity 0.2s",
});

export const dataTableScrollAreaTopShadowStyle = css({
  zIndex: 2,
  left: 0,
  right: 0,
  height: "calc(var(--raikou-spacing-xs) / 2)",
  background: "var(--raikou-datatable-shadow-background-top)",
});

export const dataTableScrollAreaLeftShadowStyle = css({
  zIndex: 3,
  top: 0,
  left: 0,
  bottom: 0,
  width: "var(--raikou-spacing-xs)",
  background: "var(--raikou-datatable-shadow-background-left)",
});

export const dataTableScrollAreaRightShadowStyle = css({
  zIndex: 3,
  top: 0,
  bottom: 0,
  right: 0,
  width: "var(--raikou-spacing-xs)",
  background: "var(--raikou-datatable-shadow-background-right)",
});

// /* For horizontal scrolling and expanded rows */
export const dataTableScrollAreaShadowBehindStyle = css({
  zIndex: 0,
});

export const dataTableScrollAreaBottomShadowStyle = css({
  zIndex: 2,
  left: 0,
  right: 0,
  height: "calc(var(--raikou-spacing-xs) / 2)",
  background: "var(--raikou-datatable-shadow-background-bottom)",
});

export const dataTableScrollAreaShadowVisibleStyle = css({
  opacity: 1,
});
