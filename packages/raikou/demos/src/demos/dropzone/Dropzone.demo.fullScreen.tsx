/* eslint-disable no-console */
import React, { useState } from "react";
import { Button, Group } from "@raikou/server";
import { Dropzone, IMAGE_MIME_TYPE } from "@raikou/dropzone";
import { RaikouDemo } from "@raikou/ds";
import { DropzoneDemoChildren } from "./_base";

const code = `
import { useState } from 'react';
import { Group, Text, Button, rem } from '@raikou/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@raikou/dropzone';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group justify="center">
        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>
          {active ? 'Deactivate' : 'Activate'} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--raikou-color-blue-6)' }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--raikou-color-red-6)' }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--raikou-color-dimmed)' }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group justify="center">
        <Button
          color={active ? "red" : "blue"}
          onClick={() => setActive((d) => !d)}
        >
          {active ? "Deactivate" : "Activate"} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
      >
        <DropzoneDemoChildren />
      </Dropzone.FullScreen>
    </>
  );
}

export const fullScreen: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
