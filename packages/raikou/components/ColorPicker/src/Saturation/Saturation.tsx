import React, { useEffect, useRef, useState } from "react";
import { clampUseMovePosition, useMove, UseMovePosition } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  Factory,
  RaikouSize,
  createVarsResolver,
  factory,
  getSize,
  useProps,
  useStyles,
} from "@raikou/core";
import classes from "../ColorPicker.module.css";
import { HsvaColor } from "../ColorPicker.types";
import { convertHsvaTo } from "../converters";
import { Thumb } from "../Thumb/Thumb";

export type SaturationStylesNames =
  | "saturation"
  | "saturationOverlay"
  | "thumb";

export interface SaturationProps
  extends BoxProps,
    CompoundStylesApiProps<SaturationFactory>,
    ElementProps<"div", "onChange"> {
  value: HsvaColor;
  onChange: (color: Partial<HsvaColor>) => void;
  onChangeEnd: (color: Partial<HsvaColor>) => void;
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
  saturationLabel?: string;
  size: RaikouSize | (string & {});
  focusable?: boolean;
}

export type SaturationFactory = Factory<{
  props: SaturationProps;
  ref: HTMLDivElement;
  stylesNames: SaturationStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SaturationProps> = {
  focusable: true,
};

const varsResolver = createVarsResolver<SaturationFactory>((_, { size }) => ({
  saturation: {
    "--cp-thumb-size": getSize(size, "cp-thumb-size"),
    "--cp-saturation-height": getSize(size, "cp-saturation-height"),
  },
}));

export const Saturation = factory<SaturationFactory>((props, ref) => {
  const {
    className,
    onChange,
    onChangeEnd,
    value,
    saturationLabel,
    focusable = true,
    size,
    color,
    style,
    classNames,
    styles,
    onScrubStart,
    onScrubEnd,
    vars,
    ...others
  } = useProps("Saturation", defaultProps, props);

  const getStyles = useStyles<SaturationFactory>({
    name: "ColorPicker",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    vars,
    varsResolver,
  });

  const [position, setPosition] = useState({
    x: value.s / 100,
    y: 1 - value.v / 100,
  });
  const positionRef = useRef(position);

  const { ref: moveRef } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
        onScrubEnd?.();
      },
      onScrubStart,
    },
  );

  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);

  const handleArrow = (
    event: React.KeyboardEvent<HTMLDivElement>,
    pos: UseMovePosition,
  ) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100),
    });
    onChangeEnd({
      s: Math.round(_position.x * 100),
      v: Math.round((1 - _position.y) * 100),
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowUp": {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }

      case "ArrowDown": {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }

      case "ArrowRight": {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }

      case "ArrowLeft": {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };

  return (
    <Box
      {...getStyles("saturation")}
      ref={moveRef as any}
      {...others}
      role="slider"
      aria-label={saturationLabel}
      aria-valuenow={position.x}
      aria-valuetext={convertHsvaTo("rgba", value)}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      <div
        {...getStyles("saturationOverlay", {
          style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` },
        })}
      />
      <div
        {...getStyles("saturationOverlay", {
          style: {
            backgroundImage: "linear-gradient(90deg, #fff, transparent)",
          },
        })}
      />
      <div
        {...getStyles("saturationOverlay", {
          style: {
            backgroundImage: "linear-gradient(0deg, #000, transparent)",
          },
        })}
      />
      <Thumb
        position={position}
        {...getStyles("thumb", { style: { backgroundColor: color } })}
      />
    </Box>
  );
});

Saturation.displayName = "@raikou/core/Saturation";
