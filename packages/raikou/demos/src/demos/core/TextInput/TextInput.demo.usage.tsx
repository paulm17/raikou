import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { TextInput } from '@raikou/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <TextInput {...props} placeholder="Input placeholder" />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
