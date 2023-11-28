import React from "react";
import { Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useClipboard } from "@raikou/hooks";

const code = `
import { Button } from '@raikou/core';
import { useClipboard } from '@raikou/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? "teal" : "blue"}
      onClick={() => clipboard.copy("Hello, world!")}
    >
      {clipboard.copied ? "Copied" : "Copy"}
    </Button>
  );
}

export const useClipboardDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
