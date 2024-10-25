import { css } from "@stylefusion/react";

export const PaginationRootStyle = css({
  "--pagination-control-size-xs": "22px",
  "--pagination-control-size-sm": "26px",
  "--pagination-control-size-md": "32px",
  "--pagination-control-size-lg": "38px",
  "--pagination-control-size-xl": "44px",
  "--pagination-control-size": "var(--pagination-control-size-md)",
  "--pagination-control-fz": "var(--raikou-font-size-md)",
  "--pagination-active-bg": "var(--raikou-primary-color-filled)",
});

export const PaginationControlStyle = css(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  cursor: "pointer",
  color: "var(--raikou-color-text)",
  height: "var(--pagination-control-size)",
  minWidth: "var(--pagination-control-size)",
  fontSize: "var(--pagination-control-fz)",
  lineHeight: "1",
  borderRadius: "var(--pagination-control-radius, var(--raikou-radius-default))",

  "&:_where([data-with-padding])": {
    padding: "calc(var(--pagination-control-size) / 4)",
  },

  "&:_where(:disabled, [data-disabled])": {
    cursor: "not-allowed",
    opacity: "0.4",
  },

  ...theme.applyStyles("light", {
    borderColor: theme.colors.gray[4],
    backgroundColor: theme.colors.white,

    ...theme.applyStyles("hover", {
      "&:_where(:not(:disabled, [data-disabled]))": {
        backgroundColor: theme.colors.gray[0],
      },
    }),
  }),

  ...theme.applyStyles("dark", {
    borderColor: theme.colors.dark[4],
    backgroundColor: theme.colors.dark[6],

    ...theme.applyStyles("hover", {
      "&:_where(:not(:disabled, [data-disabled]))": {
        backgroundColor: theme.colors.dark[5],
      },
    }),
  }),

  "&:_where([data-active])": {
    backgroundColor: "var(--pagination-active-bg)",
    borderColor: "var(--pagination-active-bg)",
    color: "var(--pagination-active-color, var(--raikou-color-white))",

    ...theme.applyMixin("hover", {
      "&:hover": {
        backgroundColor: "var(--pagination-active-bg)",
      },
    })
  },
}));

export const PaginationDotsStyle = css({
  height: "var(--pagination-control-size)",
  minWidth: "var(--pagination-control-size)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
});
