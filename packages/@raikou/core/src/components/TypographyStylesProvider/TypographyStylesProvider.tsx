import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TypographyStylesProviderRootStyle } from './TypographyStylesProvider.css';

export type TypographyStylesProviderStylesNames = 'root';

export interface TypographyStylesProviderProps
  extends BoxProps,
    StylesApiProps<TypographyStylesProviderFactory>,
    ElementProps<'div'> {}

export type TypographyStylesProviderFactory = Factory<{
  props: TypographyStylesProviderProps;
  ref: HTMLDivElement;
  stylesNames: TypographyStylesProviderStylesNames;
}>;

const defaultProps: Partial<TypographyStylesProviderProps> = {};

export const TypographyStylesProvider = factory<TypographyStylesProviderFactory>((_props, ref) => {
  const props = useProps('TypographyStylesProvider', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, ...others } = props;

  const getStyles = useStyles<TypographyStylesProviderFactory>({
    name: 'TypographyStylesProvider',
    classes: {
      root: TypographyStylesProviderRootStyle,
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

TypographyStylesProvider.displayName = '@raikou/core/TypographyStylesProvider';
