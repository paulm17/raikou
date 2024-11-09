import { css, keyframes } from "@stylefusion/react";

const bounceAnimation = keyframes({
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
  "--bounce-size-xs": "30px",
  "--bounce-size-sm": "37px",
  "--bounce-size-md": "60px",
  "--bounce-size-lg": "73px",
  "--bounce-size-xl": "97px",
  "--bounce-size": "var(--bounce-size-md)",
  "--bounce-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "inherit",
  width: "var(--bounce-size)",
  height: "var(--bounce-size)",
});

const LoaderBounceStyle = {
  position: "absolute",
  height: "var(--bounce-size)",
  width: "var(--bounce-size)",
  overflow: "hidden",
  backgroundColor: "var(--bounce-color)",
  borderRadius: "100%",
  opacity: 0.6,
  top: 0,
  left: 0,
};

export const LoaderBounce1Style = css({
  ...LoaderBounceStyle,
  animation: `${bounceAnimation} calc(2.1s / var(--bounce-speed-multiplier)) calc(1s / var(--bounce-speed-multiplier)) infinite ease-in-out`,
});

export const LoaderBounce2Style = css({
  ...LoaderBounceStyle,
  animation: `${bounceAnimation} calc(2.1s / var(--bounce-speed-multiplier)) 0s infinite ease-in-out`,
});
