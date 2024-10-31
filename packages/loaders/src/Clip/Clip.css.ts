import { css, keyframes } from "@stylefusion/react";

const clipLoaderAnimation = keyframes({
  "0%": { transform: "rotate(0deg) scale(1)" },
  "50%": { transform: "rotate(180deg) scale(0.8)" },
  "100%": { transform: "rotate(360deg) scale(1)" },
});

export const LoaderClipRootStyle = css({
  "--clip-size-xs": "30px",
  "--clip-size-sm": "37px",
  "--clip-size-md": "60px",
  "--clip-size-lg": "73px",
  "--clip-size-xl": "97px",
  "--clip-size": "var(--clip-size-md)",
  "--clip-color": "var(--raikou-primary-color-filled)",
  background: "transparent !important",
  width: "var(--clip-size)",
  height: "var(--clip-size)",
  borderRadius: "100%",
  border: "2px solid",
  borderTopColor: "var(--clip-color)",
  borderBottomColor: "transparent",
  borderLeftColor: "var(--clip-color)",
  borderRightColor: "var(--clip-color)",
  display: "inline-block",
  animation: `${clipLoaderAnimation} calc(0.75s / var(--clip-speed-multiplier)) 0s infinite linear`,
});
