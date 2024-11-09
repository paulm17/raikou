import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const LoaderSphereRootStyle = css({
  "--sphere-size-xs": "20px",
  "--sphere-size-sm": "24px",
  "--sphere-size-md": "40px",
  "--sphere-size-lg": "49px",
  "--sphere-size-xl": "64px",
  "--sphere-size": "var(--sphere-size-md)",
  "--sphere-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--sphere-size)",
  height: "var(--sphere-size)",
  animation: `${rotateAnimation} 8s linear infinite`,
});

export const LoaderSphereBallStyle = css({
  position: "absolute",
  top: "calc(var(--sphere-size) / 2)",
  left: "calc(var(--sphere-size) / 2)",
  width: "calc(var(--sphere-size) / 5)",
  height: "calc(var(--sphere-size) / 5)",
  borderRadius: "50%",
  backgroundColor: "var(--sphere-color)",
});
