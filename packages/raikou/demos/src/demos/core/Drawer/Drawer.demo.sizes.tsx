import React, { useState } from "react";
import { RaikouDemo } from "@raikou/ds";
import { Button, Group } from "@raikou/server";
import { Drawer } from "@raikou/client";

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<number | string>("top");
  const open = (s: typeof size) => {
    setSize(s);
    setOpened(true);
  };

  const controls = (
    ["xs", "sm", "md", "lg", "xl", "100%", "40rem", "25%"] as const
  ).map((s) => (
    <Button variant="outline" onClick={() => open(s)} key={s}>
      {s}
    </Button>
  ));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size={size}
        withCloseButton={false}
      >
        Press escape to close the drawer
      </Drawer>

      <Group justify="center">{controls}</Group>
    </>
  );
}

export const sizes: RaikouDemo = {
  type: "code",
  component: Demo,
};
