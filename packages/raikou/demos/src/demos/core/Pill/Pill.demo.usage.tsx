import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Pill } from "@raikou/client";
import classes from "./_demo.module.css";

const code = `
import { Pill } from '@raikou/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`;

function Wrapper(props: any) {
  return (
    <div className={classes.demoWrapper}>
      <Pill {...props}>React</Pill>
    </div>
  );
}

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: "size", prop: "size", initialValue: "md", libraryValue: "md" },
    {
      type: "boolean",
      prop: "withRemoveButton",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
