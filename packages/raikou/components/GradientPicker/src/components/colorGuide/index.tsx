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
import { Stack } from "../../../../Stack/src";
import { Text } from "../../../../Text/src";
import { Group } from "../../../../Group/src";
import { TinyColor } from "@ctrl/tinycolor";
import { HsvaColor, colord } from "colord";

export type GradientPickerColorGuideStylesNames = "root";

export interface GradientPickerColorGuideProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerColorGuideFactory> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
}

export type GradientPickerColorGuideFactory = Factory<{
  props: GradientPickerColorGuideProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerColorGuideStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerColorGuideProps> = {};

export const GradientPickerColorGuide =
  factory<GradientPickerColorGuideFactory>((props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      value,
      onChange,
      ...others
    } = useProps("GradientPickerColorGuide", defaultProps, props);

    const tinyColor = new TinyColor(colord(value).toRgbString());
    const analogous = tinyColor.analogous();
    const monochromatic = tinyColor.monochromatic();
    const triad = tinyColor.triad();
    const tetrad = tinyColor.tetrad();

    return (
      <Stack gap={0} {...others}>
        <Stack gap={0} mb={4}>
          <Text size={rem(12)}>Analogous</Text>
          <Group gap={0} grow>
            {analogous?.map((c, key) => (
              <Box
                key={key}
                style={{
                  height: 30,
                  background: c.toHexString(),
                }}
                onClick={() => onChange(colord(c.toRgbString()).toHsv())}
              />
            ))}
          </Group>
        </Stack>
        <Stack gap={0} mb={4}>
          <Text size={rem(12)}>Monochromatic</Text>
          <Group gap={0} grow>
            {monochromatic?.map((c, key) => (
              <Box
                key={key}
                style={{
                  height: 30,
                  background: c.toHexString(),
                }}
                onClick={() => onChange(colord(c.toRgbString()).toHsv())}
              />
            ))}
          </Group>
        </Stack>
        <Stack gap={0} mb={4}>
          <Text size={rem(12)}>Triad</Text>
          <Group gap={0} grow>
            {triad?.map((c, key) => (
              <Box
                key={key}
                style={{
                  height: 30,
                  background: c.toHexString(),
                }}
                onClick={() => onChange(colord(c.toRgbString()).toHsv())}
              />
            ))}
          </Group>
        </Stack>
        <Stack gap={0}>
          <Text size={rem(12)}>Tetrad</Text>
          <Group gap={0} grow>
            {tetrad?.map((c, key) => (
              <Box
                key={key}
                style={{
                  height: 30,
                  background: c.toHexString(),
                }}
                onClick={() => onChange(colord(c.toRgbString()).toHsv())}
              />
            ))}
          </Group>
        </Stack>
      </Stack>
    );
  });

GradientPickerColorGuide.displayName = "@raikou/core/GradientPickerColorGuide";
