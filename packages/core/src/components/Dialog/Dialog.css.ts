import { css } from "@stylefusion/react";

export const DialogRootStyle = css({
  '--dialog-size-xs': '160px',
  '--dialog-size-sm': '200px',
  '--dialog-size-md': '340px',
  '--dialog-size-lg': '400px',
  '--dialog-size-xl': '500px',
  '--dialog-size': 'var(--dialog-size-md)',

  position: 'relative',
  width: 'var(--dialog-size)',
  maxWidth: 'calc(100vw - var(--raikou-spacing-xl) * 2)',
  minHeight: '50px',
})

export const DialogCloseButtonStyle = css({
  position: 'absolute',
  top: 'calc(var(--raikou-spacing-md) / 2)',
  insetInlineEnd: 'calc(var(--raikou-spacing-md) / 2)',
})