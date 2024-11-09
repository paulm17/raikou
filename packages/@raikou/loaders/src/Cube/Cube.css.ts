import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  from: { transform: "rotateX(0deg) rotateY(0deg)" },
  to: { transform: "rotateX(360deg) rotateY(360deg)" },
});

export const LoaderCubeRootStyle = css({
  "--cube-size-xs": "12px",
  "--cube-size-sm": "15px",
  "--cube-size-md": "25px",
  "--cube-size-lg": "30px",
  "--cube-size-xl": "40px",
  "--cube-size": "var(--cube-size-md)",
  "--cube-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--cube-size)",
  height: "var(--cube-size)",
  perspective: "calc(var(--cube-size) * 4)",
});

export const LoaderCubeWrapperStyle = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "inherit",
  height: "inherit",
});

export const LoaderCubeCubeStyle = css({
  position: "relative",
  width: "var(--cube-size)",
  height: "var(--cube-size)",
  transformStyle: "preserve-3d",
  animation: `${rotateAnimation} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite`,
});

const side = {
  backfaceVisibility: "hidden",
  display: "block",
  position: "absolute",
  width: "inherit",
  height: "inherit",
};

export const LoaderCubeSide1Style = css({
  ...side,
  backgroundColor: "var(--cube-color)",
  transform:
    "rotateX(0deg) rotateY(0deg) translateZ(calc(var(--cube-size) / 2))",
});

export const LoaderCubeSide2Style = css({
  ...side,
  backgroundColor: "var(--cube-color)",
  transform:
    "rotateX(0deg) rotateY(180deg) translateZ(calc(var(--cube-size) / 2))",
});

export const LoaderCubeSide3Style = css({
  ...side,
  backgroundColor: "darken(var(--cube-color), 0.5)",
  transform:
    "rotateX(-90deg) rotateY(0deg) translateZ(calc(var(--cube-size) / 2))",
});

export const LoaderCubeSide4Style = css({
  ...side,
  backgroundColor: "darken(var(--cube-color), 0.5)",
  transform:
    "rotateX(90deg) rotateY(0deg) translateZ(calc(var(--cube-size) / 2))",
});

export const LoaderCubeSide5Style = css({
  ...side,
  backgroundColor: "darken(var(--cube-color), 0.5)",
  transform:
    "rotateX(0deg) rotateY(90deg) translateZ(calc(var(--cube-size) / 2))",
});

export const LoaderCubeSide6Style = css({
  ...side,
  backgroundColor: "darken(var(--cube-color), 0.5)",
  transform:
    "rotateX(0deg) rotateY(-90deg) translateZ(calc(var(--cube-size) / 2))",
});
