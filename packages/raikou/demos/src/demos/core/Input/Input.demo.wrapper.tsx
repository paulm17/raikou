import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { inputWrapperOnlyControls } from "../../../shared";

const code = `
import { Input } from '@raikou/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Input.Wrapper {...props}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}

export const wrapper: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputWrapperOnlyControls,
};
