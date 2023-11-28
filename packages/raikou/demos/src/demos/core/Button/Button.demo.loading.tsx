import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";

const code = `
import { Button, Group } from '@raikou/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}

export const loading: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
