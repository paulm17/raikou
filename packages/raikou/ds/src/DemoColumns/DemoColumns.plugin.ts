import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".demoColumns-columns": {
      display: "flex",

      "@media (max-width: 55em)": {
        flexDirection: "column",
      },
    },

    ".demoColumns-controls": {
      flex: `0 0 ${rem("250px")}`,
      borderLeft: `${rem("1px")} solid var(--_demo-border)`,
      padding: rem("4px"),
      paddingBottom: "var(--raikou-spacing-xs)",

      "@mixin rtl": {
        borderLeft: "none",
        borderRight: `${rem("1px")} solid var(--_demo-border)`,
      },

      "@media (max-width: 55em)": {
        flex: "unset",
        borderLeft: "none",
        borderRight: "none !important",
        borderTop: `${rem("1px")} solid var(--_demo-border)`,
      },
    },

    ".demoColumns-header": {
      paddingTop: `calc(var(--raikou-spacing-md) - ${rem("4px")})`,
      marginLeft: rem(-"4px"),
      marginRight: rem(-"4px"),
      borderBottom: `${rem("1px")} solid var(--_demo-border)`,
      paddingLeft: "var(--raikou-spacing-md)",
      paddingRight: "var(--raikou-spacing-md)",
      paddingBottom: "var(--raikou-spacing-xs)",
      marginBottom: "var(--raikou-spacing-xs)",
    },
  });
};
