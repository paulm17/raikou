import { Fragment } from 'react/jsx-runtime';
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
import { LoaderSwapBallStyle, LoaderSwapRootStyle } from './Swap.css';

export type SwapStylesNames = 'root';
export type SwapCssVariables = {
  root: '--swap-color' | '--swap-size';
};

export interface SwapProps extends BoxProps, StylesApiProps<SwapFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SwapFactory = Factory<{
  props: SwapProps;
  ref: HTMLDivElement;
  stylesNames: SwapStylesNames;
  vars: SwapCssVariables;
}>;

const defaultProps: Partial<SwapProps> = {
  size: 40,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === 'string') {
    const sizes: Record<RaikouSize, number> = {
      xs: 20,
      sm: 24,
      md: 40,
      lg: 49,
      xl: 64,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<SwapFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      '--swap-color': color ? getThemeColor(color, theme) : undefined,
      '--swap-size': getSize(size, 'swap-size') ?? undefined,
    },
  })
);

export const Swap = factory<SwapFactory>((_props, ref) => {
  const props = useProps('Swap', defaultProps, _props);
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

  const getStyles = useStyles<SwapFactory>({
    name: 'Swap',
    props,
    classes: {
      root: LoaderSwapRootStyle,
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
      {[...Array(3)].map((_, i) => {
        const x = i * (newSize / 4 + newSize / 8);
        const y = newSize / 2 - newSize / 8;
        let fiftyPercent = {};

        if (i === 0) {
          fiftyPercent = `left: ${newSize - newSize / 4}px; top: ${y}px`;
        } else if (i === 1) {
          fiftyPercent = `left: ${x}px; top: ${y - newSize / 2 + newSize / 8}px`;
        } else {
          fiftyPercent = `left: 0; top: ${y}px`;
        }

        const rawHTML = `
          <style scoped> 
            @keyframes swap-ball-motion-${i} {
              0% {
                top: ${y}px;
                left: ${x}px;
              }     
              50% {
                ${fiftyPercent}
              }
              100% {
                top: ${y}px;
                left: ${x}px;
              }
            }
          </style>
        `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              className={LoaderSwapBallStyle}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animation: `swap-ball-motion-${i} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Swap.displayName = '@raikou/core/Swap';
