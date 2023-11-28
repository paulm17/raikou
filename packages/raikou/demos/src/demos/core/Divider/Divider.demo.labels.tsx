import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { Divider, Box, Anchor } from "@raikou/server";

const code = `
import { Divider, Box, Anchor } from '@raikou/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://raikou.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://raikou.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}

export const labels: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
