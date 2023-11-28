import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { CloseButton } from "@raikou/server";

const code = `
import { CloseButton } from '@raikou/core';

function Demo() {
  return <CloseButton{{props}} />;
}
`;

function Wrapper(props: any) {
  return <CloseButton {...props} />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    {
      prop: "variant",
      type: "segmented",
      data: ["transparent", "subtle"],
      libraryValue: "subtle",
      initialValue: "subtle",
    },
  ],
};
