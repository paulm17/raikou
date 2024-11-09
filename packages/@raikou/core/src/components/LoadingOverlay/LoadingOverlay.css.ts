import { css } from "@stylefusion/react";

export const LoadingOverlayRootStyle = css({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  zIndex: "var(--lo-z-index)",
});

export const LoadingOverlayLoaderStyle = css({
  position: "relative",
  zIndex: "calc(var(--lo-z-index) + 1)",
});

export const LoadingOverlayOverlayStyle = css({
  zIndex: "var(--lo-z-index)",
});