import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  rem,
} from "@raikou/core";
import { Stack } from "../../../Stack/src";
import { Text } from "../../../Text/src";
import { Group } from "../../../Group/src";
import { TinyColor } from "@ctrl/tinycolor";
import { HsvaColor, colord } from "colord";

export type ColorGuideStylesNames = "root";

export interface ColorGuideProps
  extends BoxProps,
    CompoundStylesApiProps<ColorGuideFactory> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
}

export type ColorGuideFactory = Factory<{
  props: ColorGuideProps;
  ref: HTMLDivElement;
  stylesNames: ColorGuideStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ColorGuideProps> = {};

export const ColorGuide = factory<ColorGuideFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    onChange,
    ...others
  } = useProps("ColorGuide", defaultProps, props);

  const tinyColor = new TinyColor(colord(value).toRgbString());
  const analogous = tinyColor.analogous();
  const monochromatic = tinyColor.monochromatic();
  const triad = tinyColor.triad();
  const tetrad = tinyColor.tetrad();

  const modes = [
    { label: "Analogous", mode: analogous },
    { label: "Monochromatic", mode: monochromatic },
    { label: "Triad", mode: triad },
    { label: "Tetrad", mode: tetrad },
  ];

  return (
    <Stack gap={0} {...others}>
      {modes.map((mode, i) => {
        return (
          <Stack key={i} gap={0} className="mb-[4px]">
            <Text className="text-[12px]">{mode.label}</Text>
            <Group gap={0} grow>
              {mode.mode.map((c, key) => (
                <Box
                  key={key}
                  className={`h-[30px]`}
                  style={{
                    background: c.toHexString(),
                  }}
                  onClick={() => onChange(colord(c.toRgbString()).toHsv())}
                />
              ))}
            </Group>
          </Stack>
        );
      })}
    </Stack>
  );
});

ColorGuide.displayName = "@raikou/core/ColorGuide";
