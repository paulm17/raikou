import { rem } from "@raikou/system";

module.exports = function ({ addComponents }: any) {
  addComponents({
    ".configDemo-controls": {
      padding: `calc(var(--raikou-spacing-md) - ${rem("4px")})`,
      /* max-width: rem(250px); */
    },
  });
};
