import { css, keyframes } from "@stylefusion/react";

const puffLoader1Animation = keyframes({
  "0%": { transform: "scale(0)" },
  "100%": { transform: "scale(1.0)" },
});

const puffLoader2Animation = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const LoaderPuffLoaderStyle = css({
  "--puff-size-xs": "30px",
  "--puff-size-sm": "37px",
  "--puff-size-md": "60px",
  "--puff-size-lg": "73px",
  "--puff-size-xl": "97px",
  "--puff-size": "var(--puff-size-md)",
  "--puff-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
  position: "relative",
  width: "var(--puff-size)",
  height: "var(--puff-size)",
});

const LoaderPuffStyle = {
  position: "absolute",
  width: "var(--puff-size)",
  height: "var(--puff-size)",
  border: "thick solid var(--puff-color)",
  borderRadius: "50%",
  opacity: 1,
  top: 0,
  left: 0,
  animation: `${puffLoader1Animation}, ${puffLoader2Animation}`,
  animationDuration: "calc(2s / var(--puff-speed-multiplier))",
  animationIterationCount: "infinite",
  animationTimingFunction:
    "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",
};

export const LoaderPuff1Style = css({
  ...LoaderPuffStyle,
  animationDelay: "-1s",
});

export const LoaderPuff2Style = css({
  ...LoaderPuffStyle,
  animationDelay: "0s",
});
