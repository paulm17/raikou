import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { interactiveVariantsControl } from "../../../shared";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`;

function Wrapper(props: any) {
  return <Button {...props}>Button</Button>;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    interactiveVariantsControl,
    {
      type: "color",
      prop: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
    { type: "size", prop: "size", initialValue: "sm", libraryValue: "sm" },
    { type: "size", prop: "radius", initialValue: "sm", libraryValue: "sm" },
  ],
};
