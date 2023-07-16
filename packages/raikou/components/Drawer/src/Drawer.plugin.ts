import { rem } from "@raikou/core";

module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".drawer-root": {
      "--drawer-size-xs": rem("320px"),
      "--drawer-size-sm": rem("380px"),
      "--drawer-size-md": rem("440px"),
      "--drawer-size-lg": rem("620px"),
      "--drawer-size-xl": rem("780px"),
    },

    ".drawer-header": {
      zIndex: 1000,
    },

    ".drawer-content": {
      "--paper-radius": "0 !important",
      flex: "var(--drawer-flex)",
      height: "var(--drawer-height)",
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: 0,
      overflowY: "auto",
    },

    ".drawer-inner": {
      display: "flex",
      justifyContent: "var(--drawer-justify)",
      alignItems: "var(--drawer-align)",
    },
  });
};
