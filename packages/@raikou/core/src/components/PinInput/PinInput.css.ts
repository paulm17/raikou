import { css } from '@stylefusion/react';

export const PinInputRootStyle = css({
  '--pin-input-size-xs': '30px',
  '--pin-input-size-sm': '36px',
  '--pin-input-size-md': '42px',
  '--pin-input-size-lg': '50px',
  '--pin-input-size-xl': '60px',
  '--pin-input-size': 'var(--pin-input-size-sm)',
});

export const PinInputInputStyle = css({
  width: 'var(--pin-input-size)',
  height: 'var(--pin-input-size)',
});
