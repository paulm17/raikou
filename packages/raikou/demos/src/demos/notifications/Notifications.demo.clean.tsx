import React from "react";
import { RaikouDemo } from "@raikou/ds";
import { Group, Button } from "@raikou/server";
import { notifications } from "@raikou/notifications";

const code = `
import { Group, Button } from '@raikou/core';
import { notifications } from '@raikou/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: "Most notifications are added to queue",
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button
        variant="outline"
        color="gray"
        onClick={() => notifications.cleanQueue()}
      >
        Clean queue
      </Button>

      <Button
        variant="outline"
        color="red"
        onClick={() => notifications.clean()}
      >
        Clean all
      </Button>
    </Group>
  );
}

export const clean: RaikouDemo = {
  type: "code",
  code,
  component: Demo,
};
