import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseBody, ModalBaseBodyProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';

export type DrawerBodyStylesNames = 'body';

export interface DrawerBodyProps
  extends ModalBaseBodyProps,
    CompoundStylesApiProps<DrawerBodyFactory> {}

export type DrawerBodyFactory = Factory<{
  props: DrawerBodyProps;
  ref: HTMLDivElement;
  stylesNames: DrawerBodyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerBodyProps> = {};

export const DrawerBody = factory<DrawerBodyFactory>((_props, ref) => {
  const props = useProps('DrawerBody', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseBody
      ref={ref}
      {...ctx.getStyles('body', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerBody.displayName = '@raikou/core/DrawerBody';
