import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";

const code = (props: any) => `
import { Button, Group } from '@raikou/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${props.size}">Regular ${props.size}</Button>
      <Button size="compact-${props.size}">Compact ${props.size}</Button>
    </Group>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Group justify="center">
      <Button size={props.size}>Regular {props.size}</Button>
      <Button size={`compact-${props.size}`}>Compact {props.size}</Button>
    </Group>
  );
}

export const compact: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: "size",
      prop: "size",
      initialValue: "md",
      libraryValue: "__none__",
    },
  ],
};
