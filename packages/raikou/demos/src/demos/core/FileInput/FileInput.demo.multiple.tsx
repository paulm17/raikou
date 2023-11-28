import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { FileInput } from "@raikou/client";

const code = `
import { FileInput } from '@raikou/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;

function Demo() {
  return <FileInput multiple label="Upload files" placeholder="Upload files" />;
}

export const multiple: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
