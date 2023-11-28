import React from "react";
import { useFullscreen } from "@raikou/hooks";
import { RaikouDemo } from "@raikou/ds";
import { Button } from "@raikou/server";

const code = `
import { useFullscreen } from '@raikou/hooks';
import { Button } from '@raikou/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? "red" : "blue"}>
      {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    </Button>
  );
}

export const useFullscreenDemo: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
  centered: true,
};
