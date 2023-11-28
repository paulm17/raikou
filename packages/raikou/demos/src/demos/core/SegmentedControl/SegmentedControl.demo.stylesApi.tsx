import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SegmentedControl } from "@raikou/client";
import { SegmentedControlStylesApi } from "@raikou/styles-api";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo(props: any) {
  return <SegmentedControl data={["React", "Angular", "Vue"]} {...props} />;
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: SegmentedControlStylesApi,
  component: Demo,
  code,
  centered: true,
};
