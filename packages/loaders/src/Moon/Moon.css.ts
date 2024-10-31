import { css, keyframes } from "@stylefusion/react";

const moonLoaderAnimation = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const LoaderMoonRootStyle = css({
  "--moon-size-xs": "30px",
  "--moon-size-sm": "37px",
  "--moon-size-md": "60px",
  "--moon-size-lg": "73px",
  "--moon-size-xl": "97px",
  "--moon-size": "var(--moon-size-md)",
  "--moon-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
  position: "relative",
  width: "calc(var(--moon-size) + calc(var(--moon-size) / 7) * 2)",
  height: "calc(var(--moon-size) + calc(var(--moon-size) / 7) * 2)",
  animation: `${moonLoaderAnimation} calc(0.6s / var(--moon-speed-multiplier)) 0s infinite linear`,
});

const ballStyle1 = {
  width: "calc(var(--moon-size) / 7)",
  height: "calc(var(--moon-size) / 7)",
  borderRadius: "100%",
};

const ballStyle2 = {
  width: "var(--moon-size)",
  height: "var(--moon-size)",
  borderRadius: "100%",
};

export const LoaderMoonBallStyle = css({
  ...ballStyle1,
  backgroundColor: "var(--moon-color)",
  opacity: "0.8",
  position: "absolute",
  top: "calc(calc(var(--moon-size) / 2) - calc(var(--moon-size) / 7) / 2)",
  animation: `${moonLoaderAnimation} calc(0.6s / var(--moon-speed-multiplier)) 0s infinite linear`,
});

export const LoaderMoonCircleStyle = css({
  ...ballStyle2,
  border: "calc(var(--moon-size) / 7) solid var(--moon-color)",
  opacity: "0.1",
  boxSizing: "content-box",
  position: "absolute",
});
