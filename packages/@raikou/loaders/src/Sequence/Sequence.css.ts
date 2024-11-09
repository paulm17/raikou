import { css, keyframes } from "@stylefusion/react";

const rotate = keyframes({
  "0%": {
    top: "40px",
    transform: "rotateY(0deg)",
  },
  "30%": {
    top: "0",
    transform: "rotateY(90deg)",
  },
  "100%": {
    transform: "rotateY(0deg)",
    top: "-40px",
  },
});

export const LoaderSequenceRootStyle = css({
  "--sequence-size-xs": "20px",
  "--sequence-size-sm": "24px",
  "--sequence-size-md": "40px",
  "--sequence-size-lg": "49px",
  "--sequence-size-xl": "64px",
  "--sequence-size": "var(--sequence-size-md)",
  "--sequence-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--sequence-size)",
  height: "calc(var(--sequence-size) / 1.75)",
  perspective: "calc(var(--sequence-size) * 3)",
  overflow: "hidden",
  transform: "rotateY(20deg)",
});

export const LoaderSequenceCubeWrapperStyle = css({
  position: "absolute",
  width: "inherit",
  height: "inherit",
  top: 0,
});

export const LoaderSequenceCubeStyle = css({
  display: "block",
  position: "relative",
  width: "calc(var(--sequence-size) / 8)",
  height: "calc(var(--sequence-size) / 2)",
  transformStyle: "preserve-3d",
  animation: `${rotate} 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
});

export const LoaderSequenceCubeSideStyle = css({
  backfaceVisibility: "hidden",
  display: "block",
  position: "absolute",
  width: "inherit",
  height: "inherit",
  backgroundColor: "var(--sequence-color)",
});
