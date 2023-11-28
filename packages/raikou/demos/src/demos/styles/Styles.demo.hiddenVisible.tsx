import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";

const code = `
import { Button, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}

export const hiddenVisible: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
