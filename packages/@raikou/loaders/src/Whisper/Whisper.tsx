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
import { LoaderWhisperBallStyle, LoaderWhisperRootStyle } from "./Whisper.css";

export type WhisperStylesNames = "root";
export type WhisperCssVariables = {
  root: "--whisper-color" | "--whisper-size";
};

export interface WhisperProps
  extends BoxProps,
    StylesApiProps<WhisperFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type WhisperFactory = Factory<{
  props: WhisperProps;
  ref: HTMLDivElement;
  stylesNames: WhisperStylesNames;
  vars: WhisperCssVariables;
}>;

const defaultProps: Partial<WhisperProps> = {
  size: 50,
};

const varsResolver = createVarsResolver<WhisperFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--whisper-color": color ? getThemeColor(color, theme) : undefined,
      "--whisper-size": getSize(size, "whisper-size") ?? undefined,
    },
  }),
);

export const Whisper = factory<WhisperFactory>((_props, ref) => {
  const props = useProps("Whisper", defaultProps, _props);
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
    ...others
  } = props;

  const getStyles = useStyles<WhisperFactory>({
    name: "Whisper",
    props,
    classes: {
      root: LoaderWhisperRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const balls = Array.from({ length: 3 }).reduce((acc: any, _, i) => {
    return acc.concat(
      Array.from({ length: 3 }).map((_, j) => {
        return { i, j };
      }),
    );
  }, []) as { i: number; j: number }[];

  const rawHTML = `
    <style scoped>
      @keyframes whisper-loader {
        0% { transform: scale(1, 1); opacity: 1; background-color: var(--whisper-color); }
        100% { transform: scale(0, 0); opacity: 0; background-color: var(--whisper-color); }
      }
    </style>
  `;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      {balls.map((_, i) => {
        return <span key={i} className={LoaderWhisperBallStyle} />;
      })}
    </Box>
  );
});

Whisper.displayName = "@raikou/core/Whisper";
