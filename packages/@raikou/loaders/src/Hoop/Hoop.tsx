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
import { LoaderHoopRootStyle, LoaderHoopBallStyle } from "./Hoop.css";

export type HoopStylesNames = "root";
export type HoopCssVariables = {
  root: "--hoop-color" | "--hoop-size";
};

export interface HoopProps
  extends BoxProps,
    StylesApiProps<HoopFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type HoopFactory = Factory<{
  props: HoopProps;
  ref: HTMLDivElement;
  stylesNames: HoopStylesNames;
  vars: HoopCssVariables;
}>;

const defaultProps: Partial<HoopProps> = {
  size: 45,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 22,
      sm: 27,
      md: 45,
      lg: 55,
      xl: 72,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<HoopFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--hoop-color": color ? getThemeColor(color, theme) : undefined,
      "--hoop-size": getSize(size, "hoop-size") ?? undefined,
    },
  }),
);

export const Hoop = factory<HoopFactory>((_props, ref) => {
  const props = useProps("Hoop", defaultProps, _props);
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

  const getStyles = useStyles<HoopFactory>({
    name: "Hoop",
    props,
    classes: {
      root: LoaderHoopRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const newSize = getNewSize(size) as number;

  const rawHTML = `
    <style scoped> 
      @keyframes hoop-loader {
        0% {
          opacity: 0; 
          border-color: var(--hoop-color); 
          transform: rotateX(65deg) rotateY(45deg) translateZ(-${newSize * 1.5}px) scale(0.1);
        }
        40% {
          opacity: 1; 
          transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
        }
        100% {
          opacity: 0; 
          transform: rotateX(65deg) rotateY(-45deg) translateZ(-${newSize * 1.5}px) scale(0.1);
        }
      }
    </style>
  `;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      {[...Array(6)].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderHoopBallStyle}
            style={{
              opacity: 1 - i * 0.2,
              animation:
                "hoop-loader 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite",
              animationDelay: `${i * 200}ms`,
            }}
          />
        );
      })}
    </Box>
  );
});

Hoop.displayName = "@raikou/core/Hoop";
