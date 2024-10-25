import { css } from '@stylefusion/react';

export const PickerInputBaseStyle = css({
  cursor: "pointer",
  lineHeight: "unset",

  "&:_where([data-read-only])": {
    cursor: "default",
  },
});
