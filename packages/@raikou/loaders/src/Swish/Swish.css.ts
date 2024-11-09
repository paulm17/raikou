import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "50%": {
    transform: "scale(0)",
    backgroundColor: "var(--swish-back-color)",
  },
});

export const LoaderSwishRootStyle = css({
  "--swish-size-xs": "20px",
  "--swish-size-sm": "24px",
  "--swish-size-md": "40px",
  "--swish-size-lg": "49px",
  "--swish-size-xl": "64px",
  "--swish-size": "var(--swish-size-md)",
  "--swish-color": "var(--raikou-primary-color-filled)",
  "--swish-back-color": "lighten(var(--swish-color), 0.5)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--swish-size)",
  height: "var(--swish-size)",
});

export const LoaderSwishBallStyle = css({
  position: "absolute",
  width: "calc(var(--swish-size) / 5)",
  height: "calc(var(--swish-size) / 5)",
  borderRadius: "3px",
  backgroundColor: "var(--swish-color)",
  animation: `${rotateAnimation} 0.9s ease infinite`,
  transition: "all 0.3s ease",
});
