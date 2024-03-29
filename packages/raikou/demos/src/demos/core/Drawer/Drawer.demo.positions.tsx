import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";
import { Drawer } from "@raikou/client";

function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<"top" | "left" | "right" | "bottom">(
    "top",
  );
  const open = (p: typeof position) => {
    setPosition(p);
    setOpened(true);
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        position={position}
        withCloseButton={false}
      >
        Press escape to close the drawer
      </Drawer>

      <Group justify="center">
        <Button variant="outline" onClick={() => open("left")}>
          Left
        </Button>
        <Button variant="outline" onClick={() => open("right")}>
          Right
        </Button>
        <Button variant="outline" onClick={() => open("top")}>
          Top
        </Button>
        <Button variant="outline" onClick={() => open("bottom")}>
          Bottom
        </Button>
      </Group>
    </>
  );
}

export const positions: RaikouDemo = {
  type: "code",
  component: Demo,
};
