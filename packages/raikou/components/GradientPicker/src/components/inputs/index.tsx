import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
} from "@raikou/core";
import { useGradientPickerContext } from "../../GradientPicker.context";
import cx from "clsx";
import { Grid } from "../../../../Grid/src";
import { Group } from "../../../../Group/src";
import { TextInput } from "../../../../TextInput/src";
import { colord } from "colord";
import { ColorFormat } from "../../GradientPicker.types";

export type GradientPickerInputsStylesNames = "pickerInput" | "dropdown";

export interface GradientPickerInputsProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerInputsFactory> {
  /** Color format */
  format?: ColorFormat | undefined;
}

export type GradientPickerInputsFactory = Factory<{
  props: GradientPickerInputsProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerInputsStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerInputsProps> = {
  format: "rgba",
};

export const GradientPickerInputs = factory<GradientPickerInputsFactory>(
  (props, ref) => {
    const { classNames, className, style, styles, vars, format, ...others } =
      useProps("GradientPickerInputs", defaultProps, props);

    const ctx = useGradientPickerContext();

    const retrieveValue = (index: number) => {
      if (format === "rgba") {
        const value = colord(ctx.color).toRgb();
        const key = Object.keys(value)[index]!;

        return value[key];
      } else if (format === "hsla") {
        const value = colord(ctx.color).toHsl();
        const key = Object.keys(value)[index]!;

        return value[key];
      } else if (format === "hsva") {
        const value = ctx.color[index];
        const key = Object.keys(value)[index]!;

        return value[key];
      } else if (format === "cmyk") {
        //return colord(ctx.color).to()[index]
      }

      return "";
    };

    const retrieveLabel = (index: number) => {
      if (format === "rgba") {
        return "RGBA".split("")[index];
      } else if (format === "hsla") {
        return "HSLA".split("")[index];
      } else if (format === "hsva") {
        return "HSVA".split("")[index];
      } else if (format === "cmyk") {
        return "CMYK".split("")[index];
      }

      return "";
    };

    return (
      <Grid {...others}>
        <Grid.Col
          span={4}
          // style={{ ...(styles as any).gridCol }}
        >
          <TextInput
            size="xs"
            value={colord(ctx.color).toHex().toString().replace("#", "")}
            onChange={() => {}}
            label="Hex"
            styles={{
              root: {
                display: "flex",
                flexDirection: "column-reverse",
                width: "70px",
              },
              label: {
                width: "100%",
                textAlign: "center",
              },
              input: {
                textAlign: "center",
              },
            }}
          />
        </Grid.Col>
        <Grid.Col
          span="auto"
          // style={{ ...(styles as any).gridCol }}
        >
          <Group gap={8} grow>
            <TextInput
              size="xs"
              readOnly
              value={retrieveValue(0)}
              onChange={() => {}}
              label={retrieveLabel(0)}
              className={cx("textInput", className)}
            />
            <TextInput
              size="xs"
              readOnly
              value={retrieveValue(1)}
              onChange={() => {}}
              label={retrieveLabel(1)}
              className={cx("textInput", className)}
            />
            <TextInput
              size="xs"
              readOnly
              value={retrieveValue(2)}
              onChange={() => {}}
              label={retrieveLabel(2)}
              className={cx("textInput", className)}
            />
            <TextInput
              size="xs"
              readOnly
              value={retrieveValue(3)}
              onChange={() => {}}
              label={retrieveLabel(3)}
              className={cx("textInput", className)}
            />
          </Group>
        </Grid.Col>
      </Grid>
    );
  },
);

GradientPickerInputs.displayName = "@raikou/core/GradientPickerInputs";
