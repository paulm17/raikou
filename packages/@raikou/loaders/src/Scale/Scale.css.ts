import { css, keyframes } from "@stylefusion/react";

const scaleLoaderAnimation = keyframes({
  "0%": { transform: "scaley(1.0)" },
  "50%": { transform: "scaley(0.4)" },
  "100%": { transform: "scaley(1.0)" },
});

export const LoaderScaleRootStyle = css({
  "--scale-size-xs": "8px",
  "--scale-size-sm": "9px",
  "--scale-size-md": "15px",
  "--scale-size-lg": "18px",
  "--scale-size-xl": "24px",
  "--scale-size": "var(--scale-size-md)",
  "--scale-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
});

const LoaderScaleStyle = {
  backgroundColor: "var(--scale-color)",
  width: "calc(var(--scale-size) / 8.75)",
  height: "var(--scale-size)",
  margin: "var(--scale-margin)",
  borderRadius: "var(--scale-radius)",
  display: "inline-block",
};

export const LoaderScale1Style = css({
  ...LoaderScaleStyle,
  animation: `${scaleLoaderAnimation} calc(1s * var(--scale-speed-multiplier)) calc(0.1s * 1) infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});

export const LoaderScale2Style = css({
  ...LoaderScaleStyle,
  animation: `${scaleLoaderAnimation} calc(1s * var(--scale-speed-multiplier)) calc(0.1s * 2) infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});

export const LoaderScale3Style = css({
  ...LoaderScaleStyle,
  animation: `${scaleLoaderAnimation} calc(1s * var(--scale-speed-multiplier)) calc(0.1s * 3) infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});

export const LoaderScale4Style = css({
  ...LoaderScaleStyle,
  animation: `${scaleLoaderAnimation} calc(1s * var(--scale-speed-multiplier)) calc(0.1s * 4) infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});

export const LoaderScale5Style = css({
  ...LoaderScaleStyle,
  animation: `${scaleLoaderAnimation} calc(1s * var(--scale-speed-multiplier)) calc(0.1s * 5) infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,
});
