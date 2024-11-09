import { css, keyframes } from "@stylefusion/react";

const ringLeftLoaderAnimation = keyframes({
  "0%": {
    transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
  },
  "100%": {
    transform: "rotateX(180deg) rotateY(360deg) rotateZ(360deg)",
  },
});

const ringRightLoaderAnimation = keyframes({
  "0%": {
    transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
  },
  "100%": {
    transform: "rotateX(360deg) rotateY(180deg) rotateZ(360deg)",
  },
});

export const LoaderRingLoaderStyle = css({
  "--ring-size-xs": "30px",
  "--ring-size-sm": "37px",
  "--ring-size-md": "60px",
  "--ring-size-lg": "73px",
  "--ring-size-xl": "97px",
  "--ring-size": "var(--ring-size-md)",
  "--ring-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "inherit",
  width: "var(--ring-size)",
  height: "var(--ring-size)",
});

const LoaderRingStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "var(--ring-size)",
  height: "var(--ring-size)",
  border: "calc(var(--ring-size) / 10) solid var(--ring-color)",
  opacity: 0.4,
  borderRadius: "100%",
  perspective: "800px",
};

export const LoaderRing1Style = css({
  ...LoaderRingStyle,
  animation: `${ringRightLoaderAnimation} calc(2s / var(--ring-speed-multiplier)) 0s infinite linear`,
});

export const LoaderRing2Style = css({
  ...LoaderRingStyle,
  animation: `${ringLeftLoaderAnimation} calc(2s / var(--ring-speed-multiplier)) 0s infinite linear`,
});
