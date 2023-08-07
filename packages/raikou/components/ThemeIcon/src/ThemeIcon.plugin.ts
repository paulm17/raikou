import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".themeIcon-root": {
      "--ti-size-xs": rem("18px"),
      "--ti-size-sm": rem("22px"),
      "--ti-size-md": rem("28px"),
      "--ti-size-lg": rem("34px"),
      "--ti-size-xl": rem("44px"),

      lineHeight: "1",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      userSelect: "none",

      width: "var(--ti-size)",
      height: "var(--ti-size)",
      minWidth: "var(--ti-size)",
      minHeight: "var(--ti-size)",
      borderRadius: "var(--ti-radius)",
      background: "var(--_ti-bg, var(--ti-bg))",
      color: "var(--_ti-color, var(--ti-color))",
      border: "var(--ti-bd)",
    },
  });
};
