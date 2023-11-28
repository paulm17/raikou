import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ActionIcon } from "@raikou/server";
import { Tooltip } from "@raikou/client";
import { IconHeart } from "@tabler/icons-react";

const code = `
import { ActionIcon, Tooltip } from '@raikou/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon
        size="xl"
        data-disabled
        onClick={(event) => event.preventDefault()}
      >
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}

export const disabledTooltip: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
