import React from "react";
import { Menu } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { DemoMenuItems } from "./_menu-items";

const code = `
import { Menu } from '@raikou/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <DemoMenuItems />
    </Menu>
  );
}

export const hover: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
