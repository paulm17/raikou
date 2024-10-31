import { css, keyframes } from "@stylefusion/react";

const climbingBoxAnimation = keyframes({
  "0%": {
    transform: `translate(0, calc(var(--loader-size) * -0.14)) rotate(-45deg)`,
  },
  "5%": {
    transform: `translate(0, calc(var(--loader-size) * -0.14)) rotate(-50deg)`,
  },
  "20%": {
    transform: `translate(calc(var(--loader-size) * 0.14), calc(var(--loader-size) * -0.28)) rotate(47deg)`,
  },
  "25%": {
    transform: `translate(calc(var(--loader-size) * 0.14), calc(var(--loader-size) * -0.28)) rotate(45deg)`,
  },
  "30%": {
    transform: `translate(calc(var(--loader-size) * 0.14), calc(var(--loader-size) * -0.28)) rotate(40deg)`,
  },
  "45%": {
    transform: `translate(calc(var(--loader-size) * 0.28), calc(var(--loader-size) * -0.42)) rotate(137deg)`,
  },
  "50%": {
    transform: `translate(calc(var(--loader-size) * 0.28), calc(var(--loader-size) * -0.42)) rotate(135deg)`,
  },
  "55%": {
    transform: `translate(calc(var(--loader-size) * 0.28), calc(var(--loader-size) * -0.42)) rotate(130deg)`,
  },
  "70%": {
    transform: `translate(calc(var(--loader-size) * 0.42), calc(var(--loader-size) * -0.56)) rotate(217deg)`,
  },
  "75%": {
    transform: `translate(calc(var(--loader-size) * 0.42), calc(var(--loader-size) * -0.56)) rotate(220deg)`,
  },
  "100%": {
    transform: `translate(0, calc(var(--loader-size) * -0.14)) rotate(-225deg)`,
  },
});

export const LoaderClimbingBoxContainerStyle = css({
  display: "inherit",
  position: "relative",
  width: "var(--loader-size)",
  height: "var(--loader-size)",
});

export const LoaderClimbingBoxWrapperStyle = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "calc(var(--loader-size) * -0.38)",
  marginLeft: "calc(var(--loader-size) * -0.38)",
  width: "calc(var(--loader-size) * 0.76)",
  height: "calc(var(--loader-size) * 0.76)",
  fontSize: "var(--loader-size)",
});

export const LoaderClimbingBoxStyle = css({
  position: "absolute",
  left: "0",
  bottom: "-0.1em",
  height: "calc(var(--loader-size) * 0.14)",
  width: "calc(var(--loader-size) * 0.14)",
  backgroundColor: "transparent",
  borderRadius: "15%",
  border: `calc(var(--loader-size) * 0.035) solid var(--loader-color)`,
  transform: "translate(0, -1em) rotate(-45deg)",
  animation: `${climbingBoxAnimation} calc(2.5s / var(--loader-speed-multiplier)) infinite cubic-bezier(0.79, 0, 0.47, 0.97)`,
});

export const LoaderClimbingBoxHillStyle = css({
  position: "absolute",
  width: "var(--loader-size)",
  height: "var(--loader-size)",
  top: "calc(var(--loader-size) * 0.26)",
  left: "calc(var(--loader-size) * 0.26)",
  borderLeft: `calc(var(--loader-size) * 0.035) solid var(--loader-color)`,
  transform: "rotate(45deg)",
});
