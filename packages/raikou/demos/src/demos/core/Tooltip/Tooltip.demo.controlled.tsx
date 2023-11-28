import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";

const code = `
import { useState } from 'react';
import { Tooltip, Button } from '@raikou/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}

export const controlled: RaikouDemo = {
  type: "code",
  centered: true,
  code,
  component: Demo,
};
