import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  RaikouRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { FieldsetLegendStyle, FieldsetRootStyle } from './Fieldset.css';

export type FieldsetStylesNames = 'root' | 'legend';
export type FieldsetVariant = 'default' | 'filled' | 'unstyled';
export type FieldsetCSSVariables = {
  root: '--fieldset-radius';
};

export interface FieldsetProps
  extends BoxProps,
    StylesApiProps<FieldsetFactory>,
    ElementProps<'fieldset'> {
  /** Fieldset legend */
  legend?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: RaikouRadius;
}

export type FieldsetFactory = Factory<{
  props: FieldsetProps;
  ref: HTMLFieldSetElement;
  stylesNames: FieldsetStylesNames;
  vars: FieldsetCSSVariables;
  variant: FieldsetVariant;
}>;

const defaultProps: Partial<FieldsetProps> = {
  variant: 'default',
};

const varsResolver = createVarsResolver<FieldsetFactory>((_, { radius }) => ({
  root: {
    '--fieldset-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const Fieldset = factory<FieldsetFactory>((_props, ref) => {
  const props = useProps('Fieldset', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    legend,
    variant,
    children,
    ...others
  } = props;

  const getStyles = useStyles<FieldsetFactory>({
    name: 'Fieldset',
    classes: {
      root: FieldsetRootStyle,
      legend: FieldsetLegendStyle,
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

  return (
    <Box
      component="fieldset"
      ref={ref}
      variant={variant}
      {...getStyles('root', { variant })}
      {...others}
    >
      {legend && <legend {...getStyles('legend', { variant })}>{legend}</legend>}
      {children}
    </Box>
  );
});

Fieldset.displayName = '@raikou/core/Fieldset';
