import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";
import { inputControls } from "../../../shared";

const code = `
import { NativeSelect } from '@raikou/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <NativeSelect {...props} data={["React", "Angular", "Vue"]} />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
