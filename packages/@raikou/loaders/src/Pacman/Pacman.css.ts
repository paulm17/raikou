import { css, keyframes } from '@stylefusion/react';

const pacman1LoaderAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(-44deg)' },
});

const pacman2LoaderAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(44deg)' },
});

export const LoaderPacmanRootStyle = css({
  '--pacman-size-xs': '12px',
  '--pacman-size-sm': '15px',
  '--pacman-size-md': '25px',
  '--pacman-size-lg': '30px',
  '--pacman-size-xl': '40px',
  '--pacman-size': 'var(--pacman-size-md)',
  '--pacman-color': 'var(--raikou-primary-color-filled)',
  display: 'inline-block',
  position: 'relative',
  fontSize: 0,
  height: 'calc(var(--pacman-size) * 2)',
  width: 'calc(var(--pacman-size) * 2)',
});

const pacmanStyle = {
  width: 0,
  height: 0,
  borderRadius: 'var(--pacman-size)',
  position: 'absolute',
};

export const LoaderPacmanPacStyle = css({
  ...pacmanStyle,
  borderRight: 'var(--pacman-size) solid transparent',
  borderTop: 'var(--pacman-size) solid transparent',
  borderLeft: 'var(--pacman-size) solid var(--pacman-color)',
  borderBottom: 'var(--pacman-size) solid var(--pacman-color)',
  animation: `${pacman1LoaderAnimation} calc(0.8s * var(--pacman-speed-multiplier)) infinite ease-in-out`,
});

export const LoaderPacmanManStyle = css({
  ...pacmanStyle,
  borderRight: 'var(--pacman-size) solid transparent',
  borderTop: 'var(--pacman-size) solid var(--pacman-color)',
  borderLeft: 'var(--pacman-size) solid var(--pacman-color)',
  borderBottom: 'var(--pacman-size) solid transparent',
  animation: `${pacman2LoaderAnimation} calc(0.8s * var(--pacman-speed-multiplier)) infinite ease-in-out`,
});

const ballStyle = {
  width: 'calc(var(--pacman-size) / 3)',
  height: 'calc(var(--pacman-size) / 3)',
  backgroundColor: 'var(--pacman-color)',
  margin: 'var(--pacman-margin)',
  borderRadius: '100%',
  transform: 'translate(0, calc(-1 * calc(var(--pacman-size) / 4)))',
  position: 'absolute',
  top: 'var(--pacman-size)',
  left: 'calc(var(--pacman-size) * 4)',
};

export const LoaderPacmanBall2Style = css({
  ...ballStyle,
  animation: `pacman-ball-loader calc(1s * var(--pacman-speed-multiplier)) calc(2s * 0.25) infinite linear`,
});

export const LoaderPacmanBall3Style = css({
  ...ballStyle,
  animation: `pacman-ball-loader calc(1s * var(--pacman-speed-multiplier)) calc(3s * 0.25) infinite linear`,
});

export const LoaderPacmanBall4Style = css({
  ...ballStyle,
  animation: `pacman-ball-loader calc(1s * var(--pacman-speed-multiplier)) calc(4s * 0.25) infinite linear`,
});

export const LoaderPacmanBall5Style = css({
  ...ballStyle,
  animation: `pacman-ball-loader calc(1s * var(--pacman-speed-multiplier)) calc(5s * 0.25) infinite linear`,
});
