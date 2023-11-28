import React from "react";
import { useFullscreen } from "@raikou/hooks";
import { Button, Stack } from "@raikou/server";
import { RaikouDemo } from "@raikou/ds";

const refCode = `
import { useFullscreen } from '@raikou/hooks';
import { Button, Stack } from '@raikou/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="From unsplash.com"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}
`;

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="From unsplash.com"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? "red" : "blue"}>
        {fullscreen ? "Exit Fullscreen" : "View Image Fullscreen"}
      </Button>
    </Stack>
  );
}

export const useFullscreenRefDemo: RaikouDemo = {
  type: "code",
  code: refCode,
  component: RefDemo,
};
