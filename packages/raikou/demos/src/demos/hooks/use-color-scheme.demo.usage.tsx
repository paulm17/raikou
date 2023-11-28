import React from "react";
import { Badge } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useColorScheme } from "@raikou/hooks";

const code = `
import { Badge } from '@raikou/core';
import { useColorScheme } from '@raikou/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === "dark" ? "blue" : "teal"} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}

export const useColorSchemeDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
