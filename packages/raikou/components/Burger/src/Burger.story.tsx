import React from "react";
import { Burger } from "./Burger";

export default { title: "Burger" };

export function Usage() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={400} />
    </div>
  );
}
