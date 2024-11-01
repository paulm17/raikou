import { css, keyframes } from "@stylefusion/react";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(1turn)",
  },
});

export const LoaderTrailLoaderStyle = css({
  position: "relative",
  width: "var(--loader-size)",
  height: "var(--loader-size)",
});

const LoaderTrialStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: 9999,
  borderWidth: "2px",
  borderTopColor: "transparent",
  borderRightColor: "transparent",
  borderLeftColor: "transparent",
  borderBottomColor: "var(--loader-color)",
};

export const LoaderTrail1Style = css({
  ...LoaderTrialStyle,
  borderStyle: "solid",
  animation: `${spin} .8s ease infinite`,
});

export const LoaderTrail2Style = css({
  ...LoaderTrialStyle,
  opacity: 0.75,
  borderStyle: "dotted",
  animation: `${spin} .8s linear infinite`,
});
