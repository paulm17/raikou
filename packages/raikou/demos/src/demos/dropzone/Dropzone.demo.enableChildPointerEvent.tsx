import React, { useRef } from "react";
import { Button, Group } from "@raikou/server";
import { Dropzone } from "@raikou/dropzone";
import { RaikouDemo } from "@raikou/ds";

const code = `
import { useRef } from 'react';
import { Button, Group } from '@raikou/core';
import { Dropzone } from '@raikou/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button
          onClick={() => openRef.current?.()}
          style={{ pointerEvents: "all" }}
        >
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}

export const enableChildPointerEvent: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
