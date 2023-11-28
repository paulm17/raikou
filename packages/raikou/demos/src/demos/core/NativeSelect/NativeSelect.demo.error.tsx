import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { NativeSelect } from "@raikou/client";

const code = `
import { NativeSelect } from '@raikou/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={["React", "Angular"]} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={["React", "Angular"]}
        mt="md"
      />
    </>
  );
}

export const error: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
