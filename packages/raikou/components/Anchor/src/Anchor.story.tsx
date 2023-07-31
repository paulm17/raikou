import React from "react";
import { Anchor } from "./Anchor";

export default { title: "Anchor" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor href="https://mantine.dev" target="blank" underline="never">
        Raikou website link: never
      </Anchor>
      <br />
      <Anchor href="https://mantine.dev" target="blank">
        Raikou website link: hover
      </Anchor>
      <br />
      <Anchor href="https://mantine.dev" target="blank" underline="always">
        Raikou website link: always
      </Anchor>
      <br />
      <Anchor
        href="https://mantine.dev"
        target="blank"
        underline="never"
        variant="gradient"
        fz={60}
        fw="bold"
      >
        Raikou website link: never
      </Anchor>
    </div>
  );
}
