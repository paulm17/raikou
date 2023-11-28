import React from "react";
import { Badge } from "@raikou/server";
import { em } from "@raikou/system";
import { RaikouDemo } from "@raikou/ds";
import { useMediaQuery } from "@raikou/hooks";

const code = `
import { Badge } from '@raikou/core';
import { useMediaQuery } from '@raikou/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Badge color={matches ? "teal" : "red"} variant="filled">
      Breakpoint {matches ? "matches" : "does not match"}
    </Badge>
  );
}

export const useMediaQueryDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
