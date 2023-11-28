import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { SegmentedControl } from "@raikou/client";

const code = `
import { SegmentedControl } from '@raikou/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo() {
  return (
    <SegmentedControl
      readOnly
      defaultValue="Angular"
      data={["React", "Angular", "Vue"]}
    />
  );
}

export const readOnly: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
