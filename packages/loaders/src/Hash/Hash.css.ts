import { css } from "@stylefusion/react";

export const LoaderHashLoaderStyle = css({
  "--hash-size-xs": "25px",
  "--hash-size-sm": "30px",
  "--hash-size-md": "50px",
  "--hash-size-lg": "61px",
  "--hash-size-xl": "80px",
  "--hash-size": "var(--hash-size-md)",
  "--hash-color": "var(--raikou-primary-color-filled)",
  display: "inherit",
  position: "relative",
  width: "var(--hash-size)",
  height: "var(--hash-size)",
  transform: "rotate(165deg)",
});

const LoaderHashStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "block",
  borderRadius: "calc(var(--hash-size) / 10)",
  transform: "translate(-50%, -50%)",
};

export const LoaderHash1Style = css({
  ...LoaderHashStyle,
  animation: `hash-before-loader calc(2s / var(--hash-speed-multiplier)) infinite`,
});

export const LoaderHash2Style = css({
  ...LoaderHashStyle,
  animation: `hash-after-loader calc(2s / var(--hash-speed-multiplier)) infinite`,
});
