import { css, keyframes } from "@stylefusion/react";

const waveAnimation = keyframes({
  "0%": { transform: "translateY(0)", opacity: 1 },
  "50%": {
    transform: "translateY(calc(var(--flag-size) / -5))",
    opacity: 0.25,
  },
  "100%": { transform: "translateY(0)", opacity: 1 },
});

export const LoaderFlagRootStyle = css({
  "--flag-size-xs": "20px",
  "--flag-size-sm": "24px",
  "--flag-size-md": "40px",
  "--flag-size-lg": "49px",
  "--flag-size-xl": "64px",
  "--flag-size": "var(--flag-size-md)",
  "--flag-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--flag-size)",
  height: "var(--flag-size)",
});

export const LoaderFlagLineStyle = css({
  position: "absolute",
  left: 0,
  top: 0,
  animation: `${waveAnimation} 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite`,
});

export const LoaderFlagPlaneStyle = css({
  position: "absolute",
  width: "calc(var(--flag-size) / 6)",
  height: "calc(var(--flag-size) / 6)",
  backgroundColor: "var(--flag-color)",
});
