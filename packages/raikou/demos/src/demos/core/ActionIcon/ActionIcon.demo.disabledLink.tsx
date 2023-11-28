import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon } from "@raikou/server";
import { IconExternalLink } from "@tabler/icons-react";

const code = `
import { ActionIcon } from '@raikou/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://raikou.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://raikou.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}

export const disabledLink: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
