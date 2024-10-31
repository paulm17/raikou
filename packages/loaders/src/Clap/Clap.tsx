import { Fragment } from "react";
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
} from "../../../core";
import { LoaderClapRootStyle, LoaderClapBallStyle } from "./Clap.css";

export type ClapStylesNames = "root";
export type ClapCssVariables = {
  root: "--clap-color" | "--clap-size" | "--clap-speed-multiplier";
};

export interface ClapProps
  extends BoxProps,
    StylesApiProps<ClapFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type ClapFactory = Factory<{
  props: ClapProps;
  ref: HTMLDivElement;
  stylesNames: ClapStylesNames;
  vars: ClapCssVariables;
}>;

const defaultProps: Partial<ClapProps> = {
  size: 30,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 15,
      sm: 18,
      md: 30,
      lg: 36,
      xl: 48,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<ClapFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--clap-color": color ? getThemeColor(color, theme) : undefined,
      "--clap-size": getSize(size, "clap-size") ?? undefined,
      "--clap-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Clap = factory<ClapFactory>((_props, ref) => {
  const props = useProps("Clap", defaultProps, _props);
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

  const getStyles = useStyles<ClapFactory>({
    name: "Clap",
    props,
    classes: {
      root: LoaderClapRootStyle,
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

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      {[...Array(7)].map((_, i) => {
        const countBalls = 7;
        const ballSize = newSize / 5;
        const angle = 360 / countBalls;
        const offset = ballSize / 2;
        const radius = newSize / 2;
        const x = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const y = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;

        const rawHTML = `
          <style scoped> 
            @keyframes clap-ball-${i} {
              0% {transform: translateX(${x}px) translateY(${y}px) scale(1.25)}
              5% {transform: translateX(${x}px) translateY(${y}px) scale(1.75)}
              50% {transform: translateX(${x}px) translateY(${y}px) scale(.25)}
              55% {
                background-color: var(--clap-back-color);
                transform: translateX(${x}px) translateY(${y}px) 
                scale(1);
              }
            }          
          </style>
        `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              className={LoaderClapBallStyle}
              style={{
                transform: `translateX(${x}px) translateY(${y}px)`,
                animation: `clap-ball-${i} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Clap.displayName = "@raikou/core/Clap";
