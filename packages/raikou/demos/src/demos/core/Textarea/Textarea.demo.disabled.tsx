import { Box } from "@raikou/server";
import { Textarea } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import React from "react";

const code = `
import { Textarea } from '@raikou/core';

function Demo() {
  return <Textarea disabled/>;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Textarea label="Disabled" placeholder="Your comment" disabled />
    </Box>
  );
}

export const disabled: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
