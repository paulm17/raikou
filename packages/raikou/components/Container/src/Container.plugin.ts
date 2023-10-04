import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".container-root": {
      "--container-size-xs": rem("540px"),
      "--container-size-sm": rem("720px"),
      "--container-size-md": rem("960px"),
      "--container-size-lg": rem("1140px"),
      "--container-size-xl": rem("1320px"),
      "--container-size": "var(--container-size-md)",

      paddingLeft: "var(--raikou-spacing-md)",
      paddingRight: "var(--raikou-spacing-md)",
      maxWidth: "var(--container-size)",
      marginLeft: "auto",
      marginRight: "auto",

      "&[data-fluid]": {
        "--container-size": "100%",
      },
    },
  });
};
