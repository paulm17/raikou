import { css } from "@stylefusion/react";

export const LoaderRiseRootStyle = css({
  "--rise-size-xs": "8px",
  "--rise-size-sm": "9px",
  "--rise-size-md": "15px",
  "--rise-size-lg": "18px",
  "--rise-size-xl": "24px",
  "--rise-size": "var(--rise-size-md)",
  "--rise-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
});

const LoaderRiseStyle = {
  backgroundColor: "var(--rise-color)",
  width: "var(--rise-size)",
  height: "var(--rise-size)",
  margin: "calc(var(--rise-size) / 4)",
  borderRadius: "100%",
  display: "inline-block",
};

export const LoaderRise1Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-odd calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});

export const LoaderRise2Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-even calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});

export const LoaderRise3Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-odd calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});

export const LoaderRise4Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-even calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});

export const LoaderRise5Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-odd calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});

export const LoaderRise6Style = css({
  ...LoaderRiseStyle,
  animation:
    "rise-loader-even calc(1s / var(--rise-speed-multiplier)) 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)",
});
