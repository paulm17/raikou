import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";

const code = `
import { NativeSelect } from '@raikou/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`;

function Demo() {
  return (
    <NativeSelect
      disabled
      data={["React", "Angular"]}
      label="Disabled NativeSelect"
    />
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
