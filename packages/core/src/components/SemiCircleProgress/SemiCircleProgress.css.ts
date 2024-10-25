import { css } from "@stylefusion/react";

export const SemiCircleProgressRootStyle = css(({ theme }: any) => ({
  "--scp-filled-segment-color": "var(--raikou-primary-color-filled)",
  "--scp-transition-duration": "0ms",
  "--scp-thickness": "10px",

  ...theme.applyStyles("light", {
    "--scp-empty-segment-color": theme.colors.gray[2],
  }),

  ...theme.applyStyles("dark", {
    "--scp-empty-segment-color": theme.colors.dark[4],
  }),

  position: "relative",
  width: "fit-content",
}));

export const SemiCircleProgressSvgStyle = css({
  display: "block",
  transform: "var(--scp-rotation)",
  overflow: "hidden",
});

export const SemiCircleProgressFilledSegmentStyle = css({
  transition:
    "stroke-dashoffset var(--scp-transition-duration) ease, stroke-dasharray var(--scp-transition-duration) ease, stroke var(--scp-transition-duration)",
});

export const SemiCircleProgressLabelStyle = css({
  position: "absolute",
  margin: 0,
  padding: 0,
  insetInline: 0,
  textAlign: "center",
  zIndex: 1,

  "&:_where([data-position='bottom'])": {
    bottom: 0,
    paddingInline: "calc(var(--scp-thickness) * 2)",

    "&:_where([data-orientation='down'])": {
      bottom: "auto",
      top: 0,
    },
  },

  "&:_where([data-position='center'])": {
    top: "50%",
    paddingInline: "calc(var(--scp-thickness) * 3)",
  },
});