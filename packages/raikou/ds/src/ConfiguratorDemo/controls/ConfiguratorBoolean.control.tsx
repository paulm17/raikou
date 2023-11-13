import React from "react";
import { BoxProps, ElementProps } from "@raikou/server";
import { Switch } from "@raikou/client";
import { getControlLabel } from "./get-control-label";
import { ConfiguratorControl } from "./types";

export type ConfiguratorBooleanControlOptions = ConfiguratorControl<
  "boolean",
  { initialValue: boolean }
>;

export interface ConfiguratorBooleanControlProps
  extends BoxProps,
    ElementProps<"input", "onChange" | "value" | "size"> {
  value: boolean;
  onChange: (value: boolean) => void;
  prop: string;
}

export function ConfiguratorBooleanControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorBooleanControlProps) {
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      label={getControlLabel(prop)}
      {...others}
    />
  );
}
