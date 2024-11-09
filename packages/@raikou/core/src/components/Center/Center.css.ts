import { css } from "@stylefusion/react";

export const CenterRootStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  '&:_where([data-inline])': {
    display: "inline-flex",
  },
});
