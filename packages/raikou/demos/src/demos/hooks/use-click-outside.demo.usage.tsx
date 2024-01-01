import React, { useState } from "react";
import { Paper, Button, Group } from "@raikou/server";
import { rem } from "@raikou/theme";
import { RaikouDemo } from "@raikou/ds";
import { useClickOutside } from "@raikou/hooks";

const code = `
import { useState } from 'react';
import { Paper, Button } from '@raikou/core';
import { useClickOutside } from '@raikou/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <div style={{ position: "relative" }}>
        <Group justify="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </Group>

        {opened && (
          <Paper
            ref={ref}
            shadow="sm"
            style={{
              width: rem(300),
              height: rem(60),
              position: "absolute",
              top: 0,
              left: `calc(50% - ${rem(150)})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </>
  );
}

export const useClickOutsideUsage: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  dimmed: true,
};
