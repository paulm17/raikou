import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Menu } from "@raikou/client";
import { MenuStylesApi } from "@raikou/styles-api";
import { DemoMenuItems } from "./_menu-items";

const code = `
import { Menu } from '@raikou/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo(props: any) {
  return (
    <Menu {...props} opened withArrow position="left">
      <DemoMenuItems />
    </Menu>
  );
}

export const stylesApi: RaikouDemo = {
  type: "styles-api",
  data: MenuStylesApi,
  component: Demo,
  code,
  centered: true,
};
