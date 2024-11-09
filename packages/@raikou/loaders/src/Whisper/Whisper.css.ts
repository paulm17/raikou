import { css, keyframes } from "@stylefusion/react";

const spinAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "25%": {
    transform: "rotate(90deg)",
  },
  "50%": {
    transform: "rotate(180deg)",
  },
  "75%": {
    transform: "rotate(270deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const LoaderWhisperRootStyle = css({
  "--whisper-size-xs": "25px",
  "--whisper-size-sm": "30px",
  "--whisper-size-md": "50px",
  "--whisper-size-lg": "61px",
  "--whisper-size-xl": "80px",
  "--whisper-size": "var(--whisper-size-md)",
  "--whisper-color": "var(--raikou-primary-color-filled)",
  position: "relative",
  width: "var(--whisper-size)",
  height: "var(--whisper-size)",
  animation: `${spinAnimation} 10s infinite`,
});

export const LoaderWhisperBallStyle = css({
  float: "left",
  clear: "right",
  margin: "calc(var(--whisper-size) / 15)",
  width: "calc(var(--whisper-size) / 5)",
  height: "calc(var(--whisper-size) / 5)",
  borderRadius: "2px",
  backgroundColor: "var(--whisper-color)",
  animationName: "whisper-loader",
  animationDirection: "alternate",
  animationDuration: "800ms",
  animationIterationCount: "infinite",
  "&:nth-child(1)": {
    animationDelay: "200ms",
  },
  "&:nth-child(2)": {
    animationDelay: "400ms",
  },
  "&:nth-child(3)": {
    animationDelay: "600ms",
  },
  "&:nth-child(4)": {
    animationDelay: "400ms",
  },
  "&:nth-child(5)": {
    animationDelay: "600ms",
  },
  "&:nth-child(6)": {
    animationDelay: "800ms",
  },
  "&:nth-child(7)": {
    animationDelay: "600ms",
  },
  "&:nth-child(8)": {
    animationDelay: "800ms",
  },
  "&:nth-child(9)": {
    animationDelay: "1s",
  },
});
