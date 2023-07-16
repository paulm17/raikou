import React from "react";
import { Flex } from "./Flex";

export default { title: "Flex" };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Flex gap="sm" direction="column">
        <button type="button">First</button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Flex>
    </div>
  );
}
