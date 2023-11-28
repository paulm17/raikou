import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { PasswordInput } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { PasswordInput } from '@raikou/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`;

function Wrapper(props: any) {
  return <PasswordInput {...props} placeholder="Input placeholder" />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
