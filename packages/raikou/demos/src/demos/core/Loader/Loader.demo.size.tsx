import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Loader } from "@raikou/server";

const code = `
import { Loader } from '@raikou/core';

function Demo() {
  return <Loader{{props}} />;
}
`;

function Wrapper(props: any) {
  return <Loader {...props} />;
}

export const size: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  minHeight: 70,
  controls: [
    {
      type: "number",
      prop: "size",
      initialValue: 30,
      min: 10,
      max: 50,
      libraryValue: "__none__",
    },
  ],
};
