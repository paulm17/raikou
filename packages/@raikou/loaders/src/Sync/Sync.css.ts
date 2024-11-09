import { css, keyframes } from "@stylefusion/react";

const syncLoaderAnimation = keyframes({
  "33%": { transform: "translateY(10px)" },
  "66%": { transform: "translateY(-10px)" },
  "100%": { transform: "translateY(0)" },
});

export const LoaderSyncLoaderStyle = css({
  "--sync-size-xs": "8px",
  "--sync-size-sm": "9px",
  "--sync-size-md": "15px",
  "--sync-size-lg": "18px",
  "--sync-size-xl": "24px",
  "--sync-size": "var(--sync-size-md)",
  "--sync-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
});

const LoaderSyncStyle = {
  backgroundColor: "var(--sync-color)",
  width: "var(--sync-size)",
  height: "var(--sync-size)",
  margin: "var(--sync-margin)",
  borderRadius: "100%",
  display: "inline-block",
};

export const LoaderSync1Style = css({
  ...LoaderSyncStyle,
  animation: `${syncLoaderAnimation} calc(0.6s / var(--sync-speed-multiplier)) calc(1s * 0.07) infinite ease-in-out`,
});

export const LoaderSync2Style = css({
  ...LoaderSyncStyle,
  animation: `${syncLoaderAnimation} calc(0.6s / var(--sync-speed-multiplier)) calc(2s * 0.07) infinite ease-in-out`,
});

export const LoaderSync3Style = css({
  ...LoaderSyncStyle,
  animation: `${syncLoaderAnimation} calc(0.6s / var(--sync-speed-multiplier)) calc(3s * 0.07) infinite ease-in-out`,
});
