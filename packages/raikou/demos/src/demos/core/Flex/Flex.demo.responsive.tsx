import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Flex, Button } from "@raikou/server";

const code = `
import { Flex, Button } from '@raikou/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;

function Demo() {
  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}

export const responsive: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
