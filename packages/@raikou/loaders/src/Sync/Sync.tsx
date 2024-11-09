import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  RaikouSize,
  RaikouColor,
  StylesApiProps,
  useProps,
  useStyles,
} from "@raikou/core";
import {
  LoaderSyncLoaderStyle,
  LoaderSync1Style,
  LoaderSync2Style,
  LoaderSync3Style,
} from "./Sync.css";

export type SyncStylesNames = "root";
export type SyncCssVariables = {
  root:
    | "--sync-color"
    | "--sync-size"
    | "--sync-margin"
    | "--sync-speed-multiplier";
};

export interface SyncProps
  extends BoxProps,
    StylesApiProps<SyncFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties["margin"];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SyncFactory = Factory<{
  props: SyncProps;
  ref: HTMLDivElement;
  stylesNames: SyncStylesNames;
  vars: SyncCssVariables;
}>;

const defaultProps: Partial<SyncProps> = {
  size: 15,
  margin: 2,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<SyncFactory>(
  // @ts-ignore
  (theme, { color, size, margin, speedMultiplier }) => ({
    root: {
      "--sync-color": color ? getThemeColor(color, theme) : undefined,
      "--sync-size": getSize(size, "sync-size") ?? undefined,
      "--sync-margin": getSize(margin, "sync-margin") ?? undefined,
      "--sync-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Sync = factory<SyncFactory>((_props, ref) => {
  const props = useProps("Sync", defaultProps, _props);
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

  const getStyles = useStyles<SyncFactory>({
    name: "Sync",
    props,
    classes: {
      root: LoaderSyncLoaderStyle,
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
    <Box {...getStyles("root")} ref={ref} {...others}>
      <span className={LoaderSync1Style} />
      <span className={LoaderSync2Style} />
      <span className={LoaderSync3Style} />
    </Box>
  );
});

Sync.displayName = "@raikou/core/Sync";
