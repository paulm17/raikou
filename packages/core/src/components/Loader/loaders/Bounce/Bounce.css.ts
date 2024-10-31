import { css, keyframes } from "@stylefusion/react";

const bounceLoaderAnimation = keyframes({
  "0%": {
    transform: "scale(0)",
  },
  "50%": {
    transform: "scale(1.0)",
  },
  "100%": {
    transform: "scale(0)",
  },
});

export const LoaderBounceLoaderStyle = css({
  position: "relative",
  display: "inherit",
  width: "var(--loader-size)",
  height: "var(--loader-size)",
});

const LoaderBounceStyle = {
  position: "absolute",
  height: "var(--loader-size)",
  width: "var(--loader-size)",
  overflow: "hidden",
  backgroundColor: "var(--loader-color)",
  borderRadius: "100%",
  opacity: 0.6,
  top: 0,
  left: 0,
};

export const LoaderBounce1Style = css({
  ...LoaderBounceStyle,
  animation: `${bounceLoaderAnimation} calc(2.1s / var(--loader-speed-multiplier)) calc(1s / var(--loader-speed-multiplier)) infinite ease-in-out`,
});

export const LoaderBounce2Style = css({
  ...LoaderBounceStyle,
  animation: `${bounceLoaderAnimation} calc(2.1s / var(--loader-speed-multiplier)) 0s infinite ease-in-out`,
});
