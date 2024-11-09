import { css, keyframes } from "@stylefusion/react";

const ovalLoaderAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const LoaderOvalLoaderStyle = css({
  display: 'inline-block',
  width: 'var(--loader-size)',
  height: 'var(--loader-size)',

  '&:after': {
    content: "''",
    display: 'block',
    width: 'var(--loader-size)',
    height: 'var(--loader-size)',
    borderRadius: '10000px',
    borderWidth: 'calc(var(--loader-size) / 8)',
    borderStyle: 'solid',
    borderColor: 'var(--loader-color) var(--loader-color) var(--loader-color) transparent',
    animation: `${ovalLoaderAnimation} 1.2s linear infinite`,
  },
});
