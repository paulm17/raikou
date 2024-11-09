import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "25%": {
    transform: "rotate(180deg)",
  },
  "50%": {
    transform: "rotate(180deg)",
  },
  "75%": {
    transform: "rotate(360deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const fillAnimation = keyframes({
  "0%": {
    height: "0%",
  },
  "25%": {
    height: "0%",
  },
  "50%": {
    height: "100%",
  },
  "75%": {
    height: "100%",
  },
  "100%": {
    height: "0%",
  },
});

export const LoaderFillRootStyle = css({
  "--fill-size-xs": "10px",
  "--fill-size-sm": "12px",
  "--fill-size-md": "20px",
  "--fill-size-lg": "24px",
  "--fill-size-xl": "32px",
  "--fill-size": "var(--fill-size-md)",
  "--fill-color": "var(--raikou-primary-color-filled)",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "var(--fill-size)",
  height: "var(--fill-size)",
  border: "calc(var(--fill-size) / 8) solid var(--fill-color)",
  animation: `${rotateAnimation} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite`,
});

export const LoaderFillPlaneStyle = css({
  width: "100%",
  backgroundColor: "var(--fill-color)",
  animation: `${fillAnimation} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});
