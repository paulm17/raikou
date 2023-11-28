import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { JsonInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { JsonInput } from '@raikou/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <JsonInput {...props} placeholder="Input placeholder" />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
