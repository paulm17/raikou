import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { ColorInput } from '@raikou/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <ColorInput {...props} placeholder="Input placeholder" />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
