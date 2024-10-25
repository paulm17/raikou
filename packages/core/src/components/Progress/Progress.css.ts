import { css, keyframes } from "@stylefusion/react";

const stripesAnimation = keyframes({
  "0%": {
    backgroundPosition: "0 0",
  },
  "100%": {
    backgroundPosition: "40px 0",
  },
});

export const ProgressRootStyle = css(({ theme }: any) => ({
  "--progress-radius": "var(--raikou-radius-default)",
  "--progress-size": "var(--progress-size-md)",

  "--progress-size-xs": "3px",
  "--progress-size-sm": "5px",
  "--progress-size-md": "8px",
  "--progress-size-lg": "12px",
  "--progress-size-xl": "16px",

  position: "relative",
  height: "var(--progress-size)",
  borderRadius: "var(--progress-radius)",
  overflow: "hidden",
  display: "flex",

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.gray[2],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[4],
  }),
}));

export const ProgressSectionStyle = css({
  backgroundColor: "var(--progress-section-color)",
  height: "100%",
  width: "var(--progress-section-width)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundSize: "20px 20px",
  transition: "width var(--progress-transition-duration, 100ms) ease",

  "&:_where([data-striped])": {
    backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
  },

  "&:_where([data-animated])": {
    animation: `${stripesAnimation} 1s linear infinite`,
  },
  
  "&:_where(:last-of-type)": {
    borderRadius: 0,
    borderStartEndRadius: "var(--progress-radius)",
    borderEndEndRadius: "var(--progress-radius)",
  },

  "&:_where(:first-of-type)": {
    borderRadius: 0,
    borderStartStartRadius: "var(--progress-radius)",
    borderEndStartRadius: "var(--progress-radius)",
  }
});

export const ProgressLabelStyle = css({
  color: "var(--progress-label-color, var(--raikou-color-white))",
  fontWeight: "bold",
  userSelect: "none",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  fontSize: "min(calc(var(--progress-size) * 0.65), rem(18px))",
  lineHeight: 1,
  paddingInline: "4px",
});
