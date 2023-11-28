import React from "react";
import { IconPhoto, IconPrinter, IconCameraSelfie } from "@tabler/icons-react";
import { RaikouDemo } from "@raikou/ds";
import { rem } from "@raikou/core";
import { Accordion } from "@raikou/client";

const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@raikou/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--raikou-color-red-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{ color: 'var(--raikou-color-blue-filled', width: rem(20), height: rem(20) }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{ color: 'var(--raikou-color-teal-filled)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{
                color: "var(--raikou-color-red-filled",
                width: rem(20),
                height: rem(20),
              }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{
                color: "var(--raikou-color-blue-filled",
                width: rem(20),
                height: rem(20),
              }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{
                color: "var(--raikou-color-teal-filled)",
                width: rem(20),
                height: rem(20),
              }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export const icons: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
