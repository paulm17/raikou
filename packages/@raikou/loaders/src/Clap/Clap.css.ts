import { css, keyframes } from '@stylefusion/react';

const rotateAnimation = keyframes({
  '50%': { transform: 'rotate(180deg) scale(1.125)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const LoaderClapRootStyle = css({
  '--clap-size-xs': '15px',
  '--clap-size-sm': '18px',
  '--clap-size-md': '30px',
  '--clap-size-lg': '36px',
  '--clap-size-xl': '48px',
  '--clap-size': 'var(--clap-size-md)',
  '--clap-color': 'var(--raikou-primary-color-filled)',
  '--clap-back-color': 'darken(var(--clap-color), 0.5)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'var(--clap-size)',
  height: 'var(--clap-size)',
  animation: `${rotateAnimation} 1.5s linear infinite`,
});

export const LoaderClapBallStyle = css({
  position: 'absolute',
  top: 'calc(var(--clap-size) / 2)',
  left: 'calc(var(--clap-size) / 2)',
  width: 'calc(var(--clap-size) / 5)',
  height: 'calc(var(--clap-size) / 5)',
  backgroundColor: 'var(--clap-color)',
  borderRadius: '50%',
});

// export const LoaderClapBall1Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 1 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 1 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation1} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(1 * 0.2s)",
// });

// export const LoaderClapBall2Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 2 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 2 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation2} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(2 * 0.2s)",
// });

// export const LoaderClapBall3Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 3 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 3 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation3} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(3 * 0.2s)",
// });

// export const LoaderClapBall4Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 4 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 4 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation4} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(4 * 0.2s)",
// });

// export const LoaderClapBall5Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 5 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 5 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation5} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(5 * 0.2s)",
// });

// export const LoaderClapBall6Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 6 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 6 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation6} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(6 * 0.2s)",
// });

// export const LoaderClapBall7Style = css({
//   ...LoaderMagicBallStyle,
//   transform: `
//     translateX(calc(cos(calc(360/7) * 7 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//     translateY(calc(sin(calc(360/7) * 7 * calc(pi/180)) * calc(var(--clap-size) / 2) - calc(calc(var(--clap-size) / 5) / 2)))
//   `,
//   animation: `${moveAnimation7} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
//   animationDelay: "calc(7 * 0.2s)",
// });
