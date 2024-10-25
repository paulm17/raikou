import { css } from "@stylefusion/react";
import { rem } from "../../core";

export const BadgeRootStyle = css(({ theme }: any) => ({
  "--badge-height-xs": "16px",
  "--badge-height-sm": "18px",
  "--badge-height-md": "20px",
  "--badge-height-lg": "26px",
  "--badge-height-xl": "32px",

  "--badge-fz-xs": "9px",
  "--badge-fz-sm": "10px",
  "--badge-fz-md": "11px",
  "--badge-fz-lg": "13px",
  "--badge-fz-xl": "16px",

  "--badge-padding-x-xs": "6px",
  "--badge-padding-x-sm": "8px",
  "--badge-padding-x-md": "10px",
  "--badge-padding-x-lg": "12px",
  "--badge-padding-x-xl": "16px",

  "--badge-height": "var(--badge-height-md)",
  "--badge-fz": "var(--badge-fz-md)",
  "--badge-padding-x": "var(--badge-padding-x-md)",
  "--badge-radius": "1000px",
  "--badge-lh": `calc(var(--badge-height) - ${rem("2px")})`,
  "--badge-color": "var(--raikou-color-white)",
  "--badge-bg": "var(--raikou-primary-color-filled)",
  "--badge-border-width": "1px",
  "--badge-bd": "var(--badge-border-width) solid transparent",

  webkitTapHighlightColor: "transparent",
  fontSize: "var(--badge-fz)",
  borderRadius: "var(--badge-radius)",
  height: "var(--badge-height)",
  lineHeight: "var(--badge-lh)",
  textDecoration: "none",
  padding: "0 var(--badge-padding-x)",
  display: "inline-grid",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "0.25px",
  cursor: "default",
  textOverflow: "ellipsis",
  overflow: "hidden",
  color: "var(--badge-color)",
  background: "var(--badge-bg)",
  border: "var(--badge-bd)",

  "&:_where([data-with-left-section], [data-variant='dot'])": {
    gridTemplateColumns: "auto 1fr",
  },

  "&:_where([data-with-right-section])": {
    gridTemplateColumns: "1fr auto",
  },

  "&:_where([data-with-left-section][data-with-right-section], [data-variant='dot'][data-with-right-section])": {
    gridTemplateColumns: "auto 1fr auto",
  },

  "&:_where([data-block])": {
    display: "flex",
    width: "100%",
  },

  "&:_where([data-circle])": {
    paddingInline: "2px",
    display: "flex",
    width: "var(--badge-height)",
  },

  "&:_where([data-variant='dot'])": {
    "--badge-dot-size": "calc(var(--badge-height) / 3.4)",

    ...theme.applyStyles('light', {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.gray[4],
      color: theme.colors.black,
    }),

    ...theme.applyStyles('dark', {
      backgroundColor: theme.colors.dark[5],
      borderColor: theme.colors.dark[5],
      color: theme.colors.white,
    }),

    "&:before": {
      content: "''",
      display: "block",
      width: "var(--badge-dot-size)",
      height: "var(--badge-dot-size)",
      borderRadius: "var(--badge-dot-size)",
      backgroundColor: "var(--badge-dot-color)",
      marginInlineEnd: "var(--badge-dot-size)",
    },
  },
}));

export const BadgeLabelStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  cursor: "inherit",
});

export const BadgeSectionStyle = css({
  "--badge-section-margin": "calc(var(--raikou-spacing-xs) / 2)",

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: `calc(var(--badge-height) - var(--badge-border-width) * 2)`,

  "&:_where([data-position='left'])": {
    marginInlineEnd: "var(--badge-section-margin)",
  },

  "&:_where([data-position='right'])": {
    marginInlineStart: "var(--badge-section-margin)",
  },
});
