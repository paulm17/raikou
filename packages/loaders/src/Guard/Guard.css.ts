import { css, keyframes } from "@stylefusion/react";

const rotateAnimation = keyframes({
  "0%": {
    transform: "rotateY(90deg)",
  },
  "50%": {
    transform: "rotateY(0deg)",
  },
  "100%": {
    transform: "rotateY(90deg)",
  },
});

export const LoaderGuardRootStyle = css({
  "--guard-size-xs": "20px",
  "--guard-size-sm": "24px",
  "--guard-size-md": "40px",
  "--guard-size-lg": "49px",
  "--guard-size-xl": "64px",
  "--guard-size": "var(--guard-size-md)",
  "--guard-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "var(--guard-size)",
  height: "var(--guard-size)",
  perspective: "calc(var(--guard-size) * 3)",
});

export const LoaderGuardCubeWrapperStyle = css({
  position: "absolute",
  width: "var(--guard-size)",
  height: "var(--guard-size)",
});

export const LoaderGuardCubeStyle = css({
  position: "relative",
  display: "block",
  width: "calc(var(--guard-size) / 4)",
  height: "calc(var(--guard-size) / 4)",
  transformStyle: "preserve-3d",
  animation: `${rotateAnimation} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite`,
});

const LoaderGuardCubeSideStyle = {
  display: "block",
  position: "absolute",
  width: "inherit",
  height: "inherit",
};

export const LoaderGuardCubeSide1Style = css({
  ...LoaderGuardCubeSideStyle,
  background: "var(--guard-color)",
  transform: "rotateY(0deg) translateZ(calc(var(--guard-size) / 8))",
});

export const LoaderGuardCubeSide2Style = css({
  ...LoaderGuardCubeSideStyle,
  background: "darken(var(--guard-color), 0.5)",
  transform: "rotateY(-90deg) translateZ(calc(var(--guard-size) / 8))",
});
