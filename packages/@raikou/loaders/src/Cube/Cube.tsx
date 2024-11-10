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
import {
  LoaderCubeCubeStyle,
  LoaderCubeRootStyle,
  LoaderCubeSide1Style,
  LoaderCubeSide2Style,
  LoaderCubeSide3Style,
  LoaderCubeSide4Style,
  LoaderCubeSide5Style,
  LoaderCubeSide6Style,
  LoaderCubeWrapperStyle,
} from './Cube.css';

export type CubeStylesNames = 'root';
export type CubeCssVariables = {
  root: '--cube-color' | '--cube-back-color' | '--cube-size' | '--cube-speed-multiplier';
};

export interface CubeProps extends BoxProps, StylesApiProps<CubeFactory>, ElementProps<'span'> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type CubeFactory = Factory<{
  props: CubeProps;
  ref: HTMLDivElement;
  stylesNames: CubeStylesNames;
  vars: CubeCssVariables;
}>;

const defaultProps: Partial<CubeProps> = {
  size: 25,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<CubeFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      '--cube-color': color ? getThemeColor(color, theme) : undefined,
      '--cube-back-color': color ? getThemeColor(color, theme) : undefined,
      '--cube-size': getSize(size, 'cube-size') ?? undefined,
      '--cube-speed-multiplier': `${speedMultiplier}`,
    },
  })
);

export const Cube = factory<CubeFactory>((_props, ref) => {
  const props = useProps('Cube', defaultProps, _props);
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

  const getStyles = useStyles<CubeFactory>({
    name: 'Cube',
    props,
    classes: {
      root: LoaderCubeRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} ref={ref} {...others}>
      <span className={LoaderCubeWrapperStyle} />
      <span className={LoaderCubeCubeStyle}>
        <span className={LoaderCubeSide1Style} />
        <span className={LoaderCubeSide2Style} />
        <span className={LoaderCubeSide3Style} />
        <span className={LoaderCubeSide4Style} />
        <span className={LoaderCubeSide5Style} />
        <span className={LoaderCubeSide6Style} />
      </span>
    </Box>
  );
});

Cube.displayName = '@raikou/core/Cube';
