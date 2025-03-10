import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  RaikouSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AppShellProvider } from './AppShell.context';
import {
  AppShellAsideConfiguration,
  AppShellFooterConfiguration,
  AppShellHeaderConfiguration,
  AppShellIconListConfiguration,
  AppShellNavbarConfiguration,
  AppShellResponsiveSize,
} from './AppShell.types';
import { AppShellAside } from './AppShellAside/AppShellAside';
import { AppShellFooter } from './AppShellFooter/AppShellFooter';
import { AppShellHeader } from './AppShellHeader/AppShellHeader';
import { AppShellIconList } from './AppShellIconList/AppShellIconList';
import { AppShellMain } from './AppShellMain/AppShellMain';
import { AppShellMediaStyles } from './AppShellMediaStyles/AppShellMediaStyles';
import { AppShellNavbar } from './AppShellNavbar/AppShellNavbar';
import { AppShellSection } from './AppShellSection/AppShellSection';
import { useResizing } from './use-resizing/use-resizing';
import {
  AppShellAsideStyle,
  AppShellFooterStyle,
  AppShellHeaderStyle,
  AppShellIconListStyle,
  AppShellMainStyle,
  AppShellNavbarStyle,
  AppShellRootStyle,
  AppShellSectionStyle,
} from './AppShell.css';

export type AppShellStylesNames =
  | 'root'
  | 'iconList'
  | 'navbar'
  | 'main'
  | 'header'
  | 'footer'
  | 'aside'
  | 'section';

export type AppShellCssVariables = {
  root: '--app-shell-transition-duration' | '--app-shell-transition-timing-function';
};

export interface AppShellProps
  extends BoxProps,
    StylesApiProps<AppShellFactory>,
    ElementProps<'div'> {
  /** Determines whether associated components should have a border, `true` by default */
  withBorder?: boolean;

  /** Controls padding of the main section, `0` by default. !important!: use `padding` prop instead of `p`. */
  padding?: RaikouSpacing | AppShellResponsiveSize;

  iconList?: AppShellIconListConfiguration;

  /** AppShell.Navbar configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Navbar component. */
  navbar?: AppShellNavbarConfiguration;

  /** AppShell.Aside configuration, controls width, breakpoints and collapsed state. Required if you use AppShell.Aside component. */
  aside?: AppShellAsideConfiguration;

  /** AppShell.Header configuration, controls height, offset and collapsed state. Required if you use AppShell.Header component. */
  header?: AppShellHeaderConfiguration;

  /** AppShell.Footer configuration, controls height, offset and collapsed state. Required if you use AppShell.Footer component. */
  footer?: AppShellFooterConfiguration;

  /** Duration of all transitions in ms, `200` by default */
  transitionDuration?: number;

  /** Timing function of all transitions, `ease` by default */
  transitionTimingFunction?: React.CSSProperties['transitionTimingFunction'];

  /** `z-index` of all associated elements, `200` by default */
  zIndex?: string | number;

  /** If set, Navbar, Aside, Header and Footer components be hidden */
  disabled?: boolean;

  /** Determines whether Header and Footer components should include styles to offset scrollbars. Based on `react-remove-scroll`. `true` by default for `layout="default"`, `false` for `layout="alt"` */
  offsetScrollbars?: boolean;
}

export type AppShellFactory = Factory<{
  props: AppShellProps;
  ref: HTMLDivElement;
  stylesNames: AppShellStylesNames;
  vars: AppShellCssVariables;
  staticComponents: {
    Navbar: typeof AppShellNavbar;
    Header: typeof AppShellHeader;
    Main: typeof AppShellMain;
    Aside: typeof AppShellAside;
    Footer: typeof AppShellFooter;
    Section: typeof AppShellSection;
    IconList: typeof AppShellIconList;
  };
}>;

const defaultProps: Partial<AppShellProps> = {
  withBorder: true,
  offsetScrollbars: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  zIndex: getDefaultZIndex('app'),
};

const varsResolver = createVarsResolver<AppShellFactory>(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      '--app-shell-transition-duration': `${transitionDuration}ms`,
      '--app-shell-transition-timing-function': transitionTimingFunction,
    },
  })
);

const offsetScrollbarsFunc = (iconList?: AppShellIconListConfiguration) => {
  if (iconList?.layout) {
    return true;
  }

  return false;
};

export const AppShell = factory<AppShellFactory>((_props, ref) => {
  const props = useProps('AppShell', defaultProps, _props);

  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    disabled,
    aside,
    footer,
    iconList,
    offsetScrollbars = offsetScrollbarsFunc(iconList),
    mod,
    ...others
  } = props;

  const getStyles = useStyles<AppShellFactory>({
    name: 'AppShell',
    classes: {
      root: AppShellRootStyle,
      navbar: AppShellNavbarStyle,
      main: AppShellMainStyle,
      header: AppShellHeaderStyle,
      footer: AppShellFooterStyle,
      aside: AppShellAsideStyle,
      section: AppShellSectionStyle,
      iconList: AppShellIconListStyle,
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

  const resizing = useResizing({ disabled, transitionDuration });

  return (
    <AppShellProvider value={{ getStyles, withBorder, zIndex, disabled, offsetScrollbars }}>
      <AppShellMediaStyles
        navbar={navbar}
        header={header}
        aside={aside}
        footer={footer}
        iconList={iconList}
        padding={padding}
      />
      <Box ref={ref} {...getStyles('root')} mod={[{ resizing, disabled }, mod]} {...others} />
    </AppShellProvider>
  );
});

AppShell.displayName = '@raikou/core/AppShell';
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;
AppShell.IconList = AppShellIconList;
