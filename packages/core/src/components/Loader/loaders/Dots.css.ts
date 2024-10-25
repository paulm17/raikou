import { css, keyframes } from "@stylefusion/react";

const dotsLoaderAnimation = keyframes({
  '0%, 100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '50%': {
    transform: 'scale(0.6)',
    opacity: 0.5,
  },
});

export const LoaderDotsLoaderStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'calc(var(--loader-size) / 10)',
  position: 'relative',
  width: 'var(--loader-size)',
  height: 'var(--loader-size)',
});

export const LoaderDotStyle = css({
  width: 'calc(var(--loader-size) / 3 - var(--loader-size) / 15)',
  height: 'calc(var(--loader-size) / 3 - var(--loader-size) / 15)',
  borderRadius: '50%',
  backgroundColor: 'var(--loader-color)',
  animation: `${dotsLoaderAnimation} 0.8s infinite linear`,

  '&:nth-of-type(2)': {
    animationDelay: '0.4s',
  },
});