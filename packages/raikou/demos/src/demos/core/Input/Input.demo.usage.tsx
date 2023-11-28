import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Input } from "@raikou/client";
import { inputOnlyControls } from "../../../shared";

const code = `
import { Input } from '@raikou/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`;

function Wrapper(props: any) {
  return <Input placeholder="Input component" {...props} />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputOnlyControls,
};
