import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { RatingProps, Rating } from "@raikou/client";

const code = `
import { Rating } from '@raikou/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
`;

function Wrapper(props: RatingProps) {
  return <Rating defaultValue={2} {...props} />;
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: "color",
      type: "color",
      initialValue: "yellow",
      libraryValue: "yellow",
    },
    { prop: "size", type: "size", initialValue: "md", libraryValue: "md" },
    {
      prop: "count",
      type: "number",
      initialValue: 5,
      libraryValue: 5,
      min: 1,
      max: 8,
    },
    {
      prop: "highlightSelectedOnly",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
