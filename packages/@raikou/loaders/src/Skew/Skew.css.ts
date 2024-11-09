import { css, keyframes } from "@stylefusion/react";

const skewLoaderAnimation = keyframes({
  "25%": {
    transform: "perspective(100px) rotateX(180deg) rotateY(0)",
  },
  "50%": {
    transform: "perspective(100px) rotateX(180deg) rotateY(180deg)",
  },
  "75%": {
    transform: "perspective(100px) rotateX(0) rotateY(180deg)",
  },
  "100%": {
    transform: "perspective(100px) rotateX(0) rotateY(0)",
  },
});

export const LoaderSkewRootStyle = css({
  "--skew-size-xs": "10px",
  "--skew-size-sm": "12px",
  "--skew-size-md": "20px",
  "--skew-size-lg": "24px",
  "--skew-size-xl": "32px",
  "--skew-size": "var(--skew-size-md)",
  "--skew-color": "var(--raikou-primary-color-filled)",
  width: 0,
  height: 0,
  borderLeft: "var(--skew-size) solid transparent",
  borderRight: "var(--skew-size) solid transparent",
  borderBottom: "var(--skew-size) solid var(--skew-color)",
  display: "inline-block",
  animation: `${skewLoaderAnimation} calc(3s * var(--skew-speed-multiplier)) 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)`,
});
