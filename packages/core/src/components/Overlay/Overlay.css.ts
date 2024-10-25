import { css } from "@stylefusion/react";

export const OverlayRootStyle = css({
  inset: 0,
  position: "absolute",
  background: "var(--overlay-bg, rgba(0, 0, 0, 0.6))",
  backdropFilter: "var(--overlay-filter)",
  WebkitBackdropFilter: "var(--overlay-filter)",
  borderRadius: "var(--overlay-radius, 0)",
  zIndex: "var(--overlay-z-index)",

  "&:_where([data-fixed])": {
    position: "fixed",
  },

  "&:_where([data-center])": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
