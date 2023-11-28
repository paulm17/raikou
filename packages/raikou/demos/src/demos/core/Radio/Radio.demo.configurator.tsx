import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RadioProps, Radio } from "@raikou/client";

const code = `
import { Radio } from '@raikou/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`;

function Wrapper(props: RadioProps) {
  return (
    <Radio.Group name="demo" defaultValue="react">
      <Radio value="react" {...props} />
    </Radio.Group>
  );
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
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
      initialValue: "I cannot be unchecked",
      libraryValue: "",
    },
    { prop: "description", type: "string", initialValue: "", libraryValue: "" },
    { prop: "error", type: "string", initialValue: "", libraryValue: "" },
    { prop: "size", type: "size", initialValue: "sm", libraryValue: "sm" },
    {
      prop: "color",
      type: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
  ],
};
