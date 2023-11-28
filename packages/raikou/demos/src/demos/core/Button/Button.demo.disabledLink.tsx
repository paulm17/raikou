import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://raikou.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`;

function Demo() {
  return (
    <Button
      component="a"
      href="https://raikou.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}

export const disabledLink: RaikouDemo = {
  type: "code",
  component: Demo,
  centered: true,
  code,
};
