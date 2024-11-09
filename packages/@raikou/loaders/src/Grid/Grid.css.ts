import { css, keyframes } from "@stylefusion/react";

const motionAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(0.5)", opacity: 0.7 },
  "100%": { transform: "scale(1)", opacity: 1 },
});

export const LoaderGridLoaderStyle = css({
  "--grid-size-xs": "8px",
  "--grid-size-sm": "9px",
  "--grid-size-md": "15px",
  "--grid-size-lg": "18px",
  "--grid-size-xl": "24px",
  "--grid-size": "var(--grid-size-md)",
  "--grid-color": "var(--raikou-primary-color-filled)",
  width: "calc(var(--grid-size) * 3 + var(--grid-margin) * 6)",
  fontSize: 0,
  display: "inline-block",
});

const LoaderGridStyle = {
  display: "inline-block",
  backgroundColor: "var(--grid-color)",
  width: "var(--grid-size)",
  height: "var(--grid-size)",
  margin: "var(--grid-margin)",
  borderRadius: "100%",
};

export const LoaderGrid1Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-1) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-1) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid2Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-2) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-2) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid3Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-3) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-3) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid4Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-4) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-4) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid5Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-5) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-5) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid6Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-6) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-6) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid7Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-7) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-7) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid8Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-8) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-8) / 100 - 0.2)) infinite ease`,
});

export const LoaderGrid9Style = css({
  ...LoaderGridStyle,
  animation: `${motionAnimation} calc(1s * calc(var(--grid-rand-9) / 100 + 0.6) / var(--grid-speed-multiplier)) calc(1s * calc(var(--grid-rand-9) / 100 - 0.2)) infinite ease`,
});
