import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Center, Anchor, Box } from "@raikou/server";
import { rem } from "@raikou/theme";

const code = `
import { Center, Anchor, Box, rem } from '@raikou/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://raikou.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Raikou website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://raikou.dev" target="_blank">
      <Center inline>
        <IconArrowLeft
          style={{ width: rem(12), height: rem(12) }}
          className="raikou-rotate-rtl"
        />
        <Box ml={5}>Back to Raikou website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
