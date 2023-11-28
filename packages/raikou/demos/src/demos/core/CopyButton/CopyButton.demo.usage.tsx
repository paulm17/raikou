import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { CopyButton } from "@raikou/client";

const code = `
import { CopyButton, Button } from '@raikou/core';

function Demo() {
  return (
    <CopyButton value="https://raikou.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <CopyButton value="https://raikou.dev">
      {({ copied, copy }) => (
        <Button color={copied ? "teal" : "blue"} onClick={copy}>
          {copied ? "Copied url" : "Copy url"}
        </Button>
      )}
    </CopyButton>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
