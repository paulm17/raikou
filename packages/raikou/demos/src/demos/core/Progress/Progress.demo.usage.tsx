import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Progress } from "@raikou/client";

const code = `
import { Progress } from '@raikou/core';

function Demo() {
  return <Progress{{props}} />;
}
`;

function Demo(props: any) {
  return <Progress {...props} />;
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    {
      prop: "color",
      type: "color",
      initialValue: "blue",
      libraryValue: "blue",
    },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    {
      prop: "value",
      type: "number",
      initialValue: 50,
      max: 100,
      min: 0,
      step: 10,
      libraryValue: "__",
    },
    {
      prop: "striped",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: "animated",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
