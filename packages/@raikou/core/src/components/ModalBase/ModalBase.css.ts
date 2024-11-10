import { css } from '@stylefusion/react';

export const ModalBaseTitleStyle = css({
  lineHeight: 1,
  padding: 0,
  margin: 0,
  fontWeight: 400,
  fontSize: 'var(--raikou-font-size-md)',
});

export const ModalBaseHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 'var(--mb-padding, var(--raikou-spacing-md))',
  paddingInlineEnd: 'calc(var(--mb-padding, var(--raikou-spacing-md)) - rem(5px))',
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--raikou-color-body)',
  zIndex: 1000,
  minHeight: '60px',
  transition: 'padding-inline-end 100ms',
});

export const ModalBaseInnerStyle = css({
  position: 'fixed',
  width: '100%',
  top: 0,
  bottom: 0,
  zIndex: 'var(--mb-z-index)',
  pointerEvents: 'none',
});

export const ModalBaseContentStyle = css({
  pointerEvents: 'all',
  boxShadow: 'var(--mb-shadow, var(--raikou-shadow-xl))',

  '& [data-raikou-scrollbar]': {
    zIndex: 1001,
  },

  [`&:has([data-raikou-scrollbar][data-state='visible']) .${ModalBaseHeaderStyle}`]: {
    paddingInlineEnd: 'calc(var(--mb-padding, var(--raikou-spacing-md)) + rem(5px))',
  },
});

export const ModalBaseCloseButtonStyle = css({
  marginInlineStart: 'auto',
});

export const ModalBaseBodyStyle = css({
  padding: 'var(--mb-padding, var(--raikou-spacing-md))',
  paddingTop: 'var(--mb-padding, var(--raikou-spacing-md))',

  '&:_where(:not(:only-child))': {
    paddingTop: 0,
  },
});
