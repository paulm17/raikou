import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Checkbox, CheckboxProps } from "@raikou/client";

const code = `
import { Checkbox } from '@raikou/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`;

export const configurator: RaikouDemo = {
  type: "configurator",
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  code,
  centered: true,
  controls: [
    {
      prop: "labelPosition",
      type: "segmented",
      data: [
        { value: "right", label: "Right" },
        { value: "left", label: "Left" },
      ],
      initialValue: "right",
      libraryValue: "right",
    },
    {
      prop: "label",
      type: "string",
      initialValue: "I agree to sell my privacy",
      libraryValue: "",
    },
    { prop: "description", type: "string", initialValue: "", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    {
      prop: "color",
      type: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    {
      prop: "disabled",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: "indeterminate",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
