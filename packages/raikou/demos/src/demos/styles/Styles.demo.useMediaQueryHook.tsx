import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";
import { Tooltip } from "@raikou/client";
import { em } from "@raikou/system";
import { useMediaQuery } from "@raikou/hooks";

const code = `
import { Tooltip, Button, em } from '@raikou/core';
import { useMediaQuery } from '@raikou/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Tooltip label={isMobile ? "Mobile" : "Desktop"}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}

export const useMediaQueryHook: RaikouDemo = {
  type: "code",
  component: Demo,
  code,
};
