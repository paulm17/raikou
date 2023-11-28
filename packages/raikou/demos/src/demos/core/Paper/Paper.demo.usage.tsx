import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Text, Paper, Box } from "@raikou/server";

function Wrapper(props: any) {
  return (
    <Box p="md">
      <Paper maw={400} mx="auto" p="xl" {...props}>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
    </Box>
  );
}

const code = `
import { Text, Paper } from '@raikou/core';

function Demo() {
  return (
    <Paper{{props}} p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
`;

export const usage: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  dimmed: true,
  controls: [
    { prop: "shadow", type: "size", initialValue: "xs", libraryValue: "none" },
    { prop: "radius", type: "size", initialValue: "sm", libraryValue: "sm" },
    {
      prop: "withBorder",
      type: "boolean",
      initialValue: false,
      libraryValue: false,
    },
  ],
};
