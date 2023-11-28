import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Accordion, AccordionProps } from "@raikou/client";
import { AccordionStylesApi } from "@raikou/styles-api";
import { groceries } from "./_base";

const code = `
import { Accordion } from '@raikou/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2}{{props}}>
      {items}
    </Accordion>
  );
}
`;

function Demo(props: AccordionProps) {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2} {...props}>
      {items}
    </Accordion>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: AccordionStylesApi,
  component: Demo,
  centered: true,
  maxWidth: "100%",
  code,
};
