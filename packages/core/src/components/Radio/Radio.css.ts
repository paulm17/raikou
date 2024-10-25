import { css } from "@stylefusion/react";

export const RadioRootStyle = css({
  "--radio-size-xs": "16px",
  "--radio-size-sm": "20px",
  "--radio-size-md": "24px",
  "--radio-size-lg": "30px",
  "--radio-size-xl": "36px",
  "--radio-size": "var(--radio-size-sm)",

  "--radio-icon-size-xs": "6px",
  "--radio-icon-size-sm": "8px",
  "--radio-icon-size-md": "10px",
  "--radio-icon-size-lg": "14px",
  "--radio-icon-size-xl": "16px",
  "--radio-icon-size": "var(--radio-icon-size-sm)",
  "--radio-icon-color": "var(--raikou-color-white)",
});

export const RadioInnerStyle = css({
  position: "relative",
  width: "var(--radio-size)",
  height: "var(--radio-size)",
  order: 1,

  "&:_where([data-label-position='left'])": {
    order: 2,
  },
});

export const RadioIconStyle = css({
  color: "var(--radio-icon-color)",
  opacity: "var(--radio-icon-opacity, 0)",
  transform: "var(--radio-icon-transform, scale(0.2) translateY(rem(10px)))",
  transition: "opacity 100ms ease, transform 200ms ease",
  pointerEvents: "none",
  width: "var(--radio-icon-size)",
  height: "var(--radio-icon-size)",
  position: "absolute",
  top: "calc(50% - var(--radio-icon-size) / 2)",
  left: "calc(50% - var(--radio-icon-size) / 2)",
});

export const RadioRadioStyle = css(({ theme }: any) => ({
  border: "1px solid",
  position: "relative",
  appearance: "none",
  width: "var(--radio-size)",
  height: "var(--radio-size)",
  borderRadius: "var(--radio-radius, var(--radio-size))",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionProperty: "background-color, border-color",
  transitionTimingFunction: "ease",
  transitionDuration: "100ms",
  cursor: "var(--raikou-cursor-type)",
  WebkitTapHighlightColor: "transparent",

  ...theme.applyStyles('light', {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
  }),

  ...theme.applyStyles('dark', {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.dark[4],
  }),

  "&:checked": {
    backgroundColor: "var(--radio-color, var(--raikou-primary-color-filled))",
    borderColor: "var(--radio-color, var(--raikou-primary-color-filled))",

    [`& + .${RadioIconStyle}`]: {
      "--radio-icon-opacity": 1,
      "--radio-icon-transform": "scale(1)",
    },
  },

  "&:disabled": {
    cursor: "not-allowed",

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.gray[1],
      borderColor: theme.colors.gray[2],

      [`& + .${RadioIconStyle}`]: {
        "--radio-icon-color": theme.colors.gray[3],
      },
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[5],
      borderColor: theme.colors.dark[4],

      [`& + .${RadioIconStyle}`]: {
        "--radio-icon-color": theme.colors.dark[7],
      },
    }),
  },

  "&:_where([data-error])": {
    borderColor: "var(--raikou-color-error)",
  },

  "[data-variant='outline']": {
    [`& + .${RadioIconStyle}`]: {
      "--radio-icon-color": "var(--radio-color)",
    },

    "&:checked:not(:disabled)": {
      backgroundColor: "transparent",
      borderColor: "var(--radio-color)",

      [`& + .${RadioIconStyle}`]: {
        "--radio-icon-color": "var(--radio-color)",
        "--radio-icon-opacity": 1,
        "--radio-icon-transform": "scale(1)",
      },
    },
  },
}));