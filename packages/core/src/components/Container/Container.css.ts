import { css } from "@stylefusion/react";

export const ContainerRootStyle = css({
  '--container-size-xs': '540px',
  '--container-size-sm': '720px',
  '--container-size-md': '960px',
  '--container-size-lg': '1140px',
  '--container-size-xl': '1320px',
  '--container-size': 'var(--container-size-md)',

  maxWidth: 'var(--container-size)',
  paddingInline: 'var(--raikou-spacing-md)',
  marginInline: 'auto',

  '&:_where([data-fluid])': {
    maxWidth: '100%',
  },
})