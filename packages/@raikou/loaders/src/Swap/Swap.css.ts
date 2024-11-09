import { css } from "@stylefusion/react";

export const LoaderSwapRootStyle = css({
  "--swap-size-xs": "20px",
  "--swap-size-sm": "24px",
  "--swap-size-md": "40px",
  "--swap-size-lg": "49px",
  "--swap-size-xl": "64px",
  "--swap-size": "var(--swap-size-md)",
  "--swap-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--swap-size)",
  height: "calc((var(--swap-size) / 2) + (var(--swap-size) / 8))",
});

export const LoaderSwapBallStyle = css({
  position: "absolute",
  width: "calc(var(--swap-size) / 4)",
  height: "calc(var(--swap-size) / 4)",
  borderRadius: "50%",
  backgroundColor: "var(--swap-color)",
  "&:nth-child(4)": {
    animationTimingFunction: "cubic-bezier(1, 0, 0, 1) !important",
    animationDuration: "1.5s !important",
  },
});
