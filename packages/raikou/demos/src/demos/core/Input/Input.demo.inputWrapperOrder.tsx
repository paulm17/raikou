import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { TextInput } from "@raikou/client";

const code = `
import { TextInput } from '@raikou/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={["label", "error", "input", "description"]}
      />
      <TextInput
        mt="md"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={["label", "input", "description", "error"]}
      />
    </>
  );
}

export const inputWrapperOrder: RaikouDemo = {
  type: "code",
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
