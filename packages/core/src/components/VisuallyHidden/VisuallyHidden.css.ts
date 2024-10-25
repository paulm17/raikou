import { css } from "@stylefusion/react";

export const VisuallyHiddenRootStyle = css(({ theme }: any) => ({
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
}))