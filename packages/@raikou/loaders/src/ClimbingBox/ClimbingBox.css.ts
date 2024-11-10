import { css, keyframes } from '@stylefusion/react';

const climbingBoxAnimation = keyframes({
  '0%': {
    transform: `translate(0px, -16px) rotate(-45deg)`,
  },
  '5%': {
    transform: `translate(0px, -16px) rotate(-50deg)`,
  },
  '20%': {
    transform: `translate(16px, -32px) rotate(47deg)`,
  },
  '25%': {
    transform: `translate(16px, -32px) rotate(45deg)`,
  },
  '30%': {
    transform: `translate(16px, -32px) rotate(40deg)`,
  },
  '45%': {
    transform: `translate(32px, -48px) rotate(137deg)`,
  },
  '50%': {
    transform: `translate(32px, -48px) rotate(135deg)`,
  },
  '55%': {
    transform: `translate(32px, -48px) rotate(130deg)`,
  },
  '70%': {
    transform: `translate(48px, -64px) rotate(217deg)`,
  },
  '75%': {
    transform: `translate(48px, -64px) rotate(220deg)`,
  },
  '100%': {
    transform: `translate(0px, -16px) rotate(-225deg)`,
  },
});

export const LoaderClimbingBoxContainerStyle = css({
  '--climbing-box-size-xs': '16px',
  '--climbing-box-size-sm': '18px',
  '--climbing-box-size-md': '20px',
  '--climbing-box-size-lg': '26px',
  '--climbing-box-size-xl': '32px',
  '--climbing-box-size': 'var(--climbing-box-size-md)',
  '--climbing-box-color': 'var(--raikou-primary-color-filled)',
  display: 'inherit',
  position: 'relative',
  width: 'calc(var(--climbing-box-size) * 4.52)',
  height: 'calc(var(--climbing-box-size) * 4.52)',
});

export const LoaderClimbingBoxWrapperStyle = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: 'calc(var(--climbing-box-size) * -1.728)',
  marginLeft: 'calc(var(--climbing-box-size) * -1.728)',
  width: 'calc(var(--climbing-box-size) * 3.457)',
  height: 'calc(var(--climbing-box-size) * 3.457)',
  fontSize: 'var(--climbing-box-size)',
});

export const LoaderClimbingBoxStyle = css({
  position: 'absolute',
  left: '0',
  bottom: 'calc(var(--climbing-box-size) * -1.2)',
  height: 'calc(var(--climbing-box-size) * 1.2)',
  width: 'calc(var(--climbing-box-size) * 1.2)',
  backgroundColor: 'transparent',
  borderRadius: '15%',
  border: `4px solid var(--climbing-box-color)`,
  transform: 'translate(0, calc(var(--climbing-box-size) * 0.604)) rotate(-45deg)',
  animation: `${climbingBoxAnimation} calc(2.5s / var(--climbing-box-speed-multiplier)) infinite cubic-bezier(0.79, 0, 0.47, 0.97)`,
});

export const LoaderClimbingBoxHillStyle = css({
  position: 'absolute',
  width: 'calc(var(--climbing-box-size) * 6.06)',
  height: 'calc(var(--climbing-box-size) * 6.06)',
  top: 'calc(var(--climbing-box-size) * 1.6)',
  left: 'calc(var(--climbing-box-size) * 1.6)',
  borderLeft: `4px solid var(--climbing-box-color)`,
  transform: 'rotate(45deg)',
});
