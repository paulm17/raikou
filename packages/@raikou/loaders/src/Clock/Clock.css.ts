import { css, keyframes } from "@stylefusion/react";

const clockLoaderAnimation = keyframes({
  "100%": { transform: "rotate(360deg)" },
});

export const LoaderClockRootStyle = css({
  "--clock-size-xs": "30px",
  "--clock-size-sm": "37px",
  "--clock-size-md": "60px",
  "--clock-size-lg": "73px",
  "--clock-size-xl": "97px",
  "--clock-size": "var(--clock-size-md)",
  "--clock-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "inherit",
  width: "var(--clock-size)",
  height: "var(--clock-size)",
  background: "transparent",
  boxShadow: "var(--clock-color) 0px 0px 0px 2px inset",
  borderRadius: "50%",
});

export const LoaderClockMinuteStyle = css({
  position: "absolute",
  backgroundColor: "var(--clock-color)",
  width: "calc(var(--clock-size) / 3)",
  height: "2px",
  top: "calc(var(--clock-size) / 2 - 1px)",
  left: "calc(var(--clock-size) / 2 - 1px)",
  transformOrigin: "1px 1px",
  animation: `${clockLoaderAnimation} calc(8s / var(--clock-speed-multiplier)) infinite linear`,
});

export const LoaderClockHourStyle = css({
  position: "absolute",
  backgroundColor: "var(--clock-color)",
  width: "calc(var(--clock-size) / 2.4)",
  height: "2px",
  top: "calc(var(--clock-size) / 2 - 1px)",
  left: "calc(var(--clock-size) / 2 - 1px)",
  transformOrigin: "1px 1px",
  animation: `${clockLoaderAnimation} calc(2s / var(--clock-speed-multiplier)) infinite linear`,
});
