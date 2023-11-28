import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Textarea } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { Textarea } from '@raikou/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <Textarea {...props} placeholder="Input placeholder" />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
