import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
} from '../../../core';
import { useAppShellContext } from '../AppShell.context';

export type AppShellIconListStylesNames = 'iconList';

export interface AppShellIconListProps
  extends BoxProps,
    StylesApiProps<AppShellIconListFactory>,
    ElementProps<'aside'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: string | number;
}

export type AppShellIconListFactory = Factory<{
  props: AppShellIconListProps;
  ref: HTMLDivElement;
  stylesNames: AppShellIconListStylesNames;
}>;

const defaultProps: Partial<AppShellIconListProps> = {};

export const AppShellIconList = factory<AppShellIconListFactory>((_props, ref) => {
  const props = useProps('AppShellIconList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="div"
      ref={ref}
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('iconList', { className, classNames, styles, style })}
      {...others}
      __vars={{
        '--app-shell-iconlist-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)`,
      }}
    />
  );
});

AppShellIconList.displayName = '@raikou/core/AppShellIconList';
