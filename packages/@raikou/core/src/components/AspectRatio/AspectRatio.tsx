import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { aspectRatioRootStyle } from './AspectRatio.css';

export type AspectRatioStylesNames = 'root';
export type AspectRatioCssVariables = {
  root: '--ar-ratio';
};

export interface AspectRatioProps
  extends BoxProps,
    StylesApiProps<AspectRatioFactory>,
    ElementProps<'div'> {
  /** Aspect ratio, e.g. `16 / 9`, `4 / 3`, `1920 / 1080`, `1` by default */
  ratio?: number;
}

export type AspectRatioFactory = Factory<{
  props: AspectRatioProps;
  ref: HTMLDivElement;
  stylesNames: AspectRatioStylesNames;
  vars: AspectRatioCssVariables;
}>;

const defaultProps: Partial<AspectRatioProps> = {};

const varsResolver = createVarsResolver<AspectRatioFactory>((_, { ratio }) => ({
  root: {
    '--ar-ratio': ratio?.toString(),
  },
}));

export const AspectRatio = factory<AspectRatioFactory>((_props, ref) => {
  const props = useProps('AspectRatio', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ratio, ...others } = props;

  const getStyles = useStyles<AspectRatioFactory>({
    name: 'AspectRatio',
    classes: {
      root: aspectRatioRootStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

AspectRatio.displayName = '@raikou/core/AspectRatio';
