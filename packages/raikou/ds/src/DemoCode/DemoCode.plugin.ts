import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".demoCode-code": {
      borderBottomRightRadius: "var(--raikou-radius-md)",
      borderBottomLeftRadius: "var(--raikou-radius-md)",
      overflow: "hidden",
      borderTop: `${rem("1px")} solid var(--_demo-border)`,
    },
  });
};
