import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Box } from "@raikou/server";
import { Tooltip } from "@raikou/client";

const code = `
import { Box, Tooltip } from '@raikou/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--raikou-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box
        p="xl"
        bg="var(--raikou-color-blue-light)"
        style={{ cursor: "default" }}
      >
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}

export const floating: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
};
