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
import { LoaderSphereBallStyle, LoaderSphereRootStyle } from "./Sphere.css";

export type SphereStylesNames = "root";
export type SphereCssVariables = {
  root: "--sphere-color" | "--sphere-size" | "--sphere-speed-multiplier";
};

export interface SphereProps
  extends BoxProps,
    StylesApiProps<SphereFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SphereFactory = Factory<{
  props: SphereProps;
  ref: HTMLDivElement;
  stylesNames: SphereStylesNames;
  vars: SphereCssVariables;
}>;

const defaultProps: Partial<SphereProps> = {
  size: 40,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 20,
      sm: 24,
      md: 40,
      lg: 49,
      xl: 64,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<SphereFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--sphere-color": color ? getThemeColor(color, theme) : undefined,
      "--sphere-size": getSize(size, "sphere-size") ?? undefined,
      "--sphere-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Sphere = factory<SphereFactory>((_props, ref) => {
  const props = useProps("Sphere", defaultProps, _props);
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

  const getStyles = useStyles<SphereFactory>({
    name: "Sphere",
    props,
    classes: {
      root: LoaderSphereRootStyle,
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
      {[...Array(Math.round(7))].map((_, i) => {
        const countBalls = 7;
        const ballSize = newSize / 5;
        const angle = 360 / countBalls;
        const offset = ballSize / 2;
        const radius = newSize / 2;
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;

        const rawHTML = `
        <style scoped> 
          @keyframes sphere-loader-${i} {
            0% {
              transform: translateX(${y}px) translateY(${x}px) scale(1) ;
            }
            5% {
              transform: translateX(${-newSize / 12}px) translateY(${-newSize / 12}px) scale(0);
            }
            50% {
              transform: translateX(${-newSize / 12}px) translateY(${-newSize / 12}px) scale(0);
            }
            55% {
              transform: translateX(${y}px) translateY(${x}px) scale(1) ;
            }
          }
        </style>
      `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              className={LoaderSphereBallStyle}
              style={{
                transform: `translateX(${y}px) translateY(${x}px)`,
                animation: `sphere-loader-${i} 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Sphere.displayName = "@raikou/core/Sphere";
