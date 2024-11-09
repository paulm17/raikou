import { css } from "@stylefusion/react";

export const NavLinkRootStyle = css(({ theme }) => ({
  "--nl-bg": "var(--raikou-primary-color-light)",
  "--nl-hover": "var(--raikou-primary-color-light-hover)",
  "--nl-color": "var(--raikou-primary-color-light-color)",

  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "8px var(--raikou-spacing-sm)",
  userSelect: "none",

  ...theme.applyMixin("hover", {
    "&:hover": {
      ...theme.applyStyles("light", {
        backgroundColor: theme.colors.gray[0],
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: theme.colors.dark[6],
      }),
    },
  }),

  "&:_where([data-disabled])": {
    opacity: 0.4,
    pointerEvents: "none",
  },

  '&:_where([data-active], [aria-current="page"])': {
    backgroundColor: "var(--nl-bg)",
    color: "var(--nl-color)",

    ...theme.applyMixin("hover", {
      "&:hover": {
        backgroundColor: "var(--nl-hover)",
      },
    }),

    ".description": {
      "--description-opacity": 0.9,
      "--description-color": "var(--nl-color)",
    },
  },
}));

export const NavLinkSectionStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 150ms ease",

  "& > svg": {
    display: "block",
  },

  '&:_where([data-position="left"])': {
    marginInlineEnd: "var(--raikou-spacing-sm)",
  },

  '&:_where([data-position="right"])': {
    marginInlineStart: "var(--raikou-spacing-sm)",
  },

  "&:_where([data-rotate])": {
    transform: "rotate(90deg)",
  },
});

export const NavLinkLabelStyle = css({
  fontSize: "var(--raikou-font-size-sm)",
});

export const NavLinkBodyStyle = css({
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",

  "&:_where([data-no-wrap])": {
    whiteSpace: "nowrap",
  },
});

export const NavLinkDescriptionStyle = css({
  display: "block",
  fontSize: "var(--raikou-font-size-xs)",
  opacity: "var(--description-opacity, 1)",
  color: "var(--description-color, var(--raikou-color-dimmed))",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "&:_where([data-no-wrap])": {
    whiteSpace: "nowrap",
  },
});

export const NavLinkChildrenStyle = css({
  paddingInlineStart: "var(--nl-offset, var(--raikou-spacing-lg))",
});

export const NavLinkChevronStyle = css({
  transform: "rotate(-90deg)",
});
