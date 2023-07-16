import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".avatar-root": {
      "--avatar-size-xs": rem("16px"),
      "--avatar-size-sm": rem("26px"),
      "--avatar-size-md": rem("38px"),
      "--avatar-size-lg": rem("56px"),
      "--avatar-size-xl": rem("84px"),

      "-webkit-tap-highlight-color": "transparent",
      position: "relative",
      display: "block",
      userSelect: "none",
      overflow: "hidden",
      borderRadius: "var(--avatar-radius)",
      textDecoration: "none",
      border: "var(--_avatar-border, none)",
      backgroundColor: "var(--_avatar-bg, transparent)",
      padding: 0,
      width: "var(--avatar-size)",
      height: "var(--avatar-size)",
      minWidth: "var(--avatar-size)",
      marginLeft: "var(--_avatar-ml, unset)",
      marginRight: "var(--_avatar-mr, unset)",

      "&[data-within-group]": {
        "--_avatar-ml": "calc(var(--ag-spacing) * -1)",
        "--_avatar-border": `${rem("2px")} solid var(--raikou-color-body)`,
        "--_avatar-bg": "var(--raikou-color-body)",

        '[dir="rtl"] &': {
          "--_avatar-mr": "calc(var(--ag-spacing) * -1)",
          "--_avatar-ml": "unset",
        },
      },
    },

    ".avatar-image": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      display: "block",
    },

    ".avatar-placeholder": {
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      userSelect: "none",
      borderRadius: "var(--avatar-radius)",
      fontSize: "calc(var(--avatar-size) / 2.5)",
      color: "var(--avatar-color)",
      background: "var(--avatar-bg)",
      border: "var(--avatar-bd)",

      "& > [data-avatar-placeholder-icon]": {
        width: "70%",
        height: "70%",
      },
    },

    ".avatarGroup-root": {
      display: "flex",
      paddingLeft: "var(--ag-spacing)",

      '[dir="rtl"] &': {
        paddingLeft: 0,
        paddingRight: "var(--ag-spacing)",
      },
    },
  });
};
