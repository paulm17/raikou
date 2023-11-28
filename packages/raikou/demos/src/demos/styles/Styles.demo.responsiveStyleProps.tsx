import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Box } from "@raikou/core";

const code = `
import { Box } from '@raikou/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
`;

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: "xs", sm: "md", lg: "xl" }}
      bg={{ base: "blue.7", sm: "red.7", lg: "green.7" }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}

export const responsiveStyleProps: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
