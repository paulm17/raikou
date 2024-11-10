import { css } from '@stylefusion/react';

export const PasswordInputRootStyle = css({
  '--psi-button-size-xs': '22px',
  '--psi-button-size-sm': '26px',
  '--psi-button-size-md': '28px',
  '--psi-button-size-lg': '32px',
  '--psi-button-size-xl': '40px',

  '--psi-icon-size-xs': '12px',
  '--psi-icon-size-sm': '15px',
  '--psi-icon-size-md': '17px',
  '--psi-icon-size-lg': '19px',
  '--psi-icon-size-xl': '21px',

  '--psi-button-size': 'var(--psi-button-size-sm)',
  '--psi-icon-size': 'var(--psi-icon-size-sm)',
});

export const PasswordInputInputStyle = css({
  position: 'relative',
  overflow: 'hidden',
});

export const PasswordInputInnerInputStyle = css({
  fontFamily: 'var(--raikou-font-family)',
  backgroundColor: 'transparent',
  border: 0,
  paddingInlineEnd: 'var(--input-padding-inline-end)',
  paddingInlineStart: 'var(--input-padding-inline-start)',
  position: 'absolute',
  inset: 0,
  outline: 0,
  fontSize: 'inherit',
  lineHeight: 'var(--raikou-line-height)',
  height: '100%',
  width: '100%',
  color: 'inherit',

  '.input[data-disabled] &, &:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: 'var(--input-placeholder-color)',
    opacity: '1',
  },

  '&::-ms-reveal': {
    display: 'none',
  },
});

export const PasswordInputVisibilityToggleStyle = css({
  width: 'var(--psi-button-size)',
  height: 'var(--psi-button-size)',
  minWidth: 'var(--psi-button-size)',
  minHeight: 'var(--psi-button-size)',

  '&:disabled': {
    display: 'none',
  },
});
