import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(1440deg)",
    opacity: "0.05",
  },
});

export const LoaderPulsarRootStyle = css({
  "--pulsar-size-xs": "35px",
  "--pulsar-size-sm": "42px",
  "--pulsar-size-md": "70px",
  "--pulsar-size-lg": "85px",
  "--pulsar-size-xl": "112px",
  "--pulsar-size": "var(--pulsar-size-md)",
  "--pulsar-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--pulsar-size)",
  height: "var(--pulsar-size)",
});

export const LoaderPulsarBallStyle = css({
  position: "absolute",
  top: "50%",
  left: 0,
  width: "calc(var(--pulsar-size) / 5)",
  height: "calc(var(--pulsar-size) / 5)",
  borderRadius: "50%",
  backgroundColor: "var(--pulsar-color)",
  transform: "translateX(-50%) translateY(-50%)",
  transformOrigin: "0 250% 0",
  animation: `${rotateAnimation} 4s both infinite`,
});
