import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(180deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const LoaderCircleLoaderStyle = css({
  position: "relative",
  display: "inherit",
  width: "var(--loader-size)",
  height: "var(--loader-size)",
});

const LoaderCircleStyle = {
  position: "absolute",
  borderTop: `1px solid var(--loader-color)`,
  borderBottom: "none",
  borderLeft: `1px solid var(--loader-color)`,
  borderRight: "none",
  borderRadius: "100%",
  transition: "2s",
};

export const LoaderCircle1Style = css({
  ...LoaderCircleStyle,
  height: "calc(var(--loader-size) * (1 - 1 / 10))",
  width: "calc(var(--loader-size) * (1 - 1 / 10))",
  top: "calc(1 * 0.7 * 2.5%)",
  left: "calc(1 * 0.35 * 2.5%)",
  animation: `${rotateAnimation} calc(1s / var(--loader-speed-multiplier)) calc(1 * 0.2s / var(--loader-speed-multiplier)) infinite linear`,
});

export const LoaderCircle2Style = css({
  ...LoaderCircleStyle,
  height: "calc(var(--loader-size) * (1 - 2 / 10))",
  width: "calc(var(--loader-size) * (1 - 2 / 10))",
  top: "calc(2 * 0.7 * 2.5%)",
  left: "calc(2 * 0.35 * 2.5%)",
  animation: `${rotateAnimation} calc(1s / var(--loader-speed-multiplier)) calc(2 * 0.2s / var(--loader-speed-multiplier)) infinite linear`,
});

export const LoaderCircle3Style = css({
  ...LoaderCircleStyle,
  height: "calc(var(--loader-size) * (1 - 3 / 10))",
  width: "calc(var(--loader-size) * (1 - 3 / 10))",
  top: "calc(3 * 0.7 * 2.5%)",
  left: "calc(3 * 0.35 * 2.5%)",
  animation: `${rotateAnimation} calc(1s / var(--loader-speed-multiplier)) calc(3 * 0.2s / var(--loader-speed-multiplier)) infinite linear`,
});

export const LoaderCircle4Style = css({
  ...LoaderCircleStyle,
  height: "calc(var(--loader-size) * (1 - 4 / 10))",
  width: "calc(var(--loader-size) * (1 - 4 / 10))",
  top: "calc(4 * 0.7 * 2.5%)",
  left: "calc(4 * 0.35 * 2.5%)",
  animation: `${rotateAnimation} calc(1s / var(--loader-speed-multiplier)) calc(4 * 0.2s / var(--loader-speed-multiplier)) infinite linear`,
});

export const LoaderCircle5Style = css({
  ...LoaderCircleStyle,
  height: "calc(var(--loader-size) * (1 - 5 / 10))",
  width: "calc(var(--loader-size) * (1 - 5 / 10))",
  top: "calc(5 * 0.7 * 2.5%)",
  left: "calc(5 * 0.35 * 2.5%)",
  animation: `${rotateAnimation} calc(1s / var(--loader-speed-multiplier)) calc(5 * 0.2s / var(--loader-speed-multiplier)) infinite linear`,
});
