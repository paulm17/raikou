import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { InputLabelStyle, InputRequiredStyle } from '../Input.css';
import { useInputWrapperContext } from '../InputWrapper.context';

export type InputLabelStylesNames = 'label' | 'required';
export type InputLabelCssVariables = {
  label: '--input-asterisk-color' | '--input-label-size';
};

export interface InputLabelProps
  extends BoxProps,
    StylesApiProps<InputLabelFactory>,
    ElementProps<'label'> {
  __staticSelector?: string;

  /** Determines whether the required asterisk should be displayed  */
  required?: boolean;

  /** Controls label `font-size`, `'sm'` by default */
  size?: RaikouSize | (string & {});

  /** Root element of the label, `'label'` by default */
  labelElement?: 'label' | 'div';
}

export type InputLabelFactory = Factory<{
  props: InputLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputLabelStylesNames;
  vars: InputLabelCssVariables;
}>;

const defaultProps: Partial<InputLabelProps> = {
  labelElement: 'label',
};

const varsResolver = createVarsResolver<InputLabelFactory>((_, { size }) => ({
  label: {
    '--input-label-size': getFontSize(size),
    '--input-asterisk-color': undefined,
  },
}));

export const InputLabel = factory<InputLabelFactory>((_props, ref) => {
  const props = useProps('InputLabel', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = useProps('InputLabel', defaultProps, props);

  const _getStyles = useStyles<InputLabelFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes: {
      label: InputLabelStyle,
      required: InputRequiredStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'label',
    vars,
    varsResolver,
  });

  const ctx = useInputWrapperContext();
  const getStyles = ctx?.getStyles || _getStyles;

  return (
    <Box
      {...getStyles('label', ctx?.getStyles ? { className, style } : undefined)}
      component={labelElement as 'label'}
      variant={variant}
      size={size}
      ref={ref}
      htmlFor={labelElement === 'label' ? htmlFor : undefined}
      mod={[{ required }, mod]}
      onMouseDown={(event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }}
      {...others}
    >
      {children}
      {required && (
        <span {...getStyles('required')} aria-hidden>
          {' *'}
        </span>
      )}
    </Box>
  );
});

InputLabel.displayName = '@raikou/core/InputLabel';