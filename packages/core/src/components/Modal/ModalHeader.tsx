import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseHeader, ModalBaseHeaderProps } from '../ModalBase';
import { useModalContext } from './Modal.context';

export type ModalHeaderStylesNames = 'header';

export interface ModalHeaderProps
  extends ModalBaseHeaderProps,
    CompoundStylesApiProps<ModalHeaderFactory> {}

export type ModalHeaderFactory = Factory<{
  props: ModalHeaderProps;
  ref: HTMLElement;
  stylesNames: ModalHeaderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalHeaderProps> = {};

export const ModalHeader = factory<ModalHeaderFactory>((_props, ref) => {
  const props = useProps('ModalHeader', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();

  return (
    <ModalBaseHeader
      ref={ref}
      {...ctx.getStyles('header', { classNames, style, styles, className })}
      {...others}
    />
  );
});

ModalHeader.displayName = '@raikou/core/ModalHeader';
