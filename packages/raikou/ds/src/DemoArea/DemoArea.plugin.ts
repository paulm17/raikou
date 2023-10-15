import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".demoArea-demo": {
      padding: "var(--_demo-spacing, 0rem)",
      flex: "1",
      borderTopLeftRadius: `calc(var(--raikou-radius-md) - ${rem("1px")})`,
      borderTopRightRadius: `calc(var(--raikou-radius-md) - ${rem("1px")})`,

      "&[data-with-padding]": {
        "--_demo-spacing": "var(--raikou-spacing-md)",
      },

      "&[data-dimmed]": {
        '[data-raikou-color-scheme="light"] &': {
          backgroundColor: "#f8f9fa",
        },
        '[data-raikou-color-scheme="dark"] &': {
          backgroundColor: "#141517",
        },
      },

      "&[data-centered]": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },

      "&[data-striped]": {
        borderTopLeftRadius: `calc(var(--raikou-radius-md) - rem(1px))`,
        background: `repeating-linear-gradient(
            45deg,
            transparent 0,
            transparent rem(10px),
            var(--stripe-color) rem(10px),
            var(--stripe-color) 12px
          ),
          repeating-linear-gradient(
            135deg,
            transparent 0,
            transparent rem(10px),
            var(--stripe-color) rem(10px),
            var(--stripe-color) rem(12px)
          )`,

        '[dir="rtl"] &': {
          borderTopRightRadius: `calc(var(--raikou-radius-md) - ${rem("1px")})`,
          borderTopLeftRadius: "0",
        },

        '[data-raikou-color-scheme="light"] &': {
          "--stripe-color": "rgba(0, 0, 0, 0.03)",
        },

        '[data-raikou-color-scheme="dark"] &': {
          "--stripe-color": "rgba(255, 255, 255, 0.03)",
        },
      },
    },

    ".demoArea-demoInner": {
      flex: "var(--demo-flex)",
      maxWidth: "var(--demo-max-width, 100%)",
      minHeight: "var(--demo-min-height, unset)",
      marginLeft: "var(--demo-margin-y, unset)",
      marginRight: "var(--demo-margin-y, unset)",
    },
  });
};
