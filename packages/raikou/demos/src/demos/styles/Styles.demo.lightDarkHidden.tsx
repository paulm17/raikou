import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { Button } from '@raikou/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}

export const lightDarkHidden: RaikouDemo = {
  type: "code",
  centered: true,
  component: Demo,
  code,
};
