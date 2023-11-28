import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Badge, Group } from "@raikou/server";
import { keys } from "@raikou/system";
import { Tooltip, RAIKOU_TRANSITIONS } from "@raikou/client";

export function Demo() {
  const transitions = keys(RAIKOU_TRANSITIONS).map((transition) => (
    <Tooltip
      key={transition}
      label={transition}
      transitionProps={{ transition, duration: 300 }}
    >
      <Badge variant="light">{transition}</Badge>
    </Tooltip>
  ));

  return (
    <Group justify="center" style={{ cursor: "default" }}>
      {transitions}
    </Group>
  );
}

export const transitions: RaikouDemo = {
  type: "code",
  component: Demo,
};
