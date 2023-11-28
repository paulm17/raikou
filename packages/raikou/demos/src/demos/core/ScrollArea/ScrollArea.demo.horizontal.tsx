import React from "react";
import { ScrollArea } from "@raikou/client";
import { Box } from "@raikou/core";
import { RaikouDemo } from "@raikou/ds";
import { Content } from "./_content";

const code = `
import { ScrollArea, Box } from '@raikou/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        <Content />
      </Box>
    </ScrollArea>
  );
}

export const horizontal: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
