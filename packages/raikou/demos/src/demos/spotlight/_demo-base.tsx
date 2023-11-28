import React, { useMemo } from "react";
import { Button, Group } from "@raikou/server";
import { createSpotlight, SpotlightProps, Spotlight } from "@raikou/spotlight";

export function SpotlightDemoBase(props: Partial<SpotlightProps>) {
  const [store, actions] = useMemo(createSpotlight, []);
  return (
    <>
      <Group justify="center">
        <Button onClick={actions.open}>Open spotlight</Button>
      </Group>
      <Spotlight actions={[]} store={store} {...props} />
    </>
  );
}
