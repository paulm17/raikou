import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Accordion } from "@raikou/client";
import { groceries } from "./_base";

const code = `
import { Accordion } from '@raikou/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`;

function Demo() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === "Bananas"}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return <Accordion defaultValue="Apples">{items}</Accordion>;
}

export const disabled: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
  centered: true,
  maxWidth: 600,
};
