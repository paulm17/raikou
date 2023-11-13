import { forwardRef, ReactNode, useEffect } from "react";
import { Box } from "@mantine/core";
import { DefaultProps, useComponentDefaultProps } from "@mantine/styles";
import { ForwardRefWithStaticComponents } from "@mantine/utils";
import { Dial, Repeat, Reverse, Rotate, Slider } from "./components";
import { useGradientPickerContext } from "../../GradientPicker.context";
import { ColorPosition, GradientProps, Position } from "./types";
import {
  GradientExtent,
  GradientObj,
  GradientSize,
} from "../../GradientPicker.types";

interface gradientProps extends DefaultProps {
  children: ({
    angle,
    colorPosition,
    extent,
    position,
    setAngle,
    setColorPosition,
    setExtent,
    setPosition,
  }: GradientProps) => ReactNode;
}

type GradientComponent = ForwardRefWithStaticComponents<
  gradientProps,
  { Dial: typeof Dial } & {
    Repeat: typeof Repeat;
  } & {
    Reverse: typeof Reverse;
  } & {
    Rotate: typeof Rotate;
  } & {
    Slider: typeof Slider;
  }
>;

const defaultProps: Partial<gradientProps> = {};

const _Gradient: GradientComponent = forwardRef<
  HTMLInputElement,
  gradientProps
>((props, ref) => {
  const { classNames, styles, unstyled, className, children, ...others } =
    useComponentDefaultProps<gradientProps>("Gradient", defaultProps, props);

  const ctx = useGradientPickerContext();

  const setAngle = (value: number) => {
    const newGradient = { ...ctx.gradient };
    newGradient.angle = value;
    ctx.setGradient(newGradient as GradientObj);
  };

  const setExtent = (value: GradientExtent) => {
    const newGradient = { ...ctx.gradient };
    newGradient.extent = value;
    ctx.setGradient(newGradient as GradientObj);
  };

  const getColorPosition = () => {
    const obj = ctx.gradient?.colors.find(
      (item) => item.id === ctx.activeStopIndex,
    );

    if (obj === undefined) {
      console.log("getColorPosition", obj);
    }

    if (obj) {
      return {
        value: Math.round(obj.position),
        unit: obj.unit,
      } as ColorPosition;
    }
  };

  const setColorPosition = (value: ColorPosition) => {
    const newGradient = { ...ctx.gradient };

    if (Number.isNaN(value.value)) {
      return false;
    }

    if (newGradient.colors && newGradient.colors.length) {
      newGradient.colors[0]!.position = value.value;

      if (value.unit !== ctx.gradient?.colors[0]?.unit) {
        newGradient.colors[0]!.unit = value.unit;
      }

      ctx.setGradient(newGradient as GradientObj);
    }
  };

  const setPosition = (value: Position) => {
    const newGradient = { ...ctx.gradient };
    newGradient.positions = {
      x: { value: value.x.value, unit: value.x.unit },
      y: { value: value.y.value, unit: value.y.unit },
    };
    ctx.setGradient(newGradient as GradientObj);
  };

  return (
    <Box {...others}>
      {typeof children === "function" &&
        children({
          angle: ctx.gradient?.angle,
          colorPosition: getColorPosition(),
          extent: ctx.gradient?.extent,
          position: ctx.gradient?.positions,
          setAngle,
          setColorPosition,
          setExtent,
          setPosition,
        })}
    </Box>
  );
}) as any;

_Gradient.Dial = Dial;
_Gradient.Repeat = Repeat;
_Gradient.Reverse = Reverse;
_Gradient.Rotate = Rotate;
_Gradient.Slider = Slider;

export { _Gradient as Gradient };
