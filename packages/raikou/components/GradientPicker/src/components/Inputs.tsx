import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { useGradientPickerContext } from "../GradientPicker.context";
import { Grid } from "../../../Grid/src";
import { Group } from "../../../Group/src";
import { TextInput } from "../../../TextInput/src";
import { ColorFormat } from "../../../ColorPicker/src/ColorPicker.types";
import { convertHsvaTo } from "../../../ColorPicker/src";

export type InputsStylesNames = "pickerInput" | "dropdown";

export interface InputsProps
  extends BoxProps,
    CompoundStylesApiProps<InputsFactory> {
  /** Color format */
  format: ColorFormat;
}

export type InputsFactory = Factory<{
  props: InputsProps;
  ref: HTMLDivElement;
  stylesNames: InputsStylesNames;
  compound: true;
}>;

const defaultProps: Partial<InputsProps> = {};

export const Inputs = factory<InputsFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, format, ...others } =
    useProps("Inputs", defaultProps, props);

  const ctx = useGradientPickerContext();

  const retrieveValue = (index: number) => {
    if (format === "rgba") {
      const value = convertHsvaTo("rgba", ctx.color).match(/[\d.]+/g)!;
      const key = Object.keys(value)[index]!;

      return value[key];
    } else if (format === "hsla") {
      const value = convertHsvaTo("hsla", ctx.color).match(/[\d.]+/g)!;
      const key = Object.keys(value)[index]!;

      return value[key];
    } /*else if (format === "hsva") {
      const value = ctx.color[index];
      const key = Object.keys(value)[index]!;

      return value[key];
    } //else if (format === "cmyk") {
      //return colord(ctx.color).to()[index]
    //}*/

    return "";
  };

  const retrieveLabel = (index: number) => {
    if (format === "rgba") {
      return "RGBA".split("")[index];
    } else if (format === "hsla") {
      return "HSLA".split("")[index];
    } /*else if (format === "hsva") {
      return "HSVA".split("")[index];
    } else if (format === "cmyk") {
      return "CMYK".split("")[index];
    }*/

    return "";
  };

  return (
    <Grid {...others}>
      <Grid.Col span="content">
        <TextInput
          size="xs"
          value={convertHsvaTo("hex", ctx.color)}
          onChange={() => {}}
          label="Hex"
          classNames={{
            root: "flex flex-col-reverse w-[90px]",
            label: "w-full text-center",
            input: "text-center!",
          }}
        />
      </Grid.Col>
      <Grid.Col span="auto">
        <Group gap={8} grow>
          <TextInput
            size="xs"
            readOnly
            value={retrieveValue(0)}
            onChange={() => {}}
            label={retrieveLabel(0)}
            classNames={{
              root: "flex flex-col-reverse",
              label: "w-full text-center",
              input: "text-center!",
            }}
          />
          <TextInput
            size="xs"
            readOnly
            value={retrieveValue(1)}
            onChange={() => {}}
            label={retrieveLabel(1)}
            classNames={{
              root: "flex flex-col-reverse",
              label: "w-full text-center",
              input: "text-center!",
            }}
          />
          <TextInput
            size="xs"
            readOnly
            value={retrieveValue(2)}
            onChange={() => {}}
            label={retrieveLabel(2)}
            classNames={{
              root: "flex flex-col-reverse",
              label: "w-full text-center",
              input: "text-center!",
            }}
          />
          <TextInput
            size="xs"
            readOnly
            value={retrieveValue(3)}
            onChange={() => {}}
            label={retrieveLabel(3)}
            classNames={{
              root: "flex flex-col-reverse",
              label: "w-full text-center",
              input: "text-center!",
            }}
          />
        </Group>
      </Grid.Col>
    </Grid>
  );
});

Inputs.displayName = "@raikou/core/Inputs";
