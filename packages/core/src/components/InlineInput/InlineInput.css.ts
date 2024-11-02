import { css } from "@stylefusion/react";

export const InlineInputRootStyle = css({
  "--label-lh-xs": "16px",
  "--label-lh-sm": "20px",
  "--label-lh-md": "24px",
  "--label-lh-lg": "30px",
  "--label-lh-xl": "36px",
  "--label-lh": "var(--label-lh-sm)",

  '&[data-label-position="left"]': {
    "--label-order": 1,
    "--label-offset-end": "var(--raikou-spacing-sm)",
    "--label-offset-start": 0,
  },
  '&[data-label-position="right"]': {
    "--label-order": 2,
    "--label-offset-end": 0,
    "--label-offset-start": "var(--raikou-spacing-sm)",
  },
});

export const InlineInputBodyStyle = css({
  display: "flex",
});

export const InlineInputLabelWrapperStyle = css({
  "--label-cursor": "var(--raikou-cursor-type)",

  WebkitTapHighlightColor: "transparent",
  display: "inline-flex",
  flexDirection: "column",
  fontSize: "var(--label-fz, var(--raikou-font-size-sm))",
  lineHeight: "var(--label-lh)",
  cursor: "var(--label-cursor)",
  order: "var(--label-order)",

  "fieldset:disabled &, &[data-disabled]": {
    "--label-cursor": "not-allowed",
  },
});

export const InlineInputLabelStyle = css(({ theme }) => ({
  cursor: "var(--label-cursor)",
  color: "inherit",
  paddingInlineStart: "var(--label-offset-start)",
  paddingInlineEnd: "var(--label-offset-end)",

  "fieldset:disabled &, &:_where([data-disabled])": {
    ...theme.applyStyles("light", {
      color: theme.colors.gray[5],
    }),
    ...theme.applyStyles("dark", {
      color: theme.colors.dark[3],
    }),
  },
}));

export const InlineInputDescriptionStyle = css({
  marginTop: "calc(var(--raikou-spacing-xs) / 2)",
  paddingInlineStart: "var(--label-offset-start)",
  paddingInlineEnd: "var(--label-offset-end)",
});

export const InlineInputErrorStyle = css({
  marginTop: "calc(var(--raikou-spacing-xs) / 2)",
  paddingInlineStart: "var(--label-offset-start)",
  paddingInlineEnd: "var(--label-offset-end)",
});
