import React from "react";
import { Menu } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { DemoMenuItems } from "./_menu-items";

const code = `
import { Menu } from '@raikou/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Menu transitionProps={{ transition: "rotate-right", duration: 150 }}>
      <DemoMenuItems />
    </Menu>
  );
}

export const transitions: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
