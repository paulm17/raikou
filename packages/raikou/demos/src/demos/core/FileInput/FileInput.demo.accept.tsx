import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";

const code = `
import { FileInput } from '@raikou/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
`;

function Demo() {
  return (
    <FileInput
      accept="image/png,image/jpeg"
      label="Upload files"
      placeholder="Upload files"
    />
  );
}

export const accept: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
