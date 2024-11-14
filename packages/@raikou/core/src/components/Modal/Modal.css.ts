import { css } from '@stylefusion/react';

export const ModalInnerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'var(--modal-inner-align, flex-start)',
  paddingTop: 'var(--modal-inner-y-offset, var(--modal-y-offset))',
  paddingBottom: 'var(--modal-inner-y-offset, var(--modal-y-offset))',
  paddingInline: 'var(--modal-inner-x-offset, var(--modal-x-offset))',
});

export const ModalRootStyle = css({
  '--modal-size-xs': '320px',
  '--modal-size-sm': '380px',
  '--modal-size-md': '440px',
  '--modal-size-lg': '620px',
  '--modal-size-xl': '780px',
  '--modal-size': 'var(--modal-size-md)',

  '--modal-y-offset': '5dvh',
  '--modal-x-offset': '5vw',

  '&[data-full-screen]': {
    '--modal-border-radius': '0 !important',

    '.content': {
      '--modal-content-flex': '0 0 100%',
      '--modal-content-max-height': 'auto',
      '--modal-content-height': '100dvh',
    },

    '.inner': {
      '--modal-inner-y-offset': 0,
      '--modal-inner-x-offset': 0,
    },
  },

  '&[data-centered]': {
    [`${ModalInnerStyle}`]: {
      '--modal-inner-align': 'center',
    },
  },
});

export const ModalHeaderStyle = css({
  borderStartStartRadius: 'var(--modal-radius, var(--raikou-radius-default))',
  borderStartEndRadius: 'var(--modal-radius, var(--raikou-radius-default))',
});

export const ModalContentStyle = css({
  flex: 'var(--modal-content-flex, 0 0 var(--modal-size))',
  maxWidth: '100%',
  maxHeight: 'var(--modal-content-max-height, calc(100dvh - var(--modal-y-offset) * 2))',
  height: 'var(--modal-content-height, auto)',
  overflowY: 'auto',

  '&[data-full-screen]': {
    borderRadius: 0,
  },

  '&[data-hidden]': {
    opacity: '0 !important',
    pointerEvents: 'none',
  },
});
