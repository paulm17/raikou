import { css } from "@stylefusion/react";

export const RadioIndicatorStyle = css(({ theme }) => ({
  "--radio-size-xs": "16px",
  "--radio-size-sm": "20px",
  "--radio-size-md": "24px",
  "--radio-size-lg": "30px",
  "--radio-size-xl": "36px",

  "--radio-icon-size-xs": "6px",
  "--radio-icon-size-sm": "8px",
  "--radio-icon-size-md": "10px",
  "--radio-icon-size-lg": "14px",
  "--radio-icon-size-xl": "16px",

  "--radio-icon-size": "var(--radio-icon-size-sm)",
  "--radio-size": "var(--radio-size-sm)",
  "--radio-color": "var(--raikou-primary-color-filled)",
  "--radio-icon-color": "var(--raikou-color-white)",

  position: "relative",
  border: "1px solid transparent",
  width: "var(--radio-size)",
  minWidth: "var(--radio-size)",
  height: "var(--radio-size)",
  minHeight: "var(--radio-size)",
  borderRadius: "var(--radio-radius, 10000px)",
  transition: "border-color 100ms ease, background-color 100ms ease",
  cursor: "var(--raikou-cursor-type)",
  WebkitTapHighlightColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ...theme.applyStyles("light", {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray[4],
  }),

  ...theme.applyStyles("dark", {
    backgroundColor: theme.colors.dark[6],
    borderColor: theme.colors.dark[4],
  }),

  "&[data-indeterminate], &[data-checked]": {
    backgroundColor: "var(--radio-color)",
    borderColor: "var(--radio-color)",

    [`& > .${RadioIndicatorIconStyle}`]: {
      opacity: 1,
      transform: "none",
      color: "var(--radio-icon-color)",
    },
  },

  "&[data-disabled]": {
    cursor: "not-allowed",

    ...theme.applyStyles("light", {
      backgroundColor: theme.colors.gray[2],
      borderColor: theme.colors.gray[3],
    }),

    ...theme.applyStyles("dark", {
      backgroundColor: theme.colors.dark[6],
      borderColor: theme.colors.dark[6],
    }),

    [`&[data-checked] > .${RadioIndicatorIconStyle}`]: {
      ...theme.applyStyles("light", {
        color: theme.colors.gray[5],
      }),

      ...theme.applyStyles("dark", {
        color: theme.colors.dark[3],
      }),
    },
  },
  "[data-variant='outline']": {
    "&[data-indeterminate]:not([data-disabled]), &[data-checked]:not([data-disabled])":
      {
        backgroundColor: "transparent",
        borderColor: "var(--radio-color)",

        [`& > .${RadioIndicatorIconStyle}`]: {
          color: "var(--radio-color)",
          opacity: 1,
          transform: "none",
        },
      },
  },
}));

export const RadioIndicatorIconStyle = css({
  display: "block",
  width: "var(--radio-icon-size)",
  height: "var(--radio-icon-size)",
  color: "transparent",
  pointerEvents: "none",
  transform: "translateY(rem(5px)) scale(0.5)",
  opacity: 1,
  transition: "transform 100ms ease, opacity 100ms ease",
});
