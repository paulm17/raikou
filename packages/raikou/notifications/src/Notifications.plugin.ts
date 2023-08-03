module.exports = function ({ addComponents }: any) {
  addComponents({
    ".notifications-root": {
      width: "calc(100% - var(--raikou-spacing-md) * 2)",
      position: "fixed",
      zIndex: "var(--notifications-z-index)",
      top: "var(--notifications-top)",
      left: "var(--notifications-left)",
      right: "var(--notifications-right)",
      bottom: "var(--notifications-bottom)",
      transform: "var(--notifications-transform)",
      maxWidth: "var(--notifications-container-width)",
    },

    ".notifications-notification": {
      "& + &": {
        marginTop: "var(--raikou-spacing-md)",
      },
    },
  });
};
