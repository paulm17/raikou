import React, { useState } from "react";
import { Input, CheckIcon, Popover, ColorPicker } from "@raikou/client";
import {
  ColorSwatch,
  BoxProps,
  ElementProps,
  Group,
  UnstyledButton,
} from "@raikou/server";
import { DEFAULT_THEME } from "@raikou/system";
import { getControlLabel } from "./get-control-label";
import { ConfiguratorControl } from "./types";
import { ColorWheelIcon } from "./ColorWheelIcon";

export type ConfiguratorColorControlOptions = ConfiguratorControl<
  "color",
  { initialValue: string }
>;

export interface ConfiguratorColorControlProps
  extends BoxProps,
    ElementProps<"div", "onChange" | "value" | "size"> {
  value: string;
  onChange(value: string): void;
  prop: string;
}

export function ConfiguratorColorControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorColorControlProps) {
  const [colorPickerColor, setColorPickerColor] = useState("#fff");

  const handleColorPickerChange = (color: string) => {
    setColorPickerColor(color);
    onChange(color);
  };

  const colors = Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== "dark")
    .map((color) => (
      <ColorSwatch
        color={`var(--raikou-color-${color}-filled)`}
        component="button"
        key={color}
        onClick={() => onChange(color)}
        radius="sm"
        className="configColor-swatch"
        aria-label={color}
      >
        {value === color && <CheckIcon className="configColor-check" />}
      </ColorSwatch>
    ));

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Group gap={2} mt={2} wrap="wrap">
        {colors}
        <Popover radius="md" position="bottom-end" shadow="md">
          <Popover.Target>
            <UnstyledButton
              className="configColor-colorControl"
              aria-label="Pick color"
            >
              <ColorWheelIcon />
            </UnstyledButton>
          </Popover.Target>

          <Popover.Dropdown p={8}>
            <ColorPicker
              value={colorPickerColor}
              onChange={handleColorPickerChange}
              format="rgba"
            />
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Input.Wrapper>
  );
}
