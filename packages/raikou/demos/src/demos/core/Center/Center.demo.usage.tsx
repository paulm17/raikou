import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Center, Box } from "@raikou/server";

const code = `
import { Center, Box } from '@raikou/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--raikou-color-gray-light)">
      <Box bg="var(--raikou-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
`;

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--raikou-color-gray-light)">
      <Box bg="var(--raikou-color-blue-light)">
        All elements inside Center are centered
      </Box>
    </Center>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
