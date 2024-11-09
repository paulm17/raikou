import { css, keyframes } from "@stylefusion/react";

const fireAnimation = keyframes({
  "0%": {
    opacity: 1,
    transform: "scale(0.1)",
  },
  "25%": {
    opacity: 0.85,
  },
  "100%": {
    transform: "scale(1)",
    opacity: 0,
  },
});

export const LoaderFireworkRootStyle = css({
  "--firework-size-xs": "20px",
  "--firework-size-sm": "24px",
  "--firework-size-md": "40px",
  "--firework-size-lg": "49px",
  "--firework-size-xl": "64px",
  "--firework-size": "var(--firework-size-md)",
  "--firework-color": "var(--raikou-primary-color-filled)",
  border: "calc(var(--firework-size) / 10) dotted var(--firework-color)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "var(--firework-size)",
  height: "var(--firework-size)",
  borderRadius: "50%",
  animation: `${fireAnimation} 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});
