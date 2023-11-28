import React, { useState } from "react";
import { Group, Button } from "@raikou/server";
import { Modal } from "@raikou/client";
import { RaikouDemo } from "@raikou/ds";
import { AuthenticationForm } from "../../../shared/AuthenticationForm/AuthenticationForm";

const SIZES = ["xs", "sm", "md", "lg", "xl", "55rem", "70%", "100%"];

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<string | number>("md");

  const buttons = SIZES.map((s) => (
    <Button
      key={s}
      variant="outline"
      onClick={() => {
        setSize(s);
        setOpened(true);
      }}
    >
      {s}
    </Button>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        size={size}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group justify="center">{buttons}</Group>
    </>
  );
}

export const sizes: RaikouDemo = {
  type: "code",
  component: Demo,
};
