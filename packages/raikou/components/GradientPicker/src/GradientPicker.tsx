import React, { useEffect, useState } from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  ElementProps,
  useProps,
  useStyles,
  // createVarsResolver,
  Factory,
  ExtendComponent,
  RaikouThemeComponent,
} from "@raikou/core";
import { GradientObj } from "./GradientPicker.types";
import { GradientPickerProvider } from "./GradientPicker.context";
import {
  cssGradient,
  getGradientObject,
  isGradient,
  // @ts-ignore
} from "./components/gradient/utils";
import { HsvaColor, colord } from "colord";
import { useClickOutside, useDidUpdate, useToggle } from "@raikou/hooks";
import isEqual from "lodash.isequal";
import { GradientPickerCompact } from "./components/compact";
import { GradientPickerPicker } from "./components/picker";

export type GradientPickerStylesNames = "root";

// export type GradientPickerCssVariables = {
//   root:
//     | "--accordion-transition-duration"
//     | "--accordion-chevron-size"
//     | "--accordion-radius";
// };

export interface GradientPickerProps
  extends BoxProps,
    StylesApiProps<GradientPickerFactory>,
    ElementProps<"div", "value" | "defaultValue" | "onChange"> {
  /** Value for controlled component */
  value: string;

  /** Called when value changes */
  onChange(value: string): void;
}

export type GradientPickerFactory = Factory<{
  props: GradientPickerProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerStylesNames;
  // vars: GradientPickerCssVariables;
}>;

const defaultProps: Partial<GradientPickerProps> = {};

// const varsResolver = createVarsResolver<GradientPickerFactory>(
//   (_, { transitionDuration, chevronSize, radius }) => ({
//     root: {
//       // "--accordion-transition-duration":
//       //   transitionDuration === undefined
//       //     ? undefined
//       //     : `${transitionDuration}ms`,
//       // "--accordion-chevron-size":
//       //   chevronSize === undefined ? undefined : rem(chevronSize),
//       // "--accordion-radius":
//       //   radius === undefined ? undefined : getRadius(radius),
//     },
//   }),
// );

export function GradientPicker(_props: GradientPickerProps) {
  const props = useProps(
    "GradientPicker",
    defaultProps as GradientPickerProps,
    _props,
  );
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    value,
    onChange,
    ...others
  } = props;

  const getStyles = useStyles<GradientPickerFactory>({
    name: "GradientPicker",
    classes: {
      root: "gradientPicker-root",
    },
    props: props as GradientPickerProps,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    // varsResolver,
  });

  const [update, setUpdate] = useState(true);
  const [activeStopIndex, setActiveStopIndex] = useState("");
  const [isOpen, toggleOpen] = useToggle([false, true]);
  const [control, setControl] = useState<HTMLElement | null>(null);
  const [dropdown, setDropdown] = useState<HTMLElement | null>(null);
  const [color, setColor] = useState<HsvaColor | undefined>(undefined);
  const [gradient, setGradient] = useState<GradientObj | undefined>(undefined);

  useClickOutside(() => toggleOpen(false), null, [control, dropdown]);

  const compareGradient = (value: any, gradient: any) => {
    if (gradient === undefined) {
      return false;
    }

    const valueStr = cssGradient([value], "single_gradient");
    const gradientStr = cssGradient([gradient], "single_gradient");

    return valueStr === gradientStr;
  };

  useEffect(() => {
    if (update) {
      const hasGradient = isGradient(value);

      if (!hasGradient) {
        if (color !== colord(value).toHsv()) {
          const color = colord(value).toHsv();
          setColor(color);
        }
      } else {
        const gradientObject: GradientObj = getGradientObject(value);

        if (gradient === undefined) {
          setGradient(gradientObject as GradientObj);

          if (gradientObject.colors.length > 0) {
            const _color = gradientObject.colors[0]!.color;

            setColor(colord(_color).toHsv());
            setActiveStopIndex(gradientObject.colors[0]!.id);
          }
        } else {
          const newGradient = { ...gradient };
          let update = false;

          if (!compareGradient(gradientObject, gradient)) {
            // Update gradient
            // angle
            if (gradientObject.angle !== gradient?.angle) {
              newGradient.angle = gradientObject.angle;

              update = true;
            }
            // colors
            if (!isEqual(gradientObject.colors, gradient?.colors)) {
              gradientObject.colors.map((item, index) => {
                // Color changed
                if (item.color !== gradient.colors[index]!.color) {
                  newGradient.colors[index]!.color = item.color;

                  update = true;
                }

                // Position changed
                if (item.position !== gradient.colors[index]!.position) {
                  newGradient.colors[index]!.position = item.position;

                  update = true;
                }
              });
            }
            // extent
            if (gradientObject.extent !== gradient?.extent) {
              newGradient.extent = gradientObject.extent;

              update = true;
            }
            // hints
            if (!isEqual(gradientObject.hints, gradient?.hints)) {
              newGradient.hints = gradientObject.hints;

              update = true;
            }
            // positions
            if (!isEqual(gradientObject.positions, gradient?.positions)) {
              newGradient.positions = gradientObject.positions;

              update = true;
            }
            // repeating
            if (gradientObject.repeating !== gradient?.repeating) {
              newGradient.repeating = gradientObject.repeating;

              update = true;
            }
            // shape
            // sizes
            if (!isEqual(gradientObject.sizes, gradient?.sizes)) {
              newGradient.sizes = gradientObject.sizes;

              update = true;
            }
            // type
            if (gradientObject.type !== gradient?.type) {
              newGradient.type = gradientObject.type;

              update = true;
            }

            if (update) {
              const _color = newGradient.colors[0]!.color;
              setColor(colord(_color).toHsv());

              setGradient(newGradient as GradientObj);
              setActiveStopIndex(newGradient.colors[0]!.id);
            }
          }
        }
      }
    }
  }, [value]);

  useDidUpdate(() => {
    if (color !== undefined) {
      setUpdate(false);
      if (gradient === undefined) {
        onChange(colord(color).toRgbString());
      } else {
        onChange(cssGradient([gradient], "single_gradient"));
      }

      window.setTimeout(() => {
        setUpdate(true);
      }, 10);
    }
  }, [color, gradient]);

  useDidUpdate(() => {
    const obj = gradient?.colors.find((item) => item.id === activeStopIndex);

    if (obj) {
      setColor(colord(obj.color).toHsv());
    }
  }, [activeStopIndex]);

  return (
    <GradientPickerProvider
      value={{
        color,
        gradient,
        isOpen,
        activeStopIndex,
        control,
        dropdown,
        setColor,
        setGradient,
        onChange,
        toggleOpen,
        setControl,
        setDropdown,
        setActiveStopIndex,
        getStyles,
      }}
    >
      <Box {...getStyles("root")} {...others}>
        {children}
      </Box>
    </GradientPickerProvider>
  );
}

const extendGradientPicker = (
  c: ExtendComponent<GradientPickerFactory>,
): RaikouThemeComponent => c;

GradientPicker.extend = extendGradientPicker;
GradientPicker.displayName = "@raikou/core/GradientPicker";
// GradientPicker.AlphaSlider = GradientPickerAlphaSlider;
GradientPicker.Compact = GradientPickerCompact;
// GradientPicker.EyeDropper = GradientPickerEyeDropper;
// GradientPicker.Gradient = GradientPickerGradient;
// GradientPicker.HueSlider = GradientPickerHueSlider;
GradientPicker.Picker = GradientPickerPicker;
// GradientPicker.Saturation = GradientPickerSaturation;
// GradientPicker.Swatches = GradientPickerSwatches;
