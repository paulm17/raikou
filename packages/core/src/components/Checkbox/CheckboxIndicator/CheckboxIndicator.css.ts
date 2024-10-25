import { css } from "@stylefusion/react";

export const CheckboxIndicatorIndicatorStyle = css(({ theme }: any) => ({
  "--checkbox-size-xs": "16px",
  "--checkbox-size-sm": "20px",
  "--checkbox-size-md": "24px",
  "--checkbox-size-lg": "30px",
  "--checkbox-size-xl": "36px",

  "--checkbox-size": "var(--checkbox-size-sm)",
  "--checkbox-color": "var(--raikou-primary-color-filled)",
  "--checkbox-icon-color": "var(--raikou-color-white)",
  
  position: "relative",
  border: "1px solid transparent",
  width: "var(--checkbox-size)",
  minWidth: "var(--checkbox-size)",
  height: "var(--checkbox-size)",
  minHeight: "var(--checkbox-size)",
  borderRadius: "var(--raikou-radius-default)",
  transition: "border-color 100ms ease, background-color 100ms ease",
  cursor: "var(--raikou-cursor-type)",
  webkitTapHighlightColor: "transparent",
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
    backgroundColor: "var(--checkbox-color)",
    borderColor: "var(--checkbox-color)",

    [`& > .${CheckboxIndicatorIconStyle}`]: {
      opacity: 1,
      transform: "none",
      color: "var(--checkbox-icon-color)",
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

    [`&[data-checked] > .${CheckboxIndicatorIconStyle}`]: {
      ...theme.applyStyles("light", {
        color: theme.colors.gray[5],
      }),
      ...theme.applyStyles("dark", {
        color: theme.colors.dark[3],
      }),
    },
  },

  "&[data-variant=outline]": {
    "&[data-indeterminate]:not([data-disabled]), &[data-checked]:not([data-disabled])": {
      backgroundColor: "transparent",
      borderColor: "var(--checkbox-color)",

      [`& > .${CheckboxIndicatorIconStyle}`]: {
        color: "var(--checkbox-color)",
        opacity: 1,
        transform: "none",
      },
    },
  },
}));

export const CheckboxIndicatorIconStyle = css({
  display: "block",
  width: "60%",
  color: "transparent",
  pointerEvents: "none",
  transform: "translateY(rem(5px)) scale(0.5)",
  opacity: 1,
  transition: "transform 100ms ease, opacity 100ms ease",
});