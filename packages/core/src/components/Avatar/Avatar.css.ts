import { css } from "@stylefusion/react";

// Avatar.Group root element
export const AvatarGroupStyle = css({
  "--ag-spacing": "var(--raikou-spacing-sm)",
  "--ag-offset": "calc(var(--ag-spacing) * -1)",

  display: "flex",
  paddingInlineStart: "var(--ag-spacing)",
})

/* Avatar root element */
export const AvatarRootStyle = css({
  "--avatar-size-xs": "16px",
  "--avatar-size-sm": "26px",
  "--avatar-size-md": "38px",
  "--avatar-size-lg": "56px",
  "--avatar-size-xl": "84px",

  "--avatar-size": "var(--avatar-size-md)",
  "--avatar-radius": "1000px",
  "--avatar-bg": "var(--raikou-color-gray-light)",
  "--avatar-bd": "1px solid transparent",
  "--avatar-color": "var(--raikou-color-gray-light-color)",
  "--avatar-placeholder-fz": "calc(var(--avatar-size) / 2.5)",

  webkitTapHighlightColor: "transparent",
  position: "relative",
  display: "block",
  userSelect: "none",
  overflow: "hidden",
  borderRadius: "var(--avatar-radius)",
  textDecoration: "none",
  padding: 0,
  width: "var(--avatar-size)",
  height: "var(--avatar-size)",
  minWidth: "var(--avatar-size)",

  "&:_where([data-within-group])": {
    marginInlineStart: "var(--ag-offset)",
    border: "2px solid var(--raikou-color-body)",
    background: "var(--raikou-color-body)",
  },
})

export const AvatarImageStyle = css({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  display: "block",
})

export const AvatarPlaceholderStyle = css({
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  userSelect: "none",
  borderRadius: "var(--avatar-radius)",
  fontSize: "var(--avatar-placeholder-fz)",
  background: "var(--avatar-bg)",
  border: "var(--avatar-bd)",
  color: "var(--avatar-color)",

  "& > [data-avatar-placeholder-icon]": {
    width: "70%",
    height: "70%",
  },
});