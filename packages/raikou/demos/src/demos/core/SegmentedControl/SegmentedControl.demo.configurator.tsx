import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SegmentedControl } from "@raikou/client";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
`;

function Wrapper(props: any) {
  return (
    <SegmentedControl data={["React", "Angular", "Vue", "Svelte"]} {...props} />
  );
}

export const configurator: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: "color", type: "color", initialValue: "blue", libraryValue: null },
  ],
};
