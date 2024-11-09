import { css, keyframes } from "@stylefusion/react";

export const IndicatorKeyFrames = keyframes({
  "0%": {
    opacity: 0.6,
    transform: "scale(0)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(2.8)",
  },
});

export const IndicatorRootStyle = css({
  "--indicator-size": "10px",
  "--indicator-color": "var(--raikou-primary-color-filled)",

  position: "relative",
  display: "block",

  "&:_where([data-inline])": {
    display: "inline-block",
  },
});

export const IndicatorIndicatorStyle = css({
  position: "absolute",
  top: "var(--indicator-top)",
  left: "var(--indicator-left)",
  right: "var(--indicator-right)",
  bottom: "var(--indicator-bottom)",
  transform: "translate(var(--indicator-translate-x), var(--indicator-translate-y))",
  minWidth: "var(--indicator-size)",
  height: "var(--indicator-size)",
  borderRadius: "var(--indicator-radius, 1000rem)",
  zIndex: "var(--indicator-z-index, 200)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "var(--raikou-font-size-xs)",
  backgroundColor: "var(--indicator-color)",
  color: "var(--indicator-text-color, var(--raikou-color-white))",
  whiteSpace: "nowrap",

  "&:before": {
    content: "''",
    position: "absolute",
    inset: 0,
    backgroundColor: "var(--indicator-color)",
    borderRadius: "var(--indicator-radius, 1000rem)",
    zIndex: "-1",
  },

  "&:_where([data-with-label])": {
    paddingInline: "calc(var(--raikou-spacing-xs) / 2)",
  },

  "&:_where([data-with-border])": {
    border: "2px solid var(--raikou-color-body)",
  },

  "&[data-processing]": {
    "&:before": {
      animation: `${IndicatorKeyFrames} 1000ms linear infinite`,
    },
  },
});