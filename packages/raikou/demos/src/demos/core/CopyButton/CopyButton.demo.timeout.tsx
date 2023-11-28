import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { CopyButton, Tooltip } from "@raikou/client";
import { ActionIcon } from "@raikou/server";
import { rem } from "@raikou/system";
import { IconCopy, IconCheck } from "@tabler/icons-react";

const code = `
import { CopyButton, ActionIcon, Tooltip, rem } from '@raikou/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://raikou.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`;

function Demo() {
  return (
    <CopyButton value="https://raikou.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export const timeout: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
