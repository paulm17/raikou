import { css } from "@stylefusion/react";

export const DayStyle = css(({ theme }) => ({
  "--day-size-xs": "30px",
  "--day-size-sm": "36px",
  "--day-size-md": "42px",
  "--day-size-lg": "48px",
  "--day-size-xl": "54px",
  "--day-size": "var(--day-size-sm)",

  width: "var(--day-size, var(--day-size-sm))",
  height: "var(--day-size, var(--day-size-sm))",
  fontSize: "calc(var(--day-size) / 2.8)",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderRadius: "var(--raikou-radius-default)",
  color: "var(--raikou-color-text)",
  opacity: 1,

  ...theme.applyMixin("hover", {
    "&:_where(:not([data-static], [data-disabled], [data-selected], [data-in-range])):hover":
      {
        ...theme.applyStyles("light", {
          backgroundColor: theme.colors.gray[0],
        }),
        ...theme.applyStyles("dark", {
          backgroundColor: theme.colors.dark[5],
        }),
      },
  }),

  "&:_where([data-static])": {
    userSelect: "auto",
    cursor: "default",
  },

  "&:_where([data-weekend])": {
    color: theme.colors.red[6],
  },

  "&:_where([data-outside])": {
    color: theme.colors.dimmed,
    opacity: 0.5,
  },

  "&:_where(:disabled, [data-disabled])": {
    color: "var(--raikou-color-dimmed)",
    cursor: "not-allowed",
    opacity: 0.5,
  },

  "&:_where([data-hidden])": {
    display: "none",
  },

  "&:_where([data-today][data-highlight-today]:not([data-selected], [data-in-range]))":
    {
      ...theme.applyStyles("light", {
        border: `1px solid ${theme.colors.gray[4]}`,
      }),
      ...theme.applyStyles("dark", {
        border: `1px solid ${theme.colors.dark[4]}`,
      }),
    },

  "&:_where([data-in-range])": {
    backgroundColor: "var(--raikou-primary-color-light-hover)",
    borderRadius: 0,

    ...theme.applyMixin("hover", {
      "&:_where(:not([data-disabled], [data-static])):hover": {
        backgroundColor: "var(--raikou-primary-color-light)",
      },
    }),
  },

  "&:_where([data-first-in-range])": {
    borderRadius: 0,
    borderStartStartRadius: "var(--raikou-radius-default)",
    borderEndStartRadius: "var(--raikou-radius-default)",
  },

  "&:_where([data-last-in-range])": {
    borderRadius: 0,
    borderEndEndRadius: "var(--raikou-radius-default)",
    borderStartEndRadius: "var(--raikou-radius-default)",
  },

  "&:_where([data-first-in-range][data-last-in-range])": {
    borderRadius: "var(--raikou-radius-default)",
  },

  "&:_where([data-selected])": {
    backgroundColor: "var(--raikou-primary-color-filled)",
    color: "var(--raikou-primary-color-contrast)",

    ...theme.applyMixin("hover", {
      "&:_where(:not([data-disabled], [data-static])):hover": {
        backgroundColor: "var(--raikou-primary-color-filled-hover)",
      },
    }),
  },
}));
