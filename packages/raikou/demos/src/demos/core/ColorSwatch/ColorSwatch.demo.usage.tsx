import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { ColorSwatch, Group } from "@raikou/server";

const code = `
import { ColorSwatch, Group } from '@raikou/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--raikou-color-orange-5)" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--raikou-color-orange-5)" />
    </Group>
  );
}

export const usage: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
