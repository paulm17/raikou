import React from "react";
import { Button } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";
import { useToggle, upperFirst } from "@raikou/hooks";

const code = `
import { Button } from '@raikou/core';
import { useToggle } from '@raikou/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <Button color={value} onClick={() => toggle()}>
      {upperFirst(value)}
    </Button>
  );
}

export const useToggleDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
