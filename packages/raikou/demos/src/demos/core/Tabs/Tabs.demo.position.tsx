import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Tabs, TabsListProps } from "@raikou/client";

function Wrapper(props: TabsListProps) {
  return (
    <Tabs defaultValue="first">
      <Tabs.List {...props}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

const code = `
import { Tabs } from '@raikou/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List{{props}}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;

export const position: RaikouDemo = {
  type: "configurator",
  component: Wrapper,
  code,
  centered: true,
  maxWidth: "100%",
  controls: [
    { prop: "grow", type: "boolean", initialValue: false, libraryValue: false },
    {
      prop: "justify",
      type: "select",
      initialValue: "flex-start",
      libraryValue: "flex-start",
      data: ["flex-start", "center", "flex-end", "space-between"],
    },
  ],
};
