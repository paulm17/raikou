import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { JsonInput } from "@raikou/client";

const code = `
import { JsonInput } from '@raikou/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;

function Demo() {
  return (
    <JsonInput
      maw={400}
      mx="auto"
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
