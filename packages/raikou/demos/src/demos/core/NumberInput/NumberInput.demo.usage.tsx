import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NumberInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { NumberInput } from '@raikou/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <NumberInput {...props} placeholder="Input placeholder" />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
