import React, { useRef } from "react";
import { Button, Group } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { BaseDemo } from "./_base";

const code = `
import { useRef } from 'react';
import { Button, Group } from '@raikou/core';
import { Dropzone } from '@raikou/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef} onDrop={() => {}}>
        {/* children */}
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <BaseDemo openRef={openRef} />
      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}

export const manual: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
