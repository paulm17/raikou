import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "0%": {
    transform: "rotateX(0deg)",
  },
  "25%": {
    transform: "rotateX(-90deg)",
  },
  "50%": {
    transform: "rotateX(-180deg)",
  },
  "75%": {
    transform: "rotateX(-270deg)",
  },
  "100%": {
    transform: "rotateX(-360deg)",
  },
});

export const LoaderSpiralRootStyle = css({
  "--spiral-size-xs": "20px",
  "--spiral-size-sm": "24px",
  "--spiral-size-md": "40px",
  "--spiral-size-lg": "49px",
  "--spiral-size-xl": "64px",
  "--spiral-size": "var(--spiral-size-md)",
  "--spiral-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--spiral-size)",
  height: "calc(var(--spiral-size) / 4)",
  perspective: "calc(var(--spiral-size) * 3)",
});

export const LoaderSpiralCubeWrapperStyle = css({
  position: "absolute",
  top: 0,
  width: "inherit",
  height: "inherit",
});

export const LoaderSpiralCubeStyle = css({
  position: "relative",
  display: "block",
  width: "calc(var(--spiral-size) / 4)",
  height: "calc(var(--spiral-size) / 4)",
  transformStyle: "preserve-3d",
  animation: `${rotateAnimation} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});

const cubeSide = {
  backfaceVisibility: "hidden",
  display: "block",
  position: "absolute",
  width: "inherit",
  height: "inherit",
};

export const LoaderSpiralCubeSide1Style = css({
  ...cubeSide,
  backgroundColor: "var(--spiral-color)",
  transform:
    "rotateX(0deg) rotateY(0deg) translateZ(calc(var(--spiral-size) / 8))",
});

export const LoaderSpiralCubeSide2Style = css({
  ...cubeSide,
  backgroundColor: "var(--spiral-color)",
  transform:
    "rotateX(0deg) rotateY(180deg) translateZ(calc(var(--spiral-size) / 8))",
});

export const LoaderSpiralCubeSide3Style = css({
  ...cubeSide,
  backgroundColor: "darken(var(--spiral-color), 0.5)",
  transform:
    "rotateX(-90deg) rotateY(0deg) translateZ(calc(var(--spiral-size) / 8))",
});

export const LoaderSpiralCubeSide4Style = css({
  ...cubeSide,
  backgroundColor: "darken(var(--spiral-color), 0.5)",
  transform:
    "rotateX(90deg) rotateY(0deg) translateZ(calc(var(--spiral-size) / 8))",
});
