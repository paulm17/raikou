module.exports = function ({ addComponents, theme }: any) {
  addComponents({
    ".affix-root": {
      position: "fixed",
      zIndex: "var(--affix-z-index)",
      top: "var(--affix-top)",
      left: "var(--affix-left)",
      right: "var(--affix-right)",
      bottom: "var(--affix-bottom)",
    },
  });
};
