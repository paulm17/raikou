import { Fragment } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  RaikouColor,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@raikou/core';
import { LoaderFlapperBallStyle, LoaderFlapperRootStyle } from './Flapper.css';

export type FlapperStylesNames = 'root';
export type FlapperCssVariables = {
  root: '--flapper-color' | '--flapper-size' | '--flapper-speed-multiplier';
};

export interface FlapperProps
  extends BoxProps,
    StylesApiProps<FlapperFactory>,
    ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type FlapperFactory = Factory<{
  props: FlapperProps;
  ref: HTMLDivElement;
  stylesNames: FlapperStylesNames;
  vars: FlapperCssVariables;
}>;

const defaultProps: Partial<FlapperProps> = {
  size: 30,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 15,
      sm: 28,
      md: 30,
      lg: 36,
      xl: 48,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<FlapperFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--flapper-color': color ? getThemeColor(color, theme) : undefined,
      '--flapper-size': getSize(size, 'flapper-size') ?? undefined,
      '--flapper-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Flapper = factory<FlapperFactory>((_props, ref) => {
  const props = useProps('Flapper', defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    size,
    variant,
    children,
    speedMultiplier,
    ...others
  } = props;

  const getStyles = useStyles<FlapperFactory>({
    name: 'Flapper',
    props,
    classes: {
      root: LoaderFlapperRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const newSize = getNewSize(size) as number;

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      {[...Array(Math.round(7))].map((_, i) => {
        const countBalls = 7;
        const ballSize = newSize / 1.5;
        const angle = 360 / countBalls;
        const offset = ballSize / 2;
        const radius = newSize / 2;
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;

        const rawHTML = `
        <style scoped> 
          @keyframes flapper-loader-${i} {
            100% {
              opacity: 0;
              transform: translateX(${y}px) translateY(${x}px) scale(1);
            }
          }
        </style>
      `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              className={LoaderFlapperBallStyle}
              style={{
                transform: `translateX(${y}px) translateY(${x}px) scale(0)`,
                animation: `flapper-loader-${i} 0.8s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Flapper.displayName = '@raikou/core/Flapper';
