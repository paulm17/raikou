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
import { LoaderDominoBarStyle, LoaderDominoRootStyle } from './Domino.css';

export type DominoStylesNames = 'root';
export type DominoCssVariables = {
  root: '--domino-color' | '--domino-size';
};

export interface DominoProps extends BoxProps, StylesApiProps<DominoFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type DominoFactory = Factory<{
  props: DominoProps;
  ref: HTMLDivElement;
  stylesNames: DominoStylesNames;
  vars: DominoCssVariables;
}>;

const defaultProps: Partial<DominoProps> = {
  size: 100,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 50,
      sm: 61,
      md: 100,
      lg: 122,
      xl: 161,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<DominoFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      '--domino-color': color ? getThemeColor(color, theme) : undefined,
      '--domino-size': getSize(size, 'domino-size') ?? undefined,
    },
  })
);

export const Domino = factory<DominoFactory>((_props, ref) => {
  const props = useProps('Domino', defaultProps, _props);
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
    ...others
  } = props;

  const getStyles = useStyles<DominoFactory>({
    name: 'Domino',
    props,
    classes: {
      root: LoaderDominoRootStyle,
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

  const countBars = 7;
  const translatesPoints = [];
  for (let i = 0; i <= countBars + 1; i++) {
    translatesPoints.push(-i * (newSize / 8));
  }

  const rawHTML = `
    <style scoped> 
      @keyframes domino-fall-loader {
        0% {
          transform: translateX(${translatesPoints[0]}px) rotate(0deg);
          opacity: 0;
        }
        14.28% {
          transform: translateX(${translatesPoints[1]}px) rotate(0deg);
          opacity: 1;
        }
        28.56% {
          transform: translateX(${translatesPoints[2]}px) rotate(0deg);
          opacity: 1;
        }
        37.12% {
          transform: translateX(${translatesPoints[3]}px) rotate(0deg);
          opacity: 1;
        }
        42.84% {
          transform: translateX(${translatesPoints[4]}px) rotate(10deg);
          opacity: 1;
        }
        57.12% {
          transform: translateX(${translatesPoints[5]}px) rotate(40deg);
          opacity: 1;
        }
        71.4% {
          transform: translateX(${translatesPoints[6]}px) rotate(62deg);
          opacity: 1;
        }
        85.68% {
          transform: translateX(${translatesPoints[7]}px) rotate(72deg);
          opacity: 1;
        }
        100% {
          transform: translateX(${translatesPoints[8]}px) rotate(74deg);
          opacity: 0;
        }
      }
    </style>
  `;

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />

      {[...Array(Math.floor(newSize / countBars))].map((_, i) => {
        const rotatesPoints = [0, 0, 0, 10, 40, 60, 70];

        return (
          <span
            className={LoaderDominoBarStyle}
            key={i}
            style={{
              animation: `domino-fall-loader 3s ease infinite`,
              animationDelay: `calc(-0.42s * ${i})`,
              transform: `translateX(${newSize - i * 15}px) rotate(${rotatesPoints[i]}deg)`,
            }}
          />
        );
      })}
    </Box>
  );
});

Domino.displayName = '@raikou/core/Domino';
